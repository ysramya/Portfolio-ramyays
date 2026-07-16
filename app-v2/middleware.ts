import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifySessionCookieValue } from "@/lib/adminAuth";

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get(ADMIN_COOKIE)?.value;
  const valid = await verifySessionCookieValue(cookie);
  if (!valid) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/analytics/:path*"],
};
