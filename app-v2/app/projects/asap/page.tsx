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
    "An AI-native mobile app for people navigating a major life transition who freeze before they start. It coaches the next step instead of managing the whole list.",
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
 * four they're in.
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

/** A findings/outcome bullet: bolded label, then the detail. */
function LabelledPoint({ label, text, color }: { label: string; text: string; color: string }) {
  return (
    <li className="text-sm leading-relaxed text-[var(--color-ink-muted)] pl-4 relative">
      <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      <strong className="text-[var(--color-ink)] font-semibold">{label}</strong> {text}
    </li>
  );
}

const aiPrinciples = [
  {
    name: "Coach, not assistant",
    body: "It asks a question before it plans, and stops once someone has a next step, rather than finishing the work itself. A tool that completes the task builds dependency; this one is built to hand the work back.",
  },
  {
    name: "One thing at a time",
    body: "Only the next step is visible. A full plan revealed at once recreates the same overwhelm the product exists to relieve, just one screen later.",
  },
  {
    name: "Honest about limits",
    body: "Every breakdown carries a confidence label, and the AI says plainly when a request is outside what it can do, instead of answering everything in the same certain tone.",
  },
];

/** Every AI behaviour traced from research finding to what testing validated. */
const findingToBehavior = [
  {
    finding: "People freeze at the blank page",
    prompt: "Prompt requests context before it plans",
    validated: "Participants preferred being asked over being told",
  },
  {
    finding: "Tracking tools lack guidance",
    prompt: "Prompt is scoped strictly to coaching actions",
    validated: "Framing the AI as a coach lowered setup hesitation",
  },
  {
    finding: "Generic advice read as untrustworthy",
    prompt: "Role-aware prompting, context collected first",
    validated: "The clarification flow was praised for tailored copy",
  },
  {
    finding: "A full plan felt heavier than the task itself",
    prompt: "Sequential reveal, one step surfaced at a time",
    validated: "Lower reported overwhelm in testing",
  },
  {
    finding: "Confident AI read as less honest",
    prompt: "Every breakdown returns a confidence level",
    validated: "Participants named the uncertainty signal as a reason to trust it",
  },
];

const riteRounds = [
  {
    n: "01",
    issue: "Static subtasks; all four personas got near-identical steps.",
    change: "Tuned prompts to ingest role and task context before generating steps.",
    result: "Distinct, personalized breakdowns per persona.",
  },
  {
    n: "02",
    issue: "Coach responses stalled or failed to return.",
    change: "Optimized prompt constraints for faster API response cycles.",
    result: "Retested and confirmed real-time responses.",
  },
  {
    n: "03",
    issue: "Users lost track of progress across steps.",
    change: "Updated navigation affordances and step counters.",
    result: "Validated step progression in follow-up testing.",
  },
];

const surprises = [
  "Participants already used Notion and Google Calendar; the gap was never tracking or storage.",
  "The freeze happened at the blank page, not at the to-do list.",
  "They could feel a plan was needed but had no method for sequencing one.",
  "Generic AI suggestions read as advice from something that hadn't listened.",
  "An AI that sounded certain about everything read as less trustworthy, not more.",
];

const wins = [
  { label: "Warm, specific tone.", text: "Nobody described the AI as generic or robotic." },
  { label: "Confidence signal.", text: "Participants spontaneously cited confidence labels as the primary reason they trusted ASAP over competing tools." },
  { label: "Single-task focus.", text: "Visualizing one step at a time noticeably reduced start anxiety during scenarios." },
  { label: "Empathetic copy.", text: "Onboarding text addressing life transitions directly resonated strongly with participants." },
  { label: "Soft refusals.", text: "Transparent refusal messaging read as supportive framing rather than system errors." },
];

const gaps = [
  { label: "Surface-level subtasks.", text: "Output lacked depth for multi-day or highly technical projects." },
  { label: "Fixed step limit.", text: "Cap of five steps proved insufficient for complex workflows." },
  { label: "Missing time container.", text: "Lack of due dates or calendar links left the planning loop open." },
  { label: "Hidden clarification feature.", text: "The interactive clarification prompt was valuable, but low visual hierarchy meant most users overlooked it." },
  { label: "Abrupt onboarding.", text: "Missing a brief guided tour prior to first task creation." },
];

