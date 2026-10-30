import { createClient } from "@supabase/supabase-js";

/**
 * Server-only client using the service-role key — bypasses RLS, so this
 * must never be imported from a "use client" file. Lazily constructed so
 * a missing env var doesn't crash the whole app at import time; callers
 * (the /api/track route, the admin dashboard) check for null and no-op
 * or show a setup message instead.
 */
// The Vercel Supabase integration prefixes every variable with the project
// id (e.g. <id>_SUPABASE_URL), so match on the name's ending as well.
function findEnv(...names: string[]) {
  for (const name of names) {
    const exact = process.env[name];
    if (exact) return exact;
  }
  for (const [name, value] of Object.entries(process.env)) {
    if (value && names.some((n) => name.endsWith(`_${n}`))) return value;
  }
  return undefined;
}

export function getSupabaseAdmin() {
  const url = findEnv("SUPABASE_URL");
  const key = findEnv("SUPABASE_SERVICE_ROLE_KEY", "SUPABASE_SECRET_KEY", "SUPABASE_SERVICE_KEY");
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
