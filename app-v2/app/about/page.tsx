import type { Metadata } from "next";
import Link from "next/link";
import AboutPortrait from "./AboutPortrait";
import NightPage from "@/components/home/NightPage";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";
import InterestTags from "@/components/about/InterestTags";

export const metadata: Metadata = {
  title: "About | Ramya Yerramilli",
  description: "UX and Product Designer working across enterprise, SaaS, and AI products. Background, experience and what I do.",
};

const intro = [
  "I’m a UX and Product Designer working across enterprise, SaaS, and AI products.",
  "I bring together user research, product thinking, and design to turn complex problems into clear, usable solutions—from discovery to delivery.",
];

const whatIDo = [
  "Product discovery & strategy",
  "UX research & problem framing",
  "Enterprise & SaaS product design",
  "Human–AI interaction",
  "Cross-functional collaboration",
];

const experience = [
  { year: "2025 – 2026", role: "International Admissions Operations", org: "DePaul University · Chicago, IL" },
  { year: "2025", role: "UX Designer, Data Visualization (Internship)", org: "MainStreet Advisors, a Fifth Third Bank subsidiary · Chicago, IL" },
  { year: "", role: "M.S. Human–Computer Interaction", org: "DePaul University · Chicago, IL" },
  { year: "2018 – 2024", role: "Interior Designer", org: "Residential & Commercial Projects · Hyderabad, India" },
  { year: "", role: "M.A. Design Management & Entrepreneurship", org: "De Montfort University · Leicester, United Kingdom" },
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
    <NightPage>
      {/* Hero — portrait and story on the deep band */}
      <DeepBand>
        <div
          className="wrap grid items-start gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-14"
          style={{ paddingTop: "calc(var(--nav-h) + 40px)", paddingBottom: 56 }}
        >
          <AboutPortrait src="/img/about/ramya-golden-gate-sunset.webp" alt="Ramya Yerramilli smiling, standing at a red railing with the Golden Gate Bridge and the bay behind her at sunset" />

          <div>
            <p className="eyebrow eyebrow-rule">About</p>
            <h1 className="mt-5" style={{ fontSize: "clamp(44px, 5vw, 72px)" }}>
              About me
            </h1>
            <div className="mt-7 flex flex-col gap-5">
              {intro.map((p, i) => (
                <p key={i} className="text-[16px] leading-[1.8] text-[var(--body)]">{p}</p>
              ))}
            </div>
            <h2 className="mt-9 text-[var(--ink)]" style={{ fontSize: 26, lineHeight: 1.15 }}>What I do</h2>
            <ul className="mt-4 grid gap-2.5">
              {whatIDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] leading-[1.6] text-[var(--body)]">
                  <span aria-hidden="true" className="mt-[0.7em] h-[5px] w-[5px] flex-none rounded-full" style={{ background: "#d9b45a" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="meta-lc mt-8">M.S. Human-Computer Interaction · M.A. Design Management &amp; Entrepreneurship</p>
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
                <span className="text-[13px] tracking-[0.02em] text-[var(--muted)] md:pt-0.5" aria-hidden={row.year ? undefined : true}>{row.year}</span>
                <div>
                  <p className="text-[17px] text-[var(--ink)]">{row.role}</p>
                  <p className="mt-1 text-[14px] text-[var(--body)]">{row.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 02 — Areas of Interest */}
      <Section id="interests">
        <div className="sec-grid">
          <SectionHead n="02" eyebrow="Focus" title="Areas of interest" />
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

    </NightPage>
  );
}
