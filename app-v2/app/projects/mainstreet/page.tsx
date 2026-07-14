import type { Metadata } from "next";
import Link from "next/link";
import {
  ReadingLayout,
  EditorialLayout,
  GalleryLayout,
  SplitLayout,
  FullBleedLayout,
} from "@/components/ds/layouts";
import { Quote, ImageFrame, MetricStat } from "@/components/ds/atoms";
import { tintedGlass } from "@/components/ds/tokens";
import { mainstreetTheme, mainstreetPalette, mainstreetGradients } from "./theme";

export const metadata: Metadata = {
  title: "PM Dashboard — Mainstreet Advisors · Ramya Yerramilli",
  description:
    "A Power BI reporting tool that gave six Portfolio Managers at Mainstreet Advisors a real-time, single-screen view of their AUA, client health, and revenue.",
};

const accent = mainstreetTheme.accent;
const olive = mainstreetPalette.olive;
const gold = mainstreetPalette.gold;
const sand = mainstreetPalette.sand;

function Eyebrow({ children, color = accent }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase" style={{ color }}>
      {children}
    </p>
  );
}

function GlassNote({
  label,
  text,
  color = accent,
  style,
}: {
  label: string;
  text: string;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="rounded-2xl p-6" style={{ ...tintedGlass(color, 0.1), ...style }}>
      <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase" style={{ color }}>
        {label}
      </p>
      <p className="mt-3 text-lg leading-relaxed text-[var(--color-ink)]">{text}</p>
    </div>
  );
}

function GradientField({ gradient, children }: { gradient: string; children: React.ReactNode }) {
  return <div style={{ background: gradient }}>{children}</div>;
}

function FeatureCard({ icon, label, title, text, color = accent }: { icon: string; label: string; title: string; text: string; color?: string }) {
  return (
    <div className="rounded-2xl p-6 transition-colors hover:border-white/20" style={tintedGlass(color, 0.07)}>
      <span className="text-xl">{icon}</span>
      <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color }}>{label}</p>
      <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{text}</p>
    </div>
  );
}

const glance = [
  { q: "What role are you targeting?", a: "Product Designer with data fluency", detail: "Roles bridging UX and BI in financial or enterprise contexts." },
  { q: "Is your work relevant to that role?", a: "Stakeholder-driven BI design", detail: "Built from PM interviews to solve a real daily problem for 6 Portfolio Managers overseeing $1B+ AUA." },
  { q: "Can I quickly understand your contribution?", a: "Sole UX & BI Designer", detail: "I interviewed all 6 PMs, synthesized their mental models, and delivered the live Power BI dashboard." },
  { q: "Is there evidence of thinking, not just polish?", a: "Research found 3 conflicting mental models", detail: "Dashboard hierarchy resolves all three in a single view — that insight is the design." },
  { q: "Do outcomes look credible?", a: "Live and used daily", detail: "Dashboard deployed internally at Mainstreet Advisors, in active use by the portfolio management team." },
];

const processSteps = [
  { n: "01", title: "Discovery", text: "Interviewed 4 of the 6 PMs to map their weekly reporting ritual. Identified the 6 core metrics they returned to most: AUA, ARR, # clients, account count, wallet share, and growth since last quarter." },
  { n: "02", title: "Data Pipeline", text: "Extracted raw data from multiple Excel workbooks and the internal CRM. Cleaned, normalised, and structured it into a relational model in Power BI using DAX calculated columns and measures." },
  { n: "03", title: "Design Iterations", text: "Built 3 layout iterations with PM feedback after each round. Key tension: information density vs. at-a-glance readability. Early versions were too table-heavy; final version led with KPI tiles and visuals." },
  { n: "04", title: "Delivery", text: "Delivered 6 personalised dashboards — one per PM — filtered to their own book. Conducted a 30-minute walkthrough with each manager and incorporated final feedback before handoff." },
];

const rationale = [
  { icon: "🛠", label: "Why Power BI", text: "Power BI was chosen because it integrates directly with Excel inside Mainstreet's existing Microsoft environment. The PMs already lived in Excel — the tool decision was grounded in their actual workflow, not a default preference." },
  { icon: "🎨", label: "Why the existing design system", text: "The dashboard followed Mainstreet's brand colors, typeface, and sizing conventions. Familiarity lowered adoption friction — PMs didn't need to learn a new visual language to trust the numbers." },
  { icon: "📐", label: "Why narrative order", text: "Charts were color-coded and sequenced to match how a PM actually reviews their book: headline AUA first, then trend context, then wallet positioning, then revenue breakdown, then client-level detail. Not all metrics uniformly." },
  { icon: "👤", label: "Why 6 filtered views", text: "Each PM sees only their own book. One shared dashboard with cross-PM data would have created noise and comparison anxiety. Individual filtered views came directly from the interview finding: PMs wanted to track their own progress, not rank against peers." },
];

