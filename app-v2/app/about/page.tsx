import type { Metadata } from "next";
import Link from "next/link";
import AboutPortrait from "./AboutPortrait";
import Reveal from "@/components/ds/Reveal";
import GlassCard from "@/components/ds/GlassCard";
import FullBleedLayout from "@/components/ds/layouts/FullBleedLayout";

export const metadata: Metadata = {
  title: "About — Ramya Yerramilli",
  description: "How I think, and what shaped my journey as a designer.",
};

const paragraphs = [
  "I started my career designing spaces, but somewhere along the way I became more interested in the people moving through them than the spaces themselves. During my first master's in Design Management & Entrepreneurship, I discovered design thinking, service design, and the idea that great design isn't just about aesthetics—it's about understanding people, systems, and the experiences they create. That realization completely changed the direction of my career.",
  "Over the next six years, I led residential and commercial design projects, collaborating with clients, contractors, and cross-functional teams to bring complex ideas to life. In 2024, I moved to Chicago to pursue a second master's in Human–Computer Interaction at DePaul University. Today, I work at the intersection of research, design, and AI, exploring how emerging technologies can be more intuitive, trustworthy, and human-centered. My work spans healthcare, finance, and responsible AI, where I'm equally excited by asking the right questions as I am by designing the solutions.",
  "Outside of work, you'll usually find me behind a camera, creating digital paintings, or experimenting in the kitchen. Different mediums, same curiosity—observing, exploring, and making. That's probably the thread connecting everything I do.",
];

const experience = [
  { year: "2026 – Present", role: "Research Assistant", org: "RAISE Lab · DePaul University" },
  { year: "2025 – 2026", role: "International Admissions Operations", org: "DePaul University" },
  { year: "2024 – 2026", role: "M.S. Human–Computer Interaction", org: "DePaul University" },
  { year: "2018 – 2024", role: "Interior Designer", org: "Residential & Commercial Projects" },
  { year: "2017 – 2018", role: "M.A. Design Management & Entrepreneurship", org: "Anant National University" },
];

const research = [
  {
    title: "Making AI Infrastructure Visible: Interactive Art as a Public-Facing AI Ethics Interface",
    venue: "AIES 2026 · Under Review",
  },
  {
    title: "Consciously Assigning Personality to AI",
    venue: "CHI 2027 · In Progress",
  },
  {
    title: "Exposing & Mitigating Dark Patterns in Generative AI for Vulnerable Users",
    venue: "RAISE Lab · Ongoing Research",
  },
  {
    title: "AI Safety Evaluation Framework for Community Banks",
    venue: "Research Proposal · 2026",
  },
];

const interests = [
  "Human-Centered AI",
  "Responsible AI",
  "AI Safety",
  "AI Ethics",
  "UX Research",
  "Mixed Methods",
  "Design Strategy",
  "Systems Thinking",
  "Service Design",
  "Accessibility",
  "Design Systems",
  "Emerging Technologies",
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>
      {/* 01 — About: editorial split, portrait left, story right */}
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-16 lg:gap-20 items-center px-6"
        style={{ maxWidth: "1400px", padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)" }}
      >
        <AboutPortrait src="/img/about/IMG_8578.jpeg" alt="Portrait of Ramya Yerramilli" />

        <div style={{ maxWidth: "700px" }}>
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-green)]">
            About
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,5vw,4rem)] text-[var(--color-ink)]">
            Hi, I&rsquo;m Ramya.
          </h1>

          <div className="mt-8 flex flex-col gap-6">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-[1.85] text-[var(--color-ink-muted)]"
                style={{
                  animation: `about-rise 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.15}s both`,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 02 — Experience: quiet editorial table, hairline dividers only */}
      <section
        className="mx-auto px-6"
        style={{ maxWidth: "1000px", padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2rem)" }}
      >
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-center text-[clamp(1.8rem,3.4vw,2.6rem)] text-[var(--color-ink)]">
            Experience
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col" style={{ borderTop: "1px solid var(--color-border)" }}>
            {experience.map((row) => (
              <div
                key={row.role}
                className="group grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-1 md:gap-8 py-6 md:items-center transition-colors duration-300 hover:bg-white/[0.03] rounded-lg px-3 -mx-3"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <span className="text-sm tracking-[0.04em] text-[var(--color-ink-faint)]">{row.year}</span>
                <span className="text-lg text-[var(--color-ink)]">{row.role}</span>
                <span className="text-base text-[var(--color-ink-muted)]">{row.org}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 03 — Research & Writing: 2x2 glass card grid */}
      <section
        className="mx-auto px-6"
        style={{ maxWidth: "1100px", padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2rem)" }}
      >
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-center text-[clamp(1.8rem,3.4vw,2.6rem)] text-[var(--color-ink)]">
            Research &amp; Writing
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {research.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <GlassCard
                as="div"
                className="p-7 h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <p className="font-[family-name:var(--font-display)] text-xl leading-snug text-[var(--color-ink)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm font-semibold tracking-[0.08em] uppercase text-[var(--color-green)]">
                  {item.venue}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 — Areas of Interest: wrapping glass pills */}
      <section
        className="mx-auto px-6"
        style={{ maxWidth: "900px", padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 2rem)" }}
      >
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-center text-[clamp(1.8rem,3.4vw,2.6rem)] text-[var(--color-ink)]">
            Areas of Interest
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {interests.map((tag) => (
              <span
                key={tag}
                className="glass rounded-full px-5 py-2.5 text-sm text-[var(--color-ink-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 05 — Beyond the Screen: full-bleed editorial CTA */}
      <FullBleedLayout
        image="/img/beyond-the-screen/Cityscape/IMG_0341.JPG"
        imageAlt="A photograph from Beyond the Screen"
        minHeight="60dvh"
        imageOpacity={0.55}
      >
        <Reveal className="max-w-[560px] text-center">
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-green)]">
            Beyond the Screen
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[var(--color-ink)]">
            Beyond the Screen
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-muted)]">
            Beyond research and design, I spend my time photographing cities and nature, creating
            digital paintings, and experimenting in the kitchen. Different mediums, same curiosity.
          </p>
          <Link
            href="/beyond-the-screen"
            className="glass mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.04em] text-[var(--color-ink)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Explore <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </FullBleedLayout>

      {/* transform-only — never opacity, so text can never get stuck invisible
          if an animation somehow fails to complete */}
      <style>{`
        @keyframes about-rise {
          from { transform: translateY(16px); }
          to { transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
