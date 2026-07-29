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

/** A labelled rationale block nested inside a FeatureCard ("Why this decision?" / "Tradeoff"). */
function DecisionNote({ label, text, color }: { label: string; text: string; color: string }) {
  return (
    <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <p className="text-[0.55rem] font-semibold tracking-[0.24em] uppercase" style={{ color }}>{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, label, title, text, color = accent, why, tradeoff }: { icon: string; label: string; title: string; text: string; color?: string; why?: string; tradeoff?: string }) {
  return (
    <div className="rounded-2xl p-6 transition-colors hover:border-white/20" style={tintedGlass(color, 0.07)}>
      <span className="text-xl">{icon}</span>
      <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color }}>{label}</p>
      <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{text}</p>
      {why && <DecisionNote label="Why this decision?" text={why} color={color} />}
      {tradeoff && <DecisionNote label="Tradeoff" text={tradeoff} color={color} />}
    </div>
  );
}

/** One of the five "My Contributions" cards — glass surface, list body. */
function ContributionCard({ label, items, color = accent }: { label: string; items: string[]; color?: string }) {
  return (
    <div className="rounded-2xl p-6 h-full" style={tintedGlass(color, 0.08)}>
      <p className="text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color }}>{label}</p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-[var(--color-ink-muted)] pl-4 relative">
            <span className="absolute left-0 top-0" style={{ color }}>·</span>
            {item}
          </li>
        ))}
      </ul>
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
  { n: "01", title: "Discovery", text: "I ran six 30-minute interviews with the Portfolio Managers to map their weekly reporting ritual. I identified the 6 core metrics they returned to most: AUA, ARR, # clients, account count, wallet share, and growth since last quarter." },
  { n: "02", title: "Data Pipeline", text: "I extracted raw data from multiple Excel workbooks and the internal CRM. I cleaned, normalised, and structured it into a relational model in Power BI using DAX calculated columns and measures." },
  { n: "03", title: "Design Iterations", text: "I started with low-fidelity concepts before exploring mid- and high-fidelity layouts, taking PM and executive feedback after each round. Key tension: information density vs. at-a-glance readability. Early versions were too table-heavy; the final version led with KPI tiles and visuals." },
  { n: "04", title: "Delivery", text: "I delivered 6 personalised dashboards — one per PM — filtered to their own book. I ran a 30-minute walkthrough with each manager and incorporated final feedback before handoff." },
];

