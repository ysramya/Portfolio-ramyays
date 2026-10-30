import type { Metadata } from "next";
import Link from "next/link";
import { getSupabaseAdmin } from "@/lib/supabase";
import TrafficPie from "@/components/admin/TrafficPie";
import VisitsChart, { type DayPoint } from "@/components/admin/VisitsChart";
import LogoutButton from "@/components/admin/LogoutButton";
import GlassCard from "@/components/ds/GlassCard";

export const metadata: Metadata = { title: "Analytics | Admin", robots: { index: false, follow: false } };
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
      <p className="text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--color-ink-faint)]">{label}</p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
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
      <p className="text-sm font-medium tracking-[0.04em] text-[var(--color-ink)]">{title}</p>
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
              <span className="text-sm font-medium text-[var(--color-ink)]">{r.count}</span>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}

const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/beyond-the-screen": "Beyond the Screen",
  "/resume": "Resume",
  "/projects": "Work",
};

function pageName(path: string): string {
  const clean = path.split("?")[0].replace(/\/+$/, "") || "/";
  if (PAGE_NAMES[clean]) return PAGE_NAMES[clean];
  if (clean.startsWith("/projects/")) {
    const slug = clean.split("/")[2] ?? clean;
    return `Project: ${PROJECT_NAMES[slug] ?? slug}`;
  }
  return clean;
}

function PageBars({ rows, total }: { rows: { label: string; path: string; count: number }[]; total: number }) {
  const max = rows[0]?.count ?? 1;
  return (
    <GlassCard className="p-6">
      <p className="text-sm font-medium tracking-[0.04em] text-[var(--color-ink)]">Most Visited Pages</p>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-[var(--color-ink-faint)]">No page views yet.</p>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          {rows.map((r) => (
            <div key={r.path}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-[var(--color-ink)] truncate">
                  {r.label} <span className="text-xs text-[var(--color-ink-faint)]">{r.path}</span>
                </span>
                <span className="text-sm font-medium text-[var(--color-ink)] shrink-0">
                  {r.count} <span className="text-xs font-normal text-[var(--color-ink-faint)]">
                    ({Math.round((r.count / total) * 100)}%)
                  </span>
                </span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full" style={{ background: "var(--color-border)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(r.count / max) * 100}%`, background: "var(--color-green)" }}
                />
              </div>
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

const TZ = "America/Chicago";
const RANGES = [
  { key: "7d", label: "7 days", days: 7 },
  { key: "30d", label: "30 days", days: 30 },
  { key: "90d", label: "90 days", days: 90 },
  { key: "all", label: "All time", days: 0 },
] as const;
const SOURCES = ["All", "Direct", "LinkedIn", "Google", "Other"] as const;

const dayFormat = new Intl.DateTimeFormat("en-CA", { timeZone: TZ });
const dayKey = (d: Date | string) => dayFormat.format(new Date(d));

function shiftDay(key: string, delta: number): string {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + delta, 12)).toISOString().slice(0, 10);
}

function dayLabel(key: string): string {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Supabase caps a single response at 1,000 rows, so page through the table.
async function fetchAll<T>(
  build: (from: number, to: number) => PromiseLike<{ data: T[] | null }>
): Promise<T[]> {
  const rows: T[] = [];
  for (let page = 0; page < 100; page++) {
    const { data } = await build(page * 1000, page * 1000 + 999);
    if (!data?.length) break;
    rows.push(...data);
    if (data.length < 1000) break;
  }
  return rows;
}

function FilterLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      scroll={false}
      className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.06em] transition-colors ${
        active
          ? "bg-[var(--color-ink)] text-[var(--color-bg)]"
          : "border border-[var(--color-border)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
      }`}
    >
      {children}
    </Link>
  );
}

