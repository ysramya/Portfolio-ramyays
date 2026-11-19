import Image from "next/image";
import { Frag } from "../raahi/Visuals";

/**
 * Visual blocks for the Wellnut case study. Photos, headset captures, editor
 * captures and video are the project's own. Diagrams use only figures from the
 * project record, each with its original context. Nothing here is a clinical
 * claim: Wellnut is a working prototype.
 */

const W = "/img/wellnut";

export const P = {
  forest: { src: `${W}/pov-forest.jpg`, w: 652, h: 362 },
  bubbles: { src: `${W}/emotion-bubbles.jpg`, w: 900, h: 1600 },
  editor: { src: `${W}/blueprint-editor.jpg`, w: 1600, h: 900 },
  session: { src: `${W}/vr-session.jpg`, w: 2160, h: 2170 },
  team: { src: `${W}/showcase-team.jpg`, w: 1600, h: 1281 },
  present: { src: `${W}/showcase-presentation.jpg`, w: 1200, h: 1600 },
  wall: { src: `${W}/wall-of-feedback.jpg`, w: 1200, h: 1600 },
};

function Arrow() {
  return <span aria-hidden="true" className="wn-arrow">→</span>;
}

/* ── Hero ────────────────────────────────────────────────────────────── */

export function HeroStage() {
  return (
    <figure className="cs-stage mt-[clamp(24px,3vw,40px)]">
      <div className="wn-hero">
        <div className="relative">
          <Image src={P.forest.src} width={P.forest.w} height={P.forest.h} priority sizes="(max-width: 1100px) 94vw, 820px" className="cs-shot"
            alt="In-headset view of the Wellnut forest, with the avatar waiting in the clearing." />
          <span className="cs-tag" style={{ left: "3%", top: "8%" }}>Live build, in headset</span>
        </div>
        <div className="relative">
          <Image src={P.bubbles.src} width={P.bubbles.w} height={P.bubbles.h} sizes="(max-width: 700px) 60vw, 260px" className="cs-shot"
            alt="The Lonely and Stressed emotion bubbles floating above the avatar in the forest." />
          <span className="cs-tag" style={{ left: "6%", top: "4%" }}>Choose an emotion</span>
        </div>
      </div>
    </figure>
  );
}

/* ── Problem ─────────────────────────────────────────────────────────── */

