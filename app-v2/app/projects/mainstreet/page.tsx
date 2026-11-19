import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NightPage from "@/components/home/NightPage";
import ChapterTrail, { type Chapter } from "@/components/case-study/ChapterTrail";
import ShotExplorer, { type ExplorerItem } from "@/components/case-study/ShotExplorer";
import ZoomShots from "@/components/case-study/ZoomShots";
import { projects } from "@/lib/projects";

/**
 * Mainstreet Advisors' Dashboard: visual-first, roughly 80% visuals to 20%
 * text. Facts come from the project record on the earlier version of this
 * page: six Portfolio Managers, $1.2B+ AUA, 3–4 hours of manual reporting
 * every Monday before, about 3 hours saved per week, the portfolio picture in
 * under 10 seconds, one designer and two engineers.
 *
 * Images: the real redacted Power BI screenshot, close-ups cropped from it
 * (public/img/mainstreet/crops), and a real marked-up review printout. The
 * workflow visuals are labelled diagrams, not screens.
 */

export const metadata: Metadata = {
  title: "Mainstreet Advisors’ Dashboard | Ramya Yerramilli",
  description:
    "A Power BI dashboard that brought portfolio performance, revenue and client information into one place for six Portfolio Managers.",
};

const chapters: Chapter[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "approach", label: "The approach" },
  { id: "solution", label: "The solution" },
  { id: "impact", label: "Impact" },
];

const DASH_ALT =
  "The Power BI dashboard: headline measures, share of wallet, relationship trend, revenue by client tier and the client table. Client names and the Portfolio Manager’s name are redacted.";

const snapshot = [
  ["Role", "Designer, interviews to delivery"],
  ["Team", "1 designer · 2 engineers"],
  ["Platform", "Power BI"],
  ["Users", "6 Portfolio Managers"],
  ["Scale", "$1.2B+ AUA"],
];

const sources = ["Excel workbooks", "CRM exports", "Emails", "Manual calculations"];
const steps = ["Discovery", "Metric definitions", "Data structure", "Dashboard design", "Review"];
const ritual = ["Excel files", "CRM check", "Reconcile", "Assemble", "Send"];
const pins = [
  { t: "Hierarchy first", x: 3, y: 14 },
  { t: "One metric format", x: 98.5, y: 66 },
  { t: "A view per PM", x: 38, y: 6 },
  { t: "Built in Power BI", x: 97.5, y: 97 },
];

const explorer: ExplorerItem[] = [
  { id: "metrics", label: "Headline metrics", src: "/img/mainstreet/crops/metrics.jpg", w: 1182, h: 100, alt: "Four headline measures: Total AUA, ARR, number of clients and current accounts." },
  { id: "trend", label: "Portfolio movement", src: "/img/mainstreet/crops/trend.jpg", w: 545, h: 235, alt: "Area chart titled Relationship Trend over the years, with a client filter and a year range." },
  { id: "wallet", label: "Portfolio positioning", src: "/img/mainstreet/crops/wallet.jpg", w: 285, h: 230, alt: "Pie chart titled Share of Wallet comparing AUA with total market value." },
  { id: "revenue", label: "Revenue", src: "/img/mainstreet/crops/revenue.jpg", w: 295, h: 245, alt: "Bar chart titled Revenue by Client Tier for tiers A to D." },
];

/* Label on the left, headline on the right, a hairline above. */
function Head({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div data-reveal className="cs-head">
      <p className="cs-label"><span className="cs-num">{n}</span>{label}</p>
      <h2 className="cs-h">{title}</h2>
    </div>
  );
}

function Shot({ src, w, h, alt, cap, className = "", minW }: { src: string; w: number; h: number; alt: string; cap: string; className?: string; minW?: number }) {
  const img = <Image src={src} width={w} height={h} alt={alt} sizes="(max-width: 1100px) 94vw, 1100px" className="cs-shot" style={{ maxWidth: Math.round(w * 1.4), minWidth: minW }} />;
  return (
    <figure className={className}>
      {minW ? <div className="overflow-x-auto" tabIndex={0} aria-label={`${cap}, scrolls sideways on small screens`}>{img}</div> : img}
      <figcaption className="mt-2.5 text-[13px] tracking-wide text-[var(--muted)]">{cap}</figcaption>
    </figure>
  );
}

