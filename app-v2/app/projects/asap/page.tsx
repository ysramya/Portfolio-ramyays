import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";
import PhoneShot from "@/components/ds/PhoneShot";
import { DemoVideo, WatchDemoButton } from "./Demo";

/**
 * ASAP — written as a product case, per ASAP_Case_Study_Final_Claude_Brief.md.
 *
 * Order is the brief's: hero → problem → demo → direction → experience →
 * AI design → build → validation → impact → role → what's next → close.
 * The demo sits directly after the problem so a reader sees the product
 * before any process, and "Try the prototype" appears in the hero, under
 * the demo and in the close.
 *
 * Every claim here traces to the project's own research record. The three
 * observations in section 01 are findings from the six interviews, shown
 * as observations — not reconstructed as participant quotes.
 */

export const metadata: Metadata = {
  title: "ASAP — Ramya Yerramilli",
  description:
    "ASAP is an AI-powered planning experience that helps people break down a goal, figure out what matters first, and start taking action.",
};

const PROTOTYPE_URL = "https://asap-flame.vercel.app/";

/* ── Icons: 24×24 line set, 1.4 stroke (see .icon-line) ─────────────────── */

function Icon({ children, className = "icon-line" }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      {children}
    </svg>
  );
}

const icons = {
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c.4-3.6 3.5-5.6 7.5-5.6s7.1 2 7.5 5.6" />
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
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M10.8 18.3h2.4" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.8" />
      <path d="M10 3.5V7M14 3.5V7M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5" />
    </>
  ),
  blank: (
    <>
      <path d="M6 3.5h8l4 4v13H6z" />
      <path d="M14 3.5v4h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </>
  ),
  message: <path d="M4.5 5h15v10.5H10L5.5 19.5v-4h-1z" />,
  bulb: (
    <>
      <path d="M9.5 18h5M10.5 21h3" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1v.1h5v-.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3Z" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.4c-.6.3-1 .8-1 1.5v.7M12 16.8h.01" />
    </>
  ),
  steps: <path d="M4 19h4.5v-4.5H13V10h4.5V5.5H20" />,
  gauge: (
    <>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="M12 16l3.6-4.4" />
    </>
  ),
  code: <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />,
  branch: (
    <>
      <circle cx="6.5" cy="5.5" r="2" />
      <circle cx="6.5" cy="18.5" r="2" />
      <circle cx="17.5" cy="8" r="2" />
      <path d="M6.5 7.5v9M17.5 10v.5a4 4 0 0 1-4 4h-7" />
    </>
  ),
  shield: <path d="M12 3.2 19 6v5.2c0 4.6-3 8.2-7 9.6-4-1.4-7-5-7-9.6V6z" />,
  layers: (
    <>
      <path d="M12 3.5 3.5 8 12 12.5 20.5 8z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  history: (
    <>
      <path d="M4 12a8 8 0 1 0 2.4-5.7" />
      <path d="M4 4.5v4h4M12 8v4.2l2.8 1.8" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3A4 4 0 0 0 13 5.3l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" />
    </>
  ),
  chart: <path d="M5 20v-8M12 20V5M19 20v-5M3 20h18" />,
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12.3 2.5 2.5 5-5.2" />
    </>
  ),
  arrow: <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />,
};

function PrototypeButton({ className = "btn" }: { className?: string }) {
  return (
    <TrackedLink
      label="Live Prototype"
      href={PROTOTYPE_URL}
      target="_blank"
      rel="noopener"
      className={className}
    >
      Try the prototype <span aria-hidden>&#8599;</span>
    </TrackedLink>
  );
}

/* ── Content ─────────────────────────────────────────────────────────────── */

const projectInfo = [
  { label: "Role", value: "UX Research & Conversation Design", icon: icons.person },
  { label: "Team", value: "4-person team", icon: icons.team },
  { label: "Timeline", value: "10 weeks", icon: icons.clock },
  { label: "Platform", value: "Mobile prototype", icon: icons.phone },
  { label: "Technology", value: "Claude API", icon: icons.chip },
];

