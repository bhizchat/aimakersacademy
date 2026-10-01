"use server";

import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { sendAdminNewApplicationEmail } from "@/lib/email";

export type ApplyState = { error?: string; success?: boolean } | undefined;

export async function applyAction(
  _prevState: ApplyState,
  formData: FormData
): Promise<ApplyState> {
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();
  const phone = String(formData.get("phone") || "").trim();
  const courseSlug = String(formData.get("courseSlug") || "").trim() || null;
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (fullName.length < 2) {
    return { error: "Please enter your full name." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch (err) {
    console.error("[apply] Supabase not configured:", err);
    return {
      error: "Applications aren't available right now. Please try again later.",
    };
  }

  const { data: createdUser, error: createUserError } =
    await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

  if (createUserError) {
    if (
      createUserError.code === "email_exists" ||
      createUserError.message.toLowerCase().includes("already been registered")
    ) {
      return {
        error:
          "An account with this email already exists. If you already applied, sign in instead.",
      };
    }
    console.error("[apply] createUser error:", createUserError);
    return {
      error: "Something went wrong creating your account. Please try again.",
    };
  }

  const userId = createdUser.user?.id;
  if (!userId) {
    return {
      error: "Something went wrong creating your account. Please try again.",
    };
  }

  const { error: insertError } = await supabase.from("applications").insert({
    user_id: userId,
    full_name: fullName,
    email,
    phone: phone || null,
    course_slug: courseSlug,
    status: "pending",
  });

  if (insertError) {
    console.error("[apply] insert application error:", insertError);
    return {
      error:
        "Something went wrong submitting your application. Please try again.",
    };
  }

  await sendAdminNewApplicationEmail({ fullName, email, courseSlug });

  return { success: true };
}