const beforeList = [
  "3–4 hours every Monday morning gathering and cross-referencing data",
  "No single view — at least 3 spreadsheets open simultaneously",
  "Data was days old by the time it was compiled",
  "Each PM used a different format — no cross-team consistency",
  "Growth calculations done by hand, prone to formula errors",
  "No visual context — everything in raw numbers",
];

const afterList = [
  "Full portfolio picture available in under 10 seconds on load",
  "One screen: KPIs, trend charts, wallet share, and client table",
  "Live data connected to source — always reflects current state",
  "Standardised format across all 6 PMs — consistent review meetings",
  "DAX-calculated growth rates — no manual formulas, no errors",
  "Visual hierarchy guides attention: tiles → charts → detail table",
];

const decisions = [
  { icon: "🎨", label: "Colour System", title: "Brand greens, not generic blues", text: "Mainstreet Advisors' brand palette centres on earthy greens and tans — forest green for primary data, olive for secondary, tan for tertiary tiers. This made the dashboard immediately feel like an internal tool, not a generic BI template, and helped PMs orient quickly by tier." },
  { icon: "📌", label: "Layout Hierarchy", title: "Headline numbers before charts", text: "Early iterations buried the KPI tiles midway down the page. PM feedback was clear: \"I need to see my total AUA the moment I open this.\" The final layout puts four headline tiles at the very top — Total AUA, ARR, # Clients, Active Accounts — before any visualisation." },
  { icon: "🔢", label: "Number Format", title: "No decimals, dollar signs everywhere", text: "Stakeholder feedback on early iterations specifically called out inconsistent formatting — some figures had decimals, some didn't; dollar signs appeared in some columns but not others. The final version enforces a strict format: whole dollar figures with $ prefix, growth as clean percentages, no trailing zeros." },
  { icon: "🔍", label: "Personalisation", title: "One dashboard per PM, not a shared view", text: "Rather than a single all-PM dashboard with filters, each PM received their own report page scoped to their book. This eliminated the risk of accidentally viewing another manager's data and made the dashboard feel like a personal tool rather than a shared report." },
];

const reflections = [
  { icon: "🗣", label: "Stakeholder-first design", text: "The biggest design decisions were driven by PM feedback, not my instincts. What looked clean to me felt unfamiliar to them. Showing iterations early and often — not a polished final — was what made the feedback loop actually work.", tall: true },
  { icon: "🧹", label: "Data quality is design work", text: "Half the project was cleaning and structuring raw Excel data before a single visual was built. Inconsistent column naming, merged cells, and missing values are design problems — they define what's possible downstream. I learned to treat data modelling as UX work.", tall: false },
  { icon: "📐", label: "Constraints sharpen decisions", text: "Working within Mainstreet's brand guidelines — rather than against them — produced a more cohesive result than if I'd had total creative freedom. The constraint of \"use these greens\" pushed me to think about hierarchy and typography instead of leaning on colour.", tall: false },
  { icon: "🤖", label: "AI as a build partner", text: "This was my first time connecting Excel to Power BI, and I leaned on AI tools throughout — to debug Power Query refresh errors, write and explain DAX measures, and walk me through setting up live data connections instead of static imports. It compressed a steep learning curve into something I could troubleshoot in real time, while I stayed responsible for the data modelling and design decisions.", tall: true },
];

const kpiCallouts = [
  { label: "Total AUA", value: "$902,367K", sub: "Total Assets" },
  { label: "ARR", value: "$622K", sub: "Sum of Run Rate" },
  { label: "Share of Wallet", value: "58.7%", sub: "Bruce's MSA Assets" },
  { label: "Revenue — Tier B", value: "$209K", sub: "Highest client tier" },
  { label: "# of Clients", value: "13", sub: "Current Clients" },
];