const nextUp = [
  { label: "Contextual memory.", text: "Preserve user preferences and past progress across active sessions." },
  { label: "Adaptive step depth.", text: "Allow dynamic expansion of complex tasks beyond the 5-step cap." },
  { label: "Calendar sync.", text: "Integrate due dates and calendar exports to close the execution loop." },
  { label: "Prominent onboarding.", text: "Redesign the first-run experience to showcase the clarification flow." },
  { label: "Round 2 testing.", text: "Benchmark quantitative completion metrics post-deployment." },
];

const takeaways = [
  {
    label: "Designing behavior, not screens",
    text: "The decisions that mattered — whether the AI asks before it answers, how it signals uncertainty, what it declines to do — don't live in a Figma frame. All of them determine whether the product works.",
  },
  {
    label: "Trust is designed",
    text: "Users trusted the AI more when it admitted what it wasn't sure about. Transparency read as competence, the opposite of what a polished demo instinct suggests.",
  },
  {
    label: "Scaffolding should fade",
    text: "The unresolved question, and the most interesting one. Support that never recedes becomes a crutch; a mature version would notice growing capability and step back.",
  },
];

export default function AsapPage() {
  return (
    <div style={{ background: asapGradients.page }}>
      {/* ── Hero ── */}
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
              An AI-native mobile app for people navigating a major life transition who
              freeze before they start. It{" "}
              <strong className="text-[var(--color-ink)] font-semibold">
                coaches the next step
              </strong>{" "}
              instead of managing the whole list.
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

      {/* ── 01 · CONTEXT ── */}
      <EditorialLayout maxWidth="1500px">
        <ChapterHead
          n="01"
          label="Context"
          title={<>Starting over is <span className="italic" style={{ color: accent }}>where people get stuck.</span></>}
          lead="Starting college, switching careers, launching a business: each hands someone a set of tasks they've never had to plan before. The stall isn't motivation. It's not knowing where to begin."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 8" }}>
          <Beat label="Role" color={accent}>
            Lead Research &amp; UX Writer on a four-person capstone team. Led six
            interviews, four usability scenarios, and designed the prompt architecture, AI
            behavioral rules, and information architecture.
          </Beat>
          <Beat label="Opportunity" color={gold}>
            A task manager waits for a plan that already exists. An AI assistant writes one
            and hands it over, finished. Neither teaches the thing actually missing in a
            transition: how to plan.
          </Beat>
          <Beat label="Constraints" color={sage}>
            Ten weeks, four students, no recruiting budget beyond a university network, and
            an AI layer running on a live API rather than a scripted demo.
          </Beat>
          <Beat label="Where it stands" color={accent}>
            A working prototype on the real Claude API, tested through four usability
            scenarios. Round 2 is scheduled post-deployment.
          </Beat>
        </div>

        <div className="rounded-[2rem] p-8" style={{ gridColumn: "9 / 13", alignSelf: "center", ...tintedGlass(accent, 0.1) }}>
          <Quote
            accent={accent}
            text="People already know they have things to do. What they're missing is how to start, and how to break it down."
            attribution="Core research insight"
            style={{ maxWidth: "34ch" }}
          />
        </div>
      </EditorialLayout>

      {/* ── 02 · DISCOVER — research artefacts sit here: the alignment board and
             the earliest lo-fi exploration that came straight out of it ── */}
      <GradientField gradient={asapGradients.charcoalGraphite}>
        <EditorialLayout maxWidth="1500px">
          <ChapterHead
            n="02"
            label="Discover"
            color={gold}
            title={<>The interviews <span className="italic" style={{ color: gold }}>changed the brief.</span></>}
            lead="Six people, ages 18 to 34, each mid-transition, across four scenarios: College Student, Tech Newbie, Career Swapper, Entrepreneur."
          />

          <div style={{ gridColumn: "1 / 7" }}>
            <Beat label="What surprised us" color={gold}>
              <ul className="flex flex-col gap-2.5">
                {surprises.map((s) => (
                  <li key={s} className="pl-4 relative">
                    <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: gold }} />
                    {s}
                  </li>
                ))}
              </ul>
            </Beat>
          </div>

          <div style={{ gridColumn: "7 / 13", alignSelf: "start" }}>
            <ImageFrame
              src="/img/asap/figma-overview.png"
              alt="Team alignment board — collaborative problem framing and feature prioritisation"
              aspect="1.525/1"
              objectFit="contain"
              caption="Alignment board — problem framing and feature prioritisation with the team"
            />
          </div>

          <div className="rounded-2xl p-6" style={{ gridColumn: "1 / 13", ...tintedGlass(accent, 0.08) }}>
            <p className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase" style={{ color: accent }}>
              The pivot
            </p>
            <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "80ch" }}>
              We&rsquo;d scoped a task manager, but the interviews made clear people
              already owned those and still couldn&rsquo;t start. That shifted the product
              from something that organizes tasks to something that coaches the thinking
              behind them, moving our focus from screen design to what the AI says — and
              doesn&rsquo;t say. Every decision in the next chapter follows from this pivot.
            </p>
          </div>
        </EditorialLayout>
      </GradientField>

      {/* ── 03 · DESIGN — rules, then the finding→behaviour table, then the
             iteration record, then the shipped experience ── */}
      <EditorialLayout maxWidth="1500px">
        <ChapterHead
          n="03"
          label="Design"
          title={<>Three rules for <span className="italic" style={{ color: accent }}>how the AI behaves.</span></>}
          lead="The interface is downstream of these. All three were fixed before a single hi-fi screen existed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {aiPrinciples.map((p, i) => (
            <div
              key={p.name}
              className="rounded-2xl p-6 h-full"
              style={tintedGlass(i === 1 ? gold : i === 2 ? sage : accent, 0.08)}
            >
              <p className="font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">
                {p.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{p.body}</p>
            </div>
          ))}
        </div>

        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Key decisions — every behavior traces to a finding</Eyebrow>
        </div>
        <div style={{ gridColumn: "1 / 13" }}>
          <div className="hidden md:grid md:grid-cols-[1fr_1fr_1.15fr] gap-x-8">
            {["Finding", "Prompt strategy", "What we validated"].map((h) => (
              <p key={h} className="pb-3 text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
                {h}
              </p>
            ))}
          </div>
          <div className="md:grid md:grid-cols-[1fr_1fr_1.15fr] md:gap-x-8">
            {findingToBehavior.map((r) => (
              <div key={r.finding} className="contents">
                <div className="pt-5 pb-2 md:py-5 border-t border-white/10">
                  <p className="text-sm leading-relaxed text-[var(--color-ink)] font-medium">{r.finding}</p>
                </div>
                <div className="pb-2 md:py-5 md:border-t md:border-white/10">
                  <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    <span className="md:hidden block text-[0.55rem] font-semibold tracking-[0.22em] uppercase mb-1" style={{ color: accent }}>
                      Prompt strategy
                    </span>
                    {r.prompt}
                  </p>
                </div>
                <div className="pb-5 md:py-5 md:border-t md:border-white/10">
                  <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    <span className="md:hidden block text-[0.55rem] font-semibold tracking-[0.22em] uppercase mb-1" style={{ color: sage }}>
                      What we validated
                    </span>
                    {r.validated}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </EditorialLayout>

      {/* Iteration record — the three lo-fi rounds shown as the evidence behind
          the RITE cards that follow */}
      <GalleryLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow color={gold}>Iterations — fixes went in between sessions, not after</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            Three lo-fi rounds settled where actions live and how the coaching flow
            triggers, before a single hi-fi pixel.
          </p>
        </div>
        {[
          { src: "/img/asap/lofi-wireframes-round1.png", alt: "Lo-fi round 1 — first screen explorations", aspect: "2.16/1", cap: "Round 1 — task entry and breakdown explorations", col: "1 / 5" },
          { src: "/img/asap/lofi-wireframes-round2.png", alt: "Lo-fi round 2 — refined flows", aspect: "2.04/1", cap: "Round 2 — coaching interaction patterns emerging", col: "5 / 9" },
          { src: "/img/asap/lofi-wireframes-round3.png", alt: "Lo-fi round 3 — happy path mapped end to end", aspect: "1.46/1", cap: "Round 3 — happy path mapped end to end", col: "9 / 13" },
        ].map((w) => (
          <div key={w.src} style={{ gridColumn: w.col, marginTop: "1.25rem" }}>
            <ImageFrame src={w.src} alt={w.alt} aspect={w.aspect} objectFit="contain" caption={w.cap} />
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13", marginTop: "1.5rem" }}>
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
      </GalleryLayout>

      {/* The shipped experience — mid-fi bridge, the happy path, then the five
          hi-fi screens the copy calls out by name */}
      <GalleryLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow color={sage}>The final experience</Eyebrow>
          <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "62ch" }}>
            The shipped screens carry the three principles through: one primary action at a
            time, a confidence label on every breakdown, coaching that appears contextually
            rather than everywhere.
          </p>
        </div>
        <div style={{ gridColumn: "1 / 6", marginTop: "1.25rem" }}>
          <ImageFrame
            src="/img/asap/midfi-wireframes.png"
            alt="Mid-fi wireframes — structure and visual hierarchy"
            aspect="0.39/1"
            objectFit="contain"
            caption="Mid-fi — structure, hierarchy, and the IA carried into hi-fi"
          />
        </div>
        <div style={{ gridColumn: "6 / 13", marginTop: "1.25rem", alignSelf: "start" }}>
          <ImageFrame
            src="/img/asap/happy-path.png"
            alt="Happy path — first input to AI-generated action plan"
            aspect="1.31/1"
            objectFit="contain"
            caption="Happy path — first input to AI-generated action plan"
          />
        </div>
        {[
          { src: "/img/asap/screen-02-onboarding-light.png", alt: "Onboarding — copy that names the transition", cap: "Onboarding — copy that names the transition directly", col: "1 / 4" },
          { src: "/img/asap/screen-03-task-input-light.png", alt: "Task entry — the AI asks before it plans", cap: "Task entry — the AI asks clarifying questions before it plans", col: "4 / 6" },
          { src: "/img/asap/screen-04-ai-breakdown-dark.png", alt: "Breakdown — every step carries a confidence label", cap: "Breakdown — every step carries a confidence label", col: "6 / 8" },
          { src: "/img/asap/screen-05-subtask-detail-light.png", alt: "One step at a time", cap: "One step at a time — future steps stay out of view", col: "8 / 10" },
          { src: "/img/asap/screen-07-deep-focus-dark.png", alt: "Deep Focus — distraction-free single-task view", cap: "Deep Focus — distraction-free single-task view", col: "10 / 13" },
        ].map((s) => (
          <div key={s.src} style={{ gridColumn: s.col, marginTop: "1.25rem", maxWidth: "215px", marginInline: "auto" }}>
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

      {/* ── 04 · IMPACT ── */}
      <GradientField gradient={asapGradients.amberSand}>
        <EditorialLayout maxWidth="1500px">
          <ChapterHead
            n="04"
            label="Impact"
            color={sage}
            title={<>Strong voice, <span className="italic" style={{ color: sage }}>real ceiling.</span></>}
            lead="Round 1 tested all four transition types. Tone and structure landed; the plans themselves are what set the ceiling on real adoption, and that gap is the honest headline."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            <MetricStat accent={sage} value="6" label="Design research interviews" />
            <MetricStat accent={sage} value="4" label="Usability scenarios tested" />
            <MetricStat accent={sage} value="Live" label="Running on the real Claude API" />
          </div>

          <div className="rounded-2xl p-6" style={{ gridColumn: "1 / 7", alignSelf: "start", ...tintedGlass(sage, 0.08) }}>
            <p className="text-[0.6rem] font-bold tracking-[0.26em] uppercase" style={{ color: sage }}>✓ What worked</p>
            <ul className="mt-4 flex flex-col gap-3">
              {wins.map((w) => (
                <LabelledPoint key={w.label} label={w.label} text={w.text} color={sage} />
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6" style={{ gridColumn: "7 / 13", alignSelf: "start", ...tintedGlass(accent, 0.08) }}>
            <p className="text-[0.6rem] font-bold tracking-[0.26em] uppercase" style={{ color: accent }}>✗ What didn&rsquo;t</p>
            <ul className="mt-4 flex flex-col gap-3">
              {gaps.map((g) => (
                <LabelledPoint key={g.label} label={g.label} text={g.text} color={accent} />
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
            <Beat label="My direct deliverables" color={gold}>
              I authored the prompt architecture, defined the system&rsquo;s three
              behavioral rules, wrote the conversational microcopy — confidence states,
              soft refusals, and onboarding prompts — and directed the information
              architecture for both standard and focus modes.
            </Beat>
            <Beat label="What I&rsquo;d do next" color={accent}>
              <ul className="flex flex-col gap-2">
                {nextUp.map((n) => (
                  <LabelledPoint key={n.label} label={n.label} text={n.text} color={accent} />
                ))}
              </ul>
            </Beat>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            {takeaways.map((t, i) => (
              <div key={t.label} className="rounded-2xl p-6" style={tintedGlass(i === 0 ? accent : i === 1 ? sage : gold, 0.07)}>
                <p className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase" style={{ color: i === 0 ? accent : i === 1 ? sage : gold }}>
                  {t.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{t.text}</p>
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
