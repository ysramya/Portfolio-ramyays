import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import {
  ReadingLayout,
  EditorialLayout,
  GalleryLayout,
  SplitLayout,
  FullBleedLayout,
} from "@/components/ds/layouts";
import { Quote, ImageFrame, MetricStat } from "@/components/ds/atoms";
import { tintedGlass } from "@/components/ds/tokens";
import { asapTheme, asapPalette, asapGradients } from "./theme";

export const metadata: Metadata = {
  title: "ASAP — Ramya Yerramilli",
  description:
    "An AI-native mobile app that helps people navigating major life transitions break down overwhelming tasks — one step at a time — acting as a coach, not an assistant.",
};

const accent = asapTheme.accent;
const gold = asapPalette.gold;
const sage = asapPalette.sage;

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

/** A light/dark screen pair, floating with a soft shadow — the "Apple product photography" phone treatment. */
function PhonePair({
  light,
  dark,
  lightAlt,
  darkAlt,
  rotate = 0,
}: {
  light: string;
  dark: string;
  lightAlt: string;
  darkAlt: string;
  rotate?: number;
}) {
  return (
    <div className="flex gap-6 justify-center">
      {[
        { src: light, alt: lightAlt, r: -rotate },
        { src: dark, alt: darkAlt, r: rotate },
      ].map((p) => (
        <div key={p.src} className="relative w-[42%] max-w-[220px]" style={{ transform: `rotate(${p.r}deg)` }}>
          <div
            className="absolute inset-0 blur-3xl opacity-40"
            style={{ background: `radial-gradient(circle, ${accent}55 0%, transparent 70%)` }}
          />
          <ImageFrame
            src={p.src}
            alt={p.alt}
            aspect="9/19.5"
            objectFit="contain"
            className="relative shadow-2xl"
            style={{ backgroundColor: asapPalette.charcoal }}
          />
        </div>
      ))}
    </div>
  );
}

