import Link from "next/link";
import Image from "next/image";
import Postmark from "@/components/collage/Postmark";
import TextileBorder from "@/components/collage/TextileBorder";
import ArtSlot from "@/components/collage/ArtSlot";
import { projects } from "@/lib/projects";

/**
 * Homepage — the scrapbook/collage direction.
 *
 * Surfaces (paper grain, stamp perforations, tape, postmark, textile
 * border) are generated in CSS/SVG. The illustrated collage pieces —
 * portrait, stamps, ornaments, project art — are real artwork and render
 * through <ArtSlot>, which shows the finished image once the file exists
 * and a labelled placeholder until then, so nothing ships as an empty box.
 */

const intake = [
  {
    n: "01",
    title: "See my work",
    body: "Projects, case studies and designs that solve real problems.",
    href: "#work",
    tint: "var(--pink)",
    art: "/img/collage/intake-work.png",
    artLabel: "Pomegranate / botanical",
  },
  {
    n: "02",
    title: "Learn about me",
    body: "My background, design journey and what drives me.",
    href: "/about",
    tint: "var(--ochre)",
    art: "/img/collage/intake-about.png",
    artLabel: "Vintage radio",
  },
  {
    n: "03",
    title: "Research interests",
    body: "Human-AI interaction, AI safety, vulnerable users and more.",
    href: "#research",
    tint: "var(--sage)",
    art: "/img/collage/intake-research.png",
    artLabel: "Peacock",
  },
  {
    n: "04",
    title: "Just curious",
    body: "Field notes, thoughts, random joys and things I'm into.",
    href: "/beyond-the-screen",
    tint: "var(--paper-2)",
    art: "/img/collage/intake-curious.png",
    artLabel: "Chai cup",
  },
];

const investigations = [
  {
    n: "01",
    title: "Cost of a Click",
    tags: ["AI", "Environment", "Public Awareness"],
    body: "An interactive installation that makes the invisible infrastructure behind AI visible and tangible.",
    href: "/projects/invisible-impacts",
    // the one card that already has real art — a photo from the installation
    img: "/img/coac/hero-installation.jpg",
  },
  {
    n: "02",
    title: "Dark Patterns in AI",
    tags: ["AI", "Ethics", "Behavior"],
    body: "A mixed-methods study on how generative AI interfaces can manipulate vulnerable users.",
    href: "/projects/raahi",
    art: "/img/collage/inv-dark-patterns.png",
    artLabel: "Puppet strings",
    note: "People don't always know when they're being influenced.",
  },
  {
    n: "03",
    title: "Personality in AI",
    tags: ["AI", "Social Presence", "Trust"],
    body: "Exploring how assigning personality to AI impacts trust, reliance and manipulation.",
    href: "#research",
    art: "/img/collage/inv-personality.png",
    artLabel: "Two figures in conversation",
  },
  {
    n: "04",
    title: "AI & Infrastructure",
    tags: ["AI", "Governance", "Society"],
    body: "Researching the social and environmental impact of AI infrastructure.",
    href: "#research",
    art: "/img/collage/inv-infrastructure.png",
    artLabel: "Industrial landscape",
  },
];

const thinkingAbout = [
  "Agentic AI & accountability",
  "Designing for informed consent",
  "Infrastructure transparency",
  "Public understanding of AI",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="rule-ornament flex-1" aria-hidden />
      <p
        className="font-[family-name:var(--font-type)] text-[0.7rem] font-bold tracking-[0.28em] uppercase whitespace-nowrap text-center"
        style={{ color: "var(--red)" }}
      >
        {children}
      </p>
      <span className="rule-ornament flex-1" aria-hidden />
    </div>
  );
}

