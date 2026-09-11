import Link from "next/link";
import Image from "next/image";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";
import LoopVideo from "@/components/LoopVideo";
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
    body: "Six years leading stakeholder-heavy projects before UX — the habit of designing inside real constraints.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <DeepBand>
        <div
          className="wrap grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] md:gap-14"
          style={{ paddingTop: "calc(var(--nav-h) + 48px)", paddingBottom: 72 }}
        >
          <div>
            <p className="eyebrow eyebrow-rule">Product designer &middot; UX researcher</p>
            <h1 className="mt-5">Ramya Yerramilli</h1>
            <h2
              className="mt-5"
              style={{ fontSize: "clamp(28px, 3.1vw, 40px)", lineHeight: 1.2, maxWidth: "12em" }}
            >
              Making AI safer for everyday decisions.
            </h2>
            <p className="lead mt-5">
              Designing trustworthy AI experiences informed by mixed-methods research and six
              years of complex stakeholder-driven design.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">
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

          {/* The illustration is a finished collage on its own ivory paper
              ground, so on deep green it's presented as a print: an ivory
              mat of the same colour, soft corners, the artwork uncropped.
              The mat uses a literal ivory because `--bg` is green in here. */}
          <div
            className="mx-auto w-full max-w-[500px]"
            style={{ background: "#f7f5ef", padding: "clamp(10px, 1.4vw, 18px)", borderRadius: "var(--radius)" }}
          >
            <div className="relative w-full" style={{ aspectRatio: "550 / 560" }}>
              <Image
                src="/img/profile/ramya-hero-image.png"
                alt="Illustrated portrait of Ramya Yerramilli in profile, with pressed flowers, a Chicago skyline photo, and the handwritten line “Curiosity for a kinder, more human future.”"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </DeepBand>

      {/* ── 01 Selected work ─────────────────────────────────────── */}
      <Section id="work" divided={false}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead n="01" eyebrow="Case studies" title="Selected work" />
          <Link
            href="/about"
            className="text-[14px] text-[var(--body)] transition-colors hover:text-[var(--ink)]"
          >
            About me <span aria-hidden>&#8594;</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="card group flex flex-col">
              <div className="relative w-full" style={{ aspectRatio: "9 / 10", background: "#ffffff" }}>
                {p.video ? (
                  <LoopVideo
                    src={p.video}
                    poster={p.image}
                    label={`${p.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col" style={{ padding: "20px 18px 18px", gap: 14 }}>
                <h3 style={{ fontSize: 19, lineHeight: 1.25 }}>{p.title}</h3>
                <p className="flex-1 text-[14px] leading-[1.6] text-[var(--body)]">{p.description}</p>
                <span aria-hidden className="micro-rule" />
                <div className="flex items-center justify-between gap-3">
                  <span className="meta">{p.category}</span>
                  <span aria-hidden className="arrow-btn">
                    &#8594;
                  </span>
                </div>
              </div>
            </Link>
          ))}
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
              I&rsquo;m most useful on problems where the right answer isn&rsquo;t known yet —
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
