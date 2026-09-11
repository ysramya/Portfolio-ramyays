import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";

/**
 * Mainstreet PM Dashboard — outcome-first enterprise case study, per
 * Mainstreet_PM_Dashboard_Case_Study_Page.md, with the layout rhythm of the
 * reference visual (numbered sections, head left / visual right, tinted
 * cards, dark opening and closing).
 *
 * Every screenshot on this page is the real Power BI dashboard or the real
 * review printout, both with client names and the portfolio manager's name
 * redacted. Workflows, hierarchy, pipeline and iteration visuals are built
 * as diagrams — abstract by design, never presented as historical screens.
 *
 * Metrics come from the project record: 3–4 hours every Monday per PM
 * before, under 10 seconds on load after, six PMs, $1.2B+ AUA, ~100
 * iterations. The reference image's other figures and its PM quote were
 * generated and are not used.
 */

export const metadata: Metadata = {
  title: "PM Dashboard — Mainstreet Advisors · Ramya Yerramilli",
  description:
    "I designed and built a Power BI dashboard that gave six Portfolio Managers a single view of AUA, revenue, client health, and portfolio performance — replacing a fragmented, manual reporting process.",
};

const DASHBOARD_ALT =
  "The PM Dashboard in Power BI: headline KPIs, share of wallet, relationship trend, revenue by client tier, and the client table. Client names and the portfolio manager's name are redacted.";

/** Friction (manual, repeated work) and resolved states in the diagrams. */
const FRICTION = "#a8452c";
const POSITIVE = "#3e6b55";

/* ── Icons: 24×24 line set ─────────────────────────────────────────────── */

function Icon({ children, className = "icon-line", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={style}>
      {children}
    </svg>
  );
}

const i = {
  sheet: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="1.8" />
      <path d="M4 9h16M4 14.5h16M10 3.5v17" />
    </>
  ),
  crm: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </>
  ),
  calc: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7.5h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.8" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c.4-3.6 3.5-5.6 7.5-5.6s7.1 2 7.5 5.6" />
    </>
  ),
  pm: (
    <>
      <circle cx="12" cy="7.5" r="3.4" />
      <path d="M5 20.5c.4-3.8 3.3-6 7-6s6.6 2.2 7 6M12 14.5l-1.3 2.5 1.3 3.5 1.3-3.5z" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3 19.5c.3-3 2.8-4.8 6-4.8s5.7 1.8 6 4.8" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16.5 14.8c2.6.2 4.3 1.8 4.5 4.2" />
    </>
  ),
  bolt: <path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12z" />,
  model: (
    <>
      <rect x="3.5" y="4" width="6" height="5" rx="1" />
      <rect x="14.5" y="4" width="6" height="5" rx="1" />
      <rect x="9" y="15" width="6" height="5" rx="1" />
      <path d="M6.5 9v2.5H12V15M17.5 9v2.5H12" />
    </>
  ),
  dash: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 13v4M12 12v5M16 14v3" />
    </>
  ),
  decide: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  chart: <path d="M5 20v-8M12 20V5M19 20v-5M3 20h18" />,
  building: (
    <>
      <path d="M4 20.5V6l8-2.5V20.5M12 9h8v11.5" />
      <path d="M7 9h2M7 12.5h2M7 16h2M15 12.5h2M15 16h2M2.5 20.5h19" />
    </>
  ),
  money: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2c-.5-.9-1.5-1.4-2.8-1.4-1.6 0-2.8.8-2.8 2 0 2.8 5.8 1.4 5.8 4.3 0 1.2-1.2 2.1-3 2.1-1.4 0-2.5-.6-3-1.6M12 6.2v1.6M12 16.2v1.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </>
  ),
  pen: <path d="m14.5 5.5 4 4M4 20l1-5L15.5 4.5a2 2 0 0 1 3 0l1 1a2 2 0 0 1 0 3L9 19z" />,
  list: <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />,
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12.3 2.5 2.5 5-5.2" />
    </>
  ),
  cross: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </>
  ),
  send: <path d="M21 3 10 14M21 3l-6.5 18-4-8.5L2 8.5z" />,
  filter: <path d="M4 5h16l-6.2 7.5v6L10.2 20v-7.5z" />,
  hash: <path d="M9.5 3.5 7.5 20.5M16.5 3.5l-2 17M4 9h16.5M3.5 15H20" />,
  user: (
    <>
      <circle cx="12" cy="9" r="3.5" />
      <circle cx="12" cy="12" r="8.5" />
      <path d="M6.5 18.5c1.2-2 3.1-3 5.5-3s4.3 1 5.5 3" />
    </>
  ),
  brief: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M8.5 7.5V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="M12 16l3.6-4.4" />
    </>
  ),
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  refresh: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.7" />
      <path d="M20 4.5v4h-4" />
    </>
  ),
  trend: <path d="M3.5 17 9.5 11l4 4 7-7.5M15 7.5h5.5V13" />,
  loop: <path d="M17 3.5 20.5 7 17 10.5M20.5 7H9a5 5 0 0 0 0 10h1" />,
  arrowR: <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />,
  arrowD: <path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" />,
};

/* ── Small diagram primitives ──────────────────────────────────────────── */

function Arrow({ dir = "right", className = "" }: { dir?: "right" | "down"; className?: string }) {
  return (
    <Icon className={`icon-line !h-[18px] !w-[18px] flex-none opacity-60 ${className}`}>
      {dir === "right" ? i.arrowR : i.arrowD}
    </Icon>
  );
}

/** A labelled step in a flow diagram. */
function Node({
  icon,
  label,
  tone = "neutral",
  className = "",
}: {
  icon: ReactNode;
  label: string;
  tone?: "neutral" | "friction" | "positive" | "strong";
  className?: string;
}) {
  const ring =
    tone === "friction" ? FRICTION : tone === "positive" ? POSITIVE : tone === "strong" ? "var(--ink)" : "var(--border-strong)";
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{
          border: `1px solid ${ring}`,
          background: tone === "strong" ? "var(--ink)" : "var(--bg-raised)",
          color: tone === "strong" ? "var(--bg)" : undefined,
        }}
      >
        <Icon
          className="icon-line !h-5 !w-5"
          style={tone === "strong" ? { stroke: "var(--bg)" } : tone === "friction" ? { stroke: FRICTION } : tone === "positive" ? { stroke: POSITIVE } : undefined}
        >
          {icon}
        </Icon>
      </span>
      <span className="mt-2.5 text-[12.5px] leading-snug text-[var(--ink)] [overflow-wrap:anywhere] sm:[overflow-wrap:normal]">{label}</span>
    </div>
  );
}

