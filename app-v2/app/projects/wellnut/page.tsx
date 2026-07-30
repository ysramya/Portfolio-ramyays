import type { Metadata } from "next";
import Link from "next/link";
import {
  HeroLayout,
  ReadingLayout,
  EditorialLayout,
  GalleryLayout,
  SplitLayout,
  FullBleedLayout,
} from "@/components/ds/layouts";
import { Quote, ImageFrame, MetricStat } from "@/components/ds/atoms";
import { tintedGlass } from "@/components/ds/tokens";
import { wellnutTheme, wellnutPalette, wellnutGradients } from "./theme";

export const metadata: Metadata = {
  title: "Wellnut — Ramya Yerramilli",
  description: "A VR companion for student mental wellness — no appointment, no stigma, no waiting list.",
};

const accent = wellnutTheme.accent;
const pink = wellnutPalette.pink;
const lavender = wellnutPalette.lavender;

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

/** Wraps a section in one of Wellnut's signature gradients — dark-dominant, accent only bleeding in from the edges. */
function GradientField({ gradient, children }: { gradient: string; children: React.ReactNode }) {
  return <div style={{ background: gradient }}>{children}</div>;
}

export default function WellnutPage() {
  return (
    <div style={{ background: wellnutGradients.page }}>
      {/* 1 — Hero: real photo, not the illustrated poster — a researcher guiding a
          first-time user into a headset. Saves the brand poster for a later,
          quieter "meet the mascot" beat instead of spending it on the opener. */}
      <HeroLayout image="/img/wellnut/vr-session.jpg" imageAlt="A student trying Wellnut in VR for the first time">
        <div>
          <span
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
            style={tintedGlass(accent)}
          >
            <span style={{ color: lavender }}>UX Researcher + Project Coordinator · Jarvis Innovation Challenge 2025</span>
          </span>
          <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,9vw,7.5rem)] max-w-[16ch] md:-ml-1 text-[var(--color-ink)]">
            Wellnut
            <br />
            <span className="italic font-normal text-[0.4em] align-middle" style={{ color: lavender }}>
              A nutshell to express yourself
            </span>
          </h1>
        </div>
      </HeroLayout>

      {/* 2 — Meta strip: intro col 1-7, glass fact-grid col 8-13, on a navy→black field */}
      <GradientField gradient={wellnutGradients.navyBlack}>
        <EditorialLayout>
          <p className="text-2xl md:text-3xl leading-snug max-w-[24ch] text-[var(--color-ink)]" style={{ gridColumn: "1 / 7" }}>
            A VR companion that gives students a private, judgment-free space to
            pause, talk, and breathe — no appointment, no stigma, no waiting
            list.
          </p>
          <dl className="grid grid-cols-2 gap-3" style={{ gridColumn: "8 / 13" }}>
            {[
              { label: "Role", value: "UX Researcher + Project Coordinator" },
              { label: "Duration", value: "6 Months · Nov 2024 – May 2025" },
              { label: "Team", value: "UX Research · Unreal Dev · Environment Art · Character Art · Audio" },
              { label: "Tools", value: "Unreal Engine · Maya · Google Forms · Perforce" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl px-4 py-3" style={tintedGlass(accent, 0.08)}>
                <dt className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
                  {m.label}
                </dt>
                <dd className="mt-1 text-sm text-[var(--color-ink)]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </EditorialLayout>
      </GradientField>

      {/* 2.5 — Metrics: premium composition — hero stat floating over a purple→indigo
          field, supporting stats stacked in a glass column. Widened to 1440px. */}
      <GradientField gradient={wellnutGradients.purpleIndigo}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 8" }}>
            <MetricStat size="hero" accent={accent} value="61%" label="of students who need mental health support never reach out" />
          </div>
          <div
            className="flex flex-col gap-6 rounded-2xl p-6"
            style={{ gridColumn: "9 / 13", alignSelf: "end", ...tintedGlass(pink, 0.08) }}
          >
            <MetricStat accent={pink} value="33" label="Students surveyed, across 6 academic disciplines" />
            <MetricStat accent={pink} value="4" label="Research phases, 6 months to showcase" />
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 3 — The Problem: Split, image narrower-left 5:7 */}
      <SplitLayout
        ratio={[5, 7]}
        left={
          <ImageFrame
            src="/img/wellnut/mindfulness-in-motion.png"
            alt="Early concept visual: how can Wellnut help?"
            aspect="1/1"
            objectFit="contain"
          />
        }
        right={
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight text-[var(--color-ink)]">
              Campus mental health services exist. Students don&rsquo;t use them.
            </h3>
            <p className="mt-4 text-[var(--color-ink-muted)] text-lg leading-relaxed">
              The problem isn&rsquo;t a shortage of resources — it&rsquo;s that
              stigma, time, and awareness create a gap between students in
              distress and support that&rsquo;s already free.
            </p>
          </div>
        }
      />

      {/* 4 — Insight quote: FullBleed, right-aligned, overlaying a faint UE editor texture */}
      <FullBleedLayout
        image="/img/wellnut/blueprint-editor.jpg"
        imageAlt=""
        imageOpacity={0.08}
        minHeight="50dvh"
        overlayClassName="items-center justify-items-end"
      >
        <Quote
          align="right"
          accent={accent}
          text="Students wish schools could proactively check in with them — not wait for them to come forward."
          attribution="Secondary research finding — Student Voice Survey synthesis, DePaul 2024"
        />
      </FullBleedLayout>

      {/* 5 — Stakes: list col 1-8, glass aside col 9-13, on an indigo→pink field */}
      <GradientField gradient={wellnutGradients.indigoPink}>
        <EditorialLayout>
          <div style={{ gridColumn: "1 / 8" }}>
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[20ch] text-[var(--color-ink)]">
              Free help already exists. Almost no one asks for it.
            </h3>
            <ol className="mt-8 flex flex-col">
              {[
                { label: "01 · The Scale — Unused", detail: "58% of students with chronic stress have never accessed an on-campus mental health service, despite it being free." },
                { label: "02 · The Barrier — Independence", detail: "67% prefer handling things on their own. 48% cite no time. Stigma and trust issues compound both." },
                { label: "03 · The Opening — Already there", detail: "71% specifically saw value in VR-based meditation — before any product existed to try." },
              ].map((item) => (
                <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
                  <p className="font-semibold text-[var(--color-ink)]">{item.label}</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
            <GlassNote label="The Stakes" text="Help already exists. The barrier isn't access — it's the moment before someone asks." />
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 6 — Research process: list col 1-7, glass aside col 9-13 */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 8" }}>
          <Eyebrow>Research Process</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[20ch] text-[var(--color-ink)]">
            Four phases. Mixed-methods throughout.
          </h3>
          <ol className="mt-8 flex flex-col">
            {[
              { label: "Wks 1–4 · Secondary Research", detail: "Literature review of the mental health crisis, existing interventions, and the VR + meditation evidence base." },
              { label: "Wks 5–10 · Primary Research — Survey", detail: "33 students surveyed across 6 disciplines on mental health need and VR receptiveness, then mapped into barriers." },
              { label: "Wks 11–14 · Expert Consultation", detail: "Licensed therapist interview — built the empathy-language framework and ethical guardrails." },
              { label: "Wks 15–26 · Scope, Build, Showcase", detail: "MVP scope defined, avatar and environment built in Unreal Engine, dialogue branches designed, shown at Jarvis Innovation Showcase." },
            ].map((item) => (
              <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
                <p className="font-semibold text-[var(--color-ink)]">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
          <GlassNote color={pink} label="Mixed methods, not sequential" text="The survey told us what students needed. The therapist told us how to deliver it. Neither alone was enough." />
        </div>
      </EditorialLayout>

      {/* 7 — Survey findings: 4-across metric wall, widened to 1440px on a brown→purple field */}
      <GradientField gradient={wellnutGradients.brownPurple}>
        <EditorialLayout maxWidth="1440px">
          <h3
            className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight text-[var(--color-ink)]"
            style={{ gridColumn: "1 / 13" }}
          >
            The numbers that shaped every decision.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ gridColumn: "1 / 13" }}>
            {[
              { value: "64%", label: "Rated academic adjustment moderately to extremely challenging", color: accent },
              { value: "61%", label: "Rarely or never seek mental health support, despite experiencing need", color: pink },
              { value: "71%", label: "Saw value in VR meditation for exam stress and performance", color: lavender },
              { value: "58%", label: "Open or maybe open to using VR wellness tools regularly", color: accent },
            ].map((m) => (
              <MetricStat key={m.label} accent={m.color} value={m.value} label={m.label} />
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 8 — Large editorial quote: standalone, centered, 56-72px, full-width canvas */}
      <EditorialLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Quote
            align="center"
            accent={accent}
            text={"61% of students who experience a mental health need rarely or never seek\nsupport — yet 71% said VR meditation could help them."}
            attribution="Primary research synthesis — 33-participant student survey, Dec 2024"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div style={{ gridColumn: "3 / 11", justifySelf: "center" }}>
          <GlassNote
            color={pink}
            label="Methodological limitation"
            text="Participants were self-selected students from a single institution — findings are directional, not generalizable. A next step: a broader, multi-institution sample, including students who've actively sought support."
          />
        </div>
      </EditorialLayout>

      {/* 9 — Therapist consultation: glass pull-quote, floating over the section */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Expert Consultation</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[22ch] text-[var(--color-ink)]">
            Designing for psychological safety.
          </h3>
        </div>
        <div className="rounded-[2rem] p-10 md:p-14" style={{ gridColumn: "1 / 9", ...tintedGlass(accent, 0.1) }}>
          <Quote
            accent={accent}
            text="The avatar should model a healthy relationship — providing space, listening, and validation — while maintaining appropriate boundaries. It should feel like someone who cares, without replacing human connection."
            attribution="Licensed therapist interview, Dec 2024"
            style={{ maxWidth: "48ch" }}
          />
        </div>
        <div style={{ gridColumn: "9 / 13", alignSelf: "end" }}>
          <GlassNote
            color={pink}
            label="What changed after the interview"
            text="Before: the avatar offered meditation right after the user picked an emotion. After: a validation step first — acknowledge, then guide. One principle drove the change: never skip acknowledgement."
          />
        </div>
      </EditorialLayout>

      {/* 10 — Therapist principles: 4 items in 2 columns */}
      <EditorialLayout>
        <ol className="flex flex-col" style={{ gridColumn: "1 / 7" }}>
          {[
            { label: "Trust building", detail: "Set clear expectations upfront — session duration, confidentiality, what the avatar can and can't do. Uncertainty breeds anxiety." },
            { label: "Active listening cues", detail: "Pick up the user's own keywords and mirror their language. If they say \"stressed,\" the avatar uses \"stress.\" Pauses simulate thought." },
          ].map((item) => (
            <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
              <p className="font-semibold text-[var(--color-ink)]">{item.label}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
        <ol className="flex flex-col" style={{ gridColumn: "7 / 13", alignSelf: "end" }}>
          {[
            { label: "Validate, then act", detail: "\"That sounds really challenging\" before \"Let's try breathing.\" Never skip acknowledgement — it's what makes a response feel human." },
            { label: "Ethical guardrails", detail: "Limit session availability to prevent dependency, and include gentle prompts toward professional help. Never promise what the system can't keep." },
          ].map((item) => (
            <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
              <p className="font-semibold text-[var(--color-ink)]">{item.label}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
      </EditorialLayout>

      {/* 11 — Design rationale: list col 1-8, aside col 9-13 */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 8" }}>
          <Eyebrow>Design Rationale</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[20ch] text-[var(--color-ink)]">
            Three decisions, backed by research.
          </h3>
          <ol className="mt-8 flex flex-col">
            {[
              { label: "Why VR — privacy without stigma", detail: "A physically enclosed space nobody else can see into. Directly answers the 67% who'd rather stay independent than seek help in public." },
              { label: "Why an avatar — connection without commitment", detail: "Instantly available — no booking, no commute, no waiting list — for the 48% who cite no time for traditional support." },
              { label: "Why talk, then meditation — acknowledge, then guide", detail: "Students need to feel heard before they can receive guidance. Conversational support first, technique second." },
            ].map((item) => (
              <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
                <p className="font-semibold text-[var(--color-ink)]">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
          <GlassNote
            label="Scoped for depth, not breadth"
            text="One exceptional, research-grounded experience over five half-finished features. Voice AI, biometric sensors, and mood tracking are roadmap — not v1."
          />
        </div>
      </EditorialLayout>

      {/* 12 — Build collage: GalleryLayout widened to 1600px, staggered + a floating glass annotation */}
      <GalleryLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 7" }}>
          <ImageFrame src="/img/wellnut/emotion-bubbles.jpg" alt="Unreal Engine build — Lonely or Stressed emotion bubbles in the forest" aspect="9/16" objectFit="contain" />
        </div>
        <div style={{ gridColumn: "8 / 13", marginTop: "12%" }}>
          <ImageFrame src="/img/wellnut/blueprint-editor.jpg" alt="Unreal Engine editor — emotion bubble blueprint system" aspect="16/9" objectFit="contain" rotate={1.5} />
        </div>
        <div style={{ gridColumn: "5 / 9", marginTop: "-8%", justifySelf: "center", zIndex: 2 }}>
          <div className="rounded-2xl px-6 py-4 max-w-[34ch]" style={tintedGlass(pink, 0.12)}>
            <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase" style={{ color: pink }}>
              In the editor
            </p>
            <p className="mt-2 text-sm text-[var(--color-ink)] leading-relaxed">
              Emotion-bubble blueprints branch the dialogue tree live in Unreal —
              the same system built the emotion-bubble forest on the left.
            </p>
          </div>
        </div>
      </GalleryLayout>

      {/* 13 — Solution: FullBleed, illustrated brand poster, text overlay chip */}
      <FullBleedLayout
        image="/img/wellnut/brand-poster.png"
        imageAlt="Wellnut — a nutshell to express yourself, brand poster"
        imageOpacity={1}
        minHeight="90dvh"
        overlayClassName="items-end justify-items-start"
      >
        <div className="max-w-[36ch] rounded-2xl p-6" style={tintedGlass(accent, 0.14)}>
          <Eyebrow>The Solution</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-[1.02] text-[var(--color-ink)]">
            One polished experience beats five unfinished ones.
          </h3>
          <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
            A forest environment and meditation cave in Unreal Engine, an
            avatar with two emotion-based dialogue branches, a guided
            meditation, a personalized greeting, and a blue-green palette
            chosen for psychological calm.
          </p>
        </div>
      </FullBleedLayout>

      {/* 14 — Watch it work: three real clips, one build, one demo, widened to 1440px */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Watch It Work</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[24ch] text-[var(--color-ink)]">
            Three moments from a six-month build.
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/img/wellnut/build-environment.mp4", caption: "Building the forest, in the editor" },
              { src: "/img/wellnut/showcase-venue.mp4", caption: "Setting up for showcase night" },
              { src: "/img/wellnut/vr-guided-session.mp4", caption: "Guiding a first-time user in" },
            ].map((v) => (
              <div key={v.src}>
                <video
                  className="w-full rounded-2xl"
                  style={{ aspectRatio: "9/16", objectFit: "cover", backgroundColor: "#000" }}
                  src={v.src}
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                />
                <p className="mt-3 text-xs text-[var(--color-ink-faint)] tracking-wide">{v.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </EditorialLayout>

      {/* 15 — Showcase room: GalleryLayout with rotation */}
      <GalleryLayout>
        <div style={{ gridColumn: "1 / 7" }}>
          <ImageFrame src="/img/wellnut/showcase-team.jpg" alt="Team at the Jarvis Innovation Showcase 2025" aspect="5/4" rotate={-2} />
        </div>
        <div style={{ gridColumn: "8 / 13", marginTop: "10%" }}>
          <ImageFrame src="/img/wellnut/showcase-presentation.jpg" alt="Wellnut presented to a full room at the showcase" aspect="3/4" rotate={2} />
        </div>
      </GalleryLayout>

      {/* 16 — Wall of feedback: Split, image left, quote + texture right */}
      <SplitLayout
        ratio={[5, 7]}
        left={<ImageFrame src="/img/wellnut/wall-of-feedback.jpg" alt="Wall of Feedback — real sticky notes left by showcase attendees" aspect="3/4" objectFit="contain" />}
        right={
          <div>
            <Eyebrow>Jarvis Innovation Showcase · 2025</Eyebrow>
            <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight text-[var(--color-ink)]">
              Live feedback, in real time.
            </h3>
            <p className="mt-4 text-[var(--color-ink-muted)] text-lg leading-relaxed">
              Attendees tried the live prototype and left sticky notes on a
              Wall of Feedback — &ldquo;loved it,&rdquo; requests for
              meditative background audio, one asking for Wellnut to
              &ldquo;have emotes.&rdquo;
            </p>
            <div className="mt-6">
              <Quote
                accent={pink}
                text="This feels like talking to someone who actually cares."
                attribution="Attendee feedback — Jarvis Innovation Showcase, May 2025"
              />
            </div>
          </div>
        }
      />

      {/* 17 — Impact: hero stat + supporting stats, premium composition on a purple→indigo field, widened to 1440px */}
      <GradientField gradient={wellnutGradients.purpleIndigo}>
        <EditorialLayout maxWidth="1440px">
          <h3
            className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight text-[var(--color-ink)]"
            style={{ gridColumn: "1 / 13" }}
          >
            Research that built something real.
          </h3>
          <div style={{ gridColumn: "1 / 8" }}>
            <MetricStat size="hero" accent={accent} value="5 → 0" label="Team members onboarded to Unreal Engine — none had prior experience" />
          </div>
          <div
            className="flex flex-col gap-6 rounded-2xl p-6"
            style={{ gridColumn: "9 / 13", alignSelf: "end", ...tintedGlass(pink, 0.08) }}
          >
            <MetricStat accent={pink} value="71%" label="Pre-validated VR demand, before the product existed" />
            <MetricStat accent={pink} value="6 mo" label="From first literature review to live showcase" />
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 18 — Recognition timeline: dotted accent rail alternating purple / pink / lavender */}
      <EditorialLayout>
        <ol className="flex flex-col" style={{ gridColumn: "1 / 13" }}>
          {[
            { date: "Dec 2024 – Jan 2025", title: "Primary Research — 33 Students Surveyed", detail: "Mixed-methods survey across 6 disciplines validated the problem and revealed 71% VR receptiveness — directly informing the platform choice before any code was written.", dot: accent },
            { date: "Feb 2025", title: "Licensed Therapist Interview — Empathy Framework Created", detail: "A structured expert interview produced a reusable empathetic dialogue framework and ethical guardrails for avatar-based mental health interactions.", dot: pink },
            { date: "May 2025", title: "Jarvis Innovation Challenge Showcase", detail: "Prototype exhibited to students, faculty, and industry guests. Live feedback collected via a Wall of Feedback.", dot: lavender },
          ].map((item) => (
            <li key={item.date} className="py-5 border-t border-white/10 first:border-t-0 grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-2 md:gap-8">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: item.dot }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.dot }} />
                {item.date}
              </p>
              <div>
                <p className="font-semibold text-[var(--color-ink)]">{item.title}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed max-w-[60ch]">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </EditorialLayout>

      {/* 19 — Takeaways: what the project made undeniable, 2 columns */}
      <EditorialLayout>
        <h3
          className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight text-[var(--color-ink)]"
          style={{ gridColumn: "1 / 13" }}
        >
          What Wellnut taught me.
        </h3>
        <ol className="flex flex-col" style={{ gridColumn: "1 / 7" }}>
          {[
            { label: "Mixed methods work together", detail: "The survey showed what students needed. The therapist interview showed how to deliver it. Neither alone was enough." },
            { label: "Scope is a research decision", detail: "Choosing what not to build was as important as what to build — one polished MVP over five unfinished features." },
          ].map((item) => (
            <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
              <p className="font-semibold text-[var(--color-ink)]">{item.label}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
        <ol className="flex flex-col" style={{ gridColumn: "7 / 13", alignSelf: "end" }}>
          {[
            { label: "Domain experts accelerate design", detail: "One structured therapist interview gave us an entire empathy framework and ethical guardrails — months of iteration compressed into one session." },
            { label: "Technology serves the human need", detail: "We chose VR because the research pointed there, not because VR is exciting — private, available, judgment-free support was the actual goal." },
          ].map((item) => (
            <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
              <p className="font-semibold text-[var(--color-ink)]">{item.label}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
      </EditorialLayout>

      {/* 20 — Now: ReadingLayout, pure text, no image — deliberately narrow, a breath before the close */}
      <ReadingLayout>
        <Eyebrow>Now</Eyebrow>
        <p className="mt-4 font-[family-name:var(--font-display)] italic font-medium leading-tight text-[clamp(1.6rem,3.4vw,2.6rem)] text-[var(--color-ink)]">
          The roadmap picks up where the six-month scope had to stop.
        </p>
        <p className="mt-6 text-[var(--color-ink-muted)] text-lg leading-relaxed">
          Real-time AI and voice interaction, biometric sensor integration,
          more environment options, and a weekly check-in system are next —
          alongside testing with a broader, multi-institution sample and
          students who&rsquo;ve actively sought support, to move the findings
          from directional to representative.
        </p>
      </ReadingLayout>

      {/* 21 — Next project: FullBleed, centered overlay, follows the project order into Invisible Impacts */}
      <FullBleedLayout
        image="/img/coac/laptop-mockup.png"
        imageAlt="Invisible Impacts, a sensor-powered installation making AI's water cost tangible"
        imageOpacity={0.4}
        minHeight="60dvh"
        overlayClassName="items-center justify-items-center text-center"
      >
        <Link href="/projects/invisible-impacts" className="group">
          <span
            className="inline-flex rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
            style={tintedGlass(accent)}
          >
            <span style={{ color: lavender }}>Next Project</span>
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
