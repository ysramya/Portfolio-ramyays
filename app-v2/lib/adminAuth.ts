export const ADMIN_COOKIE = "admin_session";
const SESSION_LENGTH_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

/**
 * ADMIN_PASSWORD doubles as the HMAC signing secret — a single env var is
 * enough for a personal admin panel with one user. Uses Web Crypto
 * (globally available in both the Node and Edge runtimes, unlike
 * node:crypto) so this works whichever runtime middleware ends up on.
 */
async function sign(payload: string): Promise<string> {
  const secret = process.env.ADMIN_PASSWORD ?? "";
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionCookieValue(): Promise<string> {
  const exp = String(Date.now() + SESSION_LENGTH_MS);
  return `${exp}.${await sign(exp)}`;
}

export async function verifySessionCookieValue(value: string | undefined): Promise<boolean> {
  if (!value) return false;
  const [exp, signature] = value.split(".");
  if (!exp || !signature) return false;
  if (Date.now() > Number(exp)) return false;
  return (await sign(exp)) === signature;
}
