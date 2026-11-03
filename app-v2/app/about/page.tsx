import type { Metadata } from "next";
import Link from "next/link";
import AboutPortrait from "./AboutPortrait";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";
import Rich from "@/components/ds/Rich";

export const metadata: Metadata = {
  title: "About | Ramya Yerramilli",
  description: "Product strategy and operations professional with an MS in Human-Computer Interaction. Background, experience, research and what I am looking for next.",
};

const paragraphs = [
  "I started my career in design, and became more interested in the people and systems around a project than the project itself. During my first master's in Design Management & Entrepreneurship I discovered design thinking and service design, and with them the idea that good decisions start with understanding people, systems and constraints. That changed the direction of my career.",
  "Over the next six years I led residential and commercial projects, working with clients, contractors and cross-functional teams to deliver complex work to scope. I then went back to school for a **second master's in Human-Computer Interaction** at DePaul University. Today I work where **product, operations, research and AI meet**: finding where a process or product is failing the people and the business, and **turning that research into decisions a team can act on**.",
  "My work so far spans **financial services, higher-education operations and responsible AI research**, in both B2B and B2C settings. I'm most interested in **product strategy and operations roles**, where I can help a team work out what to build, why, and how to get it done.",
  "Outside of work, you'll usually find me behind a camera, creating digital paintings, or experimenting in the kitchen. Different mediums, same curiosity: observing, exploring, and making.",
];

const experience = [
  { year: "2026 – Present", role: "Research Assistant", org: "RAISE Lab · DePaul University · Chicago, IL" },
  { year: "2025 – 2026", role: "International Admissions Operations", org: "DePaul University · Chicago, IL" },
  { year: "2025", role: "UX Designer, Data Visualization (Internship)", org: "MainStreet Advisors, a Fifth Third Bank subsidiary · Chicago, IL" },
  { year: "2024 – 2026", role: "M.S. Human–Computer Interaction", org: "DePaul University · Chicago, IL" },
  { year: "2018 – 2024", role: "Interior Designer", org: "Residential & Commercial Projects · Hyderabad, India" },
  { year: "2017 – 2018", role: "M.A. Design Management & Entrepreneurship", org: "De Montfort University · Leicester, United Kingdom" },
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
  "Product Strategy",
  "Product Operations",
  "Product Discovery",
  "Process Improvement",
  "Data & Dashboards",
  "Business Problem-Solving",
  "Human-AI Interaction",
  "Responsible AI",
  "AI Safety",
  "UX Research",
  "Mixed Methods",
  "Systems Thinking",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — portrait and story on the deep band */}
      <DeepBand ribbon>
        <div
          className="wrap grid items-center gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-14"
          style={{ paddingTop: "calc(var(--nav-h) + 40px)", paddingBottom: 56 }}
        >
          <AboutPortrait src="/img/about/ramya-golden-gate.webp" alt="Ramya Yerramilli smiling and looking out over the water, with the Golden Gate Bridge behind her at sunset" />

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
                  style={{ animation: `about-rise 1s cubic-bezier(0.33,1,0.68,1) ${0.1 + i * 0.12}s both` }}
                >
                  <Rich>{p}</Rich>
                </p>
              ))}
            </div>
          </div>
        </div>
      </DeepBand>

      {/* 01 — Experience */}
      <Section id="experience" divided={false}>
        <div className="sec-grid">
          <SectionHead n="01" eyebrow="Background" title="Experience & Education" />
          {/* Reverse-chronological, so the stagger carries the order rather
              than decorating it — the rows arrive the way you read them. */}
          <ul data-reveal-group>
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
          <ul data-reveal-group className="grid gap-4 sm:grid-cols-2">
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
          {/* Twelve tags; the CSS caps the delay from the fifth on, so this
              lands as one group settling rather than a slow cascade. */}
          <ul data-reveal-group className="flex flex-wrap gap-2.5 md:pt-2">
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
        <div className="wrap grid gap-10 py-[clamp(48px,6vw,80px)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-end md:gap-16">
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
                See Beyond the Screen <span aria-hidden>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </DeepBand>

      {/* fade only: starts at 30% so text can never be stuck invisible */}
      <style>{`
        @keyframes about-rise {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