export default async function AdminAnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string; source?: string }>;
}) {
  const sp = await searchParams;
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return (
      <main
        className="mx-auto px-6 flex items-center justify-center"
        style={{ minHeight: "100dvh", paddingTop: "var(--nav-h)", maxWidth: "600px" }}
      >
        <GlassCard className="p-8 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
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

  const range = RANGES.find((r) => r.key === sp.range) ?? RANGES[1];
  const source = SOURCES.find((s) => s === sp.source) ?? "All";
  const href = (r: string, s: string) => `/admin/analytics?range=${r}&source=${s}`;

  const today = dayKey(new Date());
  const sinceKey = range.days ? shiftDay(today, -(range.days - 1)) : null;
  // One day of slack either side of the Chicago-day boundary, then trimmed by key below.
  const sinceIso = sinceKey ? new Date(`${shiftDay(sinceKey, -1)}T00:00:00Z`).toISOString() : null;

  const [rawViews, rawClicks, visitorRows] = await Promise.all([
    fetchAll<{ path: string; visitor_id: string; created_at: string }>((from, to) => {
      let q = supabase.from("page_views").select("path, visitor_id, created_at").order("id");
      if (sinceIso) q = q.gte("created_at", sinceIso);
      return q.range(from, to);
    }),
    fetchAll<{ label: string; visitor_id: string; created_at: string }>((from, to) => {
      let q = supabase.from("click_events").select("label, visitor_id, created_at").order("id");
      if (sinceIso) q = q.gte("created_at", sinceIso);
      return q.range(from, to);
    }),
    fetchAll<{ visitor_id: string; traffic_source: string }>((from, to) =>
      supabase.from("visitors").select("visitor_id, traffic_source").order("visitor_id").range(from, to)
    ),
  ]);

  const sourceOf = new Map(visitorRows.map((v) => [v.visitor_id, v.traffic_source || "Direct"]));
  const keep = (visitorId: string, created: string) =>
    (!sinceKey || dayKey(created) >= sinceKey) && (source === "All" || sourceOf.get(visitorId) === source);

  const views = rawViews.filter(
    (r) => keep(r.visitor_id, r.created_at) && !r.path.startsWith("/admin") && !r.path.startsWith("/__")
  );
  const clicks = rawClicks.filter((r) => keep(r.visitor_id, r.created_at));

  const totalViews = views.length;
  const visitorIds = new Set(views.map((r) => r.visitor_id));
  const uniqueVisitors = visitorIds.size;
  const viewsPerVisitor = uniqueVisitors ? totalViews / uniqueVisitors : 0;

  // Time series: one point per Chicago-local day.
  const firstDay = views.length ? views.map((r) => dayKey(r.created_at)).sort()[0] : today;
  const startDay = sinceKey ?? firstDay;
  const perDay = new Map<string, { views: number; visitors: Set<string> }>();
  for (const r of views) {
    const k = dayKey(r.created_at);
    const e = perDay.get(k) ?? { views: 0, visitors: new Set<string>() };
    e.views++;
    e.visitors.add(r.visitor_id);
    perDay.set(k, e);
  }
  const series: DayPoint[] = [];
  for (let k = startDay, n = 0; k <= today && n < 800; k = shiftDay(k, 1), n++) {
    const e = perDay.get(k);
    series.push({ day: k, label: dayLabel(k), views: e?.views ?? 0, visitors: e?.visitors.size ?? 0 });
  }

  const pageCounts = new Map<string, number>();
  for (const r of views) {
    const clean = r.path.split("?")[0].replace(/\/+$/, "") || "/";
    pageCounts.set(clean, (pageCounts.get(clean) ?? 0) + 1);
  }
  const topPages = [...pageCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([path, count]) => ({ path, label: pageName(path), count }));

  const topProjects = rank(
    views
      .map((r) => r.path)
      .filter((p) => p.startsWith("/projects/"))
      .map((p) => {
        const slug = p.split("/")[2] ?? p;
        return PROJECT_NAMES[slug] ?? slug;
      })
  );
  const buttonClicks = rank(clicks.map((r) => r.label));

  const trafficCounts = new Map<string, number>();
  for (const id of visitorIds) {
    const src = sourceOf.get(id) ?? "Direct";
    trafficCounts.set(src, (trafficCounts.get(src) ?? 0) + 1);
  }
  const trafficSources = [...trafficCounts.entries()].map(([name, value]) => ({ name, value }));

  return (
    <main className="mx-auto px-6" style={{ maxWidth: "1200px", paddingTop: "calc(var(--nav-h) + 3rem)", paddingBottom: "6rem" }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[12px] font-medium tracking-[0.22em] uppercase text-[var(--color-green)]">Admin</p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
            Analytics
          </h1>
        </div>
        <LogoutButton />
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--color-ink-faint)]">
            Period
          </span>
          {RANGES.map((r) => (
            <FilterLink key={r.key} href={href(r.key, source)} active={r.key === range.key}>
              {r.label}
            </FilterLink>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--color-ink-faint)]">
            Source
          </span>
          {SOURCES.map((s) => (
            <FilterLink key={s} href={href(range.key, s)} active={s === source}>
              {s}
            </FilterLink>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <StatTile label="Page Views" value={totalViews} />
        <StatTile label="Unique Visitors" value={uniqueVisitors} />
        <StatTile label="Views per Visitor" value={Math.round(viewsPerVisitor * 10) / 10} />
        <StatTile label="Button Clicks" value={clicks.length} />
      </div>

      {/* Visits over time */}
      <GlassCard className="mt-5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium tracking-[0.04em] text-[var(--color-ink)]">Visits over time</p>
          <div className="flex items-center gap-4 text-xs text-[var(--color-ink-muted)]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#12271f" }} /> Page views
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#a47e61" }} /> Unique visitors
            </span>
          </div>
        </div>
        <div className="mt-4">
          <VisitsChart data={series} />
        </div>
      </GlassCard>

      {/* Most visited pages / Top Projects */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5">
        <PageBars rows={topPages} total={totalViews || 1} />
        <RankedList title="Top Projects" rows={topProjects} emptyLabel="No project views yet." />
      </div>

      {/* Button Clicks / Traffic Sources */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <RankedList title="Button Clicks" rows={buttonClicks} emptyLabel="No clicks tracked yet." />
        <GlassCard className="p-6">
          <p className="text-sm font-medium tracking-[0.04em] text-[var(--color-ink)]">Traffic Sources</p>
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
