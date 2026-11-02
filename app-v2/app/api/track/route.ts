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

  // Each write is checked: a failed insert used to be swallowed, so tracking
  // could look healthy (200 OK) while storing nothing. Errors are logged for
  // the Vercel runtime logs and answered with a generic 500.
  const writes = [
    {
      step: "visitors upsert",
      run: () =>
        supabase
          .from("visitors")
          .upsert({ visitor_id: visitorId, traffic_source }, { onConflict: "visitor_id", ignoreDuplicates: true }),
    },
    {
      step: "visitors last_seen",
      run: () => supabase.from("visitors").update({ last_seen: new Date().toISOString() }).eq("visitor_id", visitorId),
    },
    ...(type === "pageview" && path
      ? [{ step: "page_views insert", run: () => supabase.from("page_views").insert({ visitor_id: visitorId, path }) }]
      : type === "click" && label
        ? [{ step: "click_events insert", run: () => supabase.from("click_events").insert({ visitor_id: visitorId, label }) }]
        : []),
  ];

  // ignoreDuplicates: true makes the first write insert-if-not-exists, so a
  // returning visitor's original traffic_source is never overwritten by a later
  // internal navigation (which would otherwise look like a "Direct" hit).
  // last_seen is bumped separately on every hit, first visit or not.
  for (const { step, run } of writes) {
    const { error } = await run();
    if (error) {
      console.error(`[track] ${step} failed: ${error.code ?? ""} ${error.message}`);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