export default function MainstreetPage() {
  return (
    <div style={{ background: mainstreetGradients.page }}>
      {/* 1 — Hero: custom, floating laptop dashboard (real asset, teal ambient
          already composited into the image), metadata in glass cards */}
      <section className="relative overflow-hidden" style={{ paddingTop: "calc(var(--nav-h) + 3rem)", paddingBottom: "6rem" }}>
        <div
          className="mx-auto grid gap-12 px-6 md:px-10 md:grid-cols-[1fr_1.1fr] items-center"
          style={{ maxWidth: "1600px" }}
        >
          <div>
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
              style={tintedGlass(accent)}
            >
              <span style={{ color: gold }}>Internship Project · Mainstreet Advisors</span>
            </span>
            <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,7.5vw,6rem)] text-[var(--color-ink)]">
              PM
              <br />
              <span className="italic" style={{ color: accent }}>Dashboard</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-muted)]" style={{ maxWidth: "56ch" }}>
              A Power BI reporting tool that gave six Portfolio Managers at Mainstreet
              Advisors a real-time, single-screen view of their AUA, client health, and
              revenue — replacing hours of manual Excel work with an instant overview.
            </p>

            <dl className="grid grid-cols-2 gap-3 mt-10 pt-8" style={{ borderTop: `1px solid ${mainstreetPalette.slate}33` }}>
              {[
                { label: "Company", value: "Mainstreet Advisors" },
                { label: "My Role", value: "Data Analyst Intern" },
                { label: "Tools", value: "Power BI · Excel · DAX" },
                { label: "Timeline", value: "8 weeks · Internship" },
                { label: "Scope", value: "6 Portfolio Managers" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl px-4 py-3" style={tintedGlass(accent, 0.06)}>
                  <dt className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-sm text-[var(--color-ink)]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Floating laptop dashboard — real asset, teal glow already baked in */}
          <div className="relative flex items-center justify-center">
            <ImageFrame
              src="/img/mainstreet/laptop-mockup.png"
              alt="PM Dashboard Overview, shown on a laptop"
              aspect="1/1"
              objectFit="contain"
            />
          </div>
        </div>
        <p className="text-center text-xs text-[var(--color-ink-faint)] mt-4">
          Final dashboard delivered in Power BI · all figures are illustrative dummy data
        </p>
      </section>

      {/* 2 — At a Glance: 5 Q&A insight cards */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>At a Glance</Eyebrow>
        </div>
        <div style={{ gridColumn: "1 / 7" }}>
          <div style={tintedGlass(accent, 0.08)} className="rounded-2xl p-6 h-full">
            <p className="text-sm text-[var(--color-ink-faint)]">{glance[0].q}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{glance[0].a}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{glance[0].detail}</p>
          </div>
        </div>
        <div style={{ gridColumn: "7 / 13" }}>
          <div style={tintedGlass(olive, 0.08)} className="rounded-2xl p-6 h-full">
            <p className="text-sm text-[var(--color-ink-faint)]">{glance[1].q}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{glance[1].a}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{glance[1].detail}</p>
          </div>
        </div>
        {[glance[2], glance[3], glance[4]].map((g, i) => (
          <div key={g.q} style={{ gridColumn: `${1 + i * 4} / ${5 + i * 4}` }}>
            <div style={tintedGlass(i === 1 ? accent : olive, 0.07)} className="rounded-2xl p-6 h-full">
              <p className="text-sm text-[var(--color-ink-faint)]">{g.q}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{g.a}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{g.detail}</p>
            </div>
          </div>
        ))}
      </EditorialLayout>

      {/* 3 — The Problem: metric-forward, gradient field, stakeholder quote, insight strip */}
      <GradientField gradient={mainstreetGradients.tealCharcoal}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 8" }}>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Six managers.
              <br />
              <span className="italic" style={{ color: accent }}>Zero unified view.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              Mainstreet Advisors managed over <strong className="text-[var(--color-ink)] font-semibold">$1.2B in assets under advisement</strong> across
              six Portfolio Managers. Each PM tracked their own book of business through a
              patchwork of Excel files, email threads, and manual lookups into the core
              CRM. There was no shared reporting standard, no live view of account health,
              and no way for a PM to know — at a glance — how their portfolio was
              performing against prior periods.
            </p>
          </div>
          <div style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
            <MetricStat size="hero" accent={accent} value="$1.2B" label="Assets under advisement" />
          </div>
          <div className="rounded-[2rem] p-8" style={{ gridColumn: "9 / 13", ...tintedGlass(olive, 0.08) }}>
            <div className="flex flex-col gap-6">
              <MetricStat accent={olive} value="3–4 hrs" label="Lost every week, per PM" />
              <MetricStat accent={olive} value="6" label="Portfolio Managers, zero shared view" />
            </div>
          </div>
          <div className="rounded-[2rem] p-8" style={{ gridColumn: "1 / 8", ...tintedGlass(accent, 0.1) }}>
            <Quote
              accent={accent}
              text="Every Monday morning I'm pulling three spreadsheets, cross-referencing account lists, and manually calculating growth. By the time I have the numbers, half the day is gone."
              attribution="Portfolio Manager — Mainstreet Advisors (paraphrased from stakeholder interviews)"
              style={{ maxWidth: "50ch" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            {[
              { icon: "⏱", label: "Time lost weekly", text: "PMs spent 3–4 hours every week stitching together a manual picture of their book from disconnected sources." },
              { icon: "📊", label: "No standard view", text: "Each PM had a different way of tracking growth, AUA, and run rate — making cross-team reviews inconsistent and slow." },
              { icon: "🔁", label: "Stale data", text: "Spreadsheets were updated manually, sometimes days late — meaning decisions were made on numbers that didn't reflect current reality." },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl p-6" style={tintedGlass(sand, 0.06)}>
                <span className="text-2xl">{c.icon}</span>
                <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: accent }}>{c.label}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 4 — Pull quote: standalone editorial quote, compact — a pause, not a full screen */}
      <ReadingLayout className="text-center py-16 md:py-20">
        <Quote
          align="center"
          accent={accent}
          text="How might we give each Portfolio Manager a single, live screen that replaces their Monday morning spreadsheet ritual?"
          attribution=""
          style={{ maxWidth: "48ch" }}
        />
      </ReadingLayout>

      {/* 5 — Research: PM interviews, callout, insight strip */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Research · PM Interviews</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            4 of 6 PMs said the <span className="italic" style={{ color: accent }}>same thing.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            Before building anything, I interviewed all 6 Portfolio Managers to
            understand their actual workflow. Their existing process: manually pulling
            daily updates from multiple Excel sheets — described as tedious, with
            figures easy to miss because everything lived in a single undifferentiated
            spreadsheet.
          </p>
        </div>
        <div style={{ gridColumn: "2 / 12" }}>
          <Quote
            align="center"
            accent={olive}
            text="The numbers are all there, but they're jumbled together. I wish I could see my progress in a structured, organized way — not just a wall of cells."
            attribution="Portfolio Manager — one of 4 who expressed this directly (paraphrased)"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {[
            { icon: "🗣", label: "Key finding", text: "4 of 6 PMs independently said they wished they could see their progress in a structured, organized way. This was the finding that justified building the dashboard." },
            { icon: "📋", label: "Workflow pain", text: "Every PM's daily update ritual started with Excel — pulling data manually, cross-referencing sheets, and doing calculations by hand before they could make a single portfolio decision." },
            { icon: "🔍", label: "The gap", text: "Numbers weren't missing — they were buried. The problem was structure and visibility, not data availability. That distinction shaped every design decision." },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl p-6" style={tintedGlass(accent, 0.06)}>
              <span className="text-2xl">{c.icon}</span>
              <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: accent }}>{c.label}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </EditorialLayout>

      {/* 6 — Process: horizontal timeline, four glass cards, on a slate→black field */}
      <GradientField gradient={mainstreetGradients.slateBlack}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              From raw Excel <span className="italic" style={{ color: accent }}>to live Power BI</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              The project ran across four phases — from understanding what PMs actually
              needed to see, through data wrangling, design iteration, and final
              delivery.
            </p>
          </div>
          <div className="relative" style={{ gridColumn: "1 / 13" }}>
            <div
              className="hidden md:block absolute top-[2.6rem] left-[6%] right-[6%] h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}55, ${accent}55, transparent)` }}
              aria-hidden
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {processSteps.map((p) => (
                <div key={p.n} className="relative rounded-2xl p-6 transition-transform hover:-translate-y-1" style={tintedGlass(accent, 0.07)}>
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-full font-[family-name:var(--font-display)] font-semibold text-sm mb-4"
                    style={{ backgroundColor: accent, color: mainstreetPalette.black }}
                  >
                    {p.n}
                  </span>
                  <p className="text-[0.68rem] font-semibold tracking-[0.15em] uppercase" style={{ color: accent }}>{p.title}</p>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 7 — Design Rationale: premium feature cards */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Design Rationale</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Every decision <span className="italic" style={{ color: accent }}>came from the PMs.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            Tool choice, layout order, color-coding — each was grounded in what the
            interviews revealed about how PMs actually think through their portfolios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
          {rationale.map((r, i) => (
            <FeatureCard key={r.label} icon={r.icon} label={r.label} title={r.label} text={r.text} color={i % 2 === 0 ? accent : olive} />
          ))}
        </div>
      </EditorialLayout>

      {/* 8 — Dashboard Showcase: the real screenshot as visual centerpiece, 1700px,
          floating KPI callouts connected below it */}
      <GalleryLayout maxWidth="1700px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>The Solution</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Every section <span className="italic" style={{ color: accent }}>earns its place</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            The layout follows a top-to-bottom information hierarchy: headline numbers
            → trend context → wallet positioning → revenue breakdown → client-level
            detail.
          </p>
        </div>
        <div style={{ gridColumn: "1 / 13", marginTop: "2rem" }}>
          <ImageFrame
            src="/img/mainstreet/dashboard.jpg"
            alt="PM Dashboard Overview — real Power BI screenshot"
            aspect="1.778/1"
            objectFit="contain"
            caption="All figures shown are illustrative dummy data for portfolio demonstration purposes"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3" style={{ gridColumn: "1 / 13", marginTop: "1rem" }}>
          {kpiCallouts.map((k, i) => (
            <div key={k.label} className="rounded-xl p-4 text-center" style={tintedGlass(i % 2 === 0 ? accent : olive, 0.08)}>
              <p className="font-[family-name:var(--font-display)] font-semibold text-xl" style={{ color: i % 2 === 0 ? accent : olive }}>{k.value}</p>
              <p className="mt-1 text-[0.58rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-ink)]">{k.label}</p>
              <p className="text-[0.65rem] text-[var(--color-ink-faint)]">{k.sub}</p>
            </div>
          ))}
        </div>
      </GalleryLayout>

      {/* 9 — Feature Breakdown: reads the same screenshot above, top to bottom —
          no repeated image, just the two callouts that walk through it */}
      <EditorialLayout maxWidth="1500px">
        <div className="rounded-2xl p-8" style={{ gridColumn: "1 / 7", ...tintedGlass(accent, 0.07) }}>
          <Eyebrow>Trend Context — Relationship Trend</Eyebrow>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
            Immediately after the headline tiles, the trend chart answers the next
            question a PM has: is this book growing or shrinking? Wallet share sits
            beside it — the same visual weight, because both questions get asked in
            the same breath during a review.
          </p>
        </div>
        <div className="rounded-2xl p-8" style={{ gridColumn: "7 / 13", ...tintedGlass(olive, 0.07) }}>
          <Eyebrow color={olive}>Client-Level Detail — The Table</Eyebrow>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
            The table is deliberately last. It's where a PM goes to investigate a
            number the tiles and charts surfaced — not where they start. Growth
            percentages are color-coded green/red so outliers are visible without
            reading every row.
          </p>
        </div>
      </EditorialLayout>

      {/* 10 — Before vs After: two glass panels, animated-ready divider */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Before &amp; After</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            What changed <span className="italic" style={{ color: accent }}>for the PMs</span>
          </h2>
        </div>
        <div className="relative rounded-[2rem] p-8" style={{ gridColumn: "1 / 7", ...tintedGlass(mainstreetPalette.slate, 0.08) }}>
          <p className="text-[0.62rem] font-bold tracking-[0.28em] uppercase text-[var(--color-ink-faint)]">Before — Manual Excel Workflow</p>
          <ul className="mt-5 flex flex-col gap-3">
            {beforeList.map((b) => (
              <li key={b} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-6 relative">
                <span className="absolute left-0 top-0 text-[var(--color-ink-faint)]">✗</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[2rem] p-8" style={{ gridColumn: "7 / 13", ...tintedGlass(accent, 0.09) }}>
          <p className="text-[0.62rem] font-bold tracking-[0.28em] uppercase" style={{ color: accent }}>After — Power BI Dashboard</p>
          <ul className="mt-5 flex flex-col gap-3">
            {afterList.map((a) => (
              <li key={a} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-6 relative">
                <span className="absolute left-0 top-0" style={{ color: accent }}>✓</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </EditorialLayout>

      {/* 11 — Design Decisions: why it looks the way it does, distinct feature cards */}
      <GradientField gradient={mainstreetGradients.oliveCharcoal}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow color={olive}>Design Decisions</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Why it looks <span className="italic" style={{ color: olive }}>the way it does</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
              Every layout and colour choice was constrained by two things: Mainstreet
              Advisors brand guidelines and what PMs said they needed to trust on sight.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
            {decisions.map((d, i) => (
              <FeatureCard key={d.label} icon={d.icon} label={d.label} title={d.title} text={d.text} color={i % 2 === 0 ? olive : accent} />
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 12 — Impact: floating KPI cards, executive reporting feel */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Impact</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Results that <span className="italic" style={{ color: accent }}>mattered</span>
          </h2>
        </div>
        {[
          { n: "6", label: "Portfolio Managers", desc: "Each received a personalised dashboard scoped to their own book of business", color: accent, col: "1 / 5" },
          { n: "~3h", label: "Saved per week, per PM", desc: "Manual Monday reporting ritual replaced with a live, instant-load overview", color: olive, col: "5 / 9" },
          { n: "1", label: "Screen for the whole picture", desc: "KPIs, trends, wallet share, revenue tiers, and client-level detail — all visible at once", color: gold, col: "9 / 13" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl p-8 text-center" style={{ gridColumn: s.col, ...tintedGlass(s.color, 0.08) }}>
            <p className="font-[family-name:var(--font-display)] font-semibold text-6xl" style={{ color: s.color }}>{s.n}</p>
            <p className="mt-3 text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-[var(--color-ink)]">{s.label}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </EditorialLayout>

      {/* 13 — Reflection: masonry glass cards, alternating heights */}
      <GradientField gradient={mainstreetGradients.slateBlack}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Reflection</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              What I learned <span className="italic" style={{ color: accent }}>building this</span>
            </h2>
          </div>
          <div style={{ gridColumn: "1 / 7" }} className="flex flex-col gap-4">
            {[reflections[0], reflections[1]].map((r, i) => (
              <div key={r.label} className="rounded-2xl p-6" style={{ ...tintedGlass(i === 0 ? accent : olive, 0.07), paddingBottom: r.tall ? "2.5rem" : "1.5rem" }}>
                <span className="text-xl">{r.icon}</span>
                <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.24em] uppercase" style={{ color: i === 0 ? accent : olive }}>{r.label}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          <div style={{ gridColumn: "7 / 13" }} className="flex flex-col gap-4">
            {[reflections[2], reflections[3]].map((r, i) => (
              <div key={r.label} className="rounded-2xl p-6" style={{ ...tintedGlass(i === 0 ? olive : gold, 0.07), paddingBottom: r.tall ? "2.5rem" : "1.5rem" }}>
                <span className="text-xl">{r.icon}</span>
                <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.24em] uppercase" style={{ color: i === 0 ? olive : gold }}>{r.label}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 14 — CTA: dashboard floating in background, teal lighting, minimal close */}
      <section className="relative overflow-hidden" style={{ minHeight: "60dvh" }}>
        <div className="absolute inset-0" style={{ background: mainstreetGradients.tealCharcoal }} />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />
        <div className="relative z-10 grid px-6 md:px-10 py-24 items-center justify-items-center text-center" style={{ minHeight: "60dvh" }}>
          <h2 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] text-[clamp(2rem,5.5vw,4rem)] text-[var(--color-ink)]">
            One screen. Six managers. Zero spreadsheets.
          </h2>
        </div>
      </section>

      {/* 15 — Next project: FullBleed, centered overlay, loops to Invisible Impacts */}
      <FullBleedLayout
        image="/img/coac/laptop-mockup.png"
        imageAlt="Invisible Impacts, a sensor-powered installation making AI's water cost tangible"
        imageOpacity={0.35}
        minHeight="60dvh"
        overlayClassName="items-center justify-items-center text-center"
      >
        <Link href="/projects/invisible-impacts" className="group">
          <span
            className="inline-flex rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
            style={tintedGlass(accent)}
          >
            <span style={{ color: olive }}>Next Project</span>
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)] text-[var(--color-ink)]">
            Invisible Impacts
            <span
              className="block h-[2px] w-0 group-hover:w-full mx-auto mt-4 transition-[width] duration-500 ease-out"
              style={{ backgroundColor: accent }}
            />
          </h2>
        </Link>
      </FullBleedLayout>
    </div>
  );
}
