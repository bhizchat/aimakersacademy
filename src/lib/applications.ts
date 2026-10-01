import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import type { Application } from "@/types/application";

export async function getApplicationByUserId(
  userId: string
): Promise<Application | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("[applications] getApplicationByUserId error:", error);
    return null;
  }
  return data as Application | null;
}

export async function listApplicationsByStatus(
  status: Application["status"]
): Promise<Application[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .eq("status", status)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("[applications] listApplicationsByStatus error:", error);
    return [];
  }
  return (data as Application[]) ?? [];
}