/** A horizontal chain of nodes that wraps to a vertical chain on phones. */
function Chain({ nodes }: { nodes: { icon: ReactNode; label: string; tone?: "neutral" | "friction" | "positive" | "strong" }[] }) {
  return (
    <ol className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
      {nodes.map((n, idx) => (
        <li key={n.label + idx} className="contents">
          <Node icon={n.icon} label={n.label} tone={n.tone} className="sm:min-w-0 sm:flex-1" />
          {idx < nodes.length - 1 && (
            <>
              <Arrow dir="down" className="sm:hidden" />
              <Arrow className="mt-[15px] hidden !h-3.5 !w-3.5 sm:block" />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Laptop frame around the real dashboard screenshot. */
function Laptop({ priority = false, sizes }: { priority?: boolean; sizes: string }) {
  return (
    <figure className="w-full">
      <div style={{ background: "#0a0f0c", border: "1px solid #2f473c", borderRadius: 14, padding: "clamp(7px, 1vw, 12px)" }}>
        <div className="relative overflow-hidden" style={{ aspectRatio: "1182 / 665", borderRadius: 3 }}>
          <Image src="/img/mainstreet/dashboard.jpg" alt={DASHBOARD_ALT} fill priority={priority} sizes={sizes} className="object-cover" />
        </div>
      </div>
      <div aria-hidden style={{ height: 12, margin: "0 -5%", background: "#c5c9c6", borderRadius: "0 0 14px 14px" }}>
        <div style={{ width: "16%", height: 5, margin: "0 auto", background: "#a9aeab", borderRadius: "0 0 6px 6px" }} />
      </div>
    </figure>
  );
}

/* ── Content ───────────────────────────────────────────────────────────── */

const highlights = [
  { icon: i.building, label: "Internal tool", value: "Enterprise" },
  { icon: i.chart, label: "Built in", value: "Power BI" },
  { icon: i.team, label: "Team", value: "1 designer · 2 engineers" },
  { icon: i.money, label: "Scale", value: "$1.2B+ AUA" },
];

const outcomes = [
  { icon: i.clock, value: "~3 hrs", label: "saved per week per Portfolio Manager" },
  { icon: i.pm, value: "6", label: "Portfolio Managers" },
  { icon: i.money, value: "$1.2B+", label: "AUA represented" },
  { icon: i.bolt, value: "<10 sec", label: "to see the portfolio picture on dashboard load" },
];

const ritual = [
  { text: "Pull information from multiple Excel files", manual: true },
  { text: "Check CRM for missing details", manual: true },
  { text: "Calculate / reconcile numbers", manual: true },
  { text: "Assemble reporting", manual: true },
  { text: "Send information to PMs", manual: true },
  { text: "PM reviews the report", manual: false },
  { text: "Follow-up questions return to the analyst", manual: true, repeats: true },
];

const liveView = [
  "Open dashboard",
  "See headline metrics",
  "Identify movement / changes",
  "Drill into portfolio or investor details",
  "Make decisions",
];

const hierarchy = [
  { n: "01", title: "Headline numbers", detail: "AUA · performance · active investors" },
  { n: "02", title: "Movement", detail: "Trends · changes · comparisons" },
  { n: "03", title: "Portfolio positioning", detail: "Allocation · wallet share · portfolio performance" },
  { n: "04", title: "Revenue", detail: "Revenue tier · contribution · client economics" },
  { n: "05", title: "Client detail", detail: "Investor-level information and drill-downs" },
];

/**
 * Annotation boxes in percent of the screenshot (1182×665), measured off the
 * real image: KPI row, relationship trend, share of wallet + revenue by
 * tier, and the client table.
 */
const anatomy = [
  { n: "01", title: "KPI layer", text: "The first thing PMs see when the dashboard loads.", boxes: [{ l: 1.6, t: 12.2, w: 96.6, h: 13.2 }] },
  { n: "02", title: "Trend layer", text: "Shows movement rather than isolated numbers.", boxes: [{ l: 25.7, t: 26.4, w: 45.9, h: 34.2 }] },
  {
    n: "03",
    title: "Portfolio layer",
    text: "Makes portfolio positioning easier to compare.",
    boxes: [
      { l: 1.8, t: 26.4, w: 23.6, h: 34.2 },
      { l: 72.3, t: 26.4, w: 26.0, h: 34.2 },
    ],
  },
  { n: "04", title: "Client layer", text: "Allows deeper investigation without leaving the dashboard.", boxes: [{ l: 2.2, t: 64.6, w: 94.6, h: 33.2 }] },
];

const modes = [
  { icon: i.eye, title: "At a glance", body: "Portfolio health and headline metrics" },
  { icon: i.filter, title: "Investigate", body: "Drill-downs and filtering" },
  { icon: i.decide, title: "Act", body: "Information needed for meetings and reporting" },
];

const roleMap = [
  { icon: i.search, title: "Research", body: "Understand PM workflows and pain points" },
  { icon: i.list, title: "Define", body: "Translate needs into metrics and information hierarchy" },
  { icon: i.crm, title: "Data", body: "Clean and structure source data in Power BI" },
  { icon: i.pen, title: "Design", body: "Create the dashboard experience and visual hierarchy" },
  { icon: i.check, title: "Validate", body: "Review with PMs and refine based on feedback" },
  { icon: i.send, title: "Deliver", body: "Build and personalize dashboards for each PM" },
];

const decisions = [
  { icon: i.gauge, title: "KPI first", body: "Put the information PMs needed immediately at the top of the dashboard." },
  { icon: i.hash, title: "Consistent number formatting", body: "Standardized financial metrics so numbers could be scanned and compared quickly." },
  { icon: i.user, title: "Personalized dashboards", body: "Built six dashboard views around each PM's portfolio rather than forcing everyone through a shared generic view." },
  {
    icon: i.brief,
    title: "Existing business, not a blank canvas",
    body: "Worked within Power BI, existing branding, existing workflows, source-data limitations, and executive approval cycles.",
  },
];

const capabilities = [
  { icon: i.team, title: "User understanding", tags: ["PM workflows", "Stakeholder interviews", "Business needs"] },
  { icon: i.list, title: "Product thinking", tags: ["Requirements", "Prioritization", "Information hierarchy"] },
  { icon: i.model, title: "Data thinking", tags: ["Data cleaning", "Relational modeling", "DAX", "Metric definitions"] },
  { icon: i.dash, title: "UX / UI", tags: ["Dashboard architecture", "Visual hierarchy", "Interaction design"] },
  { icon: i.send, title: "Delivery", tags: ["Iteration", "Stakeholder review", "Implementation", "Personalization"] },
];

const opportunities = [
  { icon: i.spark, title: "Predictive insights", body: "Surface portfolio trends and potential risks earlier." },
  { icon: i.refresh, title: "Automated reporting", body: "Reduce recurring manual reporting even further." },
  { icon: i.trend, title: "Expanded analytics", body: "Add deeper benchmarking, risk, and portfolio comparisons." },
];

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function MainstreetPage() {
  return (
    <>
      {/* HERO — the real dashboard in a laptop frame, then the scope strip */}
      <DeepBand>
        <div className="wrap" style={{ paddingTop: "calc(var(--nav-h) + 36px)" }}>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
            <div>
              <p className="eyebrow eyebrow-rule">Case study · Mainstreet Advisors</p>
              <h1 className="mt-5">
                <span className="block" style={{ fontSize: "clamp(54px, 6.6vw, 94px)", lineHeight: 0.98 }}>
                  Mainstreet
                </span>
                <span className="mt-1 block" style={{ fontSize: "clamp(38px, 4.4vw, 62px)", lineHeight: 1.05 }}>
                  PM Dashboard
                </span>
              </h1>
              <p className="mt-6 text-[clamp(18px,1.6vw,21px)] leading-[1.45] text-[var(--ink)]" style={{ maxWidth: "26em" }}>
                Turning complex fund data into clear, actionable insights for Portfolio Managers.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] text-[var(--body)]" style={{ maxWidth: "36em" }}>
                I designed and built a Power BI dashboard that gave six Portfolio Managers a single
                view of AUA, revenue, client health, and portfolio performance — replacing a
                fragmented, manual reporting process.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#dashboard" className="btn">
                  View the dashboard <span aria-hidden>&#8594;</span>
                </a>
                <a href="#process" className="btn btn-outline">
                  See the process <span aria-hidden>&#8594;</span>
                </a>
              </div>
            </div>

            <Laptop priority sizes="(max-width: 1024px) 92vw, 600px" />
          </div>

          {/* Highlight strip — the project's scope in four facts */}
          <dl
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 py-7 md:grid-cols-4"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3.5">
                <Icon className="icon-line !h-6 !w-6">{h.icon}</Icon>
                <div>
                  <dt className="meta">{h.label}</dt>
                  <dd className="mt-1 text-[15px] leading-snug text-[var(--ink)]">{h.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </DeepBand>

      {/* 01 — THE OUTCOME */}
      <Section id="outcome" divided={false}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <SectionHead
            n="01"
            eyebrow="The outcome"
            title={
              <>
                More time on decisions.
                <br />
                Less time on data wrangling.
              </>
            }
          >
            <p>
              The dashboard gave Portfolio Managers a single, reliable source of truth for
              portfolio performance and investor activity. It reduced the manual reporting
              burden and made key information available without waiting for an analyst to
              assemble it.
            </p>
          </SectionHead>

          <dl className="grid grid-cols-2 gap-4 self-start">
            {outcomes.map((o) => (
              <div key={o.value} className="panel flex flex-col p-5">
                <Icon>{o.icon}</Icon>
                <dd
                  className="mt-5 whitespace-nowrap font-[family-name:var(--font-display)] leading-none text-[var(--ink)]"
                  style={{ fontSize: "clamp(30px, 3vw, 40px)" }}
                >
                  {o.value}
                </dd>
                <dt className="mt-2 text-[13px] leading-snug text-[var(--body)]">{o.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Primary infographic: BEFORE → AFTER workflow */}
        <figure className="mt-12 grid gap-3">
          <div className="p-7" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
            <p className="eyebrow" style={{ color: FRICTION }}>Before</p>
            <div className="mt-6">
              <Chain
                nodes={[
                  { icon: i.sheet, label: "Excel files", tone: "friction" },
                  { icon: i.calc, label: "Manual calculations", tone: "friction" },
                  { icon: i.crm, label: "CRM lookups", tone: "friction" },
                  { icon: i.mail, label: "Email / analyst requests", tone: "friction" },
                  { icon: i.pm, label: "PM review" },
                ]}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "var(--ink)" }}>
              <Icon className="icon-line !h-5 !w-5 rotate-90" style={{ stroke: "var(--bg)" }}>
                {i.arrowR}
              </Icon>
            </span>
          </div>
          <div className="panel-sage p-7">
            <p className="eyebrow" style={{ color: POSITIVE }}>After</p>
            <div className="mt-6">
              <Chain
                nodes={[
                  { icon: i.bolt, label: "Live source data", tone: "positive" },
                  { icon: i.model, label: "Power BI data model", tone: "positive" },
                  { icon: i.dash, label: "Dashboard", tone: "positive" },
                  { icon: i.decide, label: "PM decision", tone: "strong" },
                ]}
              />
            </div>
          </div>
          <figcaption className="sr-only">
            Before: Excel files, manual calculations, CRM lookups and email or analyst requests
            fed a PM review. After: live source data flows through the Power BI data model into
            the dashboard and straight to a PM decision.
          </figcaption>
        </figure>
      </Section>

      {/* 02 — WHY IT MATTERED */}
      <Section id="why">
        <div className="sec-grid">
          <SectionHead
            n="02"
            eyebrow="Why it mattered"
            title={
              <>
                The business was growing.
                <br />
                The reporting process wasn&rsquo;t keeping up.
              </>
            }
          >
            <p>
              Mainstreet managed more than $1.2B in AUA across six Portfolio Managers. As
              portfolios and investor activity grew, reporting became increasingly dependent on
              spreadsheets, manual updates, and analyst support.
            </p>
            <p>
              The problem wasn&rsquo;t a lack of data. It was that the information PMs needed was
              scattered across different sources and difficult to access quickly.
            </p>
          </SectionHead>

          <div>
            {/* Fragmented-data illustration */}
            <figure className="panel p-7">
              <ul className="grid grid-cols-5 gap-2">
                {[
                  { icon: i.sheet, label: "Excel workbook" },
                  { icon: i.sheet, label: "Excel workbook" },
                  { icon: i.crm, label: "CRM" },
                  { icon: i.mail, label: "Email" },
                  { icon: i.calc, label: "Manual calculations" },
                ].map((s, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col items-center px-1 py-3 text-center"
                    style={{
                      background: "var(--bg-raised)",
                      border: "1px dashed var(--border-strong)",
                      borderRadius: "var(--radius)",
                      transform: `translateY(${[0, 10, -4, 8, 2][idx]}px)`,
                    }}
                  >
                    <Icon className="icon-line !h-5 !w-5">{s.icon}</Icon>
                    <span className="mt-2 text-[11px] leading-tight text-[var(--body)]">{s.label}</span>
                  </li>
                ))}
              </ul>
              <svg viewBox="0 0 500 64" preserveAspectRatio="none" aria-hidden className="mt-4 block h-14 w-full">
                {[50, 150, 250, 350, 450].map((x) => (
                  <path key={x} d={`M${x} 0 C ${x} 34, 250 30, 250 64`} fill="none" stroke="var(--border-strong)" strokeWidth="1.4" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                ))}
              </svg>
              <div className="mx-auto flex max-w-[260px] items-center justify-center gap-2.5 px-4 py-3.5" style={{ border: `1px dashed ${FRICTION}`, borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
                <Icon className="icon-line !h-5 !w-5" style={{ stroke: FRICTION }}>
                  {i.cross}
                </Icon>
                <span className="text-[15px] text-[var(--ink)]">Fragmented reporting</span>
              </div>
              <div className="flex justify-center py-2.5">
                <Arrow dir="down" />
              </div>
              <div className="mx-auto flex max-w-[260px] items-center justify-center gap-2.5 px-4 py-3.5" style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}>
                <Icon className="icon-line !h-5 !w-5" style={{ stroke: "var(--bg)" }}>
                  {i.pm}
                </Icon>
                <span className="text-[15px]" style={{ color: "var(--bg)" }}>
                  PM needs one clear answer
                </span>
              </div>
              <figcaption className="sr-only">
                Two Excel workbooks, CRM, email and manual calculations converge into fragmented
                reporting, while the PM needs one clear answer.
              </figcaption>
            </figure>

            {/* Business importance callout */}
            <p
              className="mt-5 pl-5 font-[family-name:var(--font-display)] text-[clamp(19px,1.7vw,22px)] leading-[1.4] text-[var(--ink)]"
              style={{ borderLeft: "2px solid var(--numeral)" }}
            >
              The business needed a faster way for PMs to understand portfolio performance
              without adding more manual reporting work as the firm grew.
            </p>
          </div>
        </div>
      </Section>

      {/* 03 — THE WORKFLOW */}
      <Section id="workflow">
        <SectionHead n="03" eyebrow="The workflow" title="From assembling reports to acting on them." />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* BEFORE — Monday reporting ritual */}
          <article className="flex flex-col p-7" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
            <p className="eyebrow" style={{ color: FRICTION }}>Before</p>
            <h3 className="mt-2 text-[22px] leading-snug">Monday reporting ritual</h3>

            <div className="mt-7">
              <Chain
                nodes={[
                  { icon: i.sheet, label: "Spreadsheet", tone: "friction" },
                  { icon: i.crm, label: "CRM", tone: "friction" },
                  { icon: i.calc, label: "Calculator", tone: "friction" },
                  { icon: i.mail, label: "Email", tone: "friction" },
                  { icon: i.person, label: "Analyst", tone: "friction" },
                  { icon: i.pm, label: "PM" },
                ]}
              />
              <p className="mt-5 flex items-center justify-center gap-2 text-[12.5px]" style={{ color: FRICTION }}>
                <Icon className="icon-line !h-4 !w-4" style={{ stroke: FRICTION }}>
                  {i.loop}
                </Icon>
                Follow-up questions send it back around
              </p>
            </div>

            <ol className="mt-7">
              {ritual.map((r, idx) => (
                <li key={r.text} className="flex items-start gap-3 py-2.5 text-[14px] leading-snug" style={{ borderTop: "1px solid var(--rule)" }}>
                  <span className="w-5 flex-none text-[12px] text-[var(--muted)]">{idx + 1}</span>
                  <span className="flex-1 text-[var(--ink)]">{r.text}</span>
                  {r.manual && (
                    <span className="meta flex-none" style={{ color: FRICTION }}>
                      {r.repeats ? "Repeats" : "Manual"}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </article>

          {/* AFTER — Live portfolio view */}
          <article className="panel-sage flex flex-col p-7">
            <p className="eyebrow" style={{ color: POSITIVE }}>After</p>
            <h3 className="mt-2 text-[22px] leading-snug">Live portfolio view</h3>

            <div className="mt-7">
              <div className="flex items-center justify-center gap-2 text-[13px] text-[var(--ink)]">
                <span className="tag !bg-[var(--bg-raised)]">01 Open</span>
                <Arrow />
                <span className="tag !bg-[var(--bg-raised)]">02 Understand</span>
              </div>
              <div className="my-4">
                <Laptop sizes="(max-width: 1024px) 86vw, 460px" />
              </div>
              <div className="flex items-center justify-center gap-2 text-[13px] text-[var(--ink)]">
                <span className="tag !bg-[var(--bg-raised)]">03 Investigate</span>
                <Arrow />
                <span className="tag !bg-[var(--bg-raised)]">04 Act</span>
              </div>
            </div>

            <ol className="mt-7">
              {liveView.map((s, idx) => (
                <li key={s} className="flex items-start gap-3 py-2.5 text-[14px] leading-snug" style={{ borderTop: "1px solid var(--rule)" }}>
                  <span className="w-5 flex-none text-[12px] text-[var(--muted)]">{idx + 1}</span>
                  <span className="flex-1 text-[var(--ink)]">{s}</span>
                  <Icon className="icon-line !h-4 !w-4 flex-none" style={{ stroke: POSITIVE }}>
                    {i.check}
                  </Icon>
                </li>
              ))}
            </ol>
          </article>
        </div>

        <p className="mt-10 max-w-[30em] font-[family-name:var(--font-display)] text-[clamp(22px,2.4vw,30px)] leading-[1.3] text-[var(--ink)]">
          The dashboard moved reporting from a recurring manual task to an always-available
          business tool.
        </p>
      </Section>

      {/* 04 — THE SOLUTION */}
      <Section id="solution">
        <div className="sec-grid">
          <SectionHead n="04" eyebrow="The solution" title="One screen. The information PMs needed most.">
            <p>
              The dashboard brought portfolio performance, investor activity, revenue, and client
              information into a single Power BI experience.
            </p>
            <p>
              The hierarchy was designed around the questions PMs needed to answer first — then
              progressively deeper information.
            </p>
          </SectionHead>

          {/* Information hierarchy — each layer steps deeper */}
          <ol aria-label="Dashboard information hierarchy, from first glance to deepest detail">
            {hierarchy.map((h, idx) => (
              <li key={h.n} style={{ marginLeft: `${idx * 5}%` }}>
                <div
                  className="flex items-center gap-4 px-5 py-4"
                  style={{
                    borderRadius: "var(--radius)",
                    background: idx === 0 ? "var(--ink)" : idx === 1 ? "var(--panel-sage)" : "var(--panel)",
                    opacity: 1,
                  }}
                >
                  <span className="font-[family-name:var(--font-display)] text-[24px] leading-none" style={{ color: idx === 0 ? "var(--bg)" : "var(--numeral)" }}>
                    {h.n}
                  </span>
                  <div>
                    <p className="eyebrow" style={{ color: idx === 0 ? "var(--bg)" : "var(--ink)" }}>
                      {h.title}
                    </p>
                    <p className="mt-1 text-[13.5px]" style={{ color: idx === 0 ? "#c5cec7" : "var(--body)" }}>
                      {h.detail}
                    </p>
                  </div>
                </div>
                {idx < hierarchy.length - 1 && (
                  <div className="flex py-1.5 pl-6">
                    <Arrow dir="down" className="!h-4 !w-4" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 05 — THE DASHBOARD: real screenshot, annotated */}
      <Section id="dashboard">
        <SectionHead
          n="05"
          eyebrow="The dashboard"
          title={
            <>
              Designed for scanning first.
              <br />
              Investigation second.
            </>
          }
        />

        <figure className="mt-10">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "1182 / 665", borderRadius: "var(--radius)", border: "1px solid var(--border)", background: "#fff" }}
          >
            <Image src="/img/mainstreet/dashboard.jpg" alt={DASHBOARD_ALT} fill sizes="(max-width: 1200px) 94vw, 1096px" className="object-contain" />
            <div aria-hidden className="absolute inset-0 hidden sm:block">
              {anatomy.map((a) =>
                a.boxes.map((b, bi) => (
                  <div
                    key={a.n + bi}
                    className="absolute"
                    style={{
                      left: `${b.l}%`,
                      top: `${b.t}%`,
                      width: `${b.w}%`,
                      height: `${b.h}%`,
                      border: "2px solid #10231b",
                      borderRadius: 6,
                    }}
                  >
                    <span
                      className="absolute flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-medium"
                      style={{ left: -10, top: -12, background: "#10231b", color: "#f2efe7" }}
                    >
                      {a.n}
                    </span>
                  </div>
                )),
              )}
            </div>
          </div>
          <figcaption className="mt-3 text-[13px] text-[var(--muted)]">
            The delivered Power BI dashboard. Client names and the portfolio manager&rsquo;s name
            are redacted.
          </figcaption>
        </figure>

        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {anatomy.map((a) => (
            <li key={a.n} className="flex gap-3.5">
              <span
                className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-[12px] font-medium"
                style={{ background: "var(--ink)", color: "var(--bg)" }}
              >
                {a.n}
              </span>
              <div>
                <h3 className="text-[17px] leading-snug">{a.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-[var(--body)]">{a.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {modes.map((m, idx) => (
            <li key={m.title} className="panel flex items-center gap-4 p-5">
              <Icon>{m.icon}</Icon>
              <div>
                <p className="eyebrow !text-[var(--ink)]">{m.title}</p>
                <p className="mt-1 text-[14px] text-[var(--body)]">{m.body}</p>
              </div>
              {idx < modes.length - 1 && <Arrow className="ml-auto hidden sm:block" />}
            </li>
          ))}
        </ul>
      </Section>

      {/* 06 — MY ROLE */}
      <Section id="role">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
          <SectionHead n="06" eyebrow="My role" title="I worked across the problem, the data, and the product.">
            <p>
              I owned the dashboard experience from understanding PM needs through information
              architecture, data preparation, dashboard design, iteration, and delivery.
            </p>
            <p>
              I worked closely with Portfolio Managers, operations, analysts, and engineering to
              turn a fragmented reporting workflow into a usable internal product.
            </p>
          </SectionHead>
          <div className="lg:pb-2">
            <p className="meta">Tools</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Power BI", "Excel", "DAX", "Figma", "CRM data"].map((t) => (
                <li key={t} className="pill">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsibility map */}
        <ol className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {roleMap.map((r, idx) => (
            <li key={r.title} className="panel relative flex flex-col p-5">
              <div className="flex items-center justify-between">
                <Icon>{r.icon}</Icon>
                <span className="font-[family-name:var(--font-display)] text-[18px] text-[var(--numeral)]" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{r.title}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{r.body}</p>
              {idx < roleMap.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-[11px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full lg:flex"
                  style={{ background: "var(--bg)" }}
                >
                  <Icon className="icon-line !h-3.5 !w-3.5">{i.arrowR}</Icon>
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* 07 — THE PROCESS: the real project progression */}
      <Section id="process">
        <SectionHead n="07" eyebrow="The process" title="A collaborative process, shaped by real business constraints." />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* 01 Discover */}
          <article className="panel flex flex-col p-6">
            <figure aria-hidden className="flex h-[120px] items-center justify-center" style={{ background: "var(--bg-raised)", borderRadius: "var(--radius)" }}>
              <svg viewBox="0 0 220 100" className="h-full w-full max-w-[220px]">
                {[
                  [40, 30],
                  [40, 72],
                  [180, 30],
                  [180, 72],
                ].map(([x, y]) => (
                  <path key={`${x}${y}`} d={`M${x} ${y} L110 50`} stroke="var(--border-strong)" strokeDasharray="3 3" />
                ))}
                {[
                  [40, 30, "PM"],
                  [40, 72, "PM"],
                  [180, 30, "Analyst"],
                  [180, 72, "PM"],
                ].map(([x, y, l]) => (
                  <g key={`${x}-${y}`}>
                    <circle cx={x as number} cy={y as number} r="11" fill="var(--panel)" stroke="var(--ink)" strokeWidth="1.2" />
                    <text x={x as number} y={(y as number) + 3.5} textAnchor="middle" fontSize="7" fill="var(--ink)" fontFamily="var(--font-body)">
                      {l}
                    </text>
                  </g>
                ))}
                <circle cx="110" cy="50" r="17" fill="var(--ink)" />
                <path d="M103 54c1-3.2 3.7-4.6 7-4.6s6 1.4 7 4.6" stroke="var(--bg)" strokeWidth="1.4" fill="none" />
                <circle cx="110" cy="44" r="3.6" stroke="var(--bg)" strokeWidth="1.4" fill="none" />
              </svg>
            </figure>
            <p className="mt-5 flex items-baseline gap-3">
              <span className="numeral !text-[24px]">01</span>
              <span className="eyebrow !text-[var(--ink)]">Discover</span>
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--body)]">
              Spoke with Portfolio Managers and analysts to understand:
            </p>
            <ul className="mt-2 flex flex-col gap-1.5 text-[14px] text-[var(--ink)]">
              {["What they looked at regularly", "Where reporting slowed them down", "Which metrics mattered", "Where they needed more visibility"].map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="mt-[8px] h-1 w-1 flex-none rounded-full bg-[var(--numeral)]" />
                  {b}
                </li>
              ))}
            </ul>
          </article>

          {/* 02 Structure — data → information architecture */}
          <article className="panel flex flex-col p-6">
            <figure aria-hidden className="flex h-[120px] items-center gap-3 px-4" style={{ background: "var(--bg-raised)", borderRadius: "var(--radius)" }}>
              <div className="flex flex-col gap-2">
                {["Excel", "Excel", "CRM"].map((s, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] text-[var(--ink)]" style={{ border: "1px solid var(--border-strong)" }}>
                    <Icon className="icon-line !h-3 !w-3">{s === "CRM" ? i.crm : i.sheet}</Icon>
                    {s}
                  </span>
                ))}
              </div>
              <Arrow />
              <div className="flex-1">
                <span className="block rounded-full px-2.5 py-1 text-center text-[10.5px]" style={{ background: "var(--ink)", color: "var(--bg)" }}>
                  Dashboard
                </span>
                <div className="mx-auto h-2.5 w-px" style={{ background: "var(--border-strong)" }} />
                <div className="grid grid-cols-2 gap-1">
                  {["KPIs", "Trends", "Portfolio", "Clients"].map((n) => (
                    <span key={n} className="rounded-full py-0.5 text-center text-[10px] text-[var(--ink)]" style={{ border: "1px solid var(--border-strong)" }}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </figure>
            <p className="mt-5 flex items-baseline gap-3">
              <span className="numeral !text-[24px]">02</span>
              <span className="eyebrow !text-[var(--ink)]">Structure</span>
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--body)]">Mapped source data and defined:</p>
            <ul className="mt-2 flex flex-col gap-1.5 text-[14px] text-[var(--ink)]">
              {["Core metrics", "Relationships between datasets", "Dashboard hierarchy", "Filtering and drill-down needs"].map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="mt-[8px] h-1 w-1 flex-none rounded-full bg-[var(--numeral)]" />
                  {b}
                </li>
              ))}
            </ul>
          </article>

          {/* 03 Build */}
          <article className="panel flex flex-col p-6">
            <figure aria-hidden className="flex h-[120px] flex-col justify-center gap-1.5 px-5" style={{ background: "var(--bg-raised)", borderRadius: "var(--radius)" }}>
              {["Raw data", "Clean data", "Data model", "DAX", "Dashboard"].map((s, idx, arr) => (
                <div key={s} className="flex items-center gap-2">
                  <span
                    className="h-1.5 flex-none rounded-full"
                    style={{ width: `${22 + idx * 12}%`, background: idx === arr.length - 1 ? "var(--ink)" : "var(--border-strong)" }}
                  />
                  <span className="text-[10.5px] text-[var(--ink)]">{s}</span>
                </div>
              ))}
            </figure>
            <p className="mt-5 flex items-baseline gap-3">
              <span className="numeral !text-[24px]">03</span>
              <span className="eyebrow !text-[var(--ink)]">Build</span>
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--body)]">
              Cleaned and normalized data from Excel and internal CRM sources. Built:
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[14px] text-[var(--ink)]">
              {["Power BI relational model", "DAX measures", "KPI components", "Charts", "Tables", "Filtering", "Personalized dashboard views"].map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="mt-[8px] h-1 w-1 flex-none rounded-full bg-[var(--numeral)]" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* 04 Iterate — abstract layouts converging on the approved dashboard */}
        <article className="panel mt-4 grid gap-8 p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:p-7">
          <div>
            <p className="flex items-baseline gap-3">
              <span className="numeral !text-[24px]">04</span>
              <span className="eyebrow !text-[var(--ink)]">Iterate</span>
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--body)]">
              Requirements evolved throughout the project. Approximately{" "}
              <strong className="font-medium text-[var(--ink)]">100 dashboard iterations</strong> were
              explored before approval. Feedback refined:
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Information hierarchy", "Metric definitions", "Layout", "Number formatting", "Personalization", "Usability"].map((b) => (
                <li key={b} className="tag !bg-[var(--bg-raised)]">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <figure aria-label="Abstract layouts converging from table-heavy early concepts toward the approved KPI-first dashboard">
              <div className="grid grid-cols-2 items-end gap-3 sm:grid-cols-4">
                {/* Abstract representations only — not historical screens */}
                {[0, 1, 2].map((stage) => (
                  <div key={stage} className="p-2.5" style={{ background: "var(--bg-raised)", border: "1px dashed var(--border-strong)", borderRadius: 6, aspectRatio: "16 / 10" }}>
                    <div className="flex h-full flex-col gap-1">
                      {stage > 0 && (
                        <div className="flex gap-1">
                          {Array.from({ length: stage + 1 }).map((_, k) => (
                            <span key={k} className="h-3 flex-1 rounded-sm" style={{ background: "var(--border-strong)" }} />
                          ))}
                        </div>
                      )}
                      {stage === 2 && (
                        <div className="flex flex-1 gap-1">
                          <span className="flex-1 rounded-sm" style={{ background: "var(--panel-sage)" }} />
                          <span className="flex-[2] rounded-sm" style={{ background: "var(--panel-sage)" }} />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col justify-end gap-[3px]">
                        {Array.from({ length: stage === 0 ? 7 : stage === 1 ? 4 : 2 }).map((_, k) => (
                          <span key={k} className="h-[3px] w-full rounded-sm" style={{ background: "var(--rule-2)" }} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10", borderRadius: 6, border: "2px solid var(--ink)" }}>
                  <Image src="/img/mainstreet/dashboard.jpg" alt="" fill sizes="200px" className="object-cover object-top" />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 text-[11.5px] text-[var(--muted)] sm:grid-cols-4">
                <span>Early · table-heavy</span>
                <span className="hidden sm:block" />
                <span className="hidden sm:block">KPIs and visuals lead</span>
                <span className="text-right font-medium text-[var(--ink)] sm:text-left">Approved</span>
              </div>
              <div className="relative mt-2 h-px" style={{ background: "var(--border-strong)" }}>
                <span className="absolute -top-[3px] right-0 h-[7px] w-[7px] rounded-full" style={{ background: "var(--ink)" }} />
              </div>
            </figure>

            <figure className="mt-6 flex items-center gap-5">
              <div className="relative w-[150px] flex-none overflow-hidden sm:w-[190px]" style={{ aspectRatio: "4 / 3", borderRadius: 6 }}>
                <Image
                  src="/img/mainstreet/iterations.png"
                  alt="A printed mid-project version of the dashboard marked up with review notes; client details redacted"
                  fill
                  sizes="190px"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-[13px] leading-relaxed text-[var(--body)]">
                <span className="meta mb-1 block">Real review round</span>
                A printed version marked up during review — one of the rounds before approval.
                Client details redacted.
              </figcaption>
            </figure>
          </div>
        </article>
      </Section>

      {/* 08 — BEHIND THE DASHBOARD */}
      <Section id="data">
        <div className="sec-grid">
          <SectionHead n="08" eyebrow="Behind the dashboard" title="The interface was only as good as the data underneath it.">
            <p>
              The dashboard depended on multiple Excel workbooks and internal CRM data. Before the
              interface could be trusted, the underlying information had to be cleaned,
              normalized, and structured into a reliable Power BI model.
            </p>
          </SectionHead>

          <figure className="panel p-7" aria-label="Data pipeline">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: i.sheet, label: "Excel workbooks" },
                { icon: i.crm, label: "CRM data" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 px-4 py-3.5" style={{ background: "var(--bg-raised)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                  <Icon>{s.icon}</Icon>
                  <span className="text-[15px] text-[var(--ink)]">{s.label}</span>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 200 28" preserveAspectRatio="none" aria-hidden className="block h-7 w-full">
              <path d="M50 0 C 50 16, 100 12, 100 28 M150 0 C 150 16, 100 12, 100 28" fill="none" stroke="var(--border-strong)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
            </svg>
            {[
              { icon: i.filter, label: "Data cleaning + normalization" },
              { icon: i.model, label: "Power BI relational model" },
              { icon: i.hash, label: "DAX measures" },
              { icon: i.dash, label: "Dashboard" },
              { icon: i.pm, label: "Portfolio Manager", strong: true },
            ].map((s, idx, arr) => (
              <div key={s.label}>
                <div
                  className="flex items-center gap-3 px-4 py-3.5"
                  style={{
                    borderRadius: "var(--radius)",
                    background: s.strong ? "var(--ink)" : "var(--bg-raised)",
                    border: s.strong ? "1px solid var(--ink)" : "1px solid var(--border)",
                  }}
                >
                  <Icon style={s.strong ? { stroke: "var(--bg)" } : undefined}>{s.icon}</Icon>
                  <span className="text-[15px]" style={{ color: s.strong ? "var(--bg)" : "var(--ink)" }}>
                    {s.label}
                  </span>
                  <span className="meta ml-auto" style={s.strong ? { color: "#c5cec7" } : undefined}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex justify-center py-1">
                    <Arrow dir="down" className="!h-4 !w-4" />
                  </div>
                )}
              </div>
            ))}
          </figure>
        </div>
      </Section>

      {/* 09 — KEY DESIGN DECISIONS */}
      <Section id="decisions">
        <SectionHead n="09" eyebrow="Key design decisions" title="Small decisions made the dashboard easier to use." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {decisions.map((d, idx) => (
            <li key={d.title} className="panel flex flex-col p-6">
              <div className="flex items-center justify-between">
                <Icon>{d.icon}</Icon>
                <span className="font-[family-name:var(--font-display)] text-[20px] text-[var(--numeral)]" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[18px] leading-snug">{d.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{d.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 10 — IMPACT */}
      <Section id="impact">
        <SectionHead n="10" eyebrow="Impact" title="The Monday reporting ritual became a live business tool." />

        <figure className="mt-10 grid items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <div className="flex flex-col p-8" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
            <p className="eyebrow" style={{ color: FRICTION }}>Before</p>
            <p className="mt-5 font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(52px, 6vw, 80px)" }}>
              3–4 hrs
            </p>
            <p className="mt-2 text-[14px] text-[var(--muted)]">per week, per PM</p>
            <ul className="mt-7 flex flex-col gap-3">
              {["Manual reporting", "Multiple sources", "Analyst dependency", "Limited real-time visibility"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-[var(--ink)]">
                  <Icon className="icon-line !h-5 !w-5" style={{ stroke: FRICTION }}>
                    {i.cross}
                  </Icon>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "var(--ink)" }}>
              <Icon className="icon-line !h-5 !w-5 rotate-90 md:rotate-0" style={{ stroke: "var(--bg)" }}>
                {i.arrowR}
              </Icon>
            </span>
          </div>
          <div className="panel-sage flex flex-col p-8">
            <p className="eyebrow" style={{ color: POSITIVE }}>After</p>
            <p className="mt-5 font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(52px, 6vw, 80px)" }}>
              &lt;10 sec
            </p>
            <p className="mt-2 text-[14px] text-[var(--muted)]">to the portfolio picture</p>
            <ul className="mt-7 flex flex-col gap-3">
              {["Open dashboard", "See portfolio picture", "Drill into details", "Act on current information"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-[var(--ink)]">
                  <Icon className="icon-line !h-5 !w-5" style={{ stroke: POSITIVE }}>
                    {i.check}
                  </Icon>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </figure>

        <div className="mt-10 grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
          <p className="font-[family-name:var(--font-display)] text-[clamp(22px,2.4vw,30px)] leading-[1.3] text-[var(--ink)]">
            The result wasn&rsquo;t simply a better-looking report.
          </p>
          <p className="text-[16px] leading-[1.7] text-[var(--body)]">
            It changed <strong className="font-medium text-[var(--ink)]">when and how PMs accessed information</strong> —
            from requesting and assembling data to accessing it directly when they needed it.
          </p>
        </div>
      </Section>

      {/* 11 — TEAM */}
      <Section id="team">
        <div className="sec-grid">
          <SectionHead n="11" eyebrow="Team" title="1 designer · 2 engineers" />

          <figure aria-label="Team structure">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="panel-sage flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "var(--ink)" }}>
                    <Icon className="icon-line !h-5 !w-5" style={{ stroke: "var(--bg)" }}>
                      {i.pen}
                    </Icon>
                  </span>
                  <p className="meta">1 designer</p>
                </div>
                <h3 className="mt-4 text-[19px] leading-snug">Ramya — Product / UX Design</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">
                  Owned the dashboard experience, information architecture, data visualization,
                  user needs, and iterative design.
                </p>
              </div>
              <div className="panel flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex -space-x-2">
                    {[0, 1].map((k) => (
                      <span key={k} className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-strong)" }}>
                        <Icon className="icon-line !h-5 !w-5">{i.person}</Icon>
                      </span>
                    ))}
                  </span>
                  <p className="meta">2 engineers</p>
                </div>
                <h3 className="mt-4 text-[19px] leading-snug">Engineering — 2</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">
                  Supported technical implementation and data/integration requirements.
                </p>
              </div>
            </div>

            <svg viewBox="0 0 200 28" preserveAspectRatio="none" aria-hidden className="block h-7 w-full">
              <path d="M50 0 V 14 H 150 V 0 M100 14 V 28" fill="none" stroke="var(--border-strong)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
            </svg>

            <div className="flex flex-wrap items-center justify-center gap-2 px-5 py-4" style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--radius)" }}>
              <span className="meta mr-1">Stakeholders</span>
              {["Portfolio Managers", "Operations", "Analysts", "Leadership"].map((s) => (
                <span key={s} className="pill !py-1">
                  {s}
                </span>
              ))}
            </div>
          </figure>
        </div>
      </Section>

      {/* 12 — WHAT I BROUGHT TO THE PROJECT */}
      <Section id="capabilities">
        <SectionHead n="12" eyebrow="What I brought to the project" title="Designing the interface was only part of the job." />

        <ul className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <span aria-hidden className="absolute left-[10%] right-[10%] top-[22px] hidden h-px lg:block" style={{ background: "var(--border-strong)" }} />
          {capabilities.map((c, idx) => (
            <li key={c.title} className="relative flex flex-col">
              <span
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: idx === 3 ? "var(--ink)" : "var(--bg)", border: "1px solid var(--ink)" }}
              >
                <Icon className="icon-line !h-5 !w-5" style={idx === 3 ? { stroke: "var(--bg)" } : undefined}>
                  {c.icon}
                </Icon>
              </span>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{c.title}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* 13 — LOOKING AHEAD */}
      <Section id="next">
        <div className="sec-grid">
          <SectionHead n="13" eyebrow="Looking ahead" title="A strong foundation for the next phase of reporting." />
          <div>
            <p className="meta">Future opportunities — not delivered features</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-3">
              {opportunities.map((o) => (
                <li key={o.title} className="panel p-6">
                  <Icon>{o.icon}</Icon>
                  <h3 className="mt-4 text-[18px] leading-snug">{o.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{o.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CLOSING */}
      <DeepBand>
        <div className="wrap py-[clamp(64px,8vw,112px)]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
            <div>
              <p className="eyebrow eyebrow-rule">Final thoughts</p>
              <h2 className="mt-5" style={{ fontSize: "clamp(36px, 4.4vw, 58px)", lineHeight: 1.06, maxWidth: "12em" }}>
                Better access to data leads to better decisions.
              </h2>
            </div>
            <div>
              <p className="lead">
                Mainstreet needed a reporting system that could keep up with the business. The
                dashboard turned fragmented data into a clear, usable product that Portfolio
                Managers could access when they needed it.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#dashboard" className="btn">
                  View the dashboard <span aria-hidden>&#8594;</span>
                </a>
                <Link href="/#work" className="btn btn-outline">
                  Back to projects <span aria-hidden>&#8594;</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-8" style={{ borderTop: "1px solid var(--rule)" }}>
            <div>
              <p className="meta">Next project</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-[30px] leading-tight text-[var(--ink)]">Raahi</p>
            </div>
            <Link href="/projects/raahi" className="btn btn-outline">
              View case study <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </DeepBand>
    </>
  );
}
