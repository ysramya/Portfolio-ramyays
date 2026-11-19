import type { Metadata } from "next";
import Link from "next/link";
import NightPage from "@/components/home/NightPage";
import ChapterTrail, { type Chapter } from "@/components/case-study/ChapterTrail";
import ZoomShots from "@/components/case-study/ZoomShots";
import { Head } from "@/components/case-study/CaseStudyPage";
import { projects } from "@/lib/projects";
import {
  HeroStage, BigSurvey, ProblemDiagram, JourneyShift, DecisionMap, ValidateFirst,
  StepStrip, ExperienceStage, Principles, ContributionMap, Timeline, Mvp, BuildClip,
  Proof, ShowcaseGrid,
} from "./Visuals";

/**
 * Wellnut, per wellnut_case_study_rewrite_80_visual_20_text.md: six chapters,
 * about 80% pictures to 20% words. A working VR prototype, exhibited at the
 * Jarvis Innovation Showcase (May 2025). No clinical, adoption or engagement
 * claims. Survey figures keep their original context and caveat.
 */

export const metadata: Metadata = {
  title: "Wellnut | Ramya Yerramilli",
  description:
    "A private VR companion that helps students pause, express how they feel, and access guided support in a judgment-free environment.",
};

const chapters: Chapter[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The problem" },
  { id: "opportunity", label: "The opportunity" },
  { id: "experience", label: "The experience" },
  { id: "role", label: "My role" },
  { id: "outcome", label: "Outcome" },
];

const lede = "mt-4 max-w-[34rem] text-[var(--body)] lg:ml-[232px]";

export default function WellnutPage() {
  const idx = projects.findIndex((p) => p.slug === "wellnut");
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <NightPage>
      <div className="wn">
        <ChapterTrail chapters={chapters} />
        <ZoomShots />

        <div className="cs-with-rail">
          <div className="wrap">
            {/* 1 · Overview */}
            <section id="overview" className="cs-section !pt-[calc(var(--nav-h)+clamp(16px,2.6vw,34px))] !pb-[clamp(40px,5vw,72px)]" aria-labelledby="cs-title">
              <div data-reveal className="grid items-start gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
                <div>
                  <p className="eyebrow eyebrow-rule">Case study · VR</p>
                  <h1 id="cs-title" className="mt-5" style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>Wellnut</h1>
                  <p className="mt-3 max-w-[22ch] text-[clamp(20px,2.2vw,28px)] leading-snug text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
                    Rethinking the first step toward mental health support.
                  </p>
                  <p className="mt-6 flex flex-wrap gap-3">
                    <a href="#experience" className="btn">Explore the experience <span aria-hidden="true">↓</span></a>
                    <a href="#problem" className="btn btn-outline">See the research <span aria-hidden="true">↓</span></a>
                  </p>
                </div>
                <div className="lg:pt-[2.2rem]">
                  <p className="max-w-[34rem] text-[var(--body)]">
                    A private VR companion that helps students pause, express how they feel, and access guided support in a judgment-free environment.
                  </p>
                  <dl className="wn-facts mt-5">
                    <div><dt>Role</dt><dd>UX Researcher + Project Coordinator</dd></div>
                    <div><dt>Time</dt><dd>6 months, Nov 2024 – May 2025</dd></div>
                    <div><dt>Context</dt><dd>Jarvis Innovation Challenge 2025</dd></div>
                    <div><dt>Team</dt><dd>UX Research, Unreal Development, Environment Art, Character Art, Audio</dd></div>
                    <div><dt>Tools</dt><dd>Unreal Engine, Maya, Google Forms, Perforce</dd></div>
                  </dl>
                </div>
              </div>
              <HeroStage />
            </section>

            {/* 2 · The problem */}
            <section id="problem" className="cs-section">
              <Head n="01" label="The problem" title="Support existed. Taking the first step was the barrier." />
              <p data-reveal className={lede}>
                Stigma, time, independence, and uncertainty stood between students and services that were already available.
              </p>
              <div className="mt-10 grid gap-8">
                <BigSurvey />
                <ProblemDiagram />
              </div>
            </section>

            {/* 3 · The opportunity */}
            <section id="opportunity" className="cs-section">
              <Head n="02" label="The opportunity" title="Not therapy in VR. A more approachable first step." />
              <p data-reveal className={lede}>
                The survey showed what students were experiencing. A licensed therapist consultation shaped how the experience should respond.
              </p>
              <div className="mt-10 grid gap-8">
                <JourneyShift />
                <DecisionMap />
                <ValidateFirst />
              </div>
            </section>

            {/* 4 · The experience */}
            <section id="experience" className="cs-section">
              <Head n="03" label="The experience" title="From emotion to guided practice." />
              <p data-reveal className={lede}>
                A private forest, emotion-based dialogue, an avatar companion, and guided meditation in one focused VR journey.
              </p>
              <div className="mt-10 grid gap-8">
                <StepStrip />
                <ExperienceStage />
                <Principles />
              </div>
            </section>

            {/* 5 · My role */}
            <section id="role" className="cs-section">
              <Head n="04" label="My role" title="I connected research, product direction, and delivery." />
              <p data-reveal className={lede}>
                As UX Researcher and Project Coordinator, I translated student and expert input into product decisions and kept the team on a buildable MVP.
              </p>
              <div className="mt-10 grid gap-8">
                <ContributionMap />
                <Timeline />
                <Mvp />
                <BuildClip />
              </div>
            </section>

            {/* 6 · Outcome */}
            <section id="outcome" className="cs-section">
              <Head n="05" label="Outcome" title="Six months. One working VR experience." />
              <p data-reveal className={lede}>
                The team exhibited Wellnut at the Jarvis Innovation Showcase in May 2025. Attendees tried it and left feedback on a Wall of Feedback.
              </p>
              <div className="mt-10 grid gap-10">
                <Proof />
                <ShowcaseGrid />
              </div>

              <blockquote data-reveal className="mt-12 max-w-[30ch] text-[clamp(22px,2.8vw,34px)] leading-snug text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
                “This feels like talking to someone who actually cares.”
                <footer className="meta-lc mt-3">Attendee feedback · Jarvis Innovation Showcase · May 2025</footer>
              </blockquote>

              <p data-reveal className="mt-12 max-w-[30ch] text-[clamp(22px,2.8vw,34px)] leading-tight text-[var(--ink)]" style={{ fontFamily: "var(--font-prata), serif" }}>
                The hardest part wasn’t building VR. It was making the first step toward support feel approachable.
              </p>
              <p data-reveal className="mt-5 max-w-[40rem] text-[13px] leading-relaxed text-[var(--muted)]">
                Status: working prototype. Clinical efficacy, sustained engagement, adoption, and impact on help-seeking remain unproven.
              </p>
              <p className="mt-6 flex flex-wrap gap-3">
                <a href="#experience" className="btn">Explore the experience <span aria-hidden="true">↑</span></a>
                <Link href="/#case-studies" className="btn btn-outline">Back to projects</Link>
              </p>

              <nav aria-label="Project navigation" className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--rule)" }}>
                <Link href={`/projects/${prev.slug}`} className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] hover:text-[var(--ink)]">
                  <span aria-hidden="true">←&nbsp;</span> {prev.title}
                </Link>
                <Link href={`/projects/${next.slug}`} className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] hover:text-[var(--ink)]">
                  {next.title} <span aria-hidden="true">&nbsp;→</span>
                </Link>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </NightPage>
  );
}
