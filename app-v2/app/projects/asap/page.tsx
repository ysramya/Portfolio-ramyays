import type { Metadata } from "next";
import CaseStudyPage, { type CaseStudyData } from "@/components/case-study/CaseStudyPage";

/**
 * ASAP, per asap_case_study_brief.md: six chapters (Overview, The challenge,
 * Product thinking, The solution, Design decisions, Outcome) in the shared
 * layout. Every fact comes from the project's own record: six interviews, four
 * usability scenarios, three iterations, a working prototype on the Claude API.
 * It is a prototype, so there are no adoption numbers and no research or
 * features beyond that record are claimed (the brief's ADHD framing, a reflect
 * stage, rewards and recovery flows are not in the record and are left out).
 */

export const metadata: Metadata = {
  title: "ASAP | Ramya Yerramilli",
  description:
    "ASAP (AI Scaffolding Action Planner) is an AI-powered planning experience that helps people break down a goal, figure out what matters first, and start taking action.",
};

const P = "/img/asap/phones";
const phone = (n: string, alt: string) => ({ src: `${P}/${n}.png`, w: 526, h: 1080, alt });

const A = {
  goal: "ASAP home screen with a task entered: “I need to prepare for a first client meeting”",
  clarify: "ASAP asking “What best describes you right now?” with options such as early career professional and career changer",
  plan: "A five-step plan tailored for an early-career professional, with the first step highlighted and marked high confidence",
  confidence: "Steps labelled high, medium and low confidence, followed by the note “My time estimates are based on averages and may not match your pace. You know your speed better than I do.”",
  focus: "Focus mode for “Clarify the goal of the meeting” with a 15-minute timer and the week’s steps above it",
  locked: "The active step marked “Start Here, 1 of 5, Next up”, followed by step 2 of 5 and step 3 of 5, each locked until the one before is finished",
};

const data: CaseStudyData = {
  slug: "asap",
  title: "ASAP",
  kicker: "Case study · AI planning companion",
  tagline: "A productivity companion designed to help people get from “I need to do this” to a clear first step.",
  snapshot: [
    ["Role", "Product / UX Design"],
    ["Team", "4 people"],
    ["Platform", "Mobile prototype"],
    ["Status", "Working prototype"],
    ["Duration", "10 weeks"],
  ],
  cta: { label: "View prototype", href: "https://asap-flame.vercel.app/" },
  cta2: { label: "Watch product demo", href: "#demo" },
  hero: [
    phone("goal", A.goal),
    phone("plan", "ASAP’s five-step plan, with the first step marked high confidence"),
    phone("focus", "ASAP focus mode with a timer for the current step"),
  ],
  demo: {
    src: "/video/asap-demo.mp4",
    poster: "/img/asap/demo-poster.jpg",
    w: 1400,
    h: 778,
    alt: "ASAP product demo: entering a goal, answering the AI’s context questions, and working through the first step",
    cap: "Product demo: from a goal to the first step. No sound.",
  },
  challenge: {
    title: "Task lists record the work. They don’t always help people do it.",
    lead: "Six interviews showed people froze at the blank page, not at the to-do list. Participants already used Notion and Google Calendar; storing and tracking tasks was never the gap.",
    facts: [
      { v: "6", l: "interviews" },
    ],
    flow: { items: ["A big goal", "A blank page", "Generic AI advice"], arrows: true },
    image: {
      src: "/img/asap/figma-overview.png",
      w: 1464,
      h: 960,
      alt: "The team’s synthesis board: problem framing, interview themes and feature prioritisation",
      cap: "Synthesis board from the research phase.",
    },
  },
  thinking: {
    title: "Design around the next action, not another system to manage.",
    lead: "We moved from “make me a plan” to “help me figure out the plan.” The experience runs in four moments.",
    loop: [
      phone("goal", A.goal),
      phone("clarify", A.clarify),
      phone("plan", A.plan),
      phone("focus", A.focus),
    ].map((im, i) => ({ ...im, cap: ["1 Capture", "2 Clarify", "3 Plan", "4 Act"][i] })),
    principles: ["Ask before recommending", "One step at a time", "Make AI uncertainty visible"],
  },
  solution: {
    title: "Turn an intimidating goal into a sequence of doable steps.",
    explorer: [
      { id: "capture", label: "Capture", ...phone("goal", A.goal), cap: "Say the goal in your own words, however broad." },
      { id: "clarify", label: "AI questions", ...phone("clarify", A.clarify), cap: "Built on the Claude API, it asks about your role and situation before it recommends anything." },
      { id: "plan", label: "Breakdown", ...phone("plan", A.plan), cap: "A broad goal becomes five steps with time estimates, tailored to who you are." },
      { id: "confidence", label: "Confidence", ...phone("confidence", A.confidence), cap: "Every step carries a confidence level, so you know how far to trust it." },
      { id: "progress", label: "Progress", ...phone("steps-locked", A.locked), cap: "Each step shows its place (“1 of 5”); later steps stay locked until the one before is finished." },
      { id: "focus", label: "Focus", ...phone("focus", A.focus), cap: "One step at a time, with a timer, so the task stays in front of you." },
    ],
  },
  decisions: {
    title: "Supportive, not demanding.",
    lead: "Three rounds of testing with the live AI decided what stayed.",
    rounds: [
      {
        src: "/img/asap/evidence/01-role-input.png",
        w: 435,
        h: 380,
        alt: "Onboarding screen asking “What best describes you right now?” with options including College student and Early career professional",
        cap: "Round 1: recommendations were too similar, so role and context became inputs.",
      },
      {
        src: "/img/asap/evidence/02-analyzing.png",
        w: 440,
        h: 285,
        alt: "While the plan is generated, the screen reads “Breaking this down for you…” with an “Analyzing your task…” card and a typing indicator",
        cap: "Round 2: responses stalled, so the screen says what the AI is doing.",
      },
      {
        src: "/img/asap/evidence/03-steps-locked.png",
        w: 435,
        h: 635,
        alt: "The active step marked “Start Here, 1 of 5, Next up”, followed by steps 2 and 3, each locked until the one before is finished",
        cap: "Round 3: people lost track, so each step shows its place and later steps lock.",
      },
    ],
    design: [
      { src: "/img/asap/design-system/colors.png", w: 1390, h: 1080, alt: "ASAP colour board: slate teal ramp, warm neutrals, sage and amber accents and four semantic colours, each labelled with its token and hex.", cap: "Calm by default, so the task stays dominant." },
      { src: "/img/asap/design-system/typography.png", w: 1421, h: 884, alt: "ASAP typography board: Inter, with weight, size and line height for Heading 1 through Caption.", cap: "Type scale: Inter, hierarchy carried by weight." },
    ],
  },
  impact: {
    title: "A working prototype, and an interaction model shaped by testing.",
    metrics: [
      { v: "6", l: "interviews behind the direction" },
      { v: "4", l: "usability scenarios tested" },
      { v: "3", l: "iterations with a live AI prototype" },
    ],
    learnings: [
      "The step-by-step model made the product easier to approach.",
      "Confidence cues helped set expectations of an AI recommendation.",
      "The experience felt lighter when users could focus on one action.",
    ],
    note: "ASAP is a prototype, so there are no adoption numbers. Testing exposed generic recommendations, unreliable responses and lost progress, which led to role-aware prompts, clearer response handling and step cues.",
    reflection: "handle more complex goals, connect to calendars and notes, and measure whether people complete more of what they set out to do.",
  },
};

export default function AsapPage() {
  return <CaseStudyPage d={data} />;
}
