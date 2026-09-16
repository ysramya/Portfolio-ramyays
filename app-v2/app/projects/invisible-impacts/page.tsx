import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHead, { Section } from "@/components/ds/SectionHead";

/**
 * Cost of a Click — outcome-first experience-design case study, per
 * Cost_of_a_Click_Case_Study_Page_Final.md.
 *
 * The page runs in `.theme-coac` (globals.css): the project's own light-blue
 * identity, icy ground and deep-blue type. It is the only page in the
 * portfolio with no deep band — the brief asks for the opening and closing to
 * read light blue "rather than dark navy", and since the nav only inverts over
 * a band marked `data-nav="dark"`, these bands are light and unmarked so the
 * nav keeps its dark type. Gradients stay out per the style contract; the
 * "soft blue" register is carried by flat tints instead.
 *
 * Photography is the real project only. digital-interface.png is captioned as
 * what it is — a mockup of the project website, byte-identical to the
 * home-page card — not a screenshot of the live counter; the dying tree is a
 * diagram, since no capture of it exists. The TikTok clip now carries a poster
 * frame pulled from the file itself, so it no longer reads as a dead box.
 *
 * Framing per the brief: DePaul Summer Impact Grant 2025 (not Google); the
 * 85/73/30 figures are labelled self-reported exit-survey responses; 6M+ is
 * reach, not adoption; no water-per-query figure is published.
 */

export const metadata: Metadata = {
  title: "Cost of a Click — Ramya Yerramilli",
  description:
    "An interactive installation that translates the environmental cost of AI into a physical and digital experience.",
};

const FRICTION = "#a8452c";
const WATER = "#2f6b8f";

/* ── Icons ─────────────────────────────────────────────────────────────── */

function Icon({ children, className = "icon-line", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={style}>
      {children}
    </svg>
  );
}

const i = {
  drop: <path d="M12 3.5s6 6.8 6 10.4a6 6 0 0 1-12 0C6 10.3 12 3.5 12 3.5Z" />,
  chat: <path d="M4.5 5h15v10.5H10L5.5 19.5v-4h-1z" />,
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3.5v3.5M14 3.5v3.5M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5" />
    </>
  ),
  pump: (
    <>
      <path d="M5 11h9a4 4 0 0 1 0 8H5z" />
      <path d="M9.5 11V6.5h5" />
    </>
  ),
  bucket: <path d="M5 8h14l-1.5 12h-11z" />,
  monitor: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16.5V20" />
    </>
  ),
  tree: (
    <>
      <path d="M12 3.5 6 12h3l-3.5 5h13L15 12h3z" />
      <path d="M12 17v4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  eyeOff: (
    <>
      <path d="M4 4l16 16" />
      <path d="M9.9 5.9A8.5 8.5 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 0 1-3.3 4M6.6 7.7A16 16 0 0 0 2.5 12S6 18.5 12 18.5a8.7 8.7 0 0 0 3.2-.6" />
    </>
  ),
  chart: <path d="M4 20V9M10 20V4M16 20v-7M22 20H2" />,
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  repeat: (
    <>
      <path d="M17 3.5 20.5 7 17 10.5M20.5 7H9a5 5 0 0 0-5 5" />
      <path d="M7 20.5 3.5 17 7 13.5M3.5 17H15a5 5 0 0 0 5-5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c.4-3.6 3.5-5.6 7.5-5.6s7.1 2 7.5 5.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3 19.5c.3-3 2.8-4.8 6-4.8s5.7 1.8 6 4.8" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16.5 14.8c2.6.2 4.3 1.8 4.5 4.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  tools: <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.5-.5-.5-2.5z" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3.5h8l4 4v13H6z" />
      <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  pen: <path d="m14.5 5.5 4 4M4 20l1-5L15.5 4.5a2 2 0 0 1 3 0l1 1a2 2 0 0 1 0 3L9 19z" />,
  flask: <path d="M9.5 3.5h5M10.5 3.5v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4A1.5 1.5 0 0 0 19 19l-5.5-9.5v-6M7.5 15h9" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5 3.5 8 12 12.5 20.5 8z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4.5a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.5A3 3 0 0 0 8 18a2.5 2.5 0 0 0 4 1V5.5a2.5 2.5 0 0 0-3-1Z" />
      <path d="M15 4.5a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.5A3 3 0 0 1 16 18a2.5 2.5 0 0 1-4 1" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5" />
    </>
  ),
  wrench: <path d="M20 5.5a4.5 4.5 0 0 1-5.9 5.9L6 19.5 4.5 18l8.1-8.1A4.5 4.5 0 0 1 18.5 4z" />,
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12.3 2.5 2.5 5-5.2" />
    </>
  ),
  arrowR: <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />,
  arrowD: <path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" />,
};

/* ── Primitives ────────────────────────────────────────────────────────── */

type Tone = "neutral" | "friction" | "water" | "strong";

/** The light equivalent of DeepBand: an icy band that the nav does NOT invert over. */
function LightBand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`relative ${className}`} style={{ background: "var(--bg-band)" }}>
      {children}
    </section>
  );
}

function Arrow({ dir = "right", className = "" }: { dir?: "right" | "down"; className?: string }) {
  return <Icon className={`icon-line !h-[18px] !w-[18px] flex-none opacity-60 ${className}`}>{dir === "right" ? i.arrowR : i.arrowD}</Icon>;
}

