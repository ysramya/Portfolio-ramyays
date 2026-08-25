import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { EditorialLayout, GalleryLayout, FullBleedLayout } from "@/components/ds/layouts";
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

function GradientField({ gradient, children }: { gradient: string; children: React.ReactNode }) {
  return <div style={{ background: gradient }}>{children}</div>;
}

/**
 * Chapter head. The page is four chapters — Context → Discover → Design →
 * Impact — and each opens with this so a reader always knows which of the
 * four they're in, rather than tracking twenty numbered sections.
 */
function ChapterHead({
  n,
  label,
  title,
  lead,
  color = accent,
}: {
  n: string;
  label: string;
  title: React.ReactNode;
  lead?: string;
  color?: string;
}) {
  return (
    <div style={{ gridColumn: "1 / 13" }}>
      <div className="flex items-center gap-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-full font-[family-name:var(--font-display)] font-semibold text-sm"
          style={{ backgroundColor: color, color: asapPalette.black }}
        >
          {n}
        </span>
        <Eyebrow color={color}>{label}</Eyebrow>
      </div>
      <h2 className="mt-4 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** A compact labelled block — the sub-beats inside each chapter. */
function Beat({
  label,
  children,
  color = accent,
}: {
  label: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="rounded-2xl p-6 h-full" style={tintedGlass(color, 0.07)}>
      <p className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase" style={{ color }}>
        {label}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{children}</div>
    </div>
  );
}

/** An AI design principle: the rule, then the behaviour it produces. */
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

const aiPrinciples = [
  {
    name: "Coach, not assistant",
    body: "The AI exists to get someone unstuck and hand the work back, because a tool that finishes the task builds dependency rather than capability.",
    chain: ["Asks questions", "Guides thinking", "Doesn't complete the work"],
  },
  {
    name: "One thing at a time",
    body: "A full plan revealed at once re-creates the overwhelm the product exists to relieve. Steps surface sequentially so the next action is always singular.",
    chain: ["Shows one step", "Hides the rest", "Reduces cognitive load"],
  },
  {
    name: "Honest AI",
    body: "The AI states how sure it is and says when a request is outside what it can do. Confidence is communicated rather than performed.",
    chain: ["Labels confidence", "Admits limits", "Redirects, not rejects"],
  },
];

/** The core mapping — every AI behaviour traced from finding to validation. */
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

/** Literature reframed as design rationale: theory → the decision it justified. */
const theoryMap = [
  { theory: "Scaffolding", decision: "Coach behaviour" },
  { theory: "Decision fatigue", decision: "One-step interface" },
  { theory: "Trust calibration", decision: "Confidence labels" },
];

const riteRounds = [
  { n: "01", issue: "Generic plans — all four personas got near-identical breakdowns", change: "Prompt tuned to read role and task context before planning", result: "More personalised breakdowns" },
  { n: "02", issue: "Coach responses stalled or failed to return", change: "Reliability of the coaching call improved", result: "Retested and confirmed" },
  { n: "03", issue: "Users lost track of where they were in a plan", change: "Navigation and screen affordances updated", result: "Validated in follow-up testing" },
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
  "Calendar only accessible in Deep Focus — users wanted it earlier",
];

const nextUp = [
  "Role-aware breakdowns that adapt to context, not canned output",
  "Contextual memory across sessions",
  "Due dates and calendar integration to close the planning loop",
  "Onboarding that surfaces the clarification flow",
  "Round 2 testing, post-deployment",
];

export default function AsapPage() {
  return (
    <div style={{ background: asapGradients.page }}>
      {/* ── 01 · CONTEXT — hero, role, problem and constraints in one chapter ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: "calc(var(--nav-h) + 2.5rem)", paddingBottom: "3rem" }}>
        <div className="mx-auto grid gap-10 px-6 md:px-10 md:grid-cols-[1.15fr_0.85fr] items-center" style={{ maxWidth: "1500px" }}>
          <div>
            <span
              className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-5"
              style={tintedGlass(accent)}
            >
              <span style={{ color: gold }}>HCI Capstone · DePaul University</span>
            </span>
            <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(2.8rem,7vw,5.5rem)] text-[var(--color-ink)]">
              ASAP
              <br />
              <span className="italic font-normal text-[0.42em]" style={{ color: accent }}>
                AI-Scaffolded Action Planner
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-muted)]" style={{ maxWidth: "54ch" }}>
              An AI-native mobile app that helps people navigating major life transitions
              break down overwhelming tasks — one step at a time — acting as a{" "}
              <strong className="text-[var(--color-ink)] font-semibold">coach, not an assistant.</strong>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://asap-flame.vercel.app/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.7rem] font-semibold tracking-[0.15em] uppercase transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: accent, color: asapPalette.black }}
              >
                Try the prototype ↗
              </a>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.12em] uppercase"
                style={tintedGlass(accent, 0.08)}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sage, boxShadow: `0 0 8px ${sage}` }} />
                <span style={{ color: sage }}>Live with real Claude API</span>
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-4">
            <div
              className="absolute w-[380px] h-[380px] rounded-full blur-[100px] opacity-50"
              style={{ background: `radial-gradient(circle, ${accent} 0%, ${gold}66 40%, transparent 70%)` }}
            />
            <div className="relative w-[64%] max-w-[280px] rotate-[3deg]">
              <ImageFrame
                src="/img/asap/screen-01-home-light.png"
                alt="ASAP home screen"
                aspect="9/19.5"
                objectFit="contain"
                className="shadow-2xl"
                style={{ backgroundColor: asapPalette.charcoal, borderRadius: "2rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      <EditorialLayout maxWidth="1500px">
        <ChapterHead
          n="01"
          label="Context"
          title={<>The paralysis <span className="italic" style={{ color: accent }}>of starting over.</span></>}
          lead="Major transitions — starting college, switching careers, launching a business — dump an entirely new set of tasks on people who don't yet know how to handle them. The result is overwhelm, avoidance, and stagnation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 8" }}>
          <Beat label="My role" color={accent}>
            Research Lead and UX Design on a four-person capstone team. I ran the
            literature review, all six design research interviews and the four usability
            scenarios, then translated findings into the AI&rsquo;s behaviour, the
            information architecture, and the colour system for both modes.
          </Beat>
          <Beat label="Opportunity" color={gold}>
            Existing tools either dump tasks on people or complete them outright. Neither
            builds the planning skill someone in transition needs. The gap was a tool that
            coaches the thinking instead of doing it.
          </Beat>
          <Beat label="Constraints" color={sage}>
            A ten-week academic timeline, a four-person student team, no recruitment budget
            beyond a university network, and an AI layer that had to run on a real API
            rather than a scripted demo.
          </Beat>
          <Beat label="Where it stands" color={accent}>
            A working prototype with live Claude API integration, deployed and tested
            through four structured usability scenarios. Round 2 is scheduled
            post-deployment.
          </Beat>
        </div>

        <div className="rounded-[2rem] p-8" style={{ gridColumn: "9 / 13", alignSelf: "center", ...tintedGlass(accent, 0.1) }}>
          <Quote
            accent={accent}
            text="The problem isn't motivation — it's scaffolding. People know they have things to do. They don't know how to start, sequence, or break them down without help."
            attribution="Core research insight"
            style={{ maxWidth: "36ch" }}
          />
        </div>
      </EditorialLayout>

      {/* ── 02 · DISCOVER — approach, findings, and the pivot they forced ── */}
      <GradientField gradient={asapGradients.charcoalGraphite}>
        <EditorialLayout maxWidth="1500px">
          <ChapterHead
            n="02"
            label="Discover"
            color={gold}
            title={<>We were building <span className="italic" style={{ color: gold }}>the wrong product.</span></>}
            lead="Six design research interviews with people aged 18–34, each currently or recently navigating a major transition, across four scenarios: College Student, Tech Newbie, Career Swapper, Entrepreneur."
          />

          <div style={{ gridColumn: "1 / 7" }}>
            <Beat label="What the research found" color={gold}>
              <ul className="flex flex-col gap-2">
                {[
                  "People already owned productivity tools — the gap wasn't tracking",
                  "They froze at the blank page, not at the to-do list",
                  "Strong instinct, no method: nobody knew how to sequence a plan",
                  "Generic AI advice was actively distrusted",
                  "Overconfident AI read as untrustworthy",
                ].map((f) => (
                  <li key={f} className="pl-4 relative">
                    <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: gold }} />
                    {f}
                  </li>
                ))}
              </ul>
            </Beat>
          </div>

          <div style={{ gridColumn: "7 / 13" }}>
            <Beat label="So the product changed" color={accent}>
              We had scoped a general productivity app. Interviews showed people already
              had those and still couldn&rsquo;t start — which moved the product from an{" "}
              <span className="line-through opacity-60">AI task manager</span> to an{" "}
              <strong className="text-[var(--color-ink)] font-semibold">AI coach</strong>,
              and moved the design work from screens to the AI&rsquo;s behaviour. Every
              decision in the next chapter follows from that.
            </Beat>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            {theoryMap.map((t, i) => (
              <div key={t.theory} className="rounded-2xl p-5" style={tintedGlass(i === 1 ? accent : gold, 0.07)}>
                <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">Theory</p>
                <p className="mt-1 font-[family-name:var(--font-display)] font-semibold text-[var(--color-ink)]">{t.theory}</p>
                <p className="my-2 text-base leading-none" style={{ color: i === 1 ? accent : gold }} aria-hidden>↓</p>
                <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-ink-faint)]">Became</p>
                <p className="mt-1 text-sm text-[var(--color-ink)]">{t.decision}</p>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* ── 03 · DESIGN — direction, decisions, iterations, final experience ── */}
      <EditorialLayout maxWidth="1500px">
        <ChapterHead
          n="03"
          label="Design"
          title={<>The product is the <span className="italic" style={{ color: accent }}>AI&rsquo;s behaviour.</span></>}
          lead="Three principles governed how the AI acts. They were settled before any hi-fi screen existed, and the interface is downstream of them."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {aiPrinciples.map((p, i) => (
            <PrincipleCard key={p.name} {...p} color={i === 1 ? gold : i === 2 ? sage : accent} />
          ))}
        </div>

        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Key decisions — every behaviour traces to a finding</Eyebrow>
        </div>
        <div style={{ gridColumn: "1 / 13" }} className="overflow-x-auto">
          <div style={{ minWidth: "900px" }}>
            <div className="grid grid-cols-5 gap-x-5">
              {["Finding", "Decision", "Prompt strategy", "AI behaviour", "Validation"].map((h) => (
                <p key={h} className="pb-3 text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
                  {h}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-x-5">
              {researchToBehavior.map((r) => (
                <div key={r.finding} className="contents">
                  {[r.finding, r.decision, r.prompt, r.behavior, r.validation].map((cell, ci) => (
                    <div key={ci} className="py-4 border-t border-white/10">
                      <p className={`text-sm leading-relaxed ${ci === 0 || ci === 3 ? "text-[var(--color-ink)] font-medium" : "text-[var(--color-ink-muted)]"}`}>
                        {cell}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ gridColumn: "1 / 13", marginTop: "1rem" }}>
          <Eyebrow color={gold}>Iterations — fixes went in between sessions, not after</Eyebrow>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {riteRounds.map((r) => (
            <div key={r.n} className="rounded-2xl p-5" style={tintedGlass(gold, 0.07)}>
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full font-[family-name:var(--font-display)] font-semibold text-xs mb-3"
                style={{ backgroundColor: gold, color: asapPalette.black }}
              >
                {r.n}
              </span>
              {[
                { k: "Issue", v: r.issue },
                { k: "Change", v: r.change },
                { k: "Result", v: r.result },
              ].map((row, i, arr) => (
                <div key={row.k}>
                  <p className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase" style={{ color: row.k === "Result" ? sage : gold }}>
                    {row.k}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">{row.v}</p>
                  {i < arr.length - 1 && <p className="my-2 text-sm leading-none text-[var(--color-ink-faint)]" aria-hidden>↓</p>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </EditorialLayout>

      {/* Final experience — wireframes through shipped screens, one gallery
          instead of the eight separate splits this page used to carry */}
      <GalleryLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow color={sage}>The final experience</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            Three lo-fi rounds established where actions live and how the coaching flow
            triggers, before a single hi-fi pixel. The shipped screens carry the
            principles: one primary action at a time, confidence labels on every
            breakdown, coaching that appears contextually rather than everywhere.
          </p>
        </div>
        <div style={{ gridColumn: "1 / 8", marginTop: "1.5rem" }}>
          <ImageFrame
            src="/img/asap/lofi-wireframes-round3.png"
            alt="ASAP lo-fi wireframes — happy path mapped end to end"
            aspect="1.46/1"
            objectFit="contain"
            caption="Lo-fi round 3 — happy path mapped end to end before hi-fi"
          />
        </div>
        <div style={{ gridColumn: "8 / 13", marginTop: "1.5rem" }}>
          <ImageFrame
            src="/img/asap/happy-path.png"
            alt="ASAP happy path — input to structured action plan"
            aspect="1.31/1"
            objectFit="contain"
            caption="Happy path — first input to AI-generated action plan"
          />
        </div>
        {[
          { src: "/img/asap/screen-03-task-input-light.png", alt: "Task entry — where coaching begins", cap: "Task entry — the AI asks before it plans", col: "1 / 4" },
          { src: "/img/asap/screen-04-ai-breakdown-dark.png", alt: "AI breakdown with confidence labels", cap: "Breakdown — every step carries a confidence label", col: "4 / 7" },
          { src: "/img/asap/screen-05-subtask-detail-light.png", alt: "Subtask detail — one step at a time", cap: "One step at a time — the rest stays out of view", col: "7 / 10" },
          { src: "/img/asap/screen-07-deep-focus-dark.png", alt: "Deep focus mode", cap: "Deep Focus — distraction-free single-task view", col: "10 / 13" },
        ].map((s) => (
          <div key={s.src} style={{ gridColumn: s.col, marginTop: "1.25rem", maxWidth: "228px", marginInline: "auto" }}>
            <ImageFrame
              src={s.src}
              alt={s.alt}
              aspect="9/19.5"
              objectFit="contain"
              caption={s.cap}
              style={{ backgroundColor: asapPalette.charcoal }}
            />
          </div>
        ))}
      </GalleryLayout>

      {/* ── 04 · IMPACT — validation, outcome, contribution, what it taught ── */}
      <GradientField gradient={asapGradients.amberSand}>
        <EditorialLayout maxWidth="1500px">
          <ChapterHead
            n="04"
            label="Impact"
            color={sage}
            title={<>Strong voice, <span className="italic" style={{ color: sage }}>real ceiling.</span></>}
            lead="Round 1 tested all four transition types. The emotional design landed; intelligence depth is what limits real-world adoption — and that gap is the honest headline."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            <MetricStat accent={sage} value="6" label="Design research interviews" />
            <MetricStat accent={sage} value="4" label="Usability scenarios tested" />
            <MetricStat accent={sage} value="Live" label="Running on the real Claude API" />
          </div>

          <div className="rounded-2xl p-6" style={{ gridColumn: "1 / 7", alignSelf: "start", ...tintedGlass(sage, 0.08) }}>
            <p className="text-[0.6rem] font-bold tracking-[0.26em] uppercase" style={{ color: sage }}>✓ What worked</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {wins.map((w) => (
                <li key={w} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sage }} />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6" style={{ gridColumn: "7 / 13", alignSelf: "start", ...tintedGlass(accent, 0.08) }}>
            <p className="text-[0.6rem] font-bold tracking-[0.26em] uppercase" style={{ color: accent }}>✗ What didn&rsquo;t</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {gaps.map((g) => (
                <li key={g} className="text-sm text-[var(--color-ink-muted)] leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
            <Beat label="What I owned" color={gold}>
              The literature review, all six interviews, the four usability scenarios and
              the synthesis behind every finding above. I set the AI&rsquo;s three
              behavioural principles, wrote the prompt architecture against research rather
              than intuition, and directed the IA and colour system for both modes.
            </Beat>
            <Beat label="What I&rsquo;d do next" color={accent}>
              <ul className="flex flex-col gap-1.5">
                {nextUp.map((n) => (
                  <li key={n} className="pl-4 relative">
                    <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                    {n}
                  </li>
                ))}
              </ul>
            </Beat>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            {[
              { label: "Designing behaviour, not screens", text: "The decisions that mattered — whether the AI asks before answering, how it signals uncertainty, what it declines to do — don't live in a Figma frame, and all of them determine whether the product works." },
              { label: "Trust is designed", text: "Users trusted the AI more when it admitted what it wasn't sure about. Transparency read as competence — the opposite of what a polished demo instinct suggests." },
              { label: "Scaffolding should fade", text: "The unresolved question, and the most interesting one. Support that never recedes becomes a crutch; a mature version would notice growing capability and step back." },
            ].map((r, i) => (
              <div key={r.label} className="rounded-2xl p-6" style={tintedGlass(i === 0 ? accent : i === 1 ? sage : gold, 0.07)}>
                <p className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase" style={{ color: i === 0 ? accent : i === 1 ? sage : gold }}>
                  {r.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{r.text}</p>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ minHeight: "48dvh" }}>
        <div className="absolute inset-0" style={{ background: asapGradients.amberSand }} />
        <div
          className="absolute w-[420px] h-[420px] rounded-full blur-[120px] opacity-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />
        <div className="relative z-10 grid px-6 md:px-10 py-16 items-center justify-items-center text-center gap-6" style={{ minHeight: "48dvh" }}>
          <h2 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] text-[clamp(2rem,5vw,3.6rem)] text-[var(--color-ink)]">
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

      {/* Next project — follows the portfolio order into PM Dashboard */}
      <FullBleedLayout
        image="/img/mainstreet/laptop-mockup.png"
        imageAlt="PM Dashboard, a real-time Power BI view for portfolio managers"
        imageOpacity={0.35}
        minHeight="55dvh"
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