export default function MainstreetPage() {
  const idx = projects.findIndex((p) => p.slug === "mainstreet");
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <NightPage>
      <ChapterTrail chapters={chapters} />
      <ZoomShots />

      <div className="cs-with-rail">
      <div className="wrap">
        {/* Overview */}
        <section id="overview" className="cs-section !pt-[calc(var(--nav-h)+clamp(28px,4vw,56px))]" aria-labelledby="ms-title">
          <div data-reveal className="max-w-[46rem]">
            <p className="eyebrow eyebrow-rule">Case study · Power BI</p>
            <h1 id="ms-title" className="mt-7" style={{ fontSize: "clamp(40px, 5vw, 68px)" }}>
              Mainstreet Advisors’ Dashboard
            </h1>
            <p className="mt-6 text-[clamp(18px,2vw,24px)] leading-snug text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
              From fragmented reports to one clear portfolio view.
            </p>
          </div>

          <dl data-reveal className="cs-glass mt-12 grid grid-cols-2 gap-x-8 gap-y-6 p-6 sm:grid-cols-3 lg:grid-cols-5">
            {snapshot.map(([k, v]) => (
              <div key={k}>
                <dt className="meta">{k}</dt>
                <dd className="mt-1 text-[14px] leading-snug text-[var(--ink)]">{v}</dd>
              </div>
            ))}
          </dl>

          <figure className="cs-stage mt-[clamp(40px,5vw,72px)]">
            <Image src="/img/mainstreet/dashboard.jpg" width={1182} height={665} alt={DASH_ALT} priority sizes="(max-width: 1100px) 94vw, 1100px" className="cs-shot" />
          </figure>
        </section>

        {/* 01 Challenge */}
        <section id="challenge" className="cs-section">
          <Head n="01" label="The challenge" title="Growing portfolios. Fragmented reporting." />
          <p data-reveal className="mt-3 max-w-[34rem] text-[var(--body)]">Portfolio Managers waited on analysts to see where assets stood.</p>

          <figure data-reveal className="mt-10" aria-label="Diagram of the reporting process before the dashboard">
            <div className="grid items-center gap-5 lg:grid-cols-[1.4fr_auto_1fr]">
              <ul className="grid grid-cols-2 gap-3">
                {sources.map((s) => (
                  <li key={s} className="cs-glass grid min-h-[84px] place-items-center px-4 text-center text-[15px] text-[var(--ink)]">{s}</li>
                ))}
              </ul>
              <span aria-hidden="true" className="self-center text-center text-[28px] text-[#e8b870]">→</span>
              <div className="cs-glass cs-glass-gold grid min-h-[84px] place-items-center px-5 py-8 text-center">
                <p className="text-[clamp(20px,2.2vw,26px)] text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>Fragmented reporting</p>
              </div>
            </div>
            <figcaption className="mt-3 text-[13px] text-[var(--muted)]">Diagram: the process before the dashboard, from the project record.</figcaption>
          </figure>
        </section>

        {/* 02 Approach */}
        <section id="approach" className="cs-section">
          <Head n="02" label="The approach" title="Start with the questions, not the charts." />

          <ol data-reveal className="relative mt-10 grid gap-7 md:grid-cols-5 md:gap-5">
            {steps.map((t, n) => (
              <li key={t} className="relative pl-9 md:pl-0 md:pt-9">
                <span className="absolute left-0 top-0.5 h-[12px] w-[12px] rounded-full border-2 border-[#e8b870] md:top-0" aria-hidden="true" />
                {n < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[5px] top-5 h-[calc(100%+20px)] border-l border-dashed border-[#f2efe7]/45 md:left-[18px] md:top-[5px] md:h-0 md:w-[calc(100%+4px)] md:border-l-0 md:border-t" />
                )}
                <p className="text-[16px] text-[var(--ink)]">{t}</p>
              </li>
            ))}
          </ol>

          <figure className="mt-12">
            <Image src="/img/mainstreet/iterations.png" width={1600} height={1200} sizes="(max-width: 768px) 94vw, 640px" alt="A printed mid-project version of the dashboard, marked up by hand with review notes. Client details are redacted." className="cs-shot mx-auto md:mx-0" style={{ maxWidth: 640 }} />
            <figcaption className="mt-2.5 text-[13px] tracking-wide text-[var(--muted)]">A real review round, marked up by hand. Client details redacted.</figcaption>
          </figure>
        </section>

        {/* 03 Solution */}
        <section id="solution" className="cs-section">
          <Head n="03" label="The solution" title="One dashboard. A clearer portfolio view." />

          <figure className="mt-10">
            <Image src="/img/mainstreet/dashboard.jpg" width={1182} height={665} alt={DASH_ALT} sizes="(max-width: 1100px) 94vw, 1100px" className="cs-shot" />
          </figure>

          <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-10">
            <ShotExplorer items={explorer} />
            <Shot minW={680} src="/img/mainstreet/crops/table.jpg" w={1120} h={235} alt="Client table with institution, state, bank assets, current accounts, current AUA, growth, run rate and 2025 estimate columns. Institution names are redacted." cap="Client details" />
          </div>

          <figure className="mt-16 grid items-center gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
            <div className="relative">
              <Image src="/img/mainstreet/dashboard.jpg" width={1182} height={665} alt={DASH_ALT} sizes="(max-width: 1100px) 94vw, 680px" className="cs-shot" />
              {pins.map((d, n) => (
                <span key={d.t} className="cs-pin" style={{ left: `${d.x}%`, top: `${d.y}%` }} aria-hidden="true">{n + 1}</span>
              ))}
            </div>
            <figcaption className="cs-glass mx-auto w-fit p-6 lg:mx-0">
              <p className="meta mb-4">Design decisions</p>
              <ol className="grid gap-3.5">
                {pins.map((d, n) => (
                  <li key={d.t} className="flex items-center gap-3 text-[16px] text-[var(--ink)]">
                    <span className="cs-pin cs-pin-static" aria-hidden="true">{n + 1}</span>
                    {d.t}
                  </li>
                ))}
              </ol>
            </figcaption>
          </figure>
        </section>

        {/* 04 Impact */}
        <section id="impact" className="cs-section">
          <Head n="04" label="Impact" title="Less time assembling. More direct access." />

          <figure data-reveal className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14" aria-label="Before and after the dashboard">
            <div className="cs-glass p-6 sm:p-8">
              <p className="meta">Before: every Monday</p>
              <p className="cs-metric mt-3">3–4 hrs</p>
              <p className="mt-2 text-[14px] text-[var(--body)]">of manual reporting, per Portfolio Manager</p>
              <ol className="mt-6 flex flex-wrap gap-2">
                {ritual.map((r, n) => (
                  <li key={r} className="cs-glass !rounded-full px-3.5 py-1.5 text-[13px] text-[var(--body)]">
                    <span className="mr-1.5 text-[#e8b870]">{n + 1}</span>{r}
                  </li>
                ))}
              </ol>
            </div>
            <div className="cs-glass cs-glass-gold p-6 sm:p-8">
              <p className="meta">After: the dashboard</p>
              <p className="cs-metric mt-3">&lt;10 sec</p>
              <p className="mt-2 text-[14px] text-[var(--body)]">to see the portfolio picture on load</p>
              <Image src="/img/mainstreet/crops/metrics.jpg" width={1182} height={100} alt="The dashboard’s four headline measures, visible as soon as it loads." sizes="(max-width: 768px) 94vw, 520px" className="cs-shot mt-6" />
            </div>
          </figure>

          <dl data-reveal className="mt-14 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              ["~3 hrs", "saved per week, per PM"],
              ["6", "Portfolio Managers"],
              ["$1.2B+", "AUA represented"],
            ].map(([v, l]) => (
              <div key={l} className="cs-glass p-4 sm:p-5">
                <dt className="cs-metric !text-[clamp(28px,4vw,48px)] !text-[#e8b870]">{v}</dt>
                <dd className="mt-2 text-[13px] text-[var(--body)] sm:text-[14px]">{l}</dd>
              </div>
            ))}
          </dl>

          <p data-reveal className="mt-14 max-w-[36rem] text-[var(--body)]">
            <span className="text-[var(--ink)]">Reflection:</span> a good dashboard is reliable data, clear definitions and a hierarchy built around how people work.
          </p>

          <nav aria-label="Project navigation" className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--rule)" }}>
            <Link href={`/projects/${prev.slug}`} className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] hover:text-[var(--ink)]">
              <span aria-hidden="true">←&nbsp;</span> {prev.title}
            </Link>
            <Link href="/#case-studies" className="inline-flex min-h-[44px] items-center text-[14px] text-[#e8b870] hover:text-[var(--ink)]">
              Back to projects
            </Link>
            <Link href={`/projects/${next.slug}`} className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] hover:text-[var(--ink)]">
              {next.title} <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </nav>
        </section>
      </div>
      </div>
    </NightPage>
  );
}
