import type { Metadata } from "next";
import Link from "next/link";
import AboutPortrait from "./AboutPortrait";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";
import Rich from "@/components/ds/Rich";
import InterestTags from "@/components/about/InterestTags";

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
    title: "Exposing & Mitigating Dark Patterns in Generative AI for Vulnerable Users",
    venue: "RAISE Lab · Ongoing Research",
  },
  { title: "AI Safety Evaluation Framework for Community Banks", venue: "Research Proposal · 2026" },
];


/**
 * Key facts under a section title. On desktop the title sits beside a long list
 * and would otherwise leave an empty column; these fill it with the numbers a
 * skimmer wants (all from the resume) and the whole head sticks while the list
 * scrolls. Hidden below md, where the title already sits above its content.
 */
function SideStats({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className="mt-6 hidden flex-col gap-5 md:flex">
      {stats.map((s) => (
        <div key={s.label} style={{ borderTop: "1px solid var(--rule)", paddingTop: 14 }}>
          <dt className="text-[var(--ink)]" style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1.1 }}>
            {s.value}
          </dt>
          <dd className="mt-1 max-w-[18em] text-[14px] leading-[1.55] text-[var(--body)]">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero — portrait and story on the deep band */}
      <DeepBand ribbon>
        <div
          className="wrap grid items-start gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-14"
          style={{ paddingTop: "calc(var(--nav-h) + 40px)", paddingBottom: 56 }}
        >
          <AboutPortrait src="/img/about/ramya-golden-gate-level.webp" alt="Ramya Yerramilli smiling and looking out over the water, with the Golden Gate Bridge behind her at sunset" />

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
          <SectionHead
            n="01"
            eyebrow="Background"
            title="Experience & Education"
            className="md:sticky md:top-28"
          >
            <SideStats
              stats={[
                { value: "6+ years", label: "of professional design, project and client-delivery experience" },
                { value: "2+ years", label: "of mixed-methods research" },
                { value: "2 master's", label: "in Human-Computer Interaction, and in Design Management & Entrepreneurship" },
              ]}
            />
          </SectionHead>
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
          <SectionHead n="02" eyebrow="Research" title="Research & writing" className="md:sticky md:top-28">
            <SideStats
              stats={[
                { value: "2", label: "studies and proposals on human-AI interaction and AI safety" },
                { value: "RAISE Lab", label: "ongoing research on dark patterns in generative AI for vulnerable users" },
              ]}
            />
          </SectionHead>
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
          <InterestTags />
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

    </>
  );
}
