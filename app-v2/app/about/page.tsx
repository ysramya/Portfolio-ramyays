import type { Metadata } from "next";
import Link from "next/link";
import AboutPortrait from "./AboutPortrait";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";

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
  { title: "Consciously Assigning Personality to AI", venue: "CHI 2027 · In Progress" },
  {
    title: "Exposing & Mitigating Dark Patterns in Generative AI for Vulnerable Users",
    venue: "RAISE Lab · Ongoing Research",
  },
  { title: "AI Safety Evaluation Framework for Community Banks", venue: "Research Proposal · 2026" },
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
    <>
      {/* Hero — portrait and story on the deep band */}
      <DeepBand>
        <div
          className="wrap grid items-center gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16"
          style={{ paddingTop: "calc(var(--nav-h) + 48px)", paddingBottom: 72 }}
        >
          <AboutPortrait src="/img/about/IMG_8578.jpeg" alt="Portrait of Ramya Yerramilli" />

          <div>
            <p className="eyebrow eyebrow-rule">About</p>
            <h1 className="mt-5" style={{ fontSize: "clamp(44px, 5vw, 72px)" }}>
              Hi, I&rsquo;m Ramya.
            </h1>
            <div className="mt-7 flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.8] text-[var(--body)]"
                  style={{ animation: `about-rise 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.15}s both` }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </DeepBand>

      {/* 01 — Experience */}
      <Section id="experience" divided={false}>
        <div className="sec-grid">
          <SectionHead n="01" eyebrow="Background" title="Experience" />
          <ul>
            {experience.map((row) => (
              <li
                key={row.role}
                className="grid gap-1 py-5 md:grid-cols-[150px_minmax(0,1fr)] md:gap-6"
                style={{ borderTop: "1px solid var(--rule)" }}
              >
                <span className="text-[13px] tracking-[0.02em] text-[var(--muted)] md:pt-0.5">{row.year}</span>
                <div>
                  <p className="text-[17px] text-[var(--ink)]">{row.role}</p>
                  <p className="mt-1 text-[14px] text-[var(--body)]">{row.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 02 — Research & Writing */}
      <Section id="research">
        <div className="sec-grid">
          <SectionHead n="02" eyebrow="Research" title="Research & writing" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {research.map((item) => (
              <li key={item.title} className="panel flex flex-col p-6">
                <h3 className="text-[19px] leading-snug">{item.title}</h3>
                <p className="meta mt-auto pt-5">{item.venue}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 03 — Areas of Interest */}
      <Section id="interests">
        <div className="sec-grid">
          <SectionHead n="03" eyebrow="Focus" title="Areas of interest" />
          <ul className="flex flex-wrap gap-2.5 md:pt-2">
            {interests.map((tag) => (
              <li key={tag} className="pill">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Closing — Beyond the Screen */}
      <DeepBand>
        <div className="wrap grid gap-10 py-[clamp(64px,8vw,112px)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-end md:gap-16">
          <div>
            <p className="eyebrow eyebrow-rule">Beyond the screen</p>
            <h2 className="mt-5" style={{ fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1.08 }}>
              Different mediums, same curiosity.
            </h2>
          </div>
          <div>
            <p className="lead">
              Beyond research and design, I spend my time photographing cities and nature,
              creating digital paintings, and experimenting in the kitchen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/beyond-the-screen" className="btn">
                Explore <span aria-hidden>&#8594;</span>
              </Link>
              <a href="mailto:ys.ramya@gmail.com" className="btn btn-outline">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </DeepBand>

      {/* transform-only — never opacity, so text can't get stuck invisible */}
      <style>{`
        @keyframes about-rise {
          from { transform: translateY(16px); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
