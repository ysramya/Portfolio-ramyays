import Link from "next/link";
import Image from "next/image";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";
import ProjectTabs from "@/components/ProjectTabs";
import { projects } from "@/lib/projects";

/**
 * Homepage — deep-green opening, ivory body with numbered sections,
 * deep-green close: the same shape as every case study.
 */



/** Small line icons for the hero's four areas, in the site's 24x24 line style. */
function HeroIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const heroAreas = [
  {
    label: "Product discovery & planning",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5z" />
      </>
    ),
  },
  {
    label: "Product operations & workflows",
    icon: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h7a3 3 0 0 0 3-3V8" />
      </>
    ),
  },
  {
    label: "Research-led decisions",
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.2-4.2" />
      </>
    ),
  },
  {
    label: "AI & emerging technology",
    icon: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16v4M17 18h4" />,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <DeepBand ribbon>
        <div
          className="wrap grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-12"
          style={{ paddingTop: "calc(var(--nav-h) + 40px)", paddingBottom: 56 }}
        >
          <div className="hero-seq">
            <p className="eyebrow eyebrow-rule">Product Strategy &amp; Operations</p>
            <h1 className="mt-5">Ramya Yerramilli</h1>
            <h2
              className="mt-5"
              style={{ fontSize: "clamp(26px, 2.9vw, 38px)", lineHeight: 1.2, maxWidth: "16em" }}
            >
              I turn complex user and operational problems into clear product decisions.
            </h2>
            <ul className="hero-tags mt-6" aria-label="Areas of credibility">
              {heroAreas.map((a) => (
                <li key={a.label} className="hero-tag">
                  <HeroIcon>{a.icon}</HeroIcon>
                  <span>{a.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-relaxed text-[var(--muted)]">
              <strong>MS in Human-Computer Interaction</strong>, DePaul University. B2B and B2C
              experience across <strong>financial services, education and AI research</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {/* One action in the hero: contact lives in the nav, and again once at the page's close. */}
              <Link href="#case-studies" className="btn">
                View case studies <span aria-hidden>&#8595;</span>
              </Link>
            </div>
          </div>

          {/* The portrait is shot against the same deep green as the band, so
              it sits directly on the ground — no mat, just the system's
              rounded corner. */}
          <div className="pop hero-visual hero-portrait mx-auto w-full max-w-[440px]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 4", borderRadius: "var(--radius)" }}>
              <Image
                src="/img/profile/ramya-portrait.webp"
                alt="Portrait of Ramya Yerramilli looking up and to the side, lit warmly against a deep green background."
                fill
                priority
                sizes="(max-width: 768px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </DeepBand>

      {/* ── 01 Case studies ─────────────────────────────────────── */}
      <Section id="case-studies" divided={false}>
        <span id="work" aria-hidden />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead n="01" title="Case studies" />
          <Link
            href="/case-studies"
            className="inline-flex min-h-[44px] items-center text-[14px] text-[var(--body)] transition-colors hover:text-[var(--ink)]"
          >
            All case studies <span aria-hidden>&#8594;</span>
          </Link>
        </div>

        <div className="mt-10">
          <ProjectTabs projects={projects} />
        </div>
      </Section>

      {/* ── Closing ──────────────────────────────────────────────── */}
      <DeepBand>
        <div className="wrap grid gap-10 py-[clamp(48px,6vw,80px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
          <div>
            <p className="eyebrow eyebrow-rule">Currently</p>
            <h2 className="mt-5" style={{ fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1.08, maxWidth: "13em" }}>
              Looking for product strategy and operations roles where research and data shape the decisions.
            </h2>
          </div>
          <div>
            <p className="lead">
              I&rsquo;m most useful where the problem is unclear and several teams are involved:
              <strong>working out what to build and why, and getting it moving</strong>. Open to{" "}
              <strong>Product Strategy, Product Operations, Product Planning and Product Program roles</strong>,
              including AI-focused teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/resume.pdf" target="_blank" rel="noopener" className="btn">
                Download resume <span aria-hidden>&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </DeepBand>
    </>
  );
}