function Node({ icon, label, tone = "neutral", size = "md", className = "" }: { icon: ReactNode; label: string; tone?: Tone; size?: "sm" | "md" | "lg"; className?: string }) {
  const ring = tone === "friction" ? FRICTION : tone === "water" ? WATER : tone === "strong" ? "var(--ink)" : "var(--border-strong)";
  const dim = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className={`flex ${dim} items-center justify-center rounded-full`} style={{ border: `1px solid ${ring}`, background: tone === "strong" ? "var(--ink)" : "var(--bg-raised)" }}>
        <Icon
          className={`icon-line ${size === "sm" ? "!h-[18px] !w-[18px]" : "!h-5 !w-5"}`}
          style={tone === "strong" ? { stroke: "var(--bg)" } : tone === "friction" ? { stroke: FRICTION } : tone === "water" ? { stroke: WATER } : undefined}
        >
          {icon}
        </Icon>
      </span>
      <span className={`mt-2.5 leading-snug text-[var(--ink)] ${size === "sm" ? "text-[12px]" : "text-[13px]"}`}>{label}</span>
    </div>
  );
}

function Chain({ nodes, size = "md" }: { nodes: { icon: ReactNode; label: string; tone?: Tone }[]; size?: "sm" | "md" | "lg" }) {
  return (
    <ol className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-1.5">
      {nodes.map((n, idx) => (
        <li key={n.label + idx} className="contents">
          <Node icon={n.icon} label={n.label} tone={n.tone} size={size} className="sm:min-w-0 sm:flex-1" />
          {idx < nodes.length - 1 && (
            <>
              <Arrow dir="down" className="sm:hidden" />
              <Arrow className={`hidden !h-3.5 !w-3.5 sm:block ${size === "sm" ? "mt-[13px]" : size === "lg" ? "mt-[21px]" : "mt-[17px]"}`} />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

function Photo({ src, alt, ratio, sizes, caption, position }: { src: string; alt: string; ratio: string; sizes: string; caption: string; position?: string }) {
  return (
    <figure>
      <div className="relative overflow-hidden" style={{ aspectRatio: ratio, borderRadius: "var(--radius)", border: "1px solid var(--border)", background: "#0b1f33" }}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" style={position ? { objectPosition: position } : undefined} />
      </div>
      <figcaption className="mt-2.5 text-[12.5px] leading-snug text-[var(--muted)]">{caption}</figcaption>
    </figure>
  );
}

/* ── Content ───────────────────────────────────────────────────────────── */

const heroMeta = [
  { icon: i.person, label: "Role", value: "Lead UX Researcher" },
  { icon: i.clock, label: "Duration", value: "10 weeks" },
  { icon: i.users, label: "Team", value: "UX Researcher · UI Designer · Developer · PM" },
  { icon: i.tools, label: "Tools", value: "Figma · Framer · Arduino · VS Code" },
];

const transformation = [
  { icon: i.chart, title: "Abstract", body: "AI has an environmental cost." },
  { icon: i.drop, title: "Physical", body: "Water moves in response to interaction." },
  { icon: i.monitor, title: "Digital", body: "Environmental impact becomes visible on screen." },
  { icon: i.person, title: "Personal", body: "The visitor can connect a system-level cost to their own action." },
];

const outcomeMetrics = [
  { value: "85%", label: "reported changed awareness of AI's environmental footprint" },
  { value: "73%", label: "reported intent to use AI more mindfully" },
  { value: "30%", label: "increase in self-reported informed decision-making" },
  { value: "6M+", label: "TikTok views after exhibition footage circulated" },
];

const problemStages = [
  { icon: i.server, label: "Invisible infrastructure", body: "Data centers · water · energy", tone: "friction" as const },
  { icon: i.chart, label: "Abstract information", body: "Numbers · charts · reports", tone: "friction" as const },
  { icon: i.repeat, label: "Everyday AI use", body: "Ask · generate · repeat", tone: "strong" as const },
];

const experienceFlow = [
  { n: "01", title: "Ask", body: "The visitor enters or submits an AI query.", icon: i.chat },
  { n: "02", title: "Detect", body: "The system registers the interaction.", icon: i.chip },
  { n: "03", title: "Translate", body: "The interaction is converted into a physical response.", icon: i.layers },
  { n: "04", title: "Experience", body: "Water moves while the digital interface updates.", icon: i.drop },
  { n: "05", title: "Reflect", body: "The visitor sees the environmental cost behind the interaction.", icon: i.eye },
];

const roleMap = [
  { icon: i.search, title: "Research", tags: ["Desk research", "15 interviews", "Survey n=42", "Journey mapping"] },
  { icon: i.target, title: "Experience design", tags: ["Problem framing", "Concept directions", "Interaction model", "Information hierarchy"] },
  { icon: i.chip, title: "Physical-digital design", tags: ["Water interaction", "Sensor behaviour", "Digital feedback", "Arduino integration"] },
  { icon: i.flask, title: "Validation", tags: ["Lab usability test", "Field test", "Iteration"] },
  { icon: i.users, title: "Exhibition", tags: ["Showcase prep", "Audience interaction", "Impact measurement"] },
];

const phases = [
  { icon: i.doc, title: "Discovery", weeks: "Weeks 1–2", body: "Desk research · secondary synthesis · problem framing" },
  { icon: i.search, title: "User research", weeks: "Weeks 3–4", body: "15 interviews · survey n=42 · journey mapping" },
  { icon: i.pen, title: "Concept + design", weeks: "Weeks 5–6", body: "3 directions · prototyping · Figma flows" },
  { icon: i.wrench, title: "Build", weeks: "Week 7", body: "Arduino · sensor integration · water pump" },
  { icon: i.flask, title: "Test R1", weeks: "Week 8", body: "Lab usability test · iteration" },
  { icon: i.repeat, title: "Test R2", weeks: "Week 9", body: "Field test · refinement" },
  { icon: i.users, title: "Exhibit", weeks: "Week 10", body: "DePaul Summer Showcase · impact measurement" },
];

const iterations = [
  { issue: "Water spillage", fix: "Refined the physical setup." },
  { issue: "Prompt timing", fix: "Adjusted the interaction timing." },
  { issue: "Screen readability", fix: "Improved the digital hierarchy." },
];

const buildLayers = [
  { icon: i.bucket, title: "Physical", body: "Water container · pump · tubing · physical feedback" },
  { icon: i.chip, title: "Compute", body: "Arduino · relay · sensor logic" },
  { icon: i.monitor, title: "Digital", body: "AI interaction · environmental counter · data visualization" },
  { icon: i.brain, title: "Experience", body: "User action · immediate consequence · reflection" },
];

const capabilities = [
  { icon: i.search, title: "UX research", body: "Interviews · survey · synthesis · testing" },
  { icon: i.target, title: "Experience design", body: "Interaction model · information hierarchy · physical-digital journey" },
  { icon: i.layers, title: "Systems thinking", body: "AI interaction → sensor → physical response → digital feedback" },
  { icon: i.pen, title: "Prototyping", body: "Figma · Framer · Arduino · VS Code" },
  { icon: i.chip, title: "Physical computing", body: "Pump · relay · sensor interaction" },
  { icon: i.users, title: "Public-facing design", body: "Exhibition · audience testing · impact measurement" },
];

const takeaways = [
  { n: "01", icon: i.drop, title: "Felt information is different", body: "Physical feedback created a different kind of environmental awareness than a static number." },
  { n: "02", icon: i.wrench, title: "Research can shape hardware", body: "Research influenced the physical interaction, not just the screen design." },
  { n: "03", icon: i.flask, title: "Physical systems need different testing", body: "Water spillage, timing, spatial setup and readability all became UX problems." },
  { n: "04", icon: i.check, title: "Ethical framing matters", body: "Inform without relying on fear, and leave people with something actionable." },
];

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function InvisibleImpactsPage() {
  return (
    <div className="theme-coac">
      {/* HERO — light band, deliberately not marked data-nav="dark" */}
      <LightBand>
        <div className="wrap" style={{ paddingTop: "calc(var(--nav-h) + 36px)", paddingBottom: 56 }}>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-14">
            <div>
              <p className="eyebrow eyebrow-rule">Case study · Cost of a Click</p>
              <h1 className="mt-5" style={{ fontSize: "clamp(52px, 6.4vw, 92px)", lineHeight: 0.98 }}>
                Cost of a Click
              </h1>
              <h2 className="mt-4" style={{ fontSize: "clamp(26px, 2.9vw, 40px)", lineHeight: 1.14 }}>
                Making AI&rsquo;s invisible water cost physically tangible.
              </h2>
              <p className="mt-5 text-[clamp(17px,1.5vw,20px)] leading-[1.5] text-[var(--ink)]" style={{ maxWidth: "30em" }}>
                An interactive installation that translates the environmental cost of AI into a
                physical and digital experience — connecting everyday AI interactions to real-time
                water and energy feedback.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--body)]" style={{ maxWidth: "38em" }}>
                Instead of asking people to understand an abstract statistic, the installation makes
                the consequence visible, physical, and immediate.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 text-[13.5px] text-[var(--ink)]" style={{ border: "1px solid var(--border-strong)", borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
                <Icon className="icon-line !h-4 !w-4 flex-none">{i.award}</Icon>
                DePaul Summer Impact Grant 2025 · Winner
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#experience" className="btn">
                  Experience the installation <span aria-hidden>&#8594;</span>
                </a>
                <a href="#system" className="btn btn-outline">
                  See how it was built <span aria-hidden>&#8594;</span>
                </a>
              </div>
            </div>

            <figure className="w-full">
              <div className="relative overflow-hidden" style={{ aspectRatio: "2268 / 2962", borderRadius: 10, border: "1px solid var(--border-strong)" }}>
                <Image
                  src="/img/coac/hero-installation.jpg"
                  alt="The installation at the DePaul Jarvis showcase: a lit water tank on a draped table, a monitor above it running the Cost of a Click visual, and a laptop beside it."
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 440px"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 pt-7 md:grid-cols-4" style={{ borderTop: "1px solid var(--border-strong)" }}>
            {heroMeta.map((m) => (
              <div key={m.label} className="flex items-start gap-3">
                <Icon className="icon-line mt-0.5 !h-5 !w-5">{m.icon}</Icon>
                <div>
                  <dt className="meta">{m.label}</dt>
                  <dd className="mt-1 text-[14px] leading-snug text-[var(--ink)]">{m.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </LightBand>

      {/* 01 — THE OUTCOME */}
      <Section id="outcome" divided={false}>
        <div className="sec-grid">
          <SectionHead n="01" eyebrow="The outcome" title="We turned an invisible environmental cost into something people could see and feel." />
          <div className="sec-copy lg:pt-10">
            <p>
              Cost of a Click connected an AI interaction to a physical consequence: visitors used
              an AI system while the installation translated that activity into real-time water and
              digital environmental feedback.
            </p>
            <p>
              The experience was exhibited at the{" "}
              <strong className="font-medium text-[var(--ink)]">DePaul Summer Showcase 2025</strong>, where exit-survey
              responses showed increased awareness and reported intention to use AI more mindfully.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {transformation.map((s, idx) => (
            <li key={s.title} className={`relative flex flex-col items-center p-6 text-center ${idx === 3 ? "panel-sage" : "panel"}`}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: idx === 3 ? "var(--ink)" : "var(--bg-raised)", border: "1px solid var(--border-strong)" }}>
                <Icon className="icon-line !h-6 !w-6" style={idx === 3 ? { stroke: "var(--bg)" } : { stroke: WATER }}>
                  {s.icon}
                </Icon>
              </span>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[22px] leading-tight text-[var(--ink)]">{s.title}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{s.body}</p>
              {idx < transformation.length - 1 && (
                <span aria-hidden className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full sm:flex" style={{ background: "var(--bg)" }}>
                  <Icon className="icon-line !h-4 !w-4">{i.arrowR}</Icon>
                </span>
              )}
            </li>
          ))}
        </ol>

        <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeMetrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse pt-4" style={{ borderTop: "1px solid var(--border-strong)" }}>
              <dt className="mt-2 text-[13px] leading-snug text-[var(--body)]">{m.label}</dt>
              <dd className="font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(34px, 3.6vw, 50px)" }}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          {["DePaul Summer Impact Grant — Winner", "DePaul Summer Showcase — Featured installation"].map((p) => (
            <p key={p} className="flex items-center gap-2 px-4 py-2.5 text-[13.5px] text-[var(--ink)]" style={{ border: "1px solid var(--border-strong)", borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
              <Icon className="icon-line !h-4 !w-4 flex-none">{i.award}</Icon>
              {p}
            </p>
          ))}
        </div>

        <p className="mt-5 max-w-[56em] text-[12.5px] leading-relaxed text-[var(--muted)]">
          <strong className="font-medium text-[var(--ink)]">How to read these:</strong> the 85%, 73% and 30% measures are
          self-reported participant responses. The 6M+ figure represents social reach — not product adoption or verified
          behaviour change.
        </p>
      </Section>

      {/* 02 — THE PROBLEM */}
      <Section id="problem">
        <div className="sec-grid">
          <div>
            <SectionHead n="02" eyebrow="The problem" title="AI feels invisible. So do its environmental costs." />
            <div className="sec-copy mt-6">
              <p>
                AI depends on physical infrastructure — data centers, energy systems, and water used
                for cooling — but none of that is visible during a typical AI interaction.
              </p>
              <p>
                The problem was not a lack of information. It was the distance between{" "}
                <strong className="font-medium text-[var(--ink)]">what I do → what the infrastructure consumes → what I actually perceive.</strong>
              </p>
            </div>

            <blockquote className="mt-8 max-w-[34em] pl-5" style={{ borderLeft: `2px solid ${WATER}` }}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(20px,2vw,26px)] leading-[1.35] text-[var(--ink)]">
                &ldquo;Abstract environmental data doesn&rsquo;t change behaviour. But when you watch
                the water pour — you feel it.&rdquo;
              </p>
              <footer className="meta mt-3">Research finding — exit interviews after installation interaction, Summer 2025</footer>
            </blockquote>
          </div>

          <figure className="panel p-7 lg:mt-10" aria-label="Invisible infrastructure, abstract information, everyday AI use">
            <div className="mx-auto flex max-w-[340px] flex-col items-stretch">
              {problemStages.map((s, idx, arr) => (
                <div key={s.label}>
                  <div
                    className="flex items-start gap-3 px-4 py-3.5"
                    style={{
                      background: s.tone === "strong" ? "var(--ink)" : "var(--bg-raised)",
                      border: s.tone === "friction" ? `1px dashed ${FRICTION}` : "1px solid var(--ink)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    <Icon className="icon-line mt-0.5 !h-5 !w-5 flex-none" style={s.tone === "strong" ? { stroke: "var(--bg)" } : { stroke: FRICTION }}>
                      {s.icon}
                    </Icon>
                    <div>
                      <p className="text-[14px] font-medium" style={{ color: s.tone === "strong" ? "var(--on-deep)" : "var(--ink)" }}>
                        {s.label}
                      </p>
                      <p className="mt-0.5 text-[12.5px] leading-snug" style={{ color: s.tone === "strong" ? "var(--on-deep-muted)" : "var(--body)" }}>
                        {s.body}
                      </p>
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <Arrow dir="down" className="!h-4 !w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </figure>
        </div>
      </Section>

      {/* 03 — THE OPPORTUNITY */}
      <Section id="opportunity">
        <div className="sec-grid">
          <SectionHead n="03" eyebrow="The opportunity" title="Don’t explain the infrastructure. Make people experience it.">
            <p>
              The project reframed the challenge from information delivery to experience design. The
              central hypothesis: a physical consequence could create a stronger connection to an
              otherwise abstract environmental cost.
            </p>
          </SectionHead>

          <div className="lg:pt-10">
            <div className="panel-sage p-7">
              <p className="eyebrow" style={{ color: WATER }}>
                Design principle
              </p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-[clamp(26px,2.8vw,36px)] leading-[1.15] text-[var(--ink)]">
                Sensation over statistics.
              </p>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="p-5" style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--radius)" }}>
                <p className="eyebrow" style={{ color: FRICTION }}>
                  Traditional awareness
                </p>
                <div className="mt-4 opacity-80">
                  <Chain
                    size="sm"
                    nodes={[
                      { icon: i.chart, label: "Statistic", tone: "friction" },
                      { icon: i.eye, label: "Read", tone: "friction" },
                      { icon: i.brain, label: "Understand", tone: "friction" },
                      { icon: i.eyeOff, label: "Move on", tone: "friction" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-5" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-strong)", borderRadius: "var(--radius)" }}>
                <p className="eyebrow" style={{ color: WATER }}>
                  Cost of a Click
                </p>
                <div className="mt-4">
                  <Chain
                    size="sm"
                    nodes={[
                      { icon: i.chat, label: "AI prompt", tone: "water" },
                      { icon: i.drop, label: "Physical response", tone: "water" },
                      { icon: i.monitor, label: "Digital feedback", tone: "water" },
                      { icon: i.brain, label: "Reflection", tone: "strong" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04 — RESEARCH */}
      <Section id="research">
        <div className="sec-grid">
          <SectionHead n="04" eyebrow="Research" title="Research moved the project from “show the impact” to “make the impact felt.”" />

          <div className="lg:pt-10">
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "15", label: "semi-structured interviews" },
                { value: "42", label: "survey responses" },
                { value: "3", label: "concept directions explored" },
                { value: "2", label: "usability test rounds before exhibition" },
              ].map((m) => (
                <div key={m.label} className="flex flex-col-reverse pt-3" style={{ borderTop: "1px solid var(--rule)" }}>
                  <dt className="mt-1.5 text-[12.5px] leading-snug text-[var(--body)]">{m.label}</dt>
                  <dd className="font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="mt-10 panel p-7 sm:p-9" aria-label="Research funnel from desk research to two rounds of testing">
          <Chain
            size="sm"
            nodes={[
              { icon: i.doc, label: "Desk research" },
              { icon: i.search, label: "15 interviews + survey n=42", tone: "water" },
              { icon: i.map, label: "Journey mapping + synthesis", tone: "water" },
              { icon: i.pen, label: "3 concept directions", tone: "water" },
              { icon: i.chip, label: "Physical + digital prototype", tone: "water" },
              { icon: i.flask, label: "2 rounds of testing", tone: "strong" },
            ]}
          />
        </figure>
      </Section>

      {/* 05 — THE INSIGHT */}
      <Section id="insight">
        <SectionHead n="05" eyebrow="The insight" title="Abstract environmental data was too easy to ignore." />

        <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14">
          <p className="font-[family-name:var(--font-display)] text-[clamp(20px,2vw,26px)] leading-[1.35] text-[var(--ink)]">
            We had to collapse the distance between an AI interaction and the infrastructure
            supporting it.
          </p>
          <p className="text-[15px] leading-[1.7] text-[var(--body)] md:pt-1">
            That led to the defining experience decision: give the environmental cost a physical
            form.
          </p>
        </div>

        <figure className="mt-10 panel-sage p-7 sm:p-10" aria-label="One AI interaction plus a water response plus digital feedback equals a felt cost">
          <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.15fr)]">
            {[
              { icon: i.chat, label: "One AI interaction" },
              { icon: i.drop, label: "Real-time water response" },
              { icon: i.monitor, label: "Digital environmental feedback" },
            ].map((s, idx, arr) => (
              <div key={s.label} className="contents">
                <div className="flex flex-col items-center gap-3 px-5 py-6 text-center" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-strong)", borderRadius: "var(--radius)" }}>
                  <Icon className="icon-line !h-7 !w-7" style={{ stroke: WATER }}>
                    {s.icon}
                  </Icon>
                  <p className="text-[14.5px] leading-snug text-[var(--ink)]">{s.label}</p>
                </div>
                <p aria-hidden className="text-center font-[family-name:var(--font-display)] text-[26px] leading-none text-[var(--numeral)]">
                  {idx < arr.length - 1 ? "+" : "="}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-center px-6 py-8 text-center" style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,40px)] leading-none" style={{ color: "var(--on-deep)" }}>
                Felt cost
              </p>
            </div>
          </div>
        </figure>
      </Section>

      {/* 06 — THE EXPERIENCE */}
      <Section id="experience">
        <div className="sec-grid">
          <SectionHead n="06" eyebrow="The experience" title="Every interaction creates a visible consequence." />
          <div className="sec-copy lg:pt-10">
            <p>
              The physical and digital layers were deliberately coupled, so the environmental cost
              never arrived as a separate educational message alongside the interaction — it{" "}
              <strong className="font-medium text-[var(--ink)]">was</strong> the interaction.
            </p>
          </div>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {experienceFlow.map((s, idx) => {
            const emphasis = idx >= 3;
            return (
              <li
                key={s.n}
                className="flex flex-col p-5"
                style={{ background: emphasis ? "var(--ink)" : "var(--bg-raised)", borderRadius: "var(--radius)", border: emphasis ? "1px solid var(--ink)" : "1px solid var(--border-strong)" }}
              >
                <div className="flex items-center justify-between">
                  <Icon className="icon-line !h-5 !w-5" style={emphasis ? { stroke: "var(--on-deep)" } : { stroke: WATER }}>
                    {s.icon}
                  </Icon>
                  <span className="font-[family-name:var(--font-display)] text-[20px] leading-none" style={{ color: emphasis ? "var(--on-deep-numeral)" : "var(--numeral)" }}>
                    {s.n}
                  </span>
                </div>
                <p className="mt-5 text-[16px] font-medium" style={{ color: emphasis ? "var(--on-deep)" : "var(--ink)" }}>
                  {s.title}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-snug" style={{ color: emphasis ? "var(--on-deep-muted)" : "var(--body)" }}>
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Photo
            src="/img/coac/hero-installation.jpg"
            alt="The installation running: the lit tank, the monitor above it, and the laptop visitors typed on."
            ratio="4 / 5"
            sizes="(max-width: 640px) 94vw, 360px"
            caption="Ask — the laptop and tank as a visitor meets them."
          />
          <Photo
            src="/img/coac/pump-bucket.jpg"
            alt="The submersible pump sitting in a bucket of water, tubing and power cable running out of frame."
            ratio="4 / 5"
            sizes="(max-width: 640px) 94vw, 360px"
            caption="Physical response — the pump that moves the water."
          />
          <Photo
            src="/img/coac/video-wall.jpg"
            alt="The four-panel video wall showing the Cost of a Click title card and a QR code reading “Scan for more information”."
            ratio="4 / 5"
            sizes="(max-width: 640px) 94vw, 360px"
            caption="Environmental data — the wall that carried the context."
            position="50% 35%"
          />
        </div>
      </Section>

      {/* 07 — SYSTEM DESIGN */}
      <Section id="system">
        <div className="sec-grid">
          <SectionHead n="07" eyebrow="System design" title="From prompt to pump." />
          <div className="sec-copy lg:pt-10">
            <p>
              One interaction drove two loops at once.{" "}
              <strong className="font-medium text-[var(--ink)]">The physical layer made the cost tangible. The digital layer explained what that physical response meant.</strong>
            </p>
          </div>
        </div>

        <figure className="mt-10 panel p-7 sm:p-9" aria-label="One AI interaction driving a physical loop and a digital loop in parallel">
          <div className="mx-auto mb-6 flex max-w-[280px] items-center justify-center gap-3 px-4 py-3.5" style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}>
            <Icon className="icon-line !h-5 !w-5" style={{ stroke: "var(--bg)" }}>
              {i.chat}
            </Icon>
            <span className="text-[15px] font-medium" style={{ color: "var(--on-deep)" }}>
              AI interaction
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="p-5" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-strong)", borderRadius: "var(--radius)" }}>
              <p className="eyebrow mb-5">Physical loop</p>
              <Chain
                size="sm"
                nodes={[
                  { icon: i.chip, label: "Arduino", tone: "water" },
                  { icon: i.layers, label: "Relay / sensor logic", tone: "water" },
                  { icon: i.pump, label: "Water pump", tone: "water" },
                  { icon: i.drop, label: "Physical water response", tone: "strong" },
                ]}
              />
            </div>
            <div className="p-5" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-strong)", borderRadius: "var(--radius)" }}>
              <p className="eyebrow mb-5">Digital loop</p>
              <Chain
                size="sm"
                nodes={[
                  { icon: i.monitor, label: "Digital interface", tone: "water" },
                  { icon: i.chart, label: "Real-time environmental feedback", tone: "strong" },
                ]}
              />
            </div>
          </div>
        </figure>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Photo
            src="/img/coac/arduino-wiring.jpg"
            alt="The Arduino board wired to a relay module, with the pump's power line running through it."
            ratio="3 / 4"
            sizes="(max-width: 640px) 94vw, 420px"
            caption="The Arduino and relay that switch the pump on each interaction."
          />
          <Photo
            src="/img/coac/pump-bucket.jpg"
            alt="The pump seated in its reservoir of water."
            ratio="3 / 4"
            sizes="(max-width: 640px) 94vw, 420px"
            caption="The pump in its reservoir — the other end of the same circuit."
          />
        </div>
      </Section>

      {/* 08 — WHY WATER */}
      <Section id="water">
        <div className="sec-grid">
          <SectionHead n="08" eyebrow="Design rationale" title="Water gave an invisible system a physical volume.">
            <p>A number can communicate scale. A physical quantity can communicate consequence.</p>
            <p>
              The installation used real water as a tangible representation of infrastructure people
              normally never see.
            </p>
          </SectionHead>

          <figure className="lg:pt-10" aria-label="From AI query to visible consequence">
            <div className="panel p-7">
              <Chain
                size="sm"
                nodes={[
                  { icon: i.chat, label: "AI query" },
                  { icon: i.eyeOff, label: "Invisible water use", tone: "friction" },
                  { icon: i.drop, label: "Physical water response", tone: "water" },
                  { icon: i.eye, label: "Visible consequence", tone: "strong" },
                ]}
              />
            </div>
          </figure>
        </div>
      </Section>

      {/* 09 — THE DYING TREE */}
      <Section id="tree">
        <div className="sec-grid">
          <SectionHead n="09" eyebrow="Secondary metaphor" title="The digital environment showed what the physical interaction could not.">
            <p>
              As visitors interacted, the digital environment added a second layer of consequence
              through visual change: a tree withering over time to represent the accumulated impact
              of repeated AI use.
            </p>
            <p>
              <strong className="font-medium text-[var(--ink)]">Physical feedback creates immediacy. Digital feedback creates narrative.</strong>
            </p>
          </SectionHead>

          <figure className="lg:pt-10" aria-label="The digital tree progressing from healthy to withering">
            <ol className="grid grid-cols-3 gap-3">
              {[
                { label: "Healthy", opacity: 1 },
                { label: "Stressed", opacity: 0.6 },
                { label: "Withering", opacity: 0.28 },
              ].map((s) => (
                <li key={s.label} className="flex flex-col items-center p-6 text-center" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-strong)", borderRadius: "var(--radius)" }}>
                  <Icon className="icon-line !h-12 !w-12" style={{ stroke: WATER, opacity: s.opacity }}>
                    {i.tree}
                  </Icon>
                  <p className="mt-4 text-[13.5px] text-[var(--ink)]">{s.label}</p>
                </li>
              ))}
            </ol>
            <figcaption className="meta mt-3">Diagram of the on-screen progression, not a screenshot.</figcaption>
          </figure>
        </div>

        <figure className="mt-10">
          <div className="relative overflow-hidden" style={{ aspectRatio: "1 / 1", maxWidth: 620, margin: "0 auto", borderRadius: "var(--radius)", border: "1px solid var(--border-strong)" }}>
            <Image
              src="/img/coac/digital-interface.png"
              alt="The project website shown on a laptop: “Invisible Impact. Visible Change.”, a DePaul University Impact Grant 2025 badge, and figures for weekly active users, daily queries and gallons of water."
              fill
              sizes="(max-width: 640px) 94vw, 620px"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-[12.5px] text-[var(--muted)]">
            The project website, which carried the research beyond the room.
          </figcaption>
        </figure>
      </Section>

      {/* 10 — MY ROLE */}
      <Section id="role">
        <div className="sec-grid">
          <SectionHead n="10" eyebrow="My role" title="I connected research, experience design, and physical interaction." />
          <div className="sec-copy lg:pt-10">
            <p>
              As Lead UX Researcher I led the research process and worked across experience design,
              sensor interaction, and testing.
            </p>
            <p>
              The role extended beyond interface design: I translated findings into{" "}
              <strong className="font-medium text-[var(--ink)]">the physical and digital behaviour of the installation</strong>, and helped
              shape the experience from concept through exhibition.
            </p>
          </div>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {roleMap.map((r, idx) => (
            <li key={r.title} className="panel relative flex flex-col p-5">
              <div className="flex items-center justify-between">
                <Icon>{r.icon}</Icon>
                <span className="font-[family-name:var(--font-display)] text-[18px] text-[var(--numeral)]" aria-hidden>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{r.title}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <li key={t} className="tag !bg-[var(--bg-raised)] !text-[11.5px]">
                    {t}
                  </li>
                ))}
              </ul>
              {idx < roleMap.length - 1 && (
                <span aria-hidden className="absolute -right-[11px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full lg:flex" style={{ background: "var(--bg)" }}>
                  <Icon className="icon-line !h-3.5 !w-3.5">{i.arrowR}</Icon>
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* 11 — THE PROCESS */}
      <Section id="process">
        <SectionHead n="11" eyebrow="The process" title="Research-heavy at the start. Test-heavy at the end." />

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-4 lg:grid-cols-7 lg:gap-3">
          <span aria-hidden className="absolute left-[7%] right-[7%] top-[22px] hidden h-px lg:block" style={{ background: "var(--border-strong)" }} />
          {phases.map((p, idx) => (
            <li key={p.title} className="relative flex flex-col items-start lg:items-center lg:text-center">
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full" style={{ background: idx === phases.length - 1 ? "var(--ink)" : "var(--bg)", border: "1px solid var(--ink)" }}>
                <Icon className="icon-line !h-5 !w-5" style={idx === phases.length - 1 ? { stroke: "var(--bg)" } : undefined}>
                  {p.icon}
                </Icon>
              </span>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-[15px] text-[var(--numeral)]">{String(idx + 1).padStart(2, "0")}</span>
                <span className="eyebrow !text-[var(--ink)]">{p.title}</span>
              </p>
              <p className="meta mt-1">{p.weeks}</p>
              <p className="mt-2 text-[12.5px] leading-snug text-[var(--body)] lg:max-w-[22ch]">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 12 — ITERATION */}
      <Section id="iteration">
        <div className="sec-grid">
          <SectionHead n="12" eyebrow="Iteration" title="Testing exposed problems the concept couldn’t.">
            <p>
              Two rounds of usability testing before the exhibition surfaced physical and
              interaction friction.
            </p>
            <p>
              <strong className="font-medium text-[var(--ink)]">The experience had to work as a physical system, not just as a concept.</strong>
            </p>
          </SectionHead>

          <ol className="flex flex-col gap-3 lg:pt-10">
            {iterations.map((it) => (
              <li key={it.issue} className="grid items-stretch gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                <div className="flex flex-col justify-center p-5" style={{ border: `1px dashed ${FRICTION}`, borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
                  <p className="meta" style={{ color: FRICTION }}>
                    Issue
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-snug text-[var(--ink)]">{it.issue}</p>
                </div>
                <div className="flex items-center justify-center py-0.5 sm:py-0">
                  <Arrow dir="down" className="sm:hidden" />
                  <Arrow className="hidden sm:block" />
                </div>
                <div className="panel-sage flex flex-col justify-center p-5">
                  <p className="meta" style={{ color: WATER }}>
                    Fix
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-snug text-[var(--ink)]">{it.fix}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Photo
            src="/img/coac/team-build.jpg"
            alt="Two teammates assembling the reservoir: one lowering the pump into the water, the other watching from a chair."
            ratio="3 / 4"
            sizes="(max-width: 640px) 94vw, 420px"
            caption="Assembling the reservoir and seating the pump."
          />
          <Photo
            src="/img/coac/team-testing.jpg"
            alt="Four team members standing beside the finished installation — the tank, the monitor and the Cost of a Click poster."
            ratio="3 / 4"
            sizes="(max-width: 640px) 94vw, 420px"
            caption="The installation assembled and running, before doors opened."
            position="50% 40%"
          />
        </div>
      </Section>

      {/* 13 — BEHIND THE BUILD */}
      <Section id="build">
        <div className="sec-grid">
          <SectionHead n="13" eyebrow="Behind the build" title="The prototype had a body, a screen, and a feedback loop." />
          <div className="lg:pt-10">
            <ul className="grid gap-3 sm:grid-cols-2">
              {buildLayers.map((l) => (
                <li key={l.title} className="panel flex flex-col p-5">
                  <Icon style={{ stroke: WATER }}>{l.icon}</Icon>
                  <p className="eyebrow mt-4 !text-[var(--ink)]">{l.title}</p>
                  <p className="mt-1.5 text-[13px] leading-snug text-[var(--body)]">{l.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 14 — EXHIBITION */}
      <Section id="exhibition">
        <div className="sec-grid">
          <SectionHead n="14" eyebrow="Exhibition" title="The final test was putting the experience in front of people." />
          <div className="sec-copy lg:pt-10">
            <p>
              Cost of a Click was exhibited at the{" "}
              <strong className="font-medium text-[var(--ink)]">DePaul Summer Showcase 2025</strong>, where students, faculty
              and public visitors experienced the installation directly.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <Photo
            src="/img/coac/exhibition-room.jpg"
            alt="The exhibition room: the lit tank on the DePaul-draped table on the left, the four-panel video wall on the right."
            ratio="4 / 3"
            sizes="(max-width: 1024px) 94vw, 640px"
            caption="The room as visitors found it — installation on one side, video wall on the other."
          />
          <Photo
            src="/img/coac/video-wall.jpg"
            alt="The four-panel video wall with the Cost of a Click title card and a QR code."
            ratio="3 / 4"
            sizes="(max-width: 1024px) 94vw, 420px"
            caption="The video wall, with a QR code to the project site."
          />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <Photo
            src="/img/coac/marketing-materials.jpg"
            alt="Printed take-aways laid out on a table: brochures, bookmarks and hand fans in the Cost of a Click pattern."
            ratio="16 / 7"
            sizes="(max-width: 1024px) 94vw, 420px"
            caption="Informational material designed to travel home with visitors."
          />
          <Photo
            src="/img/coac/team-showcase.jpg"
            alt="The full team standing either side of the installation table at the DePaul Summer Showcase."
            ratio="4 / 3"
            sizes="(max-width: 1024px) 94vw, 640px"
            caption="The team at the DePaul Summer Showcase, 2025."
          />
        </div>
      </Section>

      {/* 15 — IMPACT */}
      <Section id="impact">
        <div className="sec-grid">
          <SectionHead n="15" eyebrow="Impact" title="The installation made the invisible visible — and the response was measurable." />
          <div className="sec-copy lg:pt-10">
            <p>
              The result wasn&rsquo;t simply that visitors saw a new data visualization. The
              experience created a stronger connection between{" "}
              <strong className="font-medium text-[var(--ink)]">AI use and the infrastructure behind it.</strong>
            </p>
          </div>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: "85%", label: "reported changed awareness of AI's environmental footprint" },
            { value: "73%", label: "reported intent to use AI more mindfully — specifically reducing unnecessary or casual queries" },
            { value: "30%", label: "increase in self-reported informed decision-making about when to use AI tools" },
          ].map((m) => (
            <div key={m.value} className="panel flex flex-col-reverse p-6">
              <dt className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{m.label}</dt>
              <dd className="font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(38px, 4vw, 56px)" }}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 max-w-[52em] text-[12.5px] leading-relaxed text-[var(--muted)]">
          <strong className="font-medium text-[var(--ink)]">Qualifier:</strong> these outcomes are based on self-reported
          exit-survey responses. They should not be presented as proof of long-term behaviour change.
        </p>
      </Section>

      {/* 16 — SOCIAL REACH */}
      <Section id="reach">
        <div className="sec-grid">
          <SectionHead n="16" eyebrow="Beyond the exhibition" title="The conversation left the room.">
            <p>
              After the DePaul exhibition, footage of Cost of a Click circulated on TikTok and
              reached more than <strong className="font-medium text-[var(--ink)]">6 million views</strong>, broadening the
              public conversation around AI&rsquo;s hidden environmental cost.
            </p>
            <p className="text-[12.5px] leading-relaxed text-[var(--muted)]">
              6M+ views measure reach — not adoption, and not behaviour change.
            </p>
          </SectionHead>

          <figure className="lg:pt-10">
            <div className="video-frame mx-auto" style={{ aspectRatio: "576 / 1024", maxWidth: 320 }}>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/img/coac/tiktok-poster.jpg"
                aria-label="TikTok footage of visitors interacting with the Cost of a Click installation"
              >
                <source src="/img/coac/tiktok-viral.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="mt-3 text-center text-[12.5px] text-[var(--muted)]">
              Originally posted by @thetshegofatso on TikTok · 6M+ views · 2025
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* 17 — CAPABILITIES */}
      <Section id="capabilities">
        <SectionHead n="17" eyebrow="Capabilities" title="This wasn’t just a sustainability installation." />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <li key={c.title} className="panel flex flex-col p-6">
              <Icon style={{ stroke: WATER }}>{c.icon}</Icon>
              <h3 className="mt-4 text-[18px] leading-snug">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{c.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 18 — KEY TAKEAWAYS */}
      <Section id="takeaways">
        <SectionHead n="18" eyebrow="Key takeaways" title="Design the experience, not just the information." />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {takeaways.map((t) => (
            <li key={t.n} className="panel flex flex-col p-5">
              <div className="flex items-center justify-between">
                <Icon style={{ stroke: WATER }}>{t.icon}</Icon>
                <span className="font-[family-name:var(--font-display)] text-[18px] text-[var(--numeral)]" aria-hidden>
                  {t.n}
                </span>
              </div>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{t.title}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{t.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 19 — CONTINUING RESEARCH */}
      <Section id="next">
        <div className="sec-grid">
          <SectionHead n="19" eyebrow="Continuing research" title="The installation became a research platform.">
            <p>
              Further work on the project developed into a paper on interactive art as a
              public-facing AI ethics interface.
            </p>
          </SectionHead>

          <div className="lg:pt-10">
            <figure className="panel p-7" aria-label="From installation to research evidence to academic paper">
              <Chain
                size="sm"
                nodes={[
                  { icon: i.drop, label: "Installation" },
                  { icon: i.chart, label: "Research evidence", tone: "water" },
                  { icon: i.doc, label: "Academic paper", tone: "strong" },
                ]}
              />
            </figure>

            <div className="mt-4 p-6" style={{ border: "1px solid var(--border-strong)", borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
              <p className="text-[14px] leading-relaxed text-[var(--ink)]">
                Cunningham, J. L., Iqbal, S., Nacu, D., Caplan, B., Yerramilli, R., &amp; Mukkamala,
                D. D. (2026). &ldquo;Making AI Infrastructure Visible: Interactive Art as a
                Public-Facing AI Ethics Interface.&rdquo;{" "}
                <em>AAAI/ACM Conference on AI, Ethics, and Society (AIES 2026)</em>.
              </p>
              <p className="meta mt-3">Paper #343 · Under review — not accepted</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CLOSING — light blue, per the brief: deep blue type, no dark navy */}
      <LightBand>
        <div className="wrap py-[clamp(64px,8vw,112px)]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
            <div>
              <p className="eyebrow eyebrow-rule">Final thoughts</p>
              <h2 className="mt-5" style={{ fontSize: "clamp(36px, 4.4vw, 58px)", lineHeight: 1.06, maxWidth: "12em" }}>
                The invisible has a cost. Let&rsquo;s make it visible.
              </h2>
            </div>
            <div>
              <p className="lead">
                Cost of a Click started with a communication problem: people could understand
                AI&rsquo;s environmental impact without ever feeling connected to it.
              </p>
              <p className="lead mt-3">
                The project turned that abstract cost into an experience —{" "}
                <strong className="font-medium text-[var(--ink)]">something people could see, touch, question, and remember.</strong>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#experience" className="btn">
                  Experience the project <span aria-hidden>&#8594;</span>
                </a>
                <Link href="/#work" className="btn btn-outline">
                  Back to projects <span aria-hidden>&#8594;</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-8" style={{ borderTop: "1px solid var(--border-strong)" }}>
            <div>
              <p className="meta">Up next</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-[30px] leading-tight text-[var(--ink)]">About me</p>
            </div>
            <Link href="/about" className="btn btn-outline">
              Read more <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </LightBand>
    </div>
  );
}
