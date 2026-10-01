"use server";

import { redirect } from "next/navigation";
import { getSupabaseAnon } from "@/lib/supabase/anon";
import { getApplicationByUserId } from "@/lib/applications";
import { createSession } from "@/lib/session";

export type LoginState = { error?: string } | undefined;

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const schoolId = String(formData.get("schoolId") || "")
    .trim()
    .toUpperCase();
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  if (!schoolId) {
    return {
      error:
        "Please enter your School ID. You'll find it in the acceptance email we sent once your application was approved.",
    };
  }

  let supabaseAnon;
  try {
    supabaseAnon = getSupabaseAnon();
  } catch (err) {
    console.error("[login] Supabase not configured:", err);
    return { error: "Sign in isn't available right now. Please try again later." };
  }

  const { data: authData, error: authError } =
    await supabaseAnon.auth.signInWithPassword({ email, password });

  if (authError || !authData.user) {
    return { error: "Incorrect email or password." };
  }

  const userId = authData.user.id;
  const application = await getApplicationByUserId(userId);

  if (!application) {
    return {
      error:
        "We couldn't find an application for this account. Please apply first.",
    };
  }

  if (application.status === "pending") {
    return {
      error:
        "Your application is still under review. We'll email you a School ID once you're accepted.",
    };
  }

  if (application.status === "rejected") {
    return {
      error:
        "Your application was not accepted for this cohort. Contact us if you think this is a mistake.",
    };
  }

  if (!application.school_id || application.school_id.toUpperCase() !== schoolId) {
    return {
      error:
        "That School ID doesn't match our records. Please check the acceptance email we sent you.",
    };
  }

  await createSession({
    role: "student",
    userId,
    fullName: application.full_name,
    email: application.email,
    schoolId: application.school_id,
  });

  redirect("/portal");
}
