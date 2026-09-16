import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";

/**
 * Wellnut — outcome-first VR product case study, per Wellnut_Case_Study_Page.md,
 * with the layout rhythm of the reference visual.
 *
 * Product imagery is the real build only: the in-headset forest, the Lonely /
 * Stressed emotion bubbles, the Unreal editor, the team's own posters, and the
 * showcase photographs and clips. The two illustrations (hero-forest.jpg,
 * calm-figure.png) are generated brand/mood art — they are captioned as
 * illustration and never stand in for a product screen.
 *
 * Figures come from the project record: 33-student survey across 6 disciplines
 * (Dec 2024), the licensed-therapist consultation (Dec 2024), and the Jarvis
 * Innovation Showcase (May 2025). The one attendee quote is the one already on
 * the page; no additional quotes are invented.
 */

export const metadata: Metadata = {
  title: "Wellnut — Ramya Yerramilli",
  description:
    "A VR companion designed to give students a low-friction, judgment-free way to pause, reflect, and take the first step toward support.",
};

const FRICTION = "#a8452c";
const CALM = "#5d5391";

/* ── Icons ─────────────────────────────────────────────────────────────── */

function Icon({ children, className = "icon-line", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={style}>
      {children}
    </svg>
  );
}

const i = {
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  heart: <path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z" />,
  chat: <path d="M4.5 5h15v10.5H10L5.5 19.5v-4h-1z" />,
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="6" height="7" rx="2" />
      <rect x="15.5" y="13" width="6" height="7" rx="2" />
    </>
  ),
  tree: (
    <>
      <path d="M12 3.5 6 12h3l-3.5 5h13L15 12h3z" />
      <path d="M12 17v4" />
    </>
  ),
  breathe: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8.5" />
    </>
  ),
  ear: <path d="M8 20.5c-1.8-1.6-1.4-3.6-2.5-5.4A7.5 7.5 0 1 1 19 11c0 3-2.5 3.6-3.8 4.8-1 1-.7 2.5-2.2 2.5-1.2 0-1.6-1-1.6-2 0-1.4 1.6-2 1.6-3.6A2.6 2.6 0 0 0 10 10" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c.4-3.6 3.5-5.6 7.5-5.6s7.1 2 7.5 5.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3 19.5c.3-3 2.8-4.8 6-4.8s5.7 1.8 6 4.8" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16.5 14.8c2.6.2 4.3 1.8 4.5 4.2" />
    </>
  ),
  tools: <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.5-.5-.5-2.5z" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3.5h8l4 4v13H6z" />
      <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3.5V6.5M16 3.5V6.5" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.3A2.5 2.5 0 0 1 14.5 10c0 1.8-2.5 2-2.5 3.6M12 17h.01" />
    </>
  ),
  shield: <path d="M12 3.2 19 6v5.2c0 4.6-3 8.2-7 9.6-4-1.4-7-5-7-9.6V6z" />,
  scale: (
    <>
      <path d="M12 4v16M7 20h10M5 7h14" />
      <path d="m5 7-2.5 6a3 3 0 0 0 5 0zM19 7l-2.5 6a3 3 0 0 0 5 0z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  flask: <path d="M9.5 3.5h5M10.5 3.5v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4A1.5 1.5 0 0 0 19 19l-5.5-9.5v-6M7.5 15h9" />,
  code: <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4" />,
  pen: <path d="m14.5 5.5 4 4M4 20l1-5L15.5 4.5a2 2 0 0 1 3 0l1 1a2 2 0 0 1 0 3L9 19z" />,
  map: (
    <>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  repeat: (
    <>
      <path d="M17 3.5 20.5 7 17 10.5M20.5 7H9a5 5 0 0 0-5 5" />
      <path d="M7 20.5 3.5 17 7 13.5M3.5 17H15a5 5 0 0 0 5-5" />
    </>
  ),
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
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
    </>
  ),
  pulse: <path d="M3 12h4l2.5-6 4 12 2.5-6h5" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5 3.5 8 12 12.5 20.5 8z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  arrowR: <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />,
  arrowD: <path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" />,
};

/* ── Diagram primitives ────────────────────────────────────────────────── */

type Tone = "neutral" | "friction" | "calm" | "strong";

function Arrow({ dir = "right", className = "" }: { dir?: "right" | "down"; className?: string }) {
  return <Icon className={`icon-line !h-[18px] !w-[18px] flex-none opacity-60 ${className}`}>{dir === "right" ? i.arrowR : i.arrowD}</Icon>;
}

function Node({ icon, label, tone = "neutral", size = "md", className = "" }: { icon: ReactNode; label: string; tone?: Tone; size?: "sm" | "md" | "lg"; className?: string }) {
  const ring = tone === "friction" ? FRICTION : tone === "calm" ? CALM : tone === "strong" ? "var(--ink)" : "var(--border-strong)";
  const dim = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className={`flex ${dim} items-center justify-center rounded-full`} style={{ border: `1px solid ${ring}`, background: tone === "strong" ? "var(--ink)" : "var(--bg-raised)" }}>
        <Icon
          className={`icon-line ${size === "sm" ? "!h-[18px] !w-[18px]" : "!h-5 !w-5"}`}
          style={tone === "strong" ? { stroke: "var(--bg)" } : tone === "friction" ? { stroke: FRICTION } : tone === "calm" ? { stroke: CALM } : undefined}
        >
          {icon}
        </Icon>
      </span>
      <span className={`mt-2.5 leading-snug text-[var(--ink)] ${size === "sm" ? "text-[12px]" : "text-[13px]"}`}>{label}</span>
    </div>
  );
}

