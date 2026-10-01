"use server";

import { randomBytes, timingSafeEqual } from "crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSession, deleteSession, getSession } from "@/lib/session";
import { generateSchoolId } from "@/lib/school-id";
import { sendAcceptanceEmail, sendRejectionEmail } from "@/lib/email";

export type AdminLoginState = { error?: string } | undefined;

function safeCompare(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Compare against random bytes of the same length as `a` so the
    // comparison still takes constant-ish time and doesn't leak length.
    timingSafeEqual(bufA, randomBytes(bufA.length));
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

export async function adminLoginAction(
  _prevState: AdminLoginState,
  formData: FormData
): Promise<AdminLoginState> {
  const password = String(formData.get("password") || "");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("[admin] ADMIN_PASSWORD environment variable is not set.");
    return { error: "Admin login isn't configured yet." };
  }

  if (!password || !safeCompare(password, adminPassword)) {
    return { error: "Incorrect password." };
  }

  await createSession({ role: "admin" });
  redirect("/admin");
}

export async function adminLogoutAction() {
  await deleteSession();
  redirect("/admin/login");
}

async function requireAdmin() {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    redirect("/admin/login");
  }
}

export async function acceptApplicationAction(applicationId: string) {
  await requireAdmin();

  const supabase = getSupabaseAdmin();
  const { data: application, error: fetchError } = await supabase
    .from("applications")
    .select("*")
    .eq("id", applicationId)
    .maybeSingle();

  if (fetchError || !application) {
    console.error("[admin] accept: application not found", fetchError);
    return;
  }

  let schoolId = generateSchoolId();
  let updateError = null;

  // Retry a couple of times in the rare case of a School ID collision
  // (school_id has a UNIQUE constraint).
  for (let attempt = 0; attempt < 3; attempt++) {
    const { error } = await supabase
      .from("applications")
      .update({
        status: "accepted",
        school_id: schoolId,
        accepted_at: new Date().toISOString(),
      })
      .eq("id", applicationId);

    if (!error) {
      updateError = null;
      break;
    }
    updateError = error;
    schoolId = generateSchoolId();
  }

  if (updateError) {
    console.error("[admin] accept: failed to update application", updateError);
    return;
  }

  await sendAcceptanceEmail({
    to: application.email,
    fullName: application.full_name,
    schoolId,
  });

  revalidatePath("/admin");
}

export async function rejectApplicationAction(applicationId: string) {
  await requireAdmin();

  const supabase = getSupabaseAdmin();
  const { data: application, error: fetchError } = await supabase
    .from("applications")
    .select("*")
    .eq("id", applicationId)
    .maybeSingle();

  if (fetchError || !application) {
    console.error("[admin] reject: application not found", fetchError);
    return;
  }

  const { error: updateError } = await supabase
    .from("applications")
    .update({ status: "rejected" })
    .eq("id", applicationId);

  if (updateError) {
    console.error("[admin] reject: failed to update application", updateError);
    return;
  }

  await sendRejectionEmail({
    to: application.email,
    fullName: application.full_name,
  });

  revalidatePath("/admin");
}
