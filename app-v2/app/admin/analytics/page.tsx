import type { Metadata } from "next";
import { getSupabaseAdmin } from "@/lib/supabase";
import TrafficPie from "@/components/admin/TrafficPie";
import LogoutButton from "@/components/admin/LogoutButton";
import GlassCard from "@/components/ds/GlassCard";

export const metadata: Metadata = { title: "Analytics — Admin", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const PROJECT_NAMES: Record<string, string> = {
  raahi: "Raahi",
  wellnut: "Wellnut",
  asap: "ASAP",
  mainstreet: "PM Dashboard",
  "invisible-impacts": "Invisible Impacts",
};

function StatTile({ label, value }: { label: string; value: number }) {
  return (
    <GlassCard className="p-6">
      <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-[var(--color-ink-faint)]">{label}</p>
      <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-4xl text-[var(--color-ink)]">
        {value.toLocaleString()}
      </p>
    </GlassCard>
  );
}

function RankedList({
  title,
  rows,
  emptyLabel,
}: {
  title: string;
  rows: { label: string; count: number }[];
  emptyLabel: string;
}) {
  return (
    <GlassCard className="p-6">
      <p className="text-sm font-semibold tracking-[0.04em] text-[var(--color-ink)]">{title}</p>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-[var(--color-ink-faint)]">{emptyLabel}</p>
      ) : (
        <div className="mt-4 flex flex-col">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between py-2.5"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <span className="text-sm text-[var(--color-ink-muted)] truncate pr-4">{r.label}</span>
              <span className="text-sm font-semibold text-[var(--color-ink)]">{r.count}</span>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}

function rank(items: string[], limit = 6): { label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const item of items) counts.set(item, (counts.get(item) ?? 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([label, count]) => ({ label, count }));
}

export default async function AdminAnalyticsPage() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <main
        className="mx-auto px-6 flex items-center justify-center"
        style={{ minHeight: "100dvh", paddingTop: "var(--nav-h)", maxWidth: "600px" }}
      >
        <GlassCard className="p-8 text-center">
          <h1 className="font-[family-name:var(--font-display)] font-semibold text-2xl text-[var(--color-ink)]">
            Analytics isn&rsquo;t configured yet
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Set <code className="text-[var(--color-green)]">SUPABASE_URL</code> and{" "}
            <code className="text-[var(--color-green)]">SUPABASE_SERVICE_ROLE_KEY</code> as environment variables
            (locally in <code className="text-[var(--color-green)]">.env.local</code>, and in your Vercel project
            settings), then run <code className="text-[var(--color-green)]">supabase/schema.sql</code> in your
            Supabase project&rsquo;s SQL editor.
          </p>
        </GlassCard>
      </main>
    );
  }

  const [{ data: pageViews }, { count: uniqueVisitors }, { data: visitors }, { data: clicks }] = await Promise.all([
    supabase.from("page_views").select("path").limit(10000),
    supabase.from("visitors").select("*", { count: "exact", head: true }),
    supabase.from("visitors").select("traffic_source").limit(10000),
    supabase.from("click_events").select("label").limit(10000),
  ]);

  const paths = (pageViews ?? []).map((r) => r.path as string);
  const totalVisits = paths.length;

  const topPages = rank(paths);
  const topProjects = rank(
    paths
      .filter((p) => p.startsWith("/projects/"))
      .map((p) => {
        const slug = p.split("/")[2] ?? p;
        return PROJECT_NAMES[slug] ?? slug;
      })
  );

  const buttonClicks = rank((clicks ?? []).map((r) => r.label as string));

  const trafficCounts = new Map<string, number>();
  for (const v of visitors ?? []) {
    const source = (v.traffic_source as string) || "Direct";
    trafficCounts.set(source, (trafficCounts.get(source) ?? 0) + 1);
  }
  const trafficSources = [...trafficCounts.entries()].map(([name, value]) => ({ name, value }));

  return (
    <main className="mx-auto px-6" style={{ maxWidth: "1200px", paddingTop: "calc(var(--nav-h) + 3rem)", paddingBottom: "6rem" }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-green)]">Admin</p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] font-semibold text-3xl text-[var(--color-ink)]">
            Analytics
          </h1>
        </div>
        <LogoutButton />
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <StatTile label="Total Visits" value={totalVisits} />
        <StatTile label="Unique Visitors" value={uniqueVisitors ?? 0} />
        <StatTile label="Total Page Views" value={totalVisits} />
      </div>

      {/* Top Pages / Top Projects */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <RankedList title="Top Pages" rows={topPages} emptyLabel="No page views yet." />
        <RankedList title="Top Projects" rows={topProjects} emptyLabel="No project views yet." />
      </div>

      {/* Button Clicks / Traffic Sources */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <RankedList title="Button Clicks" rows={buttonClicks} emptyLabel="No clicks tracked yet." />
        <GlassCard className="p-6">
          <p className="text-sm font-semibold tracking-[0.04em] text-[var(--color-ink)]">Traffic Sources</p>
          <div className="mt-2">
            <TrafficPie data={trafficSources} />
          </div>
          {trafficSources.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {trafficSources.map((s) => (
                <span key={s.name} className="text-xs text-[var(--color-ink-muted)]">
                  {s.name}: {s.value}
                </span>
              ))}
            </div>
          )}
        </GlassCard>
      </div>
    </main>
  );
}
