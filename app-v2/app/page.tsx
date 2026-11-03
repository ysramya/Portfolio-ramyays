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



export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <DeepBand ribbon>
        <div
          className="wrap grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] md:gap-14"
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
              {["Product discovery & planning", "Product operations & workflows", "Research-led decisions", "AI & emerging technology"].map((a) => (
                <li key={a} className="hero-tag">
                  {a}
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
            className="text-[14px] text-[var(--body)] transition-colors hover:text-[var(--ink)]"
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