/** Findings from the six interviews — observations, not verbatim quotes. */
const observations = [
  { icon: icons.blank, text: "People froze at the blank page, not at the to-do list." },
  {
    icon: icons.calendar,
    text: "Participants already used Notion and Google Calendar. Storing and tracking tasks was never the gap.",
  },
  {
    icon: icons.message,
    text: "Generic AI suggestions read as advice from something that hadn’t listened.",
  },
];

const principles = [
  {
    icon: icons.question,
    title: "Ask before recommending",
    body: "The AI gathers context before suggesting next steps.",
  },
  {
    icon: icons.steps,
    title: "One step at a time",
    body: "The experience avoids dropping a long plan on the user all at once.",
  },
  {
    icon: icons.gauge,
    title: "Be clear about uncertainty",
    body: "Confidence cues and limitations help users understand how much to rely on an AI recommendation.",
  },
];

const flow = [
  {
    label: "Goal",
    title: "Set the goal",
    body: "The user describes what they want to accomplish in their own words.",
    src: "/img/asap/phones/goal.png",
    alt: "ASAP home screen with a task entered: “I need to prepare for a first client meeting”",
  },
  {
    label: "Clarify",
    title: "Add context",
    body: "ASAP asks targeted questions before making recommendations.",
    src: "/img/asap/phones/clarify.png",
    alt: "ASAP asking “What best describes you right now?” with options such as early career professional and career changer",
  },
  {
    label: "Plan",
    title: "Get next steps",
    body: "The system turns that context into practical actions.",
    src: "/img/asap/phones/plan.png",
    alt: "A five-step plan tailored for an early-career professional, with the first step highlighted and marked high confidence",
  },
  {
    label: "Focus",
    title: "Focus",
    body: "The user works through one step at a time.",
    src: "/img/asap/phones/focus.png",
    alt: "Focus mode for “Clarify the goal of the meeting” with a 15-minute timer and the week’s steps above it",
  },
];

const aiAreas = [
  {
    icon: icons.code,
    title: "Prompt structure",
    body: "Built the prompt logic around the information the AI needed to make useful recommendations.",
  },
  {
    icon: icons.message,
    title: "Conversation design",
    body: "Defined how ASAP asks questions, responds to users, and moves the conversation forward.",
  },
  {
    icon: icons.branch,
    title: "AI behavior",
    body: "Defined when the system should ask, recommend, clarify, or stop.",
  },
  {
    icon: icons.shield,
    title: "Confidence and boundaries",
    body: "Made uncertainty and limitations visible instead of presenting every response with the same level of confidence.",
  },
];

/** The behaviour model, simplified from the prompt rules into four moves. */
const behaviour = [
  { move: "Take the goal", detail: "In the user’s own words, however broad." },
  { move: "Ask", detail: "Collect role and context before recommending anything." },
  { move: "Recommend", detail: "Break the goal into steps. Every step carries a confidence level." },
  {
    move: "Clarify or stop",
    detail: "Coach when someone is stuck. Stop once there’s a clear next step, and say plainly when a request is out of scope.",
  },
];

const issues = [
  {
    title: "Recommendations were too similar.",
    saw: "Different scenarios could produce similar recommendations.",
    changed: "We added more role and context information to the prompt structure.",
  },
  {
    title: "Some responses were unreliable.",
    saw: "Some interactions stalled or failed to return a useful response.",
    changed: "We tightened the prompt constraints and response handling.",
  },
  {
    title: "Users lost track of progress.",
    saw: "It wasn’t always obvious where users were in the planning flow.",
    changed: "We added clearer navigation and progression cues.",
  },
];

const metrics = [
  { value: "6", label: "User interviews" },
  { value: "4", label: "Usability scenarios" },
  { value: "3", label: "Design iterations" },
  { value: "1", label: "Functional AI prototype" },
];

const findings = [
  {
    title: "The step-by-step model made the product easier to approach.",
    body: "Users responded well to having a smaller action in front of them instead of a long list.",
  },
  {
    title: "Confidence cues helped set expectations.",
    body: "Users had a better sense of how much weight to put on an AI recommendation when the system communicated confidence.",
  },
  {
    title: "The experience felt lighter when users could focus.",
    body: "Showing one action at a time reduced the feeling of having to manage everything at once.",
  },
];

