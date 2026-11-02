import { createClient } from "@supabase/supabase-js";

/**
 * Server-only client using the service-role key — bypasses RLS, so this
 * must never be imported from a "use client" file. Lazily constructed so
 * a missing env var doesn't crash the whole app at import time; callers
 * (the /api/track route, the admin dashboard) check for null and no-op
 * or show a setup message instead.
 */

const URL_NAMES = ["SUPABASE_URL"];
const KEY_NAMES = ["SUPABASE_SERVICE_ROLE_KEY", "SUPABASE_SECRET_KEY", "SUPABASE_SERVICE_KEY"];

// The Vercel Supabase integration prefixes every variable with the project
// id (e.g. <id>_SUPABASE_URL), so match on the name's ending as well. An
// exact name always wins, which is how to override an integration value.
// Names are tried in the order given, so the order of KEY_NAMES is the
// priority: a rotated or stale copy listed later is never picked over it.
function findEnv(names: string[]): { name: string; value: string } | undefined {
  for (const name of names) {
    const value = process.env[name];
    if (value) return { name, value };
  }
  for (const name of names) {
    for (const [envName, value] of Object.entries(process.env)) {
      if (value && envName.endsWith(`_${name}`)) return { name: envName, value };
    }
  }
  return undefined;
}

export function getSupabaseAdmin() {
  const url = findEnv(URL_NAMES);
  const key = findEnv(KEY_NAMES);
  if (!url || !key) return null;
  return createClient(url.value, key.value, { auth: { persistSession: false } });
}

const keyKind = (v: string) =>
  v.startsWith("sb_secret_")
    ? "secret key (sb_secret_)"
    : v.startsWith("sb_publishable_")
      ? "publishable key (cannot write)"
      : v.startsWith("eyJ")
        ? "legacy JWT key"
        : "unrecognized format";

/**
 * Which Supabase variables the server resolved, for the admin error card.
 * Names, key types and the project host only: never a secret value.
 */
export function describeSupabaseEnv() {
  const url = findEnv(URL_NAMES);
  const key = findEnv(KEY_NAMES);
  let host = "not set";
  if (url) {
    try {
      host = new URL(url.value).host;
    } catch {
      host = "not a valid URL";
    }
  }
  const candidates = Object.entries(process.env)
    .filter(([name, value]) => value && name.toUpperCase().includes("SUPABASE") && /KEY|SECRET/i.test(name))
    .map(([name, value]) => `${name}: ${keyKind(value as string)}`);
  return {
    urlVariable: url?.name ?? "none",
    projectHost: host,
    keyVariable: key?.name ?? "none",
    keyType: key ? keyKind(key.value) : "none",
    candidates,
  };
}
