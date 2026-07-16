import { createClient } from "@supabase/supabase-js";

/**
 * Server-only client using the service-role key — bypasses RLS, so this
 * must never be imported from a "use client" file. Lazily constructed so
 * a missing env var doesn't crash the whole app at import time; callers
 * (the /api/track route, the admin dashboard) check for null and no-op
 * or show a setup message instead.
 */
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