const opportunities = [
  { icon: icons.layers, title: "More flexible planning", body: "Adjust the depth of a plan based on how complex the goal is." },
  {
    icon: icons.history,
    title: "Better context across sessions",
    body: "Let ASAP retain useful information so users don’t have to start from scratch.",
  },
  {
    icon: icons.link,
    title: "Connect to existing tools",
    body: "Bring planning into calendars, notes, and other tools people already use.",
  },
  {
    icon: icons.chart,
    title: "Measure what actually helps",
    body: "Test whether the experience improves follow-through, confidence, and completion over time.",
  },
];

const owned = [
  "UX research and usability testing",
  "Conversation design",
  "Prompt architecture",
  "AI behavior and response patterns",
  "Information architecture",
  "Confidence and limitation states",
  "Onboarding and product copy",
  "Iterative prototyping",
  "Translating research findings into product decisions",
];

const nextSteps = [
  { icon: icons.layers, title: "Handle more complexity", body: "Adapt the planning experience to different types and sizes of goals." },
  { icon: icons.link, title: "Work with existing tools", body: "Connect planning to calendars, notes, and other everyday workflows." },
  { icon: icons.chart, title: "Prove the value", body: "Measure whether users actually complete more of what they set out to do." },
];

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function AsapPage() {
  return (
    <>
      {/* HERO — answers the six-second test above the fold: what it is, what
          it does, what Ramya did, that it was built, and where to see it. */}
      <DeepBand>
        <div
          className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10"
          style={{ paddingTop: "calc(var(--nav-h) + 36px)", paddingBottom: 64 }}
        >
          <div>
            <p className="eyebrow eyebrow-rule">Case study</p>
            <h1 className="mt-5" style={{ fontSize: "clamp(60px, 7.4vw, 104px)", lineHeight: 0.95 }}>
              ASAP
            </h1>
            <h2 className="mt-4" style={{ fontSize: "clamp(30px, 3.2vw, 44px)", lineHeight: 1.12, maxWidth: "12em" }}>
              Turn big goals into small, doable steps.
            </h2>
            <p className="lead mt-5">
              ASAP is an AI-powered planning experience that helps people break down a
              goal, figure out what matters first, and start taking action.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Disciplines">
              {["AI Product Design", "UX Research", "Conversation Design"].map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrototypeButton />
              <WatchDemoButton />
            </div>

            <dl
              className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 pt-7 sm:grid-cols-3"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              {projectInfo.map((m) => (
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

          {/* Real screens: goal entry, the generated plan, focus mode. */}
          <div className="relative mx-auto w-full max-w-[540px]" style={{ aspectRatio: "540 / 560" }}>
            <div className="absolute left-0 top-[13%] w-[35%]">
              <PhoneShot
                src="/img/asap/phones/goal.png"
                alt="ASAP home screen with a task entered"
                sizes="(max-width: 1024px) 32vw, 190px"
                priority
              />
            </div>
            <div className="absolute right-0 top-[13%] w-[35%]">
              <PhoneShot
                src="/img/asap/phones/focus.png"
                alt="ASAP focus mode with a timer for the current step"
                sizes="(max-width: 1024px) 32vw, 190px"
                priority
              />
            </div>
            <div className="absolute left-1/2 top-0 z-10 w-[41%] -translate-x-1/2">
              <PhoneShot
                src="/img/asap/phones/plan.png"
                alt="ASAP’s five-step plan, with the first step marked high confidence"
                sizes="(max-width: 1024px) 38vw, 222px"
                priority
              />
            </div>
          </div>
        </div>
      </DeepBand>

      {/* 01 — THE PROBLEM: statement · observations · key insight */}
      <Section id="problem" divided={false}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10">
          <SectionHead
            n="01"
            eyebrow="The problem"
            title="People have goals. The hard part is knowing where to start."
          >
            <p>
              Whether it’s changing careers, learning a new skill, or starting a personal
              project, turning a broad goal into a plan can feel overwhelming.
            </p>
            <p>
              Existing productivity tools assume the plan already exists. Generic AI can
              generate a lot of advice without helping you figure out what actually matters
              first.
            </p>
            <p>That was the problem we set out to solve.</p>
          </SectionHead>

          <div className="lg:pt-1">
            <p className="meta">What we heard in six interviews</p>
            <ul className="mt-3">
              {observations.map((o) => (
                <li
                  key={o.text}
                  className="flex gap-4 py-5"
                  style={{ borderTop: "1px solid var(--rule)" }}
                >
                  <span
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
                    style={{ border: "1px solid var(--border-strong)" }}
                  >
                    <Icon className="icon-line !h-[18px] !w-[18px]">{o.icon}</Icon>
                  </span>
                  <p className="text-[15px] leading-relaxed text-[var(--ink)]">{o.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="panel-sage self-start p-7">
            <div className="flex items-center gap-3">
              <Icon>{icons.bulb}</Icon>
              <p className="eyebrow">Key insight</p>
            </div>
            <h3 className="mt-5 text-[23px] leading-[1.28]">
              People didn’t need another task manager. They needed help getting started.
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-[var(--body)]">
              The opportunity was to create a guided planning experience that could take an
              unclear goal and turn it into a realistic first step.
            </p>
          </aside>
        </div>
      </Section>

      {/* 02 — PRODUCT DEMO: directly after the problem, one of the largest
          elements on the page. */}
      <Section id="demo">
        <SectionHead
          n="02"
          eyebrow="See ASAP in action"
          title="From “I don’t know where to start” to a clear next step."
        >
          <p>
            ASAP starts with a broad goal, asks a few questions to understand the context,
            and turns the answers into a practical next step.
          </p>
          <p>Watch the full flow below.</p>
        </SectionHead>

        <div className="mt-10">
          <DemoVideo poster="/img/asap/demo-poster.jpg" />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <PrototypeButton />
          <p className="text-[14px] text-[var(--muted)]">Explore the planning flow yourself.</p>
        </div>
      </Section>

      {/* 03 — PRODUCT DIRECTION */}
      <Section id="direction">
        <div className="sec-grid">
          <SectionHead
            n="03"
            eyebrow="Product direction"
            title="We moved from “make me a plan” to “help me figure out the plan.”"
          >
            <p>The original concept was closer to a task-management tool.</p>
            <p>
              Research showed that users already had places to store tasks and manage their
              time. What they struggled with was deciding how to break an unfamiliar goal
              down.
            </p>
            <p>So we changed the role of ASAP.</p>
            <p>
              Instead of generating a finished plan, the product would help users work
              through the decisions behind it.
            </p>
          </SectionHead>

          <ul className="grid gap-4 sm:grid-cols-3">
            {principles.map((p) => (
              <li key={p.title} className="panel flex flex-col p-6">
                <Icon>{p.icon}</Icon>
                <h3 className="mt-5 text-[19px] leading-snug">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--body)]">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 04 — THE EXPERIENCE: GOAL → CLARIFY → PLAN → FOCUS */}
      <Section id="experience">
        <SectionHead n="04" eyebrow="The experience" title="A simple flow from goal to action.">
          <p>The experience is built around four moments.</p>
        </SectionHead>

        <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {flow.map((s, i) => (
            <li key={s.label} className="flex flex-col">
              <PhoneShot
                src={s.src}
                alt={s.alt}
                sizes="(max-width: 1024px) 42vw, 220px"
                className="mx-auto max-w-[210px]"
              />
              <div className="mt-7 flex items-center gap-3">
                <span className="numeral !text-[22px]" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow">{s.label}</span>
                {i < flow.length - 1 && (
                  <Icon className="icon-line ml-auto hidden !h-[18px] !w-[18px] opacity-60 lg:block">{icons.arrow}</Icon>
                )}
              </div>
              <h3 className="mt-3 text-[19px] leading-snug">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 05 — DESIGNING THE AI: the work behind the interface, as a
          simplified behaviour model beside the shipped confidence states. */}
      <Section id="ai">
        <div className="sec-grid">
          <div>
            <SectionHead n="05" eyebrow="Designing the AI" title="The interface was only part of the design.">
              <p>
                Because ASAP relies on AI, I also had to design what happens behind the
                interface — how the system asks questions, uses context, responds to users,
                and communicates uncertainty.
              </p>
            </SectionHead>

            <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {aiAreas.map((a) => (
                <li key={a.title}>
                  <Icon>{a.icon}</Icon>
                  <h3 className="mt-4 text-[18px] leading-snug">{a.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="panel grid gap-8 p-7 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] sm:items-center">
            <div>
              <p className="eyebrow">How ASAP behaves</p>
              <ol className="mt-6">
                {behaviour.map((b, i) => (
                  <li key={b.move} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < behaviour.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-[13px] top-8 bottom-1 w-px"
                        style={{ background: "var(--border-strong)" }}
                      />
                    )}
                    <span
                      className="relative flex h-7 w-7 flex-none items-center justify-center rounded-full text-[12px] font-medium"
                      style={{ background: "var(--ink)", color: "var(--bg)" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-[var(--ink)]">{b.move}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--body)]">{b.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <PhoneShot
                src="/img/asap/phones/confidence.png"
                alt="Steps labelled high, medium and low confidence, followed by the note “My time estimates are based on averages and may not match your pace. You know your speed better than I do.”"
                sizes="(max-width: 640px) 60vw, 200px"
                className="mx-auto max-w-[200px]"
              />
              <figcaption className="mt-4 text-center text-[12.5px] leading-relaxed text-[var(--muted)]">
                Confidence levels and a plain limitation note, as built.
              </figcaption>
            </div>
          </figure>
        </div>
      </Section>

      {/* 06 — BUILDING WITH REAL AI: ISSUE → CHANGE */}
      <Section id="build">
        <div className="sec-grid">
          <SectionHead
            n="06"
            eyebrow="Building with real AI"
            title="Testing the real AI exposed problems we couldn’t see in static screens."
          >
            <p>
              Once the prototype was connected to the Claude API, we could see how the
              experience behaved with different inputs.
            </p>
            <p>That surfaced a few issues we needed to address.</p>
          </SectionHead>

          <div>
            <div
              className="hidden gap-5 pb-3 md:grid md:grid-cols-[40px_minmax(0,1fr)_24px_minmax(0,1fr)]"
              aria-hidden
            >
              <span />
              <span className="meta">Issue</span>
              <span />
              <span className="meta">What changed</span>
            </div>
            <ol>
              {issues.map((it, i) => (
                <li
                  key={it.title}
                  className="grid gap-3 py-6 md:grid-cols-[40px_minmax(0,1fr)_24px_minmax(0,1fr)] md:gap-5"
                  style={{ borderTop: "1px solid var(--rule)" }}
                >
                  <span className="numeral !text-[24px]" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[18px] leading-snug">{it.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">
                      <span className="sr-only">What we saw: </span>
                      {it.saw}
                    </p>
                  </div>
                  <Icon className="icon-line mt-1 hidden !h-[18px] !w-[18px] md:block">{icons.arrow}</Icon>
                  <p className="text-[14px] leading-relaxed text-[var(--ink)]">
                    <span className="meta mb-1 block md:hidden">What changed</span>
                    <span className="sr-only md:not-sr-only">
                      <span className="sr-only">What changed: </span>
                    </span>
                    {it.changed}
                  </p>
                </li>
              ))}
            </ol>

            <figure
              className="mt-2 flex items-center gap-6 pt-6"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              {/* Width lives on a wrapper: PhoneShot is `w-full`, which beat a
                  `w-[96px]` passed to it and pushed the caption off-screen
                  on phones. */}
              <div className="w-[96px] flex-none">
                <PhoneShot
                  src="/img/asap/phones/steps-locked.png"
                  alt="The active step with a “1 of 5” counter, and later steps locked with “Unlocks after you finish step 1”"
                  sizes="110px"
                />
              </div>
              <figcaption className="text-[13.5px] leading-relaxed text-[var(--body)]">
                <span className="meta mb-1 block">After testing</span>
                Step counters and locked future steps made position in the plan visible at a
                glance.
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* 07 — VALIDATION */}
      <Section id="validation">
        <div className="sec-grid">
          <SectionHead n="07" eyebrow="Validation" title="What we learned from using it with people.">
            <p>
              We ran 6 user interviews and 4 usability scenarios across 3 design iterations
              using a live AI-powered prototype.
            </p>
          </SectionHead>

          <div>
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-[13px] leading-snug text-[var(--muted)]">{m.label}</dt>
                  <dd
                    className="font-[family-name:var(--font-display)] leading-none text-[var(--ink)]"
                    style={{ fontSize: "clamp(40px, 4vw, 52px)" }}
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="panel-sage mt-10 p-7">
              <p className="eyebrow">What we found</p>
              <ul className="mt-5 flex flex-col gap-6">
                {findings.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <Icon className="icon-line mt-0.5 !h-5 !w-5">{icons.check}</Icon>
                    <div>
                      <h3 className="text-[17px] leading-snug">{f.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--body)]">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <figure className="mt-14">
          <div className="media relative w-full" style={{ aspectRatio: "1464 / 960", border: "1px solid var(--border)" }}>
            <Image
              src="/img/asap/figma-overview.png"
              alt="The team’s synthesis board: problem framing, interview themes and feature prioritisation"
              fill
              sizes="(max-width: 1200px) 94vw, 1096px"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-3 text-[13px] text-[var(--muted)]">
            Synthesis board from the research phase — problem framing and feature
            prioritisation with the team.
          </figcaption>
        </figure>
      </Section>

      {/* 08 — IMPACT */}
      <Section id="impact">
        <div className="sec-grid">
          <SectionHead n="08" eyebrow="Impact" title="We ended with a clearer model for AI-guided planning.">
            <p>
              The prototype gave us a working interaction model for moving from user intent
              to context, recommendation, and action.
            </p>
            <p>It also made the next product questions much clearer.</p>
          </SectionHead>

          <div>
            <p className="meta">Future product opportunities — not shipped features</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
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

      {/* 09 — MY ROLE */}
      <Section id="role">
        <div className="sec-grid">
          <SectionHead
            n="09"
            eyebrow="My role"
            title="I worked on the experience between the user’s goal and the AI’s response."
          >
            <p>
              On a four-person team, I focused on the parts of the product that shaped how
              users interacted with the AI.
            </p>
          </SectionHead>

          <div>
            <p className="meta">I owned</p>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
              {owned.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3.5 text-[15px] leading-snug text-[var(--ink)]"
                  style={{ borderTop: "1px solid var(--rule)" }}
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: "var(--numeral)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-[var(--muted)]">
              HCI capstone, DePaul University.
            </p>
          </div>
        </div>
      </Section>

      {/* 10 — DESIGN SYSTEM */}
      <Section id="design-system">
        <div className="sec-grid">
          <SectionHead n="10" eyebrow="Design system" title="Calm by default, so the task stays dominant.">
            <p>
              A slate-teal core with warm neutrals, sage and amber accents, and a restrained
              semantic set — enough structure to keep AI states legible without letting the
              interface turn decorative.
            </p>
          </SectionHead>
          <div className="sec-copy lg:pt-10">
            <p>
              Weight carries hierarchy rather than colour, and amber is reserved for selection and
              guidance so a recommendation never competes with the step in front of you.
            </p>
          </div>
        </div>

        {/* The three boards are the project's own design-system exports, shown
            as they were drawn rather than rebuilt from the spec — each sits on
            a white mat because the boards carry their own light ground. */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <figure>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1390 / 1080", background: "#ffffff", borderRadius: "var(--radius)", border: "1px solid var(--border-strong)" }}
            >
              <Image
                src="/img/asap/design-system/colors.png"
                alt="ASAP colour board: the Slate Teal ramp from 900 to 50, warm neutrals from dark background to light, sage and amber accents, and the four semantic colours, each labelled with its token and hex."
                fill
                sizes="(max-width: 1024px) 94vw, 560px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">Colour tokens — slate teal, warm neutrals, sage and amber, semantic.</figcaption>
          </figure>

          <figure>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1421 / 884", background: "#ffffff", borderRadius: "var(--radius)", border: "1px solid var(--border-strong)" }}
            >
              <Image
                src="/img/asap/design-system/typography.png"
                alt="ASAP typography board: Inter from Google Fonts, with weight, size and line height for Heading 1 through Caption, and a note that heading line height and paragraph spacing are 1.1x the font size."
                fill
                sizes="(max-width: 1024px) 94vw, 560px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">Type scale — Inter, with hierarchy carried by weight.</figcaption>
          </figure>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <figure>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1390 / 1748", background: "#ffffff", borderRadius: "var(--radius)", border: "1px solid var(--border-strong)" }}
            >
              <Image
                src="/img/asap/design-system/components.png"
                alt="ASAP component board in dark and light mode: primary and disabled CTAs, secondary button, text link, circular icon button, option cards unselected and selected, sidebar nav items, the AI guidance card, dark and light text inputs with focus states, and the selection indicator."
                fill
                sizes="(max-width: 1024px) 94vw, 480px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">
              Components in both modes — CTAs, option cards, sidebar, the AI guidance card, inputs and selection.
            </figcaption>
          </figure>

          <div className="flex flex-col gap-4">
            <div className="panel-sage p-6">
              <p className="eyebrow">Interaction principles</p>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  { t: "Ask before recommending", b: "Gather context before the system proposes anything." },
                  { t: "One step at a time", b: "Keep the current action visually dominant." },
                  { t: "Make uncertainty visible", b: "Confidence and limits should be readable from the interface." },
                  { t: "Preserve progress", b: "Where you are, what's done, what's next, what's unavailable." },
                ].map((p2) => (
                  <li key={p2.t}>
                    <p className="text-[14.5px] font-medium text-[var(--ink)]">{p2.t}</p>
                    <p className="mt-0.5 text-[13px] leading-snug text-[var(--body)]">{p2.b}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6" style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--radius)" }}>
              <p className="eyebrow">Never</p>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--body)]">
                Neon AI gradients, unrelated brand colours, colour as the only indicator of state,
                or decoration that doesn&rsquo;t support the task.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 11 — WHAT'S NEXT */}
      <Section id="next">
        <div className="sec-grid">
          <SectionHead
            n="11"
            eyebrow="What’s next"
            title="The next step is making ASAP useful beyond the prototype."
          >
            <p>
              The current experience works as a focused planning tool. The next version would
              need to handle more complex goals, connect to the tools people already use, and
              prove that the guidance actually helps people follow through.
            </p>
          </SectionHead>

          <ul className="grid gap-4 sm:grid-cols-3">
            {nextSteps.map((n) => (
              <li key={n.title} className="panel p-6">
                <Icon>{n.icon}</Icon>
                <h3 className="mt-4 text-[18px] leading-snug">{n.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CLOSING — deep green, both CTAs again, then the next case study */}
      <DeepBand>
        <div className="wrap py-[clamp(64px,8vw,112px)]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
            <div>
              <p className="eyebrow eyebrow-rule">Final thoughts</p>
              <h2
                className="mt-5"
                style={{ fontSize: "clamp(36px, 4.4vw, 58px)", lineHeight: 1.06, maxWidth: "12em" }}
              >
                Good AI design isn’t about doing everything for people.
              </h2>
            </div>
            <div>
              <p className="lead">
                For ASAP, the better experience was one that helped people make the next
                decision themselves.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrototypeButton />
                <WatchDemoButton />
              </div>
            </div>
          </div>

          <div
            className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-8"
            style={{ borderTop: "1px solid var(--rule)" }}
          >
            <div>
              <p className="meta">Next project</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-[30px] leading-tight text-[var(--ink)]">
                PM Dashboard
              </p>
            </div>
            <Link href="/projects/mainstreet" className="btn btn-outline">
              View case study <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </DeepBand>
    </>
  );
}
