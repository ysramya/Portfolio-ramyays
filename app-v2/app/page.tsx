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

const industries = [
  {
    title: "Financial services",
    body: "Dashboards and reporting tools for teams managing $1B+ in assets, where a wrong read has consequences.",
  },
  {
    title: "Research & education",
    body: "Studies on human-AI interaction at DePaul's RAISE Lab, turning mixed-methods findings into design direction.",
  },
  {
    title: "Architecture & interiors",
    body: "Six years leading stakeholder-heavy projects before UX: the habit of designing inside real constraints.",
  },
];


export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <DeepBand rain ribbon>
        <div
          className="wrap grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] md:gap-14"
          style={{ paddingTop: "calc(var(--nav-h) + 48px)", paddingBottom: 72 }}
        >
          <div className="hero-seq">
            <p className="eyebrow eyebrow-rule">Product &amp; Experience Strategist</p>
            <h1 className="mt-5">Ramya Yerramilli</h1>
            <h2
              className="mt-5"
              style={{ fontSize: "clamp(26px, 2.9vw, 38px)", lineHeight: 1.2, maxWidth: "16em" }}
            >
              Turning complex user and business problems into actionable product decisions.
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of credibility">
              {["Product discovery", "Research-led decision-making", "AI & complex workflows"].map((a) => (
                <li key={a} className="pill">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-relaxed text-[var(--muted)]">
              Graduate Research Assistant at DePaul&rsquo;s RAISE Lab, previously at
              MainStreet Advisors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#work" className="btn">
                View my work <span aria-hidden>&#8594;</span>
              </Link>
              <a href="mailto:ys.ramya@gmail.com" className="btn btn-outline">
                Get in touch
              </a>
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

      {/* ── 01 Selected work ─────────────────────────────────────── */}
      <Section id="work" divided={false}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead n="01" title="Projects" />
          <Link
            href="/about"
            className="text-[14px] text-[var(--body)] transition-colors hover:text-[var(--ink)]"
          >
            About me <span aria-hidden>&#8594;</span>
          </Link>
        </div>

        <div className="mt-10">
          <ProjectTabs projects={projects} />
        </div>
      </Section>

      {/* ── 02 Industries ────────────────────────────────────────── */}
      <Section id="background">
        <div className="sec-grid">
          <SectionHead n="02" eyebrow="Background" title="Designing across industries" />
          <ul className="grid gap-4 sm:grid-cols-3">
            {industries.map((c) => (
              <li key={c.title} className="panel p-6">
                <h3 style={{ fontSize: 19, lineHeight: 1.3 }}>{c.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[var(--body)]">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Closing ──────────────────────────────────────────────── */}
      <DeepBand>
        <div className="wrap grid gap-10 py-[clamp(64px,8vw,112px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
          <div>
            <p className="eyebrow eyebrow-rule">Currently</p>
            <h2 className="mt-5" style={{ fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1.08, maxWidth: "13em" }}>
              Looking for product design roles where research shapes the decisions.
            </h2>
          </div>
          <div>
            <p className="lead">
              I&rsquo;m most useful on problems where the right answer isn&rsquo;t known yet:
              new surfaces, unclear user models, and systems people have reason not to trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:ys.ramya@gmail.com" className="btn">
                Get in touch <span aria-hidden>&#8594;</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener" className="btn btn-outline">
                Resume <span aria-hidden>&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </DeepBand>
    </>
  );
}