export function ProblemDiagram() {
  const nodes = [
    {
      t: "Need support",
      f: [["64%", "rated academic adjustment moderately to extremely challenging"]],
    },
    {
      t: "Hesitation",
      f: [["48%", "cited lack of time"], ["67%", "prefer handling things independently"]],
    },
    {
      t: "Resources go unused",
      f: [["61%", "rarely or never seek support despite need"], ["58%", "of students with chronic stress had never used the free on-campus service"]],
    },
    {
      t: "A lower-friction first step",
      f: [["71%", "saw value in VR meditation for exam stress and performance"], ["58%", "open or maybe open to using VR wellness tools regularly"]],
    },
  ];
  return (
    <figure data-reveal className="cs-stage m-0" aria-label="From need to opportunity, with survey figures">
      <ol className="wn-flow">
        {nodes.map((n, k) => (
          <li key={n.t} className="wn-node">
            <p className="wn-node-t">{n.t}</p>
            {n.f.map(([v, l]) => (
              <p key={l} className="wn-fig"><b>{v}</b><span>{l}</span></p>
            ))}
            {k < nodes.length - 1 && <Arrow />}
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 text-[12.5px] leading-relaxed text-[var(--muted)]">
        Survey of 33 students across six disciplines. The two 58% figures come from different questions. Participants were self-selected students from one institution; findings are directional, not generalizable.
      </figcaption>
    </figure>
  );
}

export function BigSurvey() {
  return (
    <div data-reveal className="grid gap-x-8 gap-y-6 sm:grid-cols-3" aria-label="Survey headline figures">
      {[["33", "students, six disciplines"], ["61%", "rarely or never seek support"], ["71%", "saw value in VR meditation"]].map(([v, l]) => (
        <p key={l}><span className="cs-bigmetric block">{v}</span><span className="mt-3 block text-[14px] text-[var(--body)]">{l}</span></p>
      ))}
    </div>
  );
}

/* ── Opportunity ─────────────────────────────────────────────────────── */

function Path({ label, steps, accent }: { label: string; steps: string[]; accent?: boolean }) {
  return (
    <div className="wn-path">
      <p className="meta mb-3">{label}</p>
      <ol className="cs-chip-flow">
        {steps.flatMap((t, k) => {
          const li = <li key={t} className={accent && k === steps.length - 1 ? "cs-arrows-end" : ""}>{t}</li>;
          return k < steps.length - 1 ? [li, <li key={`${t}-a`} aria-hidden="true" className="!p-0 !shadow-none wn-chip-arrow">→</li>] : [li];
        })}
      </ol>
    </div>
  );
}

export function JourneyShift() {
  return (
    <figure data-reveal className="cs-stage m-0 grid gap-8" aria-label="Traditional path compared with the Wellnut path">
      <Path label="Traditional path" steps={["Feel stressed", "Decide to seek help", "Find a resource", "Arrange an appointment", "Wait", "Talk"]} />
      <Path accent label="Wellnut path" steps={["Feel stressed", "Enter a private environment", "Choose an emotion", "Be acknowledged", "Reflect", "Guided meditation", "Appropriate next step"]} />
    </figure>
  );
}

const decisions = [
  ["71% saw value in VR meditation for exam stress", "VR as the primary environment"],
  ["67% prefer handling things independently", "Private and self-directed"],
  ["48% cited lack of time", "Avatar available immediately"],
  ["Therapist: listen and validate before guiding", "Acknowledge before meditation"],
];

export function DecisionMap() {
  return (
    <div data-reveal className="cs-stage cs-rows-big" role="table" aria-label="From finding to product decision">
      <div role="row" className="cs-rows-head wn-head2">
        <span role="columnheader" className="meta">Research / expert input</span>
        <span aria-hidden="true" />
        <span role="columnheader" className="meta">Product decision</span>
      </div>
      {decisions.map(([a, d]) => (
        <div role="row" key={d} className="cs-rows-row wn-row2">
          <p role="cell" data-l="Finding" className="cs-cell">{a}</p>
          <span aria-hidden="true" className="cs-rows-arrow">→</span>
          <p role="cell" data-l="Decision" className="cs-cell cs-cell-gold">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function ValidateFirst() {
  return (
    <figure data-reveal className="cs-stage wn-validate m-0" aria-label="Validate first, guide second">
      <p className="wn-big">Validate first. Guide second.</p>
      <div className="mt-8 grid gap-7">
        <Path label="Before" steps={["Emotion selection", "Meditation"]} />
        <Path accent label="After the therapist consultation" steps={["Emotion selection", "Acknowledge", "Listen / reflect", "Guided practice"]} />
        <Path label="Generic guided meditation" steps={["Start session", "Follow instructions"]} />
      </div>
    </figure>
  );
}

/* ── Experience ──────────────────────────────────────────────────────── */

export function StepStrip() {
  const s = ["Arrive", "Express", "Be heard", "Reflect", "Practice", "Continue"];
  return (
    <ol data-reveal className="wn-steps" aria-label="Six-step walkthrough">
      {s.map((t, k) => (
        <li key={t}><span className="cs-badge" aria-hidden="true">{k + 1}</span>{t}</li>
      ))}
    </ol>
  );
}

export function ExperienceStage() {
  return (
    <div className="grid gap-8">
      <figure data-reveal className="cs-stage m-0">
        <figcaption className="mb-4 flex items-center gap-3 text-[15px] text-[var(--ink)]">
          <span className="cs-badge" aria-hidden="true">1</span>Arrive<span className="text-[13px] text-[var(--muted)]">The forest, as the student sees it.</span>
        </figcaption>
        <Image src={P.forest.src} width={P.forest.w} height={P.forest.h} sizes="(max-width: 1100px) 94vw, 1000px" className="cs-shot"
          alt="In-headset view of the Wellnut forest, with the avatar waiting in the clearing." />
      </figure>

      <figure data-reveal className="cs-stage m-0">
        <figcaption className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-[var(--ink)]">
          <span className="cs-badge" aria-hidden="true">2</span>Express<span className="text-[13px] text-[var(--muted)]">Lonely or Stressed.</span>
        </figcaption>
        <div className="wn-pair">
          <Image src={P.bubbles.src} width={P.bubbles.w} height={P.bubbles.h} sizes="(max-width: 700px) 70vw, 300px" className="cs-shot"
            alt="The Lonely and Stressed emotion bubbles floating above the avatar in the forest." />
          <Frag src={P.bubbles.src} iw={P.bubbles.w} ih={P.bubbles.h} crop={{ x: 0.05, y: 0.28, w: 0.9, h: 0.3 }} sizes="(max-width: 700px) 90vw, 560px"
            alt="Close view of the two emotion bubbles, Lonely and Stressed." />
        </div>
      </figure>

      <figure data-reveal className="cs-stage m-0">
        <figcaption className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-[var(--ink)]">
          <span className="cs-badge" aria-hidden="true">4</span>Reflect<span className="text-[13px] text-[var(--muted)]">Each emotion opens its own dialogue branch.</span>
        </figcaption>
        <Image src={P.editor.src} width={P.editor.w} height={P.editor.h} sizes="(max-width: 1100px) 94vw, 1000px" className="cs-shot"
          alt="The Unreal Engine editor: the emotion-bubble widget blueprint beside the forest level." />
      </figure>

      <figure data-reveal className="cs-stage m-0">
        <figcaption className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-[var(--ink)]">
          <span className="cs-badge" aria-hidden="true">5</span>Practice<span className="text-[13px] text-[var(--muted)]">A first-time user is guided in.</span>
        </figcaption>
        <video controls playsInline preload="metadata" poster={P.session.src} aria-label="A first-time user being guided into the Wellnut headset experience" className="cs-view-video mx-auto" style={{ maxHeight: "70vh" }}>
          <source src={`${W}/vr-guided-session.mp4`} type="video/mp4" />
        </video>
      </figure>
    </div>
  );
}

export function Principles() {
  const p = ["Clear expectations", "Active listening cues", "Validate, then act", "Boundaries"];
  return (
    <div data-reveal>
      <ul className="cs-chip-flow" aria-label="Four interaction principles from the therapist consultation">
        {p.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p className="mt-5 text-[15px] text-[var(--ink)]">Wellnut is not therapy and does not replace professional care.</p>
    </div>
  );
}

/* ── My role ─────────────────────────────────────────────────────────── */

export function ContributionMap() {
  const c = [
    ["Research", "Survey design · secondary research · synthesis"],
    ["Product direction", "Problem framing · priorities · MVP scope"],
    ["Conversational UX", "Emotion flows · dialogue · guardrails"],
    ["Coordination", "Team alignment · Unreal workflow"],
    ["Showcase", "Prototype prep · walkthroughs · feedback"],
  ];
  return (
    <ol data-reveal className="wn-map" aria-label="My contribution">
      {c.map(([t, d], k) => (
        <li key={t}>
          <span className="cs-badge" aria-hidden="true">{k + 1}</span>
          <p className="mt-3 text-[17px] text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>{t}</p>
          <p className="mt-1.5 text-[13px] leading-snug text-[var(--muted)]">{d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Timeline() {
  const t = [
    ["Weeks 1–4", "Understand", "Literature and secondary research"],
    ["Weeks 5–10", "Validate", "Survey of 33 students"],
    ["Weeks 11–14", "De-risk", "Licensed therapist consultation"],
    ["Weeks 15–26", "Build", "Unreal prototype and showcase prep"],
  ];
  return (
    <ol data-reveal className="wn-time" aria-label="Six-month timeline">
      {t.map(([w, n, d], k) => (
        <li key={n} style={{ ["--w" as string]: [4, 6, 4, 12][k] }}>
          <span className="wn-time-bar" aria-hidden="true" />
          <p className="meta mt-3">{w}</p>
          <p className="mt-1 text-[18px] text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>{n}</p>
          <p className="mt-1 text-[13px] leading-snug text-[var(--muted)]">{d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Mvp() {
  const built = ["Forest environment", "Emotion selection", "Avatar conversation, two emotion branches", "Guided meditation", "Personalized greeting"];
  const later = ["Voice AI", "Biometric sensors", "Mood tracking", "Multiple environments", "Weekly check-ins"];
  return (
    <div data-reveal className="cs-stage">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="meta mb-3">Built in the prototype</p>
          <ul className="cs-chip-flow">{built.map((t) => <li key={t} className="cs-arrows-end">{t}</li>)}</ul>
        </div>
        <div>
          <p className="meta mb-3">Not in v1 · roadmap</p>
          <ul className="cs-chip-flow wn-later">{later.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
      <p className="mt-6 text-[15px] text-[var(--ink)]">One focused, research-grounded experience over five half-finished features.</p>
    </div>
  );
}

export function BuildClip() {
  return (
    <figure data-reveal className="cs-stage m-0">
      <video controls playsInline preload="metadata" aria-label="The Wellnut Unreal Engine environment under construction" className="cs-view-video mx-auto">
        <source src={`${W}/build-environment.mp4`} type="video/mp4" />
      </video>
      <figcaption className="mt-3 text-center text-[13px] tracking-wide text-[var(--muted)]">The Unreal environment under construction.</figcaption>
    </figure>
  );
}

/* ── Outcome ─────────────────────────────────────────────────────────── */

export function Proof() {
  return (
    <div data-reveal className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4" aria-label="Outcome evidence">
      {[
        ["33", "students informed the direction"],
        ["71%", "pre-validated interest in VR meditation for exam stress"],
        ["6 mo", "first literature review to live showcase"],
        ["5 → 0", "five team members onboarded to Unreal; none had prior experience"],
      ].map(([v, l]) => (
        <p key={l}><span className="cs-bigmetric block" style={{ fontSize: "clamp(40px, 4.4vw, 64px)", whiteSpace: "nowrap" }}>{v}</span><span className="mt-3 block text-[13.5px] leading-snug text-[var(--body)]">{l}</span></p>
      ))}
    </div>
  );
}

export function ShowcaseGrid() {
  return (
    <div className="grid gap-5">
      <div data-reveal className="wn-show">
        <figure className="cs-stage m-0">
          <Image src={P.session.src} width={P.session.w} height={P.session.h} sizes="(max-width: 800px) 94vw, 520px" className="cs-shot"
            alt="An attendee trying Wellnut in the headset, with the run mirrored on a screen." />
          <figcaption className="mt-3 text-[13px] text-[var(--muted)]">An attendee in the experience.</figcaption>
        </figure>
        <figure className="cs-stage m-0">
          <Image src={P.team.src} width={P.team.w} height={P.team.h} sizes="(max-width: 800px) 94vw, 520px" className="cs-shot"
            alt="The team at the Jarvis Innovation Showcase." />
          <figcaption className="mt-3 text-[13px] text-[var(--muted)]">The team at the showcase.</figcaption>
        </figure>
      </div>
      <div data-reveal className="wn-show">
        <figure className="cs-stage m-0">
          <Image src={P.present.src} width={P.present.w} height={P.present.h} sizes="(max-width: 800px) 94vw, 520px" className="cs-shot"
            alt="The team presenting Wellnut to a full room." />
          <figcaption className="mt-3 text-[13px] text-[var(--muted)]">Presenting Wellnut.</figcaption>
        </figure>
        <figure className="cs-stage m-0">
          <Image src={P.wall.src} width={P.wall.w} height={P.wall.h} sizes="(max-width: 800px) 94vw, 520px" className="cs-shot"
            alt="The Wall of Feedback: sticky notes left by showcase attendees around the team’s poster." />
          <figcaption className="mt-3 text-[13px] text-[var(--muted)]">The Wall of Feedback. Requests for meditative background audio and avatar emotes are possible next steps, not delivered features.</figcaption>
        </figure>
      </div>
    </div>
  );
}
