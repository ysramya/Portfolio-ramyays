import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, createSessionCookieValue } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json({ ok: false, reason: "ADMIN_PASSWORD not configured" }, { status: 500 });
  }

  const { password } = await req.json().catch(() => ({ password: "" }));
  if (password !== adminPassword) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, await createSessionCookieValue(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