/** Method / tool feature card — icon-less premium card used for research methods and AI tools. */
function FeatureCard({ title, use, text, color = accent }: { title: string; use?: string; text: string; color?: string }) {
  return (
    <div
      className="rounded-2xl p-6 transition-colors hover:border-white/20"
      style={tintedGlass(color, 0.07)}
    >
      <p className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{title}</p>
      {use && (
        <p className="mt-1 text-[0.6rem] font-semibold tracking-[0.2em] uppercase" style={{ color }}>
          {use}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{text}</p>
    </div>
  );
}

/** Vertical step flow with ↓ connectors — used for the research→direction, conversation, and prompt-architecture diagrams. */
function FlowChain({
  steps,
  color = accent,
  compact = false,
}: {
  steps: { label: string; detail?: string }[];
  color?: string;
  compact?: boolean;
}) {
  return (
    <div className="flex flex-col">
      {steps.map((s, i) => (
        <div key={s.label + i}>
          <div className="rounded-xl px-5 py-3" style={tintedGlass(color, 0.08)}>
            <p
              className={`font-semibold text-[var(--color-ink)] ${compact ? "text-sm" : "text-base"}`}
            >
              {s.label}
            </p>
            {s.detail && (
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">{s.detail}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <p className="my-1.5 text-center text-base leading-none text-[var(--color-ink-faint)]" aria-hidden>
              ↓
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/** An AI design principle: the rule, then the behaviour it produces as a ↓ chain. */
function PrincipleCard({
  name,
  body,
  chain,
  color = accent,
}: {
  name: string;
  body: string;
  chain: string[];
  color?: string;
}) {
  return (
    <div className="rounded-2xl p-6 h-full flex flex-col" style={tintedGlass(color, 0.08)}>
      <p className="font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{name}</p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{body}</p>
      <div className="mt-5 pt-5 flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {chain.map((c, i) => (
          <div key={c}>
            <p className="text-sm text-[var(--color-ink)]">{c}</p>
            {i < chain.length - 1 && (
              <p className="my-1 text-sm leading-none" style={{ color }} aria-hidden>↓</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const phases = [
  { n: "01", status: "done", label: "Complete", title: "Problem Definition", desc: "Literature review, competitive analysis, problem framing" },
  { n: "02", status: "done", label: "Complete", title: "Early Ideation", desc: "Lo-fi wireframes, screen flows, AI-assisted initial output via Figma Make" },
  { n: "03", status: "done", label: "Complete", title: "Round 1 Testing", desc: "6 participants, 4 scenarios, happy path mapping" },
  { n: "04", status: "done", label: "Complete", title: "First Iteration", desc: "Mid-fi to hi-fi with real Claude API integration, dark + light mode" },
  { n: "05", status: "soon", label: "Up next", title: "Deployment", desc: "App goes live before Round 2 to capture real-use patterns" },
  { n: "06", status: "soon", label: "Planned", title: "Round 2 Testing", desc: "Post-deployment iteration based on real usage findings" },
];

const glance = [
  { q: "What role are you targeting?", a: "AI UX / Product Designer", detail: "Roles at AI-native companies where UX shapes how people interact with LLMs." },
  { q: "Is your work relevant to that role?", a: "Live Claude API integration", detail: "Designed an AI-powered academic planner that is deployed and running — not a concept." },
  { q: "Can I quickly understand your contribution?", a: "Research Lead & UX Design Director", detail: "Ran 6 interviews, designed 4 usability scenarios, directed IA and visual design for both app modes." },
  { q: "Is there evidence of thinking, not just polish?", a: "Research reframed the problem", detail: "Students needed scaffolding, not another calendar — that insight drove every design decision." },
  { q: "Do outcomes look credible?", a: "Live prototype, tested", detail: "Available at asap-flame.vercel.app, validated through 4 structured usability scenarios with real users." },
];

const wins = [
  "Warm, honest tone — didn't feel generic or robotic",
  "Confidence labels felt refreshingly different from other AI tools",
  "One-step-at-a-time pattern helped users who freeze at blank screens",
  "Clarification flow caught vague inputs — called a \"hidden gem\" by one participant",
  "Welcome copy that acknowledged life transitions resonated emotionally",
  "Soft refusal and coach fallback responses felt supportive, not dismissive",
];

const gaps = [
  "Subtasks too surface-level — all personas got roughly the same output",
  "5 steps insufficient for multi-day or complex projects",
  "No due date functionality breaks the planning loop",
  "Clarification flow powerful but hidden — users didn't know it existed",
  "No onboarding tutorial before the first task",
  "Edit button ambiguous; no save progress indicator",
  "Calendar only accessible in Deep Focus — users wanted it earlier",
];

const roadmap = [
  { n: "01", title: "Deeper subtask personalisation", detail: "role-aware breakdowns that adapt to context, not canned outputs" },
  { n: "02", title: "Contextual memory", detail: "remember transition type and build on previous sessions" },
  { n: "03", title: "Due date functionality + calendar integration", detail: "close the planning loop" },
  { n: "04", title: "Onboarding tutorial", detail: "surface the clarification flow and confidence labels on first use" },
  { n: "05", title: "Sub-role granularity", detail: "engineer vs. nurse vs. sales rep need meaningfully different scaffolding" },
  { n: "06", title: "Round 2 usability testing", detail: "post-deployment to validate iteration decisions" },
];

/** Literature review reframed as design rationale: theory → the product decision it justified. */
const theoryMap = [
  { theory: "Scaffolding", decision: "Coach behaviour", note: "Support the person doing the thinking instead of doing it for them." },
  { theory: "Decision fatigue", decision: "One-step interface", note: "Every visible choice costs something when someone is already overloaded." },
  { theory: "Trust calibration", decision: "Confidence labels", note: "Users can only calibrate trust if the system signals its own uncertainty." },
];

const aiPrinciples = [
  {
    name: "Coach, not assistant",
    body: "The AI is not there to finish the task. It exists to get someone unstuck and hand the work back to them, because a tool that does everything creates dependency rather than capability.",
    chain: ["Asks questions", "Guides thinking", "Doesn't complete the work"],
  },
  {
    name: "One thing at a time",
    body: "A full plan revealed at once re-creates the overwhelm the product exists to relieve. Steps are surfaced sequentially so the next action is always singular and obvious.",
    chain: ["Shows one step", "Hides the rest", "Reduces cognitive load"],
  },
  {
    name: "Honest AI",
    body: "The AI states how sure it is and says when a request is outside what it can do. Confidence is communicated rather than performed, and refusals redirect instead of dismissing.",
    chain: ["Labels confidence", "Admits limits", "Redirects, not rejects"],
  },
];

/** The core mapping: every AI behaviour traced from finding → decision → prompt strategy → behaviour → what testing showed. */
const researchToBehavior = [
  {
    finding: "Users freeze at the blank page",
    decision: "Generate a first actionable step",
    prompt: "Prompt requests context before planning",
    behavior: "AI asks clarifying questions",
    validation: "Participants preferred clarification over generic advice",
  },
  {
    finding: "Users already use Notion and Calendar",
    decision: "Don't replace task managers",
    prompt: "Prompt focused on planning, not storage",
    behavior: "AI generates plans instead of storing tasks",
    validation: "Participants described existing tools as containers, not coaches",
  },
  {
    finding: "Users distrust generic AI",
    decision: "Collect context first",
    prompt: "Role-aware prompts",
    behavior: "More personalised plans",
    validation: "Participants praised the clarification flow",
  },
  {
    finding: "Users feel overwhelmed",
    decision: "Reduce visible choices",
    prompt: "Sequential planning",
    behavior: "One-step workflow",
    validation: "Lower cognitive load",
  },
  {
    finding: "Users distrust overconfident AI",
    decision: "Confidence labels",
    prompt: "Prompt returns a confidence level",
    behavior: "Honest AI",
    validation: "Participants appreciated the uncertainty signal",
  },
];

const riteRounds = [
  {
    n: "01",
    issue: "Generic plans — all four personas received near-identical breakdowns",
    prompt: "Prompt tuned to use role and task context before generating a plan",
    validation: "More personalised breakdowns",
  },
  {
    n: "02",
    issue: "Coach failures — coaching responses stalled or failed to return",
    prompt: "Reliability of the coaching call improved",
    validation: "Retested and confirmed",
  },
  {
    n: "03",
    issue: "Navigation confusion — users lost track of where they were in a plan",
    ui: "Navigation and screen affordances updated",
    validation: "Validated in follow-up testing",
  },
];

export default function AsapPage() {
  return (
    <div style={{ background: asapGradients.page }}>
      {/* 1 — Hero: custom (not the shared photo-bleed HeroLayout) — a floating phone
          mockup with amber ambient glow, not a landscape photo, since every real
          ASAP asset is a mobile screen or a research board, not atmospheric photography. */}
      <section className="relative overflow-hidden" style={{ paddingTop: "calc(var(--nav-h) + 3rem)", paddingBottom: "6rem" }}>
        <div
          className="mx-auto grid gap-12 px-6 md:px-10 md:grid-cols-[1.15fr_0.85fr] items-center"
          style={{ maxWidth: "1600px" }}
        >
          <div>
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
              style={tintedGlass(accent)}
            >
              <span style={{ color: gold }}>Case Study · HCI Capstone · DePaul University</span>
            </span>
            <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,8vw,6.5rem)] text-[var(--color-ink)]">
              ASAP
              <br />
              <span className="italic font-normal text-[0.42em]" style={{ color: accent }}>
                AI-Scaffolded Action Planner
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--color-ink-muted)]" style={{ maxWidth: "58ch" }}>
              An AI-native mobile app that helps people navigating major life transitions
              break down overwhelming tasks — one step at a time — acting as a{" "}
              <strong className="text-[var(--color-ink)] font-semibold">coach, not an assistant.</strong>
            </p>

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mt-6 text-[0.62rem] font-semibold tracking-[0.12em] uppercase"
              style={tintedGlass(accent, 0.08)}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: sage, boxShadow: `0 0 8px ${sage}` }}
              />
              <span style={{ color: sage }}>Live with real AI integration · Iteration 2 in progress</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://asap-flame.vercel.app/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.7rem] font-semibold tracking-[0.15em] uppercase transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: accent, color: asapPalette.black }}
              >
                Try the prototype ↗
              </a>
            </div>

            <dl className="grid grid-cols-2 gap-3 mt-10 pt-8" style={{ borderTop: `1px solid ${asapPalette.slate}22` }}>
              {[
                { label: "Team", value: "4 Members" },
                { label: "My Role", value: "Research Lead · UX Design" },
                { label: "Tools", value: "Figma · Claude · Cursor · Perplexity · Anara" },
                { label: "Status", value: "Post Round 1 Testing · Pre-deployment" },
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

          {/* Floating phone mockup with soft amber glow */}
          <div className="relative flex items-center justify-center py-8">
            <div
              className="absolute w-[420px] h-[420px] rounded-full blur-[100px] opacity-50"
              style={{ background: `radial-gradient(circle, ${accent} 0%, ${gold}66 40%, transparent 70%)` }}
            />
            <div className="relative w-[68%] max-w-[300px] rotate-[3deg] transition-transform duration-700">
              <ImageFrame
                src="/img/asap/screen-01-home-light.png"
                alt="ASAP light mode — home screen"
                aspect="9/19.5"
                objectFit="contain"
                className="shadow-2xl"
                style={{ backgroundColor: asapPalette.charcoal, borderRadius: "2rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — KPI statistics: premium composition, 1400px, gradient field */}
      <GradientField gradient={asapGradients.amberSand}>
        <EditorialLayout maxWidth="1400px">
          <div style={{ gridColumn: "1 / 6" }}>
            <MetricStat size="hero" accent={accent} value="100%" label="Real AI integration at hi-fi" />
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-2xl p-6" style={{ gridColumn: "6 / 13", ...tintedGlass(gold, 0.07) }}>
            <MetricStat accent={gold} value="6+" label="Design research interviews" />
            <MetricStat accent={gold} value="4" label="Usability test scenarios" />
            <MetricStat accent={gold} value="3" label="Fidelity levels, lo to hi" />
            <MetricStat accent={gold} value="2" label="Modes — dark & light" />
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 3 — At a Glance: 5 Q&A insight cards, the reviewer's five questions answered up front */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>At a Glance</Eyebrow>
        </div>
        <div style={{ gridColumn: "1 / 7" }} className="rounded-2xl p-6" >
          <div style={tintedGlass(accent, 0.08)} className="rounded-2xl p-6 h-full">
            <p className="text-sm text-[var(--color-ink-faint)]">{glance[0].q}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{glance[0].a}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{glance[0].detail}</p>
          </div>
        </div>
        <div style={{ gridColumn: "7 / 13" }}>
          <div style={tintedGlass(gold, 0.08)} className="rounded-2xl p-6 h-full">
            <p className="text-sm text-[var(--color-ink-faint)]">{glance[1].q}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{glance[1].a}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{glance[1].detail}</p>
          </div>
        </div>
        {[glance[2], glance[3], glance[4]].map((g, i) => (
          <div key={g.q} style={{ gridColumn: `${1 + i * 4} / ${5 + i * 4}` }}>
            <div style={tintedGlass(i === 1 ? accent : gold, 0.07)} className="rounded-2xl p-6 h-full">
              <p className="text-sm text-[var(--color-ink-faint)]">{g.q}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{g.a}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{g.detail}</p>
            </div>
          </div>
        ))}
      </EditorialLayout>

      {/* 4 — 01 Problem: editorial split, heading+lead vs. a glass pull-quote */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 7" }}>
          <Eyebrow>01 · Problem</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            The paralysis
            <br />
            <span className="italic" style={{ color: accent }}>of starting over.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
            Whether it&rsquo;s starting college, switching careers, or launching a business —
            major transitions dump an entirely new set of tasks on people who don&rsquo;t
            yet know how to handle them. The result: overwhelm, avoidance, and stagnation.
          </p>
        </div>
        <div className="rounded-[2rem] p-8" style={{ gridColumn: "8 / 13", alignSelf: "center", ...tintedGlass(accent, 0.1) }}>
          <Quote
            accent={accent}
            text="The problem isn't motivation — it's scaffolding. People know they have things to do. They don't know how to start, sequence, or break them down without help."
            attribution="Core research insight"
            style={{ maxWidth: "40ch" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {[
            { icon: "🌀", label: "The Gap", text: "Existing tools either dump tasks on users or complete them entirely. Neither builds independent planning skills." },
            { icon: "😶", label: "The Moment", text: "The blank screen moment is the biggest barrier. Users freeze before they type a single word." },
            { icon: "🎯", label: "The Goal", text: "ASAP fills this gap: coach, not complete. Guide users through their own thinking — don't think for them." },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl p-6" style={tintedGlass(gold, 0.06)}>
              <span className="text-2xl">{c.icon}</span>
              <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: accent }}>{c.label}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </EditorialLayout>

      {/* 5 — 02 My Role: a breathing-space reading moment, narrow and quiet */}
      <ReadingLayout>
        <Eyebrow>02 · My Role</Eyebrow>
        <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl leading-[1.05] text-[var(--color-ink)]">
          Research lead <span className="italic" style={{ color: accent }}>&amp; UX director.</span>
        </h2>
        <p className="mt-5 text-[var(--color-ink-muted)] text-lg leading-relaxed">
          I led user research end-to-end — literature review, design research interviews,
          usability testing — and translated findings into design direction. I directed
          the IA and screen flow, drove the color system for both modes, and kept every
          decision grounded in what participants actually said.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {["Literature Review", "Design Research Interviews", "Usability Testing", "IA & Screen Flow", "Color System", "Feature Prioritization"].map((chip) => (
            <span
              key={chip}
              className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase rounded-full px-4 py-2"
              style={tintedGlass(accent, 0.08)}
            >
              <span style={{ color: accent }}>{chip}</span>
            </span>
          ))}
        </div>
      </ReadingLayout>

      {/* 6 — 03 Design Process: phase timeline, on a charcoal→graphite field */}
      <GradientField gradient={asapGradients.charcoalGraphite}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>03 · Design Process</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Six phases, <span className="italic" style={{ color: accent }}>two full cycles.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              A structured double-diamond process with two planned usability testing
              rounds. Round 2 is scheduled post-deployment to test with real usage context.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            {phases.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl p-6"
                style={{
                  ...tintedGlass(p.status === "done" ? accent : asapPalette.slate, p.status === "done" ? 0.08 : 0.04),
                  opacity: p.status === "done" ? 1 : 0.7,
                }}
              >
                <p className="text-[0.65rem] font-semibold tracking-[0.2em]" style={{ color: accent }}>{p.n}</p>
                <p
                  className="mt-2 text-[0.55rem] font-bold tracking-[0.18em] uppercase"
                  style={{ color: p.status === "done" ? sage : asapPalette.slate }}
                >
                  {p.status === "done" ? "✓ " : "→ "}{p.label}
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{p.title}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 7 — Whiteboarding / Ideation: immersive research-board gallery, 1600px, staggered */}
      <GalleryLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Lo-fi Wireframes — Phase 02</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
            Initial lo-fi explorations. Three rounds of lo-fi built the foundation: where
            core actions live, how the AI coaching flow is triggered, and what information
            the user needs at each step.
          </p>
        </div>
        <div style={{ gridColumn: "1 / 9", marginTop: "2rem" }}>
          <ImageFrame
            src="/img/asap/lofi-wireframes-round1.png"
            alt="ASAP lo-fi wireframes round 1 — first screen explorations"
            aspect="2.16/1"
            objectFit="contain"
            caption="Lo-fi round 1 — first screen explorations, task entry and breakdown views"
          />
        </div>
        <div style={{ gridColumn: "9 / 13", marginTop: "5rem" }}>
          <div className="rounded-2xl px-5 py-4" style={tintedGlass(gold, 0.1)}>
            <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase" style={{ color: gold }}>Method note</p>
            <p className="mt-2 text-sm text-[var(--color-ink)] leading-relaxed">
              Where core actions live, how the AI coaching flow is triggered, and what
              info the user needs at each step — mapped before a single hi-fi pixel.
            </p>
          </div>
        </div>
        <div style={{ gridColumn: "2 / 11", marginTop: "-2%" }}>
          <ImageFrame
            src="/img/asap/lofi-wireframes-round2.png"
            alt="ASAP lo-fi wireframes round 2 — refined flows"
            aspect="2.04/1"
            objectFit="contain"
            caption="Lo-fi round 2 — refined flows, AI coaching interaction patterns emerging"
          />
        </div>
        <div style={{ gridColumn: "1 / 13", marginTop: "1rem" }}>
          <ImageFrame
            src="/img/asap/lofi-wireframes-round3.png"
            alt="ASAP lo-fi wireframes round 3 — pre-testing refinement"
            aspect="1.46/1"
            objectFit="contain"
            caption="Lo-fi round 3 — pre-testing refinement, happy path mapped end-to-end"
          />
        </div>
      </GalleryLayout>

      {/* 8 — Mid-fi bridge + Happy Path: split, tall board vs. journey board */}
      <EditorialLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Mid-fi Wireframes — Bridge to Hi-Fi</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
            Mid-fidelity added structure and hierarchy. This is where visual language was
            established — spacing, component placement, and the information architecture
            that carried through to the final hi-fi build.
          </p>
        </div>
        <div style={{ gridColumn: "1 / 6" }}>
          <ImageFrame
            src="/img/asap/midfi-wireframes.png"
            alt="ASAP mid-fi wireframes — structure and visual hierarchy"
            aspect="0.39/1"
            objectFit="contain"
            caption="Mid-fi wireframes — visual structure, component hierarchy, and information architecture"
          />
        </div>
        <div style={{ gridColumn: "6 / 13", alignSelf: "start" }}>
          <Eyebrow color={gold}>Happy Path — Core User Journey</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "50ch" }}>
            The happy path maps the ideal flow from first open to a completed,
            AI-broken-down action plan — with the clarification and coaching steps visible.
          </p>
          <div className="mt-6">
            <ImageFrame
              src="/img/asap/happy-path.png"
              alt="ASAP happy path — complete user journey from input to action plan"
              aspect="1.31/1"
              objectFit="contain"
              caption="Happy path — from first task input to AI-generated, structured action plan"
            />
          </div>
        </div>
      </EditorialLayout>

      {/* 9 — 04 User Research: heading, callout, onboarding split, method cards */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>04 · User Research</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Who we <span className="italic" style={{ color: accent }}>designed for.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            6 design research interviews with participants aged 18-34, each currently or
            recently navigating a major life transition. Four scenarios shaped the entire
            design: College Student, Tech Newbie, Career Swapper, Entrepreneur.
          </p>
        </div>
        <div style={{ gridColumn: "2 / 12" }}>
          <Quote
            align="center"
            accent={accent}
            text={"Users didn't lack ambition — they lacked a clear first step.\nThe blank screen moment was the biggest barrier to action."}
            attribution="Key research finding"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </EditorialLayout>

      <SplitLayout
        ratio={[7, 5]}
        left={
          <div>
            <Eyebrow>Onboarding Flow — What users see first</Eyebrow>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
              The onboarding was designed to immediately signal the app&rsquo;s purpose:
              scaffolded guidance, not another to-do list. Users enter their transition
              type before the AI can personalise its coaching responses.
            </p>
          </div>
        }
        right={
          <PhonePair
            light="/img/asap/screen-02-onboarding-light.png"
            dark="/img/asap/screen-02-onboarding-dark.png"
            lightAlt="ASAP screen 2 — onboarding light"
            darkAlt="ASAP screen 2 — onboarding dark"
            rotate={4}
          />
        }
      />

      <EditorialLayout maxWidth="1440px">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
          <FeatureCard title="Literature Review" use="Method" color={accent} text="Established research foundation for AI scaffolding in executive function support and task management for transitioning adults." />
          <FeatureCard title="Competitive Analysis" use="Method" color={gold} text="Benchmarked against Todoist, Notion AI, and general-purpose LLMs — identified the coaching gap none of them filled." />
          <FeatureCard title="Design Interviews" use="Method" color={gold} text="6 participants across 4 transition types. Surfaced emotional triggers — paralysis, shame, overwhelm — alongside practical friction points." />
          <FeatureCard title="Persona Development" use="Method" color={accent} text="Built from real interview findings, not assumptions — to keep design decisions grounded throughout the project." />
        </div>
      </EditorialLayout>

      {/* 9.1 — What changed because of the research: closes the research section with consequence, not description */}
      <EditorialLayout maxWidth="1440px">
        <div className="rounded-2xl p-8" style={{ gridColumn: "1 / 8", ...tintedGlass(accent, 0.08) }}>
          <Eyebrow>What changed because we learned this</Eyebrow>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
            Interviews didn&rsquo;t reveal a missing feature — they revealed that the
            product we&rsquo;d framed was the wrong one. Participants already owned task
            managers. What they lacked was a way to begin. That moved the work from
            building an interface for storing tasks to designing an AI that could get
            someone unstuck, and every decision downstream follows from it.
          </p>
        </div>
        <div style={{ gridColumn: "8 / 13", alignSelf: "start" }}>
          <GlassNote
            color={gold}
            label="The reframe"
            text="Not a productivity problem with a UI solution. A behavioural problem with an AI-behaviour solution."
          />
        </div>
      </EditorialLayout>

      {/* 9.2 — Literature review as design rationale: theory → the decision it justified */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Literature Review as Design Rationale</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Theory, and what it <span className="italic" style={{ color: accent }}>decided.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            The literature wasn&rsquo;t background reading. Each concept resolved into a
            specific product decision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {theoryMap.map((t, i) => (
            <div key={t.theory} className="rounded-2xl p-6" style={tintedGlass(i % 2 === 0 ? accent : gold, 0.07)}>
              <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">Theory</p>
              <p className="mt-1 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{t.theory}</p>
              <p className="my-3 text-base leading-none" style={{ color: i % 2 === 0 ? accent : gold }} aria-hidden>↓</p>
              <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">Product decision</p>
              <p className="mt-1 font-semibold text-[var(--color-ink)]">{t.decision}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{t.note}</p>
            </div>
          ))}
        </div>
      </EditorialLayout>

      {/* 9.3 — From Research to Product Strategy: the pivot, as a flow */}
      <GradientField gradient={asapGradients.charcoalGraphite}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 8" }}>
            <Eyebrow>From Research to Product Strategy</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              We were building <span className="italic" style={{ color: accent }}>the wrong product.</span>
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <div className="rounded-xl px-5 py-4" style={tintedGlass(asapPalette.slate, 0.06)}>
                <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">Originally</p>
                <p className="mt-1 text-[var(--color-ink)]">A general productivity app.</p>
              </div>
              <div className="rounded-xl px-5 py-4" style={tintedGlass(gold, 0.08)}>
                <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase" style={{ color: gold }}>Research revealed</p>
                <p className="mt-1 text-[var(--color-ink)]">People already had productivity tools.</p>
              </div>
              <div className="rounded-xl px-5 py-4" style={tintedGlass(accent, 0.09)}>
                <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase" style={{ color: accent }}>Their real problem</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {[
                    "Not knowing where to start",
                    "Lack of planning skills",
                    "Cognitive overload",
                    "Loss of external structure during major life transitions",
                  ].map((p) => (
                    <li key={p} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl px-5 py-4 text-center" style={tintedGlass(sage, 0.1)}>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  So the product became an{" "}
                  <strong className="text-[var(--color-ink)] font-semibold">AI coach</strong> instead of an{" "}
                  <span className="line-through opacity-60">AI task manager</span>.
                </p>
              </div>
            </div>
          </div>
          <div style={{ gridColumn: "9 / 13", alignSelf: "center" }}>
            <FlowChain
              color={accent}
              steps={[
                { label: "Research", detail: "6 interviews, 4 transition types" },
                { label: "Problem", detail: "Can't start — not can't track" },
                { label: "Product opportunity", detail: "Coach the planning, don't store the tasks" },
                { label: "Design direction", detail: "Design the AI's behaviour first" },
              ]}
            />
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 9.4 — Designing AI Behavior: the three principles and the behaviour each produces */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Designing AI Behaviour</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            The product is the <span className="italic" style={{ color: accent }}>AI&rsquo;s behaviour.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            Three principles governed how the AI acts. They were decided before any hi-fi
            screen existed, and the interface is downstream of them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {aiPrinciples.map((p, i) => (
            <PrincipleCard key={p.name} {...p} color={i === 1 ? gold : i === 2 ? sage : accent} />
          ))}
        </div>
      </EditorialLayout>

      {/* 9.5 — Translating Research into AI Behavior: the 5-col mapping table, scrolls on narrow screens */}
      <GradientField gradient={asapGradients.goldCharcoal}>
        <EditorialLayout maxWidth="1600px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Translating Research into AI Behaviour</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Every behaviour <span className="italic" style={{ color: accent }}>traces to a finding.</span>
            </h2>
          </div>
          <div style={{ gridColumn: "1 / 13" }} className="overflow-x-auto">
            <div style={{ minWidth: "980px" }}>
              <div className="grid grid-cols-5 gap-x-6">
                {["Research finding", "Design decision", "Prompt strategy", "AI behaviour", "Validation"].map((h) => (
                  <p key={h} className="pb-3 text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
                    {h}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-x-6">
                {researchToBehavior.map((r) => (
                  <div key={r.finding} className="contents">
                    {[r.finding, r.decision, r.prompt, r.behavior, r.validation].map((cell, ci) => (
                      <div key={ci} className="py-5 border-t border-white/10">
                        <p
                          className={`text-sm leading-relaxed ${ci === 0 || ci === 3 ? "text-[var(--color-ink)] font-medium" : "text-[var(--color-ink-muted)]"}`}
                        >
                          {cell}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 9.6 — Conversation Design: the architecture as a flow, with the clarification branch */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 7" }}>
          <Eyebrow>Conversation Design</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            The AI earns context <span className="italic" style={{ color: accent }}>before it plans.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "50ch" }}>
            The clarification branch is the most important part of this architecture. It
            exists for one reason: a plan generated from a vague goal is a generic plan,
            and generic advice was the thing participants distrusted most.
          </p>
          <div className="mt-6">
            <GlassNote
              color={gold}
              label="Why clarification exists"
              text="It converts a one-line goal into enough context to plan against — which is what separates a tailored breakdown from a template."
            />
          </div>
        </div>
        <div style={{ gridColumn: "8 / 13" }}>
          <FlowChain
            compact
            color={accent}
            steps={[
              { label: "User enters a goal" },
              { label: "AI evaluates specificity" },
              { label: "Needs clarification?", detail: "If yes — ask follow-up questions, then continue" },
              { label: "Generate tailored plan" },
              { label: "Sequential execution", detail: "One step surfaced at a time" },
              { label: "Coach available when stuck" },
              { label: "Completion" },
            ]}
          />
        </div>
      </EditorialLayout>

      {/* 9.7 — Prompt Design: architecture only, no prompt text exposed */}
      <GradientField gradient={asapGradients.charcoalGraphite}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 7" }}>
            <Eyebrow>Prompt Design</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Prompts as <span className="italic" style={{ color: accent }}>architecture.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "50ch" }}>
              The prompt layer is where the coaching principles become enforceable. Each
              stage has a job, and the tone is a constraint of the system rather than a
              flourish in the copy.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {[
                "Collect missing context before planning",
                "Generate personalised plans, not templates",
                "Hold the coaching tone across every response",
                "Avoid generic advice",
                "Communicate uncertainty",
                "Redirect unsupported requests instead of refusing flatly",
              ].map((p) => (
                <li key={p} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ gridColumn: "8 / 13", alignSelf: "center" }}>
            <FlowChain
              compact
              color={gold}
              steps={[
                { label: "Input", detail: "The user's stated goal" },
                { label: "Context", detail: "Transition type, role, task specifics" },
                { label: "Reasoning", detail: "Is there enough to plan against?" },
                { label: "Planning", detail: "Sequenced, role-aware steps" },
                { label: "Coaching", detail: "Tone and stance held throughout" },
                { label: "Response", detail: "Plan plus a confidence signal" },
              ]}
            />
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 10 — 05 AI in Our Process: heading, task-entry split, AI tool cards, honest callout */}
      <GradientField gradient={asapGradients.goldCharcoal}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>05 · AI in Our Process</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Where AI helped — <span className="italic" style={{ color: accent }}>and where it didn&rsquo;t.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
              AI was embedded in how we designed and built it. An honest account of what
              worked and what fell short.
            </p>
          </div>
        </EditorialLayout>
      </GradientField>

      <SplitLayout
        ratio={[5, 7]}
        left={
          <PhonePair
            light="/img/asap/screen-03-task-input-light.png"
            dark="/img/asap/screen-03-task-input-dark.png"
            lightAlt="ASAP screen 3 — task input light"
            darkAlt="ASAP screen 3 — task input dark"
            rotate={-4}
          />
        }
        right={
          <div>
            <Eyebrow color={gold}>Task Entry — Where coaching begins</Eyebrow>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
              The task input screen is intentionally minimal. The AI doesn&rsquo;t act
              immediately — it first asks a clarifying question to understand the
              user&rsquo;s context before breaking down the task. This was a direct
              research finding: users felt heard before being guided.
            </p>
          </div>
        }
      />

      <EditorialLayout maxWidth="1440px">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          <FeatureCard title="Figma Make" use="Initial wireframe generation" color={gold} text="Fast starting point for early flows. Needed significant rework — lacked nuance but unlocked team alignment quickly." />
          <FeatureCard title="Perplexity + Anara" use="Research synthesis" color={accent} text="Useful for scanning literature quickly. Saved hours in the literature review phase. Citations needed manual verification." />
          <FeatureCard title="Claude + Cursor" use="Hi-fi build + AI integration" color={gold} text="The hi-fi prototype is live with real Claude API integration for task breakdown and coaching. Biggest technical unlock of the project." />
        </div>
        <div className="rounded-[2rem] p-8" style={{ gridColumn: "2 / 12", ...tintedGlass(accent, 0.1) }}>
          <Quote
            align="center"
            accent={accent}
            text="AI accelerated ideation and build speed significantly. It struggled with context-depth — the same gap we identified in the product itself."
            attribution="Honest assessment — generic AI output required heavy human curation at every stage"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </EditorialLayout>

      {/* 11 — 06 Design System: heading, ds-grid, then the full product-screen showcase */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>06 · Design System</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Calm <span className="italic" style={{ color: accent }}>by design.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            The core principle: the app must not add to the noise. Users are already
            overwhelmed. Every decision — color, type, layout — reduces cognitive load.
          </p>
          <div className="mt-6" style={{ maxWidth: "62ch" }}>
            <GlassNote
              color={sage}
              label="The interface is the output, not the argument"
              text="Everything from here on is what the AI's behaviour required: one primary action per screen because steps surface one at a time, muted secondary text because confidence labels need to be readable without shouting, and coaching that appears contextually rather than everywhere."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          <FeatureCard title="Slate Teal Primary" use="Color" color={accent} text="Grounded, non-stimulating palette. Warm neutrals with earthy sage and amber accents. Built for both light and dark modes." />
          <FeatureCard title="Inter Throughout" use="Type" color={gold} text="Clean, accessible, readable across screen sizes without visual weight. Lets users focus on the task, not the interface." />
          <FeatureCard title="Neutral & Unambiguous" use="Buttons" color={sage} text="No unnecessary flair. Users always know what to tap next without thinking. Less friction, more flow." />
        </div>
      </EditorialLayout>

      <SplitLayout
        ratio={[7, 5]}
        left={
          <div>
            <Eyebrow>AI Breakdown — Screen 4</Eyebrow>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
              The first AI response screen shows the broken-down task with confidence
              labels. The calm design language prevents the screen from feeling
              overwhelming — intentional use of whitespace, muted secondary text, and a
              single primary action.
            </p>
          </div>
        }
        right={
          <PhonePair
            light="/img/asap/screen-04-ai-breakdown-light.png"
            dark="/img/asap/screen-04-ai-breakdown-dark.png"
            lightAlt="ASAP screen 4 — AI breakdown light"
            darkAlt="ASAP screen 4 — AI breakdown dark"
            rotate={3}
          />
        }
      />

      <SplitLayout
        ratio={[5, 7]}
        left={
          <PhonePair
            light="/img/asap/screen-05-subtask-detail-light.png"
            dark="/img/asap/screen-05-subtask-detail-dark.png"
            lightAlt="ASAP screen 5 — subtask detail light"
            darkAlt="ASAP screen 5 — subtask detail dark"
            rotate={-3}
          />
        }
        right={
          <div>
            <Eyebrow color={gold}>Subtask Detail — Screen 5</Eyebrow>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
              Subtask detail view. Each step is presented one at a time to prevent
              re-triggering the blank screen effect. The coaching nudge appears
              contextually — not on every screen.
            </p>
          </div>
        }
      />

      <SplitLayout
        ratio={[7, 5]}
        left={
          <div>
            <Eyebrow>Progress View — Screen 6</Eyebrow>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
              Progress tracking. The design uses a minimal progress indicator — not a
              gamified streak — to avoid creating anxiety around incomplete tasks. The
              goal is momentum, not pressure.
            </p>
          </div>
        }
        right={
          <PhonePair
            light="/img/asap/screen-06-progress-light.png"
            dark="/img/asap/screen-06-progress-dark.png"
            lightAlt="ASAP screen 6 — progress light"
            darkAlt="ASAP screen 6 — progress dark"
            rotate={4}
          />
        }
      />

      <SplitLayout
        ratio={[5, 7]}
        left={
          <PhonePair
            light="/img/asap/screen-07-deep-focus-light.png"
            dark="/img/asap/screen-07-deep-focus-dark.png"
            lightAlt="ASAP screen 7 — deep focus light"
            darkAlt="ASAP screen 7 — deep focus dark"
            rotate={-4}
          />
        }
        right={
          <div>
            <Eyebrow color={gold}>Deep Focus Mode — Screen 7</Eyebrow>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
              Deep Focus is a distraction-free view for users who want to work through a
              single task without switching between screens. Calendar access is
              intentionally housed here — a Round 1 finding: users wanted it earlier in
              the flow. Iteration 2 will surface it sooner.
            </p>
          </div>
        }
      />

      <SplitLayout
        ratio={[7, 5]}
        left={
          <div>
            <Eyebrow>Profile + Settings — Screen 8</Eyebrow>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
              Profile and settings. Transition type is stored here — a key input for
              personalising the AI&rsquo;s coaching responses. In Iteration 2, this will
              inform contextual memory across sessions.
            </p>
          </div>
        }
        right={
          <PhonePair
            light="/img/asap/screen-08-profile-light.png"
            dark="/img/asap/screen-08-profile-dark.png"
            lightAlt="ASAP screen 8 — profile light"
            darkAlt="ASAP screen 8 — profile dark"
            rotate={3}
          />
        }
      />

      {/* 12 — Additional screens + Figma overview: gallery wall, 1600px */}
      <GalleryLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Additional Screens — 9 to 11</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
            Remaining light-mode screens covering edge cases, empty states, and the
            onboarding completion flow.
          </p>
        </div>
        {[
          { src: "/img/asap/screen-09.png", alt: "ASAP screen 9", col: "1 / 5" },
          { src: "/img/asap/screen-10.png", alt: "ASAP screen 10", col: "5 / 9" },
          { src: "/img/asap/screen-11.png", alt: "ASAP screen 11", col: "9 / 13" },
        ].map((s) => (
          <div key={s.src} style={{ gridColumn: s.col, marginTop: "2rem" }}>
            <ImageFrame src={s.src} alt={s.alt} aspect="9/19.5" objectFit="contain" style={{ backgroundColor: asapPalette.charcoal }} />
          </div>
        ))}
        <div style={{ gridColumn: "3 / 11", marginTop: "1rem" }}>
          <Eyebrow color={gold}>Team Alignment Activity</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
            Figma — component library, design tokens, and the full screen set. Also the
            board used for the in-class alignment activity: collaborative problem
            framing and feature prioritisation.
          </p>
          <div className="mt-4" style={{ maxWidth: "640px" }}>
            <ImageFrame
              src="/img/asap/figma-overview.png"
              alt="ASAP Figma component library, screen overview, and in-class design alignment activity"
              aspect="1.525/1"
              objectFit="contain"
              caption="Figma component library and design tokens — also the in-class alignment activity board"
            />
          </div>
        </div>
      </GalleryLayout>

      {/* 12.5 — RITE Iteration: the prototype changed continuously, shown as a timeline */}
      <GradientField gradient={asapGradients.goldCharcoal}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>RITE Iteration</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              The prototype changed <span className="italic" style={{ color: accent }}>between sessions.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
              Rather than testing a frozen build and reporting on it afterwards, fixes went
              in as issues surfaced and were retested. Some rounds changed the prompt, some
              changed the interface — the distinction matters, because most of these were
              AI-behaviour problems, not layout problems.
            </p>
          </div>
          <div style={{ gridColumn: "1 / 13" }} className="relative">
            <div
              className="hidden md:block absolute top-[2.4rem] left-[8%] right-[8%] h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}55, ${accent}55, transparent)` }}
              aria-hidden
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {riteRounds.map((r) => (
                <div key={r.n} className="relative rounded-2xl p-6" style={tintedGlass(accent, 0.07)}>
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-full font-[family-name:var(--font-display)] font-semibold text-sm mb-4"
                    style={{ backgroundColor: accent, color: asapPalette.black }}
                  >
                    {r.n}
                  </span>
                  {[
                    { k: "Issue", v: r.issue },
                    ...(r.prompt ? [{ k: "Prompt change", v: r.prompt }] : []),
                    ...(r.ui ? [{ k: "UI change", v: r.ui }] : []),
                    { k: "Validation", v: r.validation },
                  ].map((row, i, arr) => (
                    <div key={row.k}>
                      <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase" style={{ color: row.k === "Validation" ? sage : gold }}>
                        {row.k}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">{row.v}</p>
                      {i < arr.length - 1 && (
                        <p className="my-2 text-sm leading-none text-[var(--color-ink-faint)]" aria-hidden>↓</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 13 — 07 Usability Findings: heading, tension quote, wins/gaps (sage vs. amber) */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>07 · Usability Findings</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            What Round 1 <span className="italic" style={{ color: accent }}>testing revealed.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            Participants spanned all four transition types. A product with a strong
            emotional foundation but significant functional gaps limiting real-world
            adoption.
          </p>
        </div>
        <div style={{ gridColumn: "2 / 12" }}>
          <Quote
            align="center"
            size="large"
            accent={accent}
            text={"ASAP's voice is its superpower.\nIts intelligence depth is its ceiling."}
            attribution="Core tension identified — next iteration must close the gap between emotional resonance and real-world utility"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="rounded-2xl p-8" style={{ gridColumn: "1 / 7", alignSelf: "start", ...tintedGlass(sage, 0.08) }}>
          <p className="text-[0.62rem] font-bold tracking-[0.28em] uppercase" style={{ color: sage }}>✓ What worked</p>
          <ul className="mt-5 flex flex-col gap-3">
            {wins.map((w) => (
              <li key={w} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sage }} />
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl p-8" style={{ gridColumn: "7 / 13", alignSelf: "start", ...tintedGlass(accent, 0.08) }}>
          <p className="text-[0.62rem] font-bold tracking-[0.28em] uppercase" style={{ color: accent }}>✗ What didn&rsquo;t</p>
          <ul className="mt-5 flex flex-col gap-3">
            {gaps.map((g) => (
              <li key={g} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-4 relative">
                <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </EditorialLayout>

      {/* 14 — 08 Roadmap: premium glass timeline */}
      <GradientField gradient={asapGradients.charcoalGraphite}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>08 · What&rsquo;s Next</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Iteration 2 <span className="italic" style={{ color: accent }}>roadmap.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
              Deployed before Round 2 testing — intentionally. Real usage data will
              surface friction that controlled testing can&rsquo;t capture.
            </p>
          </div>
          <div style={{ gridColumn: "2 / 12" }} className="relative mt-4">
            <div
              className="absolute left-[2.1rem] top-2 bottom-2 w-px"
              style={{ background: `linear-gradient(180deg, ${accent}66, transparent)` }}
              aria-hidden
            />
            <ol className="flex flex-col gap-2">
              {roadmap.map((r) => (
                <li key={r.n} className="relative flex gap-6 items-start rounded-2xl p-5" style={tintedGlass(accent, 0.05)}>
                  <span
                    className="font-[family-name:var(--font-display)] font-semibold text-2xl flex-shrink-0 w-12 text-center"
                    style={{ color: accent }}
                  >
                    {r.n}
                  </span>
                  <p className="text-sm md:text-base text-[var(--color-ink-muted)] leading-relaxed pt-1">
                    <strong className="text-[var(--color-ink)] font-semibold">{r.title}</strong> — {r.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 15 — Reflection: professional product reflection, then the standalone takeaway line */}
      <GradientField gradient={asapGradients.charcoalGraphite}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Reflection</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              What this project <span className="italic" style={{ color: accent }}>actually was.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
            {[
              {
                label: "Designing behaviour, not screens",
                text: "Most of the meaningful decisions here weren't layout decisions. Whether the AI asks before it answers, how it signals uncertainty, what it declines to do — none of that lives in a Figma frame, and all of it determines whether the product works.",
                color: accent,
              },
              {
                label: "Guidance versus autonomy",
                text: "The tension the whole product sits on. Too little structure and users stay frozen; too much and the AI does the thinking, which builds dependency rather than skill. Coaching was the resolution, but it needs constant policing in the prompt layer.",
                color: gold,
              },
              {
                label: "Trust is designed",
                text: "Confidence labels were the clearest lesson: users trusted the AI more when it admitted what it wasn't sure about. Transparency read as competence, not weakness — the opposite of what a polished demo instinct suggests.",
                color: sage,
              },
              {
                label: "Research-driven prompt design",
                text: "The prompt was a design surface, and it was written from interview findings rather than tuned by intuition. When Round 1 showed every persona getting the same plan, the fix belonged in the prompt's use of context — not in another screen.",
                color: gold,
              },
              {
                label: "Conversation as structure",
                text: "The clarification branch does more work than any interface element. Deciding when the AI should ask instead of answer turned out to be the core architectural choice of the product.",
                color: accent,
              },
              {
                label: "Scaffolding should fade",
                text: "The unresolved question, and the most interesting one. Support that never recedes becomes a crutch. A mature version of this would notice growing capability and step back — which is a behaviour to design, not a feature to ship.",
                color: sage,
              },
            ].map((r) => (
              <div key={r.label} className="rounded-2xl p-6" style={tintedGlass(r.color, 0.07)}>
                <p className="text-[0.6rem] font-semibold tracking-[0.24em] uppercase" style={{ color: r.color }}>{r.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{r.text}</p>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 15.5 — Takeaway: standalone large editorial quote, centered */}
      <ReadingLayout className="text-center">
        <Eyebrow>Takeaway</Eyebrow>
        <p
          className="mt-6 font-[family-name:var(--font-display)] italic font-medium leading-[1.15] text-[clamp(1.6rem,3.4vw,2.6rem)] text-[var(--color-ink)]"
        >
          Building the <span style={{ color: accent }}>coach,</span> not the answer. A
          tool that does everything for you isn&rsquo;t scaffolding — it&rsquo;s
          dependency. The goal was always to make itself unnecessary. That&rsquo;s still
          the north star.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {["AI Experience Design", "Human-AI Interaction", "Conversation Design", "Prompt Design", "UX Research", "AI Trust & Transparency", "Usability Testing", "Executive Function"].map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] font-medium tracking-[0.14em] uppercase rounded-full px-3 py-1.5"
              style={{ backgroundColor: `${asapPalette.slate}1a`, border: `1px solid ${asapPalette.slate}33`, color: asapPalette.slate }}
            >
              {tag}
            </span>
          ))}
        </div>
      </ReadingLayout>

      {/* 16 — CTA: memorable close, floating phone + amber glow, live prototype link */}
      <section className="relative overflow-hidden" style={{ minHeight: "70dvh" }}>
        <div className="absolute inset-0" style={{ background: asapGradients.amberSand }} />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />
        <div className="relative z-10 grid px-6 md:px-10 py-24 items-center justify-items-center text-center gap-8" style={{ minHeight: "70dvh" }}>
          <div className="w-[40%] max-w-[220px] rotate-[-3deg]">
            <ImageFrame
              src="/img/asap/screen-04-ai-breakdown-dark.png"
              alt="ASAP AI breakdown screen, dark mode"
              aspect="9/19.5"
              objectFit="contain"
              className="shadow-2xl"
              style={{ backgroundColor: asapPalette.charcoal, borderRadius: "2rem" }}
            />
          </div>
          <h2 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] text-[clamp(2.2rem,6vw,4.5rem)] text-[var(--color-ink)]">
            Try ASAP for yourself.
          </h2>
          <TrackedLink
            label="Live Prototype"
            href="https://asap-flame.vercel.app/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[0.75rem] font-semibold tracking-[0.15em] uppercase transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: accent, color: asapPalette.black }}
          >
            Live Prototype ↗
          </TrackedLink>
        </div>
      </section>

      {/* 17 — Next project: FullBleed, centered overlay, loops to PM Dashboard */}
      <FullBleedLayout
        image="/img/mainstreet/laptop-mockup.png"
        imageAlt="PM Dashboard, a real-time Power BI view for portfolio managers"
        imageOpacity={0.35}
        minHeight="60dvh"
        overlayClassName="items-center justify-items-center text-center"
      >
        <Link href="/projects/mainstreet" className="group">
          <span
            className="inline-flex rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
            style={tintedGlass(accent)}
          >
            <span style={{ color: gold }}>Next Project</span>
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)] text-[var(--color-ink)]">
            PM Dashboard
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