const rationale = [
  {
    icon: "🛠",
    label: "Why Power BI",
    text: "Power BI was chosen because it integrates directly with Excel inside Mainstreet's existing Microsoft environment. The PMs already lived in Excel — the tool decision was grounded in their actual workflow, not a default preference.",
    why: "Every PM described starting their daily update in Excel. Choosing a tool inside the Microsoft environment they already worked in meant the dashboard could connect to live source data without asking anyone to adopt an unfamiliar system — which would have added a second adoption problem on top of the reporting one.",
  },
  {
    icon: "🎨",
    label: "Why the existing design system",
    text: "The dashboard followed Mainstreet's brand colors, typeface, and sizing conventions. Familiarity lowered adoption friction — PMs didn't need to learn a new visual language to trust the numbers.",
    why: "The research finding was that numbers weren't missing, they were buried — the problem was trust and legibility at a glance. Reusing the brand system PMs already recognised from internal materials meant the dashboard read as an internal tool immediately, so credibility didn't have to be established separately from the data.",
  },
  {
    icon: "📐",
    label: "Why narrative order",
    text: "Charts were color-coded and sequenced to match how a PM actually reviews their book: headline AUA first, then trend context, then wallet positioning, then revenue breakdown, then client-level detail. Not all metrics uniformly.",
    why: "Interviews surfaced a consistent review sequence: PMs check the headline number, then whether it's moving, then where they stand, then why. Sequencing the dashboard to match meant it answers questions in the order they're actually asked, rather than forcing PMs to hunt across the screen mid-review.",
  },
  {
    icon: "👤",
    label: "Why 6 filtered views",
    text: "Each PM sees only their own book. One shared dashboard with cross-PM data would have created noise and comparison anxiety. Individual filtered views came directly from the interview finding: PMs wanted to track their own progress, not rank against peers.",
    why: "PMs consistently framed their goal as tracking their own progress — nobody asked to see how they compared to colleagues. Scoping each report to a single book removed cross-PM data entirely rather than relying on a filter someone could change by accident.",
  },
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
  {
    icon: "🎨",
    label: "Colour System",
    title: "Brand greens, not generic blues",
    text: "Mainstreet Advisors' brand palette centres on earthy greens and tans — forest green for primary data, olive for secondary, tan for tertiary tiers. This made the dashboard immediately feel like an internal tool, not a generic BI template, and helped PMs orient quickly by tier.",
    why: "Brand guidelines were a fixed constraint, so the question was how to use them rather than whether to. Mapping the existing palette onto data tiers turned a constraint into a wayfinding system — PMs could tell tier by colour without consulting a legend.",
    tradeoff: "Gained instant familiarity and tier legibility; gave up the wider contrast range a purpose-built data palette would have offered. Acceptable because adoption depended on the dashboard reading as an internal tool, and tier distinction only needed three levels.",
  },
  {
    icon: "📌",
    label: "Layout Hierarchy",
    title: "Headline numbers before charts",
    text: "Early iterations buried the KPI tiles midway down the page. PM feedback was clear: \"I need to see my total AUA the moment I open this.\" The final layout puts four headline tiles at the very top — Total AUA, ARR, # Clients, Active Accounts — before any visualisation.",
    why: "This came straight from PM feedback on an early iteration. Burying the tiles meant the most-asked question required a scroll — which reintroduced exactly the friction the dashboard existed to remove.",
    tradeoff: "Gained an immediate answer to the first question every PM asks; gave up prime vertical space that trend visuals could have occupied. Acceptable because the trend chart sits directly beneath the tiles, still within the same screen.",
  },
  {
    icon: "🔢",
    label: "Number Format",
    title: "No decimals, dollar signs everywhere",
    text: "Stakeholder feedback on early iterations specifically called out inconsistent formatting — some figures had decimals, some didn't; dollar signs appeared in some columns but not others. The final version enforces a strict format: whole dollar figures with $ prefix, growth as clean percentages, no trailing zeros.",
    why: "Inconsistent formatting made figures slower to scan and harder to trust on sight — and trust at a glance was the whole point, since the research finding was that data was buried rather than absent.",
    tradeoff: "Gained scannability and consistency across all six dashboards; gave up decimal-level precision in the headline figures. Acceptable because the tiles are for orientation — the client table below carries the exact numbers when a PM needs to investigate.",
  },
  {
    icon: "🔍",
    label: "Personalisation",
    title: "One dashboard per PM, not a shared view",
    text: "Rather than a single all-PM dashboard with filters, I scoped each PM their own report page covering only their book. This eliminated the risk of accidentally viewing another manager's data and made the dashboard feel like a personal tool rather than a shared report.",
    why: "Interviews framed the goal as tracking personal progress, not peer ranking. A shared view with filters would have left another manager's book one misclick away, so scoping the report removed the possibility rather than guarding against it.",
    tradeoff: "Gained privacy and a tool that feels personal; gave up cross-PM comparison and created six reports to maintain instead of one. Acceptable because no PM asked for peer comparison, and the maintenance cost was understood before committing to it.",
  },
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

      {/* 2.5 — My Contributions: five cards, what I personally owned across UX, data, and stakeholders */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>My Contributions</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            What I <span className="italic" style={{ color: accent }}>owned.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
          <ContributionCard
            label="Research"
            color={accent}
            items={[
              "Conducted six 30-minute interviews with Portfolio Managers.",
              "Identified reporting workflows.",
              "Synthesized recurring operational pain points.",
              "Validated dashboard concepts throughout the project.",
            ]}
          />
          <ContributionCard
            label="Product Strategy"
            color={olive}
            items={[
              "Prioritized dashboard KPIs.",
              "Defined dashboard information hierarchy.",
              "Translated research insights into dashboard requirements.",
              "Balanced executive requests with user workflows throughout multiple approval cycles.",
            ]}
          />
          <ContributionCard
            label="Design"
            color={olive}
            items={[
              "Designed dashboard architecture.",
              "Created dashboard layouts.",
              "Designed interaction hierarchy.",
              "Created low-fidelity concepts before exploring mid- and high-fidelity designs.",
              "Used UXPilot only after defining the dashboard structure, to rapidly generate and explore mid- and high-fidelity wireframe variations.",
              "Evaluated and manually refined every generated concept based on stakeholder feedback.",
            ]}
          />
          <ContributionCard
            label="Data & Power BI"
            color={accent}
            items={[
              "Cleaned raw Excel datasets.",
              "Built the Power BI data model from scratch.",
              "Created relationships between tables.",
              "Built DAX measures.",
              "Connected data sources.",
              "Designed the dashboard visualizations.",
            ]}
          />
          <div className="md:col-span-2">
            <ContributionCard
              label="Collaboration"
              color={gold}
              items={[
                "Worked closely with the CEO, Head of Operations, Director, and the Portfolio Managers.",
                "Feedback was continuous throughout the project rather than a single review at the end — each round of executive input reshaped requirements before the next iteration.",
              ]}
            />
          </div>
        </div>
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
        <div className="rounded-2xl p-8" style={{ gridColumn: "1 / 13", ...tintedGlass(olive, 0.07) }}>
          <Eyebrow color={olive}>How this changed the product</Eyebrow>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "80ch" }}>
            The finding that reframed the project was that the numbers weren&rsquo;t
            missing — they were buried. That ruled out adding more data and pointed
            the work at structure instead, which is why the dashboard leads with four
            headline KPI tiles rather than a fuller table. The six metrics PMs named
            in interviews became the KPIs I prioritised, and the review sequence they
            described — headline figure, then movement, then positioning, then detail
            — became the top-to-bottom order of the dashboard itself. Their stated
            goal of tracking personal progress, not peer standing, is why I scoped six
            filtered reports rather than one shared view. Each of those decisions is
            documented in Design Rationale and Design Decisions below.
          </p>
        </div>
      </EditorialLayout>

      {/* 5.5 — Designing in a Moving Target: requirement churn as normal enterprise work */}
      <GradientField gradient={mainstreetGradients.oliveCharcoal}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 8" }}>
            <Eyebrow color={olive}>Designing in a Moving Target</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              The requirements <span className="italic" style={{ color: olive }}>kept moving.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              The dashboard I was briefed on in week one is not the dashboard that was
              approved. Requirements evolved throughout the project — every executive
              review introduced additional reporting needs, workflow considerations, or
              business requirements, and stakeholders continuously refined what they
              expected as the dashboard matured and they could react to something real.
            </p>
            <p className="mt-4 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              Business requirements shifted during the engagement. Data availability
              shaped several design decisions — some views I wanted to build weren&rsquo;t
              supportable by the data that existed. Power BI&rsquo;s technical constraints
              meant redesigning solutions that worked on paper but not in the tool.
              Close to 100 iterations were explored before the final dashboard was
              approved.
            </p>
            <p className="mt-4 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              None of that was rework in the sense of correcting mistakes. It is what
              designing inside a live business looks like: the brief is a hypothesis,
              and each review replaces part of it with something better informed.
            </p>
          </div>
          <div className="flex flex-col gap-4" style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
            <MetricStat size="hero" accent={olive} value="~100" label="Iterations explored before final approval" />
            <GlassNote
              color={olive}
              label="What kept moving"
              text="Reporting needs, business requirements, data availability, and Power BI's technical limits — each one surfaced through a review cycle, not upfront."
            />
          </div>
        </EditorialLayout>
      </GradientField>

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

      {/* 6.5 — Constraints: the fixed conditions every decision had to survive */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Constraints</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            What I had to <span className="italic" style={{ color: accent }}>design around</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            None of these were negotiable. Every decision documented below had to work
            inside all seven of them at once.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {[
            { label: "Microsoft ecosystem", text: "Mainstreet ran on Microsoft. Any tool outside that stack would have added an integration and licensing problem on top of the reporting one." },
            { label: "Existing business workflows", text: "The dashboard had to fit the review ritual PMs already had. It could replace the manual effort, but not ask them to work in a new sequence." },
            { label: "Existing branding", text: "Mainstreet's brand colours, typeface, and sizing conventions were fixed. The visual system was inherited, not chosen." },
            { label: "Raw Excel data quality", text: "Source data arrived with inconsistent column naming, merged cells, and missing values. What could be built downstream was limited by what could be cleaned upstream." },
            { label: "Power BI technical limits", text: "Some layouts and interactions that worked as concepts weren't supportable in Power BI, and had to be redesigned to fit what the tool could actually render." },
            { label: "Internship timeline", text: "Eight weeks, covering research, data modelling, design iteration, and delivery — including the executive approval cycles in between." },
            { label: "Executive approval cycles", text: "Nothing shipped without executive sign-off, and each review round introduced new requirements. The schedule had to absorb revision, not assume approval." },
          ].map((c, i) => (
            <div key={c.label} className="rounded-2xl p-6" style={tintedGlass(i % 3 === 0 ? accent : i % 3 === 1 ? olive : sand, 0.07)}>
              <p className="text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: i % 3 === 0 ? accent : i % 3 === 1 ? olive : gold }}>{c.label}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </EditorialLayout>

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
            <FeatureCard key={r.label} icon={r.icon} label={r.label} title={r.label} text={r.text} why={r.why} color={i % 2 === 0 ? accent : olive} />
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
              <FeatureCard key={d.label} icon={d.icon} label={d.label} title={d.title} text={d.text} why={d.why} tradeoff={d.tradeoff} color={i % 2 === 0 ? olive : accent} />
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 11.5 — Key Decisions I Drove: 3-col table, hairline rows only, stacks on mobile */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Key Decisions I Drove</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            The calls, and <span className="italic" style={{ color: accent }}>what rode on them</span>
          </h2>
        </div>

        <div style={{ gridColumn: "1 / 13" }}>
          <div className="mt-4 hidden md:grid md:grid-cols-[1fr_1.3fr_1.3fr] gap-x-8">
            {["Decision", "Reasoning", "Expected product impact"].map((h) => (
              <p key={h} className="pb-3 text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">{h}</p>
            ))}
          </div>

          <div className="md:grid md:grid-cols-[1fr_1.3fr_1.3fr] md:gap-x-8">
            {[
              {
                decision: "Build in Power BI, inside the Microsoft stack",
                reasoning: "PMs already worked in Excel, and Mainstreet ran on Microsoft — a tool outside that stack would have added an adoption problem on top of the reporting one.",
                impact: "The dashboard connects to live source data instead of static exports, so figures reflect current state rather than whenever someone last updated a sheet.",
              },
              {
                decision: "Lead with four KPI tiles, before any chart",
                reasoning: "PM feedback on an early iteration: \"I need to see my total AUA the moment I open this.\" Burying the tiles reintroduced the friction the dashboard existed to remove.",
                impact: "The most-asked question is answered on load, with no scroll — which is what makes the ten-second review possible.",
              },
              {
                decision: "Sequence the dashboard to match the review ritual",
                reasoning: "Interviews described a consistent order: headline figure, then movement, then positioning, then detail.",
                impact: "The screen answers questions in the order PMs ask them, rather than making them hunt across the layout mid-review.",
              },
              {
                decision: "Ship six scoped reports, not one shared view",
                reasoning: "PMs framed their goal as tracking their own progress; nobody asked for peer comparison.",
                impact: "Another manager's book is structurally unreachable rather than one misclick away, and each dashboard reads as a personal tool.",
              },
              {
                decision: "Inherit the Mainstreet brand system",
                reasoning: "Brand guidelines were fixed, and the research finding was that data was buried rather than absent — trust at a glance mattered more than visual novelty.",
                impact: "The dashboard reads as an internal tool from first open, so credibility doesn't have to be established separately from the numbers.",
              },
              {
                decision: "Enforce one strict number format",
                reasoning: "Executive review of early iterations flagged inconsistent decimals and dollar signs across columns.",
                impact: "Figures are scannable and consistent across all six dashboards, which is what lets a PM trust a number without re-reading it.",
              },
            ].map((row) => (
              <div key={row.decision} className="contents">
                <div className="pt-5 pb-2 md:py-5 border-t border-white/10">
                  <p className="font-semibold text-[var(--color-ink)]">{row.decision}</p>
                </div>
                <div className="pb-2 md:py-5 md:border-t md:border-white/10">
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                    <span className="md:hidden block text-[0.55rem] font-semibold tracking-[0.24em] uppercase mb-1" style={{ color: accent }}>Reasoning</span>
                    {row.reasoning}
                  </p>
                </div>
                <div className="pb-5 md:py-5 md:border-t md:border-white/10">
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                    <span className="md:hidden block text-[0.55rem] font-semibold tracking-[0.24em] uppercase mb-1" style={{ color: accent }}>Expected product impact</span>
                    {row.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </EditorialLayout>

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

      {/* 12.5 — Learning Beyond UX: the technical half of the project, learned in-flight */}
      <GradientField gradient={mainstreetGradients.tealCharcoal}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 8" }}>
            <Eyebrow>Learning Beyond UX</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              I had never built a <span className="italic" style={{ color: accent }}>data model before.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              I started this internship with no prior experience in Power BI data
              modelling. The dashboard couldn&rsquo;t be designed around that gap — there
              was no separate data engineer, and the design was only as good as the
              model underneath it. So I learned it as I built it.
            </p>
            <p className="mt-4 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              That turned out to be the most useful thing I took from the project. Once
              I understood how the data was structured, I could tell which design ideas
              were actually buildable and which would have collapsed on contact with the
              source files — and I could design to what the model could support instead
              of handing off a layout and hoping.
            </p>
          </div>
          <div className="flex flex-col gap-3" style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
            {[
              "Cleaning raw Excel data into something modellable",
              "Structuring datasets for a relational model",
              "Building relationships between tables",
              "Writing DAX measures",
              "Connecting live data sources into Power BI",
              "Translating all of it into a dashboard people could actually use",
            ].map((s, i) => (
              <div key={s} className="rounded-xl px-5 py-4" style={tintedGlass(i % 2 === 0 ? accent : olive, 0.07)}>
                <p className="text-sm leading-relaxed text-[var(--color-ink)]">{s}</p>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 12.75 — If This Dashboard Continued to Evolve: forward-looking, no invented metrics */}
      <EditorialLayout maxWidth="1500px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>If This Dashboard Continued to Evolve</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Where I&rsquo;d <span className="italic" style={{ color: accent }}>take it next</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            The dashboard shipped at the end of an eight-week internship. These are the
            threads I&rsquo;d pull if the work continued.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
          {[
            { label: "Validation with Portfolio Managers", text: "The walkthroughs captured reactions at handoff, not habits. I'd want to sit with PMs after a few months of real Mondays to see which sections they actually use, which they skip, and whether anyone has quietly gone back to a spreadsheet for something the dashboard doesn't answer." },
            { label: "Long-term adoption", text: "Six PMs used it at delivery. The real question is whether it survives contact with edge cases — a client moving tiers, an unusual quarter, a figure that looks wrong. Adoption holds or breaks on what happens the first time someone doubts a number." },
            { label: "Additional reporting", text: "Requirements kept surfacing through executive reviews right up to approval, which suggests more would surface with use. The structure supports adding views; the discipline would be keeping the top of the screen as sparse as it is now." },
            { label: "Scalability", text: "Six scoped reports is maintainable by hand. It wouldn't stay that way — a larger team would need those views generated from a single model with row-level security rather than maintained as separate reports." },
            { label: "Operational improvements", text: "Data quality was the bottleneck throughout. The durable fix is upstream: consistent column naming and fewer merged cells at the source would remove most of the cleaning work before it reaches Power BI." },
            { label: "What I'd measure", text: "Not opens. Whether the Monday reporting ritual actually stopped — and whether PMs bring the dashboard into client and internal conversations rather than rebuilding numbers for them. That was the job it was built to do." },
          ].map((c, i) => (
            <div key={c.label} className="rounded-2xl p-6" style={tintedGlass(i % 2 === 0 ? accent : olive, 0.07)}>
              <p className="text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: i % 2 === 0 ? accent : olive }}>{c.label}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
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
