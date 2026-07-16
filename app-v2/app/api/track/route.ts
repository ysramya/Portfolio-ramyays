import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

function classifyTrafficSource(referrer: string, host: string): string {
  if (!referrer) return "Direct";
  try {
    const refHost = new URL(referrer).hostname.replace(/^www\./, "");
    if (refHost === host) return "Direct";
    if (refHost.includes("linkedin.com")) return "LinkedIn";
    if (refHost.includes("google.")) return "Google";
    return "Other";
  } catch {
    return "Other";
  }
}

export async function POST(req: NextRequest) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return new Response(null, { status: 204 });

  const body = await req.json().catch(() => null);
  if (!body?.visitorId || !body?.type) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { type, path, label, visitorId, referrer } = body as {
    type: "pageview" | "click";
    path?: string;
    label?: string;
    visitorId: string;
    referrer?: string;
  };

  const host = req.headers.get("host") ?? "";
  const traffic_source = classifyTrafficSource(referrer ?? "", host);

  // ignoreDuplicates: true makes this insert-if-not-exists — a returning
  // visitor's original traffic_source is never overwritten by a later
  // internal navigation (which would otherwise look like a "Direct" hit).
  // last_seen is bumped separately on every hit, first visit or not.
  await supabase
    .from("visitors")
    .upsert({ visitor_id: visitorId, traffic_source }, { onConflict: "visitor_id", ignoreDuplicates: true });

  await supabase.from("visitors").update({ last_seen: new Date().toISOString() }).eq("visitor_id", visitorId);

  if (type === "pageview" && path) {
    await supabase.from("page_views").insert({ visitor_id: visitorId, path });
  } else if (type === "click" && label) {
    await supabase.from("click_events").insert({ visitor_id: visitorId, label });
  }

  return NextResponse.json({ ok: true });
}
