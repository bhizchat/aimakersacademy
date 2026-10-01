import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Anon-key Supabase client, used only to verify email/password credentials
 * via `signInWithPassword`. Server-only — we never persist a Supabase
 * session; our own signed cookie (see src/lib/session.ts) is the source of
 * truth for the logged-in user.
 */
export function getSupabaseAnon() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  return createClient(url, anonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