function Chain({ nodes, size = "md" }: { nodes: { icon: ReactNode; label: string; tone?: Tone }[]; size?: "sm" | "md" | "lg" }) {
  return (
    <ol className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-1.5">
      {nodes.map((n, idx) => (
        <li key={n.label + idx} className="contents">
          <Node icon={n.icon} label={n.label} tone={n.tone} size={size} className="sm:min-w-0 sm:flex-1" />
          {idx < nodes.length - 1 && (
            <>
              <Arrow dir="down" className="sm:hidden" />
              <Arrow className={`hidden !h-3.5 !w-3.5 sm:block ${size === "sm" ? "mt-[13px]" : size === "lg" ? "mt-[21px]" : "mt-[17px]"}`} />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

/* ── Content ───────────────────────────────────────────────────────────── */

const heroMeta = [
  { icon: i.person, label: "Role", value: "UX Researcher + Project Coordinator" },
  { icon: i.clock, label: "Duration", value: "6 months · Nov 2024 – May 2025" },
  { icon: i.users, label: "Team", value: "UX Research · Unreal Dev · Environment Art · Character Art · Audio" },
  { icon: i.tools, label: "Tools", value: "Unreal Engine · Maya · Google Forms · Perforce" },
];

const outcomeMetrics = [
  { value: "33", label: "students surveyed, across 6 disciplines" },
  { value: "71%", label: "saw value in VR-based meditation for exam stress" },
  { value: "6 months", label: "from first literature review to live showcase" },
  { value: "1", label: "focused MVP, instead of five unfinished features" },
];

const barriers = [
  { icon: i.eye, title: "Stigma", body: "Fear of judgment from peers and faculty." },
  { icon: i.clock, title: "Time", body: "48% cite no time for traditional support." },
  { icon: i.person, title: "Independence", body: "67% prefer handling things on their own." },
  { icon: i.question, title: "Uncertainty", body: "Not knowing where or how to start." },
];

const traditionalJourney = [
  { icon: i.pulse, label: "Feel stressed" },
  { icon: i.question, label: "Decide whether to seek help", tone: "friction" as Tone },
  { icon: i.search, label: "Find a resource", tone: "friction" as Tone },
  { icon: i.calendar, label: "Book an appointment", tone: "friction" as Tone },
  { icon: i.clock, label: "Wait", tone: "friction" as Tone },
  { icon: i.chat, label: "Talk to someone" },
];

const wellnutJourney = [
  { icon: i.pulse, label: "Feel stressed", tone: "calm" as Tone },
  { icon: i.headset, label: "Enter a private environment", tone: "calm" as Tone },
  { icon: i.heart, label: "Choose how you feel", tone: "calm" as Tone },
  { icon: i.ear, label: "Be acknowledged", tone: "calm" as Tone },
  { icon: i.chat, label: "Reflect", tone: "calm" as Tone },
  { icon: i.breathe, label: "Practice guided meditation", tone: "calm" as Tone },
  { icon: i.arrowR, label: "Take the next step, if needed", tone: "strong" as Tone },
];

const researchChanges = [
  {
    n: "01",
    title: "Why VR",
    finding: "71% saw value in VR meditation for exam stress and performance.",
    decision: "Use VR as the primary environment.",
    why: "A private, enclosed experience takes the social friction out of asking for support.",
  },
  {
    n: "02",
    title: "Why an avatar",
    finding: "Students wanted immediate, independent support.",
    decision: "Introduce an always-available avatar companion.",
    why: "The avatar sits between “I'm struggling” and “I need formal support.”",
  },
  {
    n: "03",
    title: "Why talk before meditation",
    finding: "Students need to feel heard before they can receive guidance.",
    decision: "Make acknowledgement the first step.",
    why: "Validate the emotional state before suggesting a technique.",
  },
];

const experience = [
  { n: "01", title: "Arrive", body: "Enter the private forest environment.", icon: i.tree },
  { n: "02", title: "Express", body: "Choose an emotion — Lonely or Stressed.", icon: i.heart },
  { n: "03", title: "Be heard", body: "The avatar acknowledges what was expressed.", icon: i.ear },
  { n: "04", title: "Reflect", body: "The conversation adapts to that emotional state.", icon: i.chat },
  { n: "05", title: "Practice", body: "Move into guided meditation and breathing.", icon: i.breathe },
  { n: "06", title: "Continue", body: "End with an appropriate next step — including encouragement toward human support.", icon: i.arrowR },
];

const guardrails = [
  { icon: i.doc, title: "Clear expectations", body: "Session duration, privacy, and limits stated upfront. Uncertainty breeds anxiety." },
  { icon: i.ear, title: "Active listening cues", body: "Mirror the student's own words. If they say “stressed,” the avatar says “stress.”" },
  { icon: i.heart, title: "Validate, then act", body: "“That sounds really hard” comes before “let's try breathing.” Never skip acknowledgement." },
  { icon: i.shield, title: "Appropriate boundaries", body: "Limit session availability to avoid dependency; prompt toward professional help when appropriate." },
];

const roleMap = [
  { icon: i.search, title: "Research", tags: ["Survey design", "Synthesis", "Secondary research", "Interview planning"] },
  { icon: i.target, title: "Product direction", tags: ["Problem framing", "MVP scope", "Experience priorities"] },
  { icon: i.chat, title: "Conversational UX", tags: ["Emotion flows", "Dialogue branches", "Empathetic language", "Ethical guardrails"] },
  { icon: i.users, title: "Coordination", tags: ["Cross-functional planning", "Team alignment", "Unreal workflow"] },
  { icon: i.headset, title: "Showcase", tags: ["Prototype prep", "User walkthroughs", "Feedback collection"] },
];

const phases = [
  { icon: i.doc, title: "Understand", weeks: "Weeks 1–4", body: "Literature and secondary research into support barriers, existing interventions, and the VR / meditation evidence base." },
  { icon: i.flask, title: "Validate", weeks: "Weeks 5–10", body: "33 students surveyed across six disciplines — support-seeking barriers, independence, VR receptiveness." },
  { icon: i.shield, title: "De-risk", weeks: "Weeks 11–14", body: "Licensed therapist consultation produced the empathy-language framework and the validate-before-guidance principle." },
  { icon: i.code, title: "Build", weeks: "Weeks 15–26", body: "Scoped the MVP, then built the environment, avatar, emotion branches, meditation, and the showcase build." },
];

const buildNow = ["Forest environment", "Emotion selection", "Avatar conversation", "Guided meditation", "Personalized greeting"];
const notInV1 = ["Voice AI", "Biometric sensors", "Mood tracking", "Multiple environments", "Weekly check-ins"];

const pipeline = [
  { icon: i.search, label: "Research findings" },
  { icon: i.doc, label: "Experience spec" },
  { icon: i.layers, label: "Dialogue branches" },
  { icon: i.tree, label: "Unreal environment" },
  { icon: i.person, label: "Avatar + interaction" },
  { icon: i.breathe, label: "Meditation" },
  { icon: i.headset, label: "Showcase build", tone: "strong" as Tone },
];

const impact = [
  { value: "33", label: "students informed the product direction" },
  { value: "71%", label: "pre-validated VR interest, before the product existed" },
  { value: "6 months", label: "from literature review to live showcase" },
  { value: "5", label: "team members onboarded to Unreal with no prior experience" },
];

const successCriteria = [
  { icon: i.repeat, title: "Return use", body: "Do students voluntarily come back after the first session?" },
  { icon: i.check, title: "Completion", body: "Do they finish the journey from emotion selection through guided practice?" },
  { icon: i.shield, title: "Perceived safety", body: "Does it feel private, non-judgmental, and appropriately bounded?" },
  { icon: i.arrowR, title: "Help-seeking", body: "Does Wellnut make professional support easier to approach, rather than replacing it?" },
  { icon: i.scale, title: "Trust", body: "Do users understand what the avatar can and cannot do?" },
];

const risks = [
  { area: "Evidence", icon: i.users, title: "Research scope", body: "A self-selected sample from a single institution. Findings are directional, not generalizable." },
  { area: "Evidence", icon: i.clock, title: "Long-term behavior", body: "Showcase feedback is not evidence of sustained engagement." },
  { area: "Product", icon: i.scale, title: "Clinical boundaries", body: "Wellnut should never be positioned as therapy or a replacement for professional care." },
  { area: "Product", icon: i.lock, title: "Dependence and escalation", body: "A conversational companion needs guardrails around dependency, escalation, and referral to human support." },
  { area: "Operations", icon: i.mic, title: "Technical expansion", body: "Voice AI, biometrics, mood tracking, and additional environments each require separate evaluation." },
];

const nextSteps = [
  { icon: i.users, title: "Validate", body: "Test with a broader, multi-institution sample, including students who have actively sought support." },
  { icon: i.chat, title: "Refine", body: "Evaluate conversation quality, trust, perceived privacy, and whether acknowledgement changes engagement." },
  { icon: i.spark, title: "Expand carefully", body: "Explore voice interaction and adaptive experiences only after the core interaction is validated." },
];

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function WellnutPage() {
  return (
    // The lavender/plum scope, defined in globals.css. Scoped from `body:has()`
    // so the nav and footer travel with the page.
    <div className="theme-wellnut">
      {/* HERO */}
      <DeepBand>
        <div className="wrap" style={{ paddingTop: "calc(var(--nav-h) + 36px)", paddingBottom: 56 }}>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
            <div>
              <p className="eyebrow eyebrow-rule">Case study · Wellnut</p>
              <h1 className="mt-5" style={{ fontSize: "clamp(60px, 7.4vw, 104px)", lineHeight: 0.95 }}>
                Wellnut
              </h1>
              <h2 className="mt-3" style={{ fontSize: "clamp(28px, 3.1vw, 42px)", lineHeight: 1.14 }}>
                A private place to pause, talk, and breathe.
              </h2>
              <p className="mt-5 text-[clamp(17px,1.5vw,20px)] leading-[1.5] text-[var(--ink)]" style={{ maxWidth: "29em" }}>
                A VR companion that gives students a low-friction, judgment-free way to pause,
                reflect, and reach guided support — before they hit a crisis point.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--body)]" style={{ maxWidth: "36em" }}>
                No appointment, no stigma, no waiting list.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#experience" className="btn">
                  Explore the experience <span aria-hidden>&#8594;</span>
                </a>
                <a href="#research" className="btn btn-outline">
                  See the research <span aria-hidden>&#8594;</span>
                </a>
              </div>
            </div>

            <figure className="w-full">
              <div className="relative overflow-hidden" style={{ aspectRatio: "1672 / 940", borderRadius: 10, border: "1px solid var(--rule)" }}>
                <Image
                  src="/img/wellnut/hero-forest.jpg"
                  alt="Illustration: a student in a VR headset sitting in a sunlit forest clearing beside the Wellnut companion."
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 600px"
                  className="object-cover"
                />
              </div>
              <figcaption className="meta mt-3">Concept illustration — the real build appears from section 05 onward.</figcaption>
            </figure>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 pt-7 md:grid-cols-4" style={{ borderTop: "1px solid var(--rule)" }}>
            {heroMeta.map((m) => (
              <div key={m.label} className="flex items-start gap-3">
                <Icon className="icon-line mt-0.5 !h-5 !w-5">{m.icon}</Icon>
                <div>
                  <dt className="meta">{m.label}</dt>
                  <dd className="mt-1 text-[14px] leading-snug text-[var(--ink)]">{m.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </DeepBand>

      {/* 01 — THE OUTCOME */}
      <Section id="outcome" divided={false}>
        <div className="sec-grid">
          <SectionHead n="01" eyebrow="The outcome" title="We turned a support gap into a focused VR experience." />
          <div className="sec-copy lg:pt-10">
            <p>
              Wellnut became a working VR prototype: a private environment, an empathetic avatar,
              emotion-based dialogue, and guided meditation.
            </p>
            <p>
              The goal was never to recreate campus counseling in VR. It was to make the{" "}
              <strong className="font-medium text-[var(--ink)]">first step toward support feel easier.</strong>
            </p>
          </div>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeMetrics.map((m) => (
            <div key={m.label} className="panel flex flex-col-reverse p-6">
              <dt className="mt-2 text-[13px] leading-snug text-[var(--body)]">{m.label}</dt>
              <dd className="font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(34px, 3.4vw, 46px)" }}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <figure className="mt-4 panel p-7 sm:p-9" aria-label="Existing support, the gap, and where Wellnut sits">
          <div className="grid items-stretch gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
            {[
              { label: "Existing support", body: "Free services · appointments · counseling · campus resources", style: { border: "1px solid var(--border)", background: "var(--bg-raised)" } as CSSProperties },
              { label: "The gap", body: "Stigma · no time · independence · uncertainty about asking", style: { border: `1px dashed ${FRICTION}`, background: "var(--bg-raised)" } as CSSProperties, labelColor: FRICTION },
              { label: "Wellnut", body: "Private environment · immediate interaction · acknowledgement · guided meditation", style: { border: "1px solid var(--ink)", background: "var(--ink)" } as CSSProperties, dark: true },
            ].map((s, idx, arr) => (
              <div key={s.label} className="contents">
                <div className="flex flex-col p-5" style={{ ...s.style, borderRadius: "var(--radius)" }}>
                  <p className="meta" style={{ color: s.dark ? "var(--on-deep-muted, #c5cec7)" : s.labelColor }}>
                    {s.label}
                  </p>
                  <p className="mt-2 text-[14.5px] leading-snug" style={{ color: s.dark ? "var(--on-deep, #f2efe7)" : "var(--ink)" }}>
                    {s.body}
                  </p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex items-center justify-center py-0.5 md:py-0">
                    <Arrow dir="down" className="md:hidden" />
                    <Arrow className="hidden md:block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </figure>
      </Section>

      {/* 02 — WHY IT MATTERED */}
      <Section id="why">
        <div className="sec-grid">
          <div>
            <SectionHead n="02" eyebrow="Why it mattered" title="The problem wasn’t that support didn’t exist. The barrier came before the first step." />

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {barriers.map((b) => (
                <li key={b.title} className="panel flex flex-col p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "var(--bg-raised)", border: `1px solid ${CALM}` }}>
                    <Icon className="icon-line !h-5 !w-5" style={{ stroke: CALM }}>
                      {b.icon}
                    </Icon>
                  </span>
                  <p className="eyebrow mt-4 !text-[var(--ink)]">{b.title}</p>
                  <p className="mt-1.5 text-[13.5px] leading-snug text-[var(--body)]">{b.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-5 p-6" style={{ border: `1px solid ${CALM}`, borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
              <p className="whitespace-nowrap font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(34px, 3.6vw, 48px)" }}>
                58%
              </p>
              <p className="text-[14px] leading-snug text-[var(--body)]">
                of students with chronic stress had never accessed an on-campus mental health service — despite it being free.
              </p>
            </div>

            <p className="mt-5 text-[12.5px] leading-relaxed text-[var(--muted)]">
              <strong className="font-medium text-[var(--ink)]">Qualifier:</strong> figures come from a 33-student survey at a single
              institution, plus secondary research. They are directional, not statistically representative.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <figure className="panel flex flex-col items-center p-6">
              <div className="relative w-full" style={{ aspectRatio: "1200 / 812" }}>
                <Image
                  src="/img/wellnut/calm-figure.png"
                  alt="Illustration: a student resting with her eyes closed, surrounded by soft foliage."
                  fill
                  sizes="(max-width: 1024px) 88vw, 460px"
                  className="object-contain"
                />
              </div>
              <figcaption className="meta mt-3 text-center">Concept illustration</figcaption>
            </figure>

            <p className="max-w-[26em] font-[family-name:var(--font-display)] text-[clamp(21px,2.2vw,28px)] leading-[1.3] text-[var(--ink)]">
              The opportunity wasn&rsquo;t another resource directory. It was a lower-friction entry point to support.
            </p>
          </div>
        </div>
      </Section>

      {/* 03 — PRODUCT STRATEGY */}
      <Section id="strategy">
        <SectionHead n="03" eyebrow="Product strategy" title="We weren’t designing a replacement for therapy. We were designing what comes before it." />

        <div className="mt-10 grid gap-3">
          <div className="p-6" style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--radius)" }}>
            <p className="eyebrow" style={{ color: FRICTION }}>
              Traditional support journey
            </p>
            <div className="mt-5 opacity-80">
              <Chain size="sm" nodes={traditionalJourney} />
            </div>
          </div>

          <div className="flex justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--ink)" }}>
              <Icon className="icon-line !h-5 !w-5" style={{ stroke: "var(--bg)" }}>
                {i.arrowD}
              </Icon>
            </span>
          </div>

          <div className="panel-sage p-8 sm:p-10">
            <p className="eyebrow" style={{ color: CALM }}>
              The Wellnut journey
            </p>
            <div className="mt-7">
              <Chain size="lg" nodes={wellnutJourney} />
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[32em] font-[family-name:var(--font-display)] text-[clamp(22px,2.4vw,30px)] leading-[1.3] text-[var(--ink)]">
          Reduce the friction of starting — without pretending the product replaces human care.
        </p>
      </Section>

      {/* 04 — RESEARCH → PRODUCT */}
      <Section id="research">
        <div className="sec-grid">
          <SectionHead n="04" eyebrow="Research → product" title="Research didn’t just validate the concept. It changed what we built.">
            <p>
              A 33-student survey across six disciplines told us what students needed. A licensed
              therapist told us how to deliver it. Neither alone was enough.
            </p>
          </SectionHead>

          <figure className="panel p-6 lg:mt-10" aria-label="Two research methods feeding one product direction">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: i.doc, value: "33", label: "students surveyed", out: "What the barriers were" },
                { icon: i.chat, value: "1", label: "therapist consultation", out: "How support should feel" },
              ].map((c) => (
                <div key={c.label} className="p-5" style={{ background: "var(--bg-raised)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
                  <div className="flex items-center gap-3">
                    <Icon>{c.icon}</Icon>
                    <p className="font-[family-name:var(--font-display)] text-[30px] leading-none text-[var(--ink)]">{c.value}</p>
                  </div>
                  <p className="mt-1 text-[13px] text-[var(--body)]">{c.label}</p>
                  <div className="my-2.5 flex">
                    <Arrow dir="down" className="!h-4 !w-4" />
                  </div>
                  <p className="text-[14px] font-medium text-[var(--ink)]">{c.out}</p>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 200 26" preserveAspectRatio="none" aria-hidden className="block h-6 w-full">
              <path d="M50 0 C 50 14, 100 12, 100 26 M150 0 C 150 14, 100 12, 100 26" fill="none" stroke="var(--border-strong)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="px-5 py-5" style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}>
              <p className="eyebrow" style={{ color: "var(--on-deep-muted, #c5cec7)" }}>
                One focused experience
              </p>
              <p className="mt-2 text-[14.5px] leading-snug" style={{ color: "var(--on-deep, #f2efe7)" }}>
                Private environment → acknowledgement → guided practice.
              </p>
            </div>
          </figure>
        </div>

        <ol className="mt-10 flex flex-col gap-4">
          {researchChanges.map((c) => (
            <li key={c.n} className="panel p-6 lg:p-7">
              <div className="flex items-baseline gap-3">
                <span className="numeral !text-[26px]">{c.n}</span>
                <h3 className="text-[20px] leading-snug">{c.title}</h3>
              </div>
              <div className="mt-5 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch">
                {[
                  { label: "Finding", text: c.finding, style: { border: "1px solid var(--border)", background: "var(--bg-raised)" } as CSSProperties },
                  { label: "Decision", text: c.decision, style: { border: `1px solid ${CALM}`, background: "var(--panel-sage)" } as CSSProperties, labelColor: CALM },
                  { label: "Why", text: c.why, style: { border: "1px solid var(--ink)", background: "var(--ink)" } as CSSProperties, dark: true },
                ].map((stage, idx, arr) => (
                  <div key={stage.label} className="contents">
                    <div className="flex flex-col p-4" style={{ ...stage.style, borderRadius: "var(--radius)" }}>
                      <p className="meta" style={{ color: stage.dark ? "var(--on-deep-muted, #c5cec7)" : stage.labelColor }}>
                        {stage.label}
                      </p>
                      <p className="mt-2 text-[14.5px] leading-snug" style={{ color: stage.dark ? "var(--on-deep, #f2efe7)" : "var(--ink)" }}>
                        {stage.text}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flex items-center justify-center py-0.5 md:py-0">
                        <Arrow dir="down" className="md:hidden" />
                        <Arrow className="hidden md:block" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 05 — THE EXPERIENCE */}
      <Section id="experience">
        <div className="sec-grid">
          <SectionHead n="05" eyebrow="The experience" title="A focused journey from emotion to regulation." />
          <div className="sec-copy lg:pt-10">
            <p>
              Six steps, built as one continuous experience: arrive in the forest, say how you feel,
              be acknowledged, reflect, breathe, and leave with a next step.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "652 / 362", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <Image src="/img/wellnut/pov-forest.jpg" alt="In-headset view of the Wellnut forest, with the avatar waiting in the clearing." fill sizes="(max-width: 1024px) 94vw, 560px" className="object-cover" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">From the build — the forest as the student sees it.</figcaption>
          </figure>
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "652 / 362", borderRadius: "var(--radius)", border: "1px solid var(--border)", background: "#111" }}>
              <Image src="/img/wellnut/emotion-bubbles.jpg" alt="The Lonely and Stressed emotion bubbles floating above the avatar in the forest." fill sizes="(max-width: 1024px) 94vw, 560px" className="object-cover object-[50%_35%]" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">From the build — emotion selection: Lonely or Stressed.</figcaption>
          </figure>
        </div>

        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((s, idx) => {
            const emphasis = idx >= 4;
            return (
              <li
                key={s.n}
                className="flex items-start gap-4 p-5"
                style={{ background: emphasis ? "var(--ink)" : "var(--bg-raised)", borderRadius: "var(--radius)", border: emphasis ? "1px solid var(--ink)" : "1px solid var(--border)" }}
              >
                <span className="font-[family-name:var(--font-display)] text-[30px] leading-none" style={{ color: emphasis ? "var(--on-deep-numeral, #c29a79)" : "var(--numeral)" }}>
                  {s.n}
                </span>
                <div className="flex-1">
                  <Icon className="icon-line !h-5 !w-5" style={emphasis ? { stroke: "var(--on-deep, #f2efe7)" } : undefined}>
                    {s.icon}
                  </Icon>
                  <p className="mt-2.5 text-[16px] font-medium" style={{ color: emphasis ? "var(--on-deep, #f2efe7)" : "var(--ink)" }}>
                    {s.title}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-snug" style={{ color: emphasis ? "var(--on-deep-muted, #c5cec7)" : "var(--body)" }}>
                    {s.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* 06 — CONVERSATIONAL DESIGN */}
      <Section id="conversation">
        <div className="sec-grid">
          <SectionHead n="06" eyebrow="Conversational design" title="Validate first. Guide second.">
            <p>
              Originally the avatar moved straight from emotion selection into meditation. The
              therapist consultation added a step in between.
            </p>
          </SectionHead>

          <figure className="panel p-6 sm:p-7" aria-label="The interaction model after the therapist consultation">
            <div className="flex flex-col gap-2.5">
              <p className="max-w-[80%] px-4 py-3 text-[14.5px] leading-snug text-[var(--ink)]" style={{ background: "var(--bg-raised)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
                “I&rsquo;m stressed. Everything feels like a lot right now.”
              </p>
              <p className="ml-auto max-w-[85%] px-4 py-3 text-[14.5px] leading-snug" style={{ background: "var(--ink)", color: "var(--on-deep, #f2efe7)", borderRadius: "var(--radius)" }}>
                “That sounds really tough. You&rsquo;re not alone in feeling this way. Would you like
                to take a moment to breathe together?”
              </p>
            </div>
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--rule)" }}>
              <Chain
                size="sm"
                nodes={[
                  { icon: i.ear, label: "Acknowledge", tone: "calm" },
                  { icon: i.chat, label: "Listen", tone: "calm" },
                  { icon: i.breathe, label: "Guide", tone: "strong" },
                ]}
              />
            </div>
            <figcaption className="meta mt-5">The interaction model — written for the build, not a screenshot.</figcaption>
          </figure>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guardrails.map((g) => (
            <li key={g.title} className="panel flex flex-col p-5">
              <Icon>{g.icon}</Icon>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{g.title}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{g.body}</p>
            </li>
          ))}
        </ul>

        <blockquote className="mt-8 max-w-[46em] pl-5" style={{ borderLeft: `2px solid ${CALM}` }}>
          <p className="font-[family-name:var(--font-display)] text-[clamp(19px,1.8vw,24px)] leading-[1.4] text-[var(--ink)]">
            &ldquo;The avatar should model a healthy relationship — providing space, listening, and
            validation — while maintaining appropriate boundaries. It should feel like someone who
            cares, without replacing human connection.&rdquo;
          </p>
          <footer className="meta mt-3">Licensed therapist consultation · Dec 2024</footer>
        </blockquote>

        <p className="mt-6 text-[12.5px] leading-relaxed text-[var(--muted)]">
          Wellnut is not therapy, and was never presented as therapy.
        </p>
      </Section>

      {/* 07 — MY ROLE */}
      <Section id="role">
        <div className="sec-grid">
          <SectionHead n="07" eyebrow="My role" title="I connected research, coordination, and the product experience." />
          <div className="sec-copy lg:pt-10">
            <p>
              As UX Researcher and Project Coordinator, I worked across research synthesis, product
              direction, experience design, and team coordination.
            </p>
            <p>
              I translated student and expert input into product decisions while keeping the team
              focused on <strong className="font-medium text-[var(--ink)]">a buildable MVP.</strong>
            </p>
          </div>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {roleMap.map((r, idx) => (
            <li key={r.title} className="panel relative flex flex-col p-5">
              <div className="flex items-center justify-between">
                <Icon>{r.icon}</Icon>
                <span className="font-[family-name:var(--font-display)] text-[18px] text-[var(--numeral)]" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{r.title}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <li key={t} className="tag !bg-[var(--bg-raised)] !text-[11.5px]">
                    {t}
                  </li>
                ))}
              </ul>
              {idx < roleMap.length - 1 && (
                <span aria-hidden className="absolute -right-[11px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full lg:flex" style={{ background: "var(--bg)" }}>
                  <Icon className="icon-line !h-3.5 !w-3.5">{i.arrowR}</Icon>
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* 08 — THE PROCESS */}
      <Section id="process">
        <SectionHead n="08" eyebrow="The process" title="Four phases. One progressively sharper product." />

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-[10%] right-[10%] top-[22px] hidden h-px lg:block" style={{ background: "var(--border-strong)" }} />
          {phases.map((p, idx) => (
            <li key={p.title} className="relative flex flex-col items-start lg:items-center lg:text-center">
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full" style={{ background: idx === phases.length - 1 ? "var(--ink)" : "var(--bg)", border: "1px solid var(--ink)" }}>
                <Icon className="icon-line !h-5 !w-5" style={idx === phases.length - 1 ? { stroke: "var(--bg)" } : undefined}>
                  {p.icon}
                </Icon>
              </span>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-[16px] text-[var(--numeral)]">{String(idx + 1).padStart(2, "0")}</span>
                <span className="eyebrow !text-[var(--ink)]">{p.title}</span>
              </p>
              <p className="meta mt-1">{p.weeks}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)] lg:max-w-[26ch]">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 09 — PRODUCT SCOPE */}
      <Section id="scope">
        <div className="sec-grid">
          <SectionHead n="09" eyebrow="Product scope" title="One exceptional experience over five half-finished features." />
          <div className="sec-copy lg:pt-10">
            <p>
              Scope was a research decision, not simply an engineering constraint. The survey pointed
              to one journey that mattered most, so the team built that journey properly.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="panel-sage p-7">
            <p className="eyebrow" style={{ color: CALM }}>
              Build now — v1
            </p>
            <ul className="mt-5 flex flex-col">
              {buildNow.map((f) => (
                <li key={f} className="flex items-center gap-3 py-3 text-[15px] text-[var(--ink)]" style={{ borderTop: "1px solid var(--rule)" }}>
                  <Icon className="icon-line !h-5 !w-5 flex-none" style={{ stroke: CALM }}>
                    {i.check}
                  </Icon>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7" style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--radius)" }}>
            <p className="eyebrow" style={{ color: FRICTION }}>
              Not in v1
            </p>
            <ul className="mt-5 flex flex-col">
              {notInV1.map((f) => (
                <li key={f} className="flex items-center gap-3 py-3 text-[15px] text-[var(--body)]" style={{ borderTop: "1px solid var(--rule)" }}>
                  <Icon className="icon-line !h-5 !w-5 flex-none" style={{ stroke: FRICTION }}>
                    {i.cross}
                  </Icon>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 10 — BUILDING THE EXPERIENCE */}
      <Section id="build">
        <div className="sec-grid">
          <SectionHead n="10" eyebrow="From concept to prototype" title="The research had to survive contact with a real build." />
          <div className="sec-copy lg:pt-10">
            <p>
              The team translated the experience model into a working Unreal environment while
              coordinating research, development, environment art, character art, and audio.
            </p>
            <p>
              No one on the team had used Unreal before, so the build included learning the
              toolchain while producing the prototype.
            </p>
          </div>
        </div>

        <figure className="mt-10 panel p-7 sm:p-9" aria-label="Build pipeline from research findings to the showcase build">
          <Chain size="sm" nodes={pipeline} />
        </figure>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "1600 / 900", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <Image src="/img/wellnut/blueprint-editor.jpg" alt="The Unreal Engine editor: the emotion-bubble widget blueprint beside the forest level." fill sizes="(max-width: 1024px) 94vw, 660px" className="object-cover" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">
              The emotion-bubble blueprint that branches the dialogue, beside the level it runs in.
            </figcaption>
          </figure>
          <figure>
            <div className="video-frame" style={{ aspectRatio: "9 / 16" }}>
              <video controls playsInline preload="metadata" muted loop aria-label="Building the Wellnut forest environment inside the Unreal editor">
                <source src="/img/wellnut/build-environment.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">Building the forest, in the editor.</figcaption>
          </figure>
        </div>
      </Section>

      {/* 11 — VALIDATION */}
      <Section id="validation">
        <div className="sec-grid">
          <SectionHead n="11" eyebrow="Validation" title="We put the experience in front of people before calling it finished." />
          <div className="sec-copy lg:pt-10">
            <p>
              The prototype was exhibited at the Jarvis Innovation Showcase in May 2025. Attendees
              put the headset on, went through the experience, and left feedback directly on a Wall
              of Feedback.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius)" }}>
              <Image src="/img/wellnut/vr-session.jpg" alt="An attendee trying Wellnut in the headset at the showcase, with the run mirrored on a screen." fill sizes="(max-width: 1024px) 94vw, 380px" className="object-cover" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">An attendee in the experience.</figcaption>
          </figure>
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius)" }}>
              <Image src="/img/wellnut/showcase-presentation.jpg" alt="The team presenting Wellnut to a full room at the Jarvis Innovation Showcase." fill sizes="(max-width: 1024px) 94vw, 380px" className="object-cover object-[50%_40%]" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">Presenting at the showcase.</figcaption>
          </figure>
          <figure>
            <div className="video-frame" style={{ aspectRatio: "9 / 16" }}>
              <video controls playsInline preload="metadata" muted loop aria-label="Guiding a first-time user into the Wellnut experience at the showcase">
                <source src="/img/wellnut/vr-guided-session.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">Guiding a first-time user in.</figcaption>
          </figure>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 4", borderRadius: "var(--radius)" }}>
              <Image src="/img/wellnut/wall-of-feedback.jpg" alt="The Wall of Feedback: sticky notes left by showcase attendees around the team's poster." fill sizes="(max-width: 1024px) 94vw, 420px" className="object-cover" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">The Wall of Feedback, as attendees left it.</figcaption>
          </figure>

          <div className="flex flex-col justify-center gap-6 panel p-8">
            <blockquote className="pl-5" style={{ borderLeft: `2px solid ${CALM}` }}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(22px,2.4vw,30px)] leading-[1.3] text-[var(--ink)]">
                &ldquo;This feels like talking to someone who actually cares.&rdquo;
              </p>
              <footer className="meta mt-3">Attendee feedback — Jarvis Innovation Showcase, May 2025</footer>
            </blockquote>
            <p className="text-[15px] leading-[1.7] text-[var(--body)]">
              The notes also asked for things the MVP didn&rsquo;t have: meditative background audio,
              a skip button, a more natural voice, emotes for the avatar. That list became the
              clearest brief for what to build next.
            </p>
          </div>
        </div>
      </Section>

      {/* 12 — IMPACT */}
      <Section id="impact">
        <div className="sec-grid">
          <SectionHead n="12" eyebrow="Impact" title="The prototype moved the idea from research into something people could actually experience." />
          <div className="sec-copy lg:pt-10">
            <p>
              The strongest result wasn&rsquo;t a scale metric. It was moving from an abstract problem
              — students aren&rsquo;t using the support that exists — to a tangible experience built
              around the actual barriers.
            </p>
          </div>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((m) => (
            <div key={m.label} className="flex flex-col-reverse pt-4" style={{ borderTop: "1px solid var(--border-strong)" }}>
              <dt className="mt-2 text-[13px] leading-snug text-[var(--body)]">{m.label}</dt>
              <dd className="font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(34px, 3.6vw, 50px)" }}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* 13 — IF THIS SHIPPED */}
      <Section id="shipped">
        <div className="sec-grid">
          <SectionHead n="13" eyebrow="If this shipped" title="The real test would be whether students choose to come back." />
          <div className="sec-copy lg:pt-10">
            <p>
              Wellnut is a <strong className="font-medium text-[var(--ink)]">prototype, not a deployed clinical or commercial service.</strong>{" "}
              There are no treatment outcomes or adoption numbers to claim.
            </p>
            <p>The right success criteria would be behavioral.</p>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {successCriteria.map((s) => (
            <li key={s.title} className="panel flex flex-col p-5">
              <Icon>{s.icon}</Icon>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{s.title}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 14 — BEFORE SCALING */}
      <Section id="risks">
        <SectionHead n="14" eyebrow="Before scaling" title="The prototype answered some questions. It also exposed the next ones." />

        <div className="mt-10 grid gap-4 md:grid-cols-3" role="table" aria-label="Open risks by area">
          {(["Evidence", "Product", "Operations"] as const).map((area) => (
            <div key={area} role="rowgroup" className="flex flex-col gap-3">
              <p role="columnheader" className="meta pb-2" style={{ borderBottom: "1px solid var(--border-strong)" }}>
                {area === "Evidence" ? "Research evidence" : area}
              </p>
              {risks
                .filter((r) => r.area === area)
                .map((r) => (
                  <div key={r.title} role="row" className="p-5" style={{ border: `1px dashed ${FRICTION}`, borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
                    <div className="flex items-center justify-between">
                      <Icon className="icon-line !h-5 !w-5">{r.icon}</Icon>
                      <span className="meta rounded-full px-2 py-0.5" style={{ color: FRICTION, border: `1px solid ${FRICTION}` }}>
                        Open
                      </span>
                    </div>
                    <h3 role="cell" className="mt-3 text-[17px] leading-snug">
                      {r.title}
                    </h3>
                    <p role="cell" className="mt-1.5 text-[14px] leading-relaxed text-[var(--body)]">
                      {r.body}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Section>

      {/* 15 — WHAT'S NEXT */}
      <Section id="next">
        <div className="sec-grid">
          <SectionHead n="15" eyebrow="What’s next" title="The next phase is broader validation, not simply more features." />
          <div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {nextSteps.map((n) => (
                <li key={n.title} className="panel p-6">
                  <Icon>{n.icon}</Icon>
                  <h3 className="mt-4 text-[17px] leading-snug">{n.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{n.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 pl-5 text-[15px] leading-relaxed text-[var(--body)]" style={{ borderLeft: `2px solid ${CALM}` }}>
              Scale the evidence before scaling the feature set.
            </p>
          </div>
        </div>
      </Section>

      {/* CLOSING */}
      <DeepBand>
        <div className="wrap py-[clamp(64px,8vw,112px)]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
            <div>
              <p className="eyebrow eyebrow-rule">Final thoughts</p>
              <h2 className="mt-5" style={{ fontSize: "clamp(36px, 4.4vw, 58px)", lineHeight: 1.06, maxWidth: "13em" }}>
                The hardest part wasn&rsquo;t building VR. It was giving students a reason to take the
                first step.
              </h2>
            </div>
            <div>
              <p className="lead">
                Wellnut started with a behavioral gap, not a technology brief: support existed, but
                many students were not ready to use it.
              </p>
              <p className="lead mt-3">
                Research shaped the platform, the interaction model, the ethical boundaries, and the
                scope — <strong className="font-medium text-[var(--ink)]">turning that insight into a prototype students could actually experience.</strong>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#experience" className="btn">
                  Explore the experience <span aria-hidden>&#8594;</span>
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
              <p className="mt-2 font-[family-name:var(--font-display)] text-[30px] leading-tight text-[var(--ink)]">Invisible Impacts</p>
            </div>
            <Link href="/projects/invisible-impacts" className="btn btn-outline">
              View case study <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </DeepBand>
    </div>
  );
}