export default function Home() {
  return (
    <div className="collage relative overflow-hidden">
      <TextileBorder />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative" style={{ paddingTop: "calc(var(--nav-h) + 2rem)", paddingBottom: "3.5rem" }}>
        <div className="mx-auto grid gap-10 px-6 md:px-12 lg:grid-cols-[1.05fr_1fr] items-center" style={{ maxWidth: "1400px" }}>
          <div className="lg:pl-10">
            <p className="font-[family-name:var(--font-type)] text-sm tracking-[0.28em] uppercase" style={{ color: "var(--ink-soft)" }}>
              Hi, I&rsquo;m
            </p>
            <h1
              className="mt-2 font-[family-name:var(--font-slab)] leading-[0.88] text-[clamp(2.6rem,7.5vw,5.4rem)]"
              style={{ color: "var(--ink)" }}
            >
              Ramya
              <br />
              Yerramilli
            </h1>

            <p
              className="mt-5 font-[family-name:var(--font-type)] font-bold text-[0.95rem] md:text-base tracking-[0.06em] uppercase leading-relaxed"
              style={{ color: "var(--red)", maxWidth: "26ch" }}
            >
              UX Researcher investigating the human impact of AI
            </p>

            <div
              className="mt-5 flex flex-col gap-4 font-[family-name:var(--font-type)] text-[0.9rem] leading-[1.75]"
              style={{ color: "var(--ink-soft)", maxWidth: "46ch" }}
            >
              <p>
                I study how people understand, trust and respond to intelligent
                systems — especially where AI influences behavior, creates risk, or
                leaves people behind.
              </p>
              <p>
                Through mixed-methods research and human-centered design, I turn
                complex insights into experiences that are ethical, inclusive and
                truly human.
              </p>
            </div>

            <p className="mt-6 font-[family-name:var(--font-hand)] text-2xl" style={{ color: "var(--ink)" }}>
              Curious by nature. Researcher by choice.
            </p>

            <Postmark className="mt-6" />
          </div>

          {/* Collage composition */}
          <div className="relative min-h-[420px] md:min-h-[560px]">
            <div className="relative mx-auto" style={{ maxWidth: "400px" }}>
              <div
                className="absolute inset-x-6 top-8 bottom-10 rounded-[14px]"
                style={{ background: "var(--teal)", opacity: 0.9 }}
                aria-hidden
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 top-12 w-[180px] h-[180px] rounded-full"
                style={{ background: "var(--ochre)", opacity: 0.85 }}
                aria-hidden
              />
              <ArtSlot
                src="/img/collage/portrait.png"
                alt="Illustrated portrait of Ramya Yerramilli"
                label="Illustrated portrait"
                aspect="3/4"
                className="relative"
              />
            </div>

            <div className="absolute -top-2 left-0 w-[100px] rotate-[-6deg] hidden sm:block">
              <div className="stamp-edge">
                <ArtSlot src="/img/collage/stamp-elephant.png" alt="Vintage India postage stamp" label="Stamp" aspect="1/1.25" />
              </div>
            </div>

            <div className="absolute top-[27%] -left-2 md:left-0 w-[148px] md:w-[168px] rotate-[-3deg] hidden sm:block">
              <span className="tape left-1/2 -translate-x-1/2 -top-3 rotate-[-4deg]" aria-hidden />
              <div className="collage-card p-4">
                <p className="font-[family-name:var(--font-hand)] text-[1.05rem] leading-snug" style={{ color: "var(--ink)" }}>
                  Design is not just how it looks. It&rsquo;s how it makes people
                  feel, think and decide.
                </p>
              </div>
            </div>

            <div className="absolute top-[24%] right-0 w-[88px] rotate-[4deg] hidden md:block">
              <div className="collage-card px-2 py-3 text-center" style={{ borderColor: "var(--ochre)" }}>
                <p className="font-[family-name:var(--font-type)] text-[0.58rem] tracking-[0.16em]" style={{ color: "var(--red)" }}>
                  A 13407
                </p>
                <div className="my-2">
                  <ArtSlot src="/img/collage/ticket-motif.png" alt="Floral ticket motif" label="Motif" aspect="1/1" />
                </div>
                <p className="font-[family-name:var(--font-type)] text-[0.58rem] leading-tight" style={{ color: "var(--ink-soft)" }}>
                  खेलेगा
                  <br />
                  खिलेगा
                  <br />
                  इंडिया
                </p>
              </div>
            </div>

            <p
              className="absolute top-1 right-0 md:right-[104px] font-[family-name:var(--font-type)] text-[0.6rem] tracking-[0.14em] uppercase text-right leading-relaxed hidden sm:block"
              style={{ color: "var(--ink-soft)" }}
            >
              Chicago, IL
              <br />
              Exploring the world
              <br />
              one question at a time
            </p>
          </div>
        </div>
      </section>

      {/* ── Intake ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-10" style={{ borderTop: "1px solid rgba(36,31,26,0.14)" }}>
        <div className="mx-auto" style={{ maxWidth: "1400px" }}>
          <SectionLabel>✦ What are you here for today? ✦</SectionLabel>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {intake.map((c, i) => (
              <Link
                key={c.n}
                href={c.href}
                className="collage-card group relative block p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ background: c.tint, transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}
              >
                <p className="font-[family-name:var(--font-slab)] text-2xl" style={{ color: "var(--red)" }}>
                  {c.n}
                </p>
                <p
                  className="mt-3 font-[family-name:var(--font-type)] font-bold text-[0.92rem] tracking-[0.1em] uppercase"
                  style={{ color: "var(--ink)" }}
                >
                  {c.title}
                </p>
                <p className="mt-2 font-[family-name:var(--font-type)] text-[0.78rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {c.body}
                </p>
                <p
                  className="mt-5 font-[family-name:var(--font-type)] text-[0.7rem] tracking-[0.2em] uppercase inline-flex items-center gap-2"
                  style={{ color: "var(--red)" }}
                >
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </p>
                <div className="mt-4 h-[84px]">
                  <ArtSlot src={c.art} alt="" label={c.artLabel} aspect="16/9" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured investigations ────────────────────────────── */}
      <section id="research" className="px-6 md:px-12 py-10" style={{ scrollMarginTop: "var(--nav-h)" }}>
        <div className="mx-auto collage-card p-6 md:p-8" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="font-[family-name:var(--font-type)] text-[0.7rem] font-bold tracking-[0.26em] uppercase" style={{ color: "var(--ink)" }}>
              Featured investigations ✦
            </p>
            <Link
              href="#work"
              className="font-[family-name:var(--font-type)] text-[0.7rem] tracking-[0.18em] uppercase hover:underline"
              style={{ color: "var(--red)" }}
            >
              Or explore everything →
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {investigations.map((p) => (
              <Link key={p.n} href={p.href} className="group block">
                <div className="stamp-edge">
                  {p.img ? (
                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <ArtSlot src={p.art!} alt={p.title} label={p.artLabel!} aspect="4/3" />
                  )}
                </div>
                <p className="mt-3 font-[family-name:var(--font-type)] text-[0.6rem] tracking-[0.18em]" style={{ color: "var(--ink-soft)" }}>
                  {p.n}
                </p>
                <p
                  className="mt-1 font-[family-name:var(--font-type)] font-bold text-[0.85rem] tracking-[0.08em] uppercase"
                  style={{ color: "var(--ink)" }}
                >
                  {p.title}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-[family-name:var(--font-type)] text-[0.55rem] tracking-[0.12em] uppercase px-2 py-0.5"
                      style={{ border: "1px solid rgba(36,31,26,0.25)", color: "var(--ink-soft)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-2 font-[family-name:var(--font-type)] text-[0.76rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {p.body}
                </p>
                {p.note && (
                  <p className="mt-2 font-[family-name:var(--font-hand)] text-[1.05rem] leading-snug" style={{ color: "var(--ink)" }}>
                    {p.note}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── All work — keeps every case study reachable from home ─ */}
      <section id="work" className="px-6 md:px-12 py-10" style={{ scrollMarginTop: "var(--nav-h)" }}>
        <div className="mx-auto" style={{ maxWidth: "1400px" }}>
          <SectionLabel>✦ All work ✦</SectionLabel>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="collage-card group block p-4 transition-transform duration-300 hover:-translate-y-1"
                style={{ transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)` }}
              >
                <div className="stamp-edge">
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <p
                  className="mt-3 font-[family-name:var(--font-type)] font-bold text-[0.82rem] tracking-[0.08em] uppercase"
                  style={{ color: "var(--ink)" }}
                >
                  {p.title}
                </p>
                <p className="mt-1 font-[family-name:var(--font-type)] text-[0.72rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing band ───────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-12">
        <div className="mx-auto grid gap-10 md:grid-cols-3" style={{ maxWidth: "1400px" }}>
          <div>
            <p className="font-[family-name:var(--font-slab)] text-4xl leading-none" style={{ color: "var(--red)" }} aria-hidden>
              &ldquo;
            </p>
            <p className="mt-2 font-[family-name:var(--font-type)] text-[0.9rem] leading-[1.8]" style={{ color: "var(--ink)" }}>
              The goal of my research is simple: make the invisible consequences of
              technology visible enough to design for them.
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-type)] text-[0.66rem] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--red)" }}>
              Currently thinking about
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {thinkingAbout.map((t) => (
                <li
                  key={t}
                  className="font-[family-name:var(--font-type)] text-[0.83rem] pl-5 relative"
                  style={{ color: "var(--ink-soft)" }}
                >
                  <span className="absolute left-0" style={{ color: "var(--red)" }} aria-hidden>
                    ✦
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-5">
            <div className="collage-card px-5 py-4 rotate-[-2deg] text-center" style={{ background: "var(--pink)" }}>
              <p
                className="font-[family-name:var(--font-type)] font-bold text-[0.7rem] tracking-[0.12em] uppercase leading-relaxed"
                style={{ color: "var(--red)" }}
              >
                Every question
                <br />
                leads to a
                <br />
                better design.
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-type)] text-[0.66rem] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--red)" }}>
                Find me
              </p>
              <div className="mt-3 flex items-center gap-4 font-[family-name:var(--font-type)] text-sm">
                <a href="https://www.linkedin.com/in/ramyays" target="_blank" rel="noopener" className="hover:underline" style={{ color: "var(--ink)" }}>
                  LinkedIn
                </a>
                <a href="mailto:ys.ramya@gmail.com" className="hover:underline" style={{ color: "var(--ink)" }}>
                  Email
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener" className="hover:underline" style={{ color: "var(--ink)" }}>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
