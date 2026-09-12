import type { Metadata } from "next";
import type { ReactNode, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import DeepBand from "@/components/ds/DeepBand";
import SectionHead, { Section } from "@/components/ds/SectionHead";

/**
 * Raahi — outcome-first AI product case study, per Raahi_Case_Study_Page.md,
 * with the layout rhythm of the reference visual.
 *
 * Product imagery is the real prototype only: stills cut from the recorded
 * demo (a teammate's Amazon account, with their name, greeting, delivery
 * name/ZIP and browser avatar blurred) plus the demo itself. The reference
 * image's amazon.com mockup, its quotes and its illustrations were generated
 * and are not used. Workflows, taxonomy, decisions and process are diagrams.
 *
 * Research figures and the two quotes come from the project record
 * (12 interviews, 57+ survey responses Feb–Mar 2025, 78.9%, self-selected
 * sample). The prototype UI labels issues by pattern type and severity; the
 * three-tier taxonomy is described as the product model, not claimed as a
 * label visible in these screens.
 */

export const metadata: Metadata = {
  title: "Raahi — Ramya Yerramilli",
  description:
    "An AI browser plugin that helps UX practitioners detect, document, and explain dark patterns while reviewing live websites.",
};

const FRICTION = "#a8452c";
const POSITIVE = "#3e6b55";

/** Aspect ratios of the stills in public/img/raahi/product (cut from the 1774×966 demo). */
const AR = { full: "1352 / 766", toolbar: "700 / 320", evidence: "910 / 766", card: "410 / 544" };

/* ── Icons ─────────────────────────────────────────────────────────────── */

function Icon({ children, className = "icon-line", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} style={style}>
      {children}
    </svg>
  );
}

const i = {
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5 3.5 8 12 12.5 20.5 8z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3.5h8l4 4v13H6z" />
      <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
    </>
  ),
  chat: <path d="M4.5 5h15v10.5H10L5.5 19.5v-4h-1z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5s1.2-6.1 3.6-8.5Z" />
    </>
  ),
  browser: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18M6 6.8h.01M8.5 6.8h.01M11 6.8h.01" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 21 19.5H3z" />
      <path d="M12 10v4.5M12 17h.01" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2.5h7L17 8h3v11H4z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4.5a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.5A3 3 0 0 0 8 18a2.5 2.5 0 0 0 4 1V5.5a2.5 2.5 0 0 0-3-1Z" />
      <path d="M15 4.5a3 3 0 0 1 3 3 3 3 0 0 1 1.5 5.5A3 3 0 0 1 16 18a2.5 2.5 0 0 1-4 1" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M5 7h14" />
      <path d="m5 7-2.5 6a3 3 0 0 0 5 0zM19 7l-2.5 6a3 3 0 0 0 5 0z" />
    </>
  ),
  flag: <path d="M5.5 21V4M5.5 4.5h11l-2 4 2 4h-11" />,
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3 19.5c.3-3 2.8-4.8 6-4.8s5.7 1.8 6 4.8" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16.5 14.8c2.6.2 4.3 1.8 4.5 4.2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c.4-3.6 3.5-5.6 7.5-5.6s7.1 2 7.5 5.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  tools: <path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.5-.5-.5-2.5z" />,
  pen: <path d="m14.5 5.5 4 4M4 20l1-5L15.5 4.5a2 2 0 0 1 3 0l1 1a2 2 0 0 1 0 3L9 19z" />,
  map: (
    <>
      <path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  flask: <path d="M9.5 3.5h5M10.5 3.5v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4A1.5 1.5 0 0 0 19 19l-5.5-9.5v-6M7.5 15h9" />,
  code: <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4" />,
  repeat: (
    <>
      <path d="M17 3.5 20.5 7 17 10.5M20.5 7H9a5 5 0 0 0-5 5" />
      <path d="M7 20.5 3.5 17 7 13.5M3.5 17H15a5 5 0 0 0 5-5" />
    </>
  ),
  shield: <path d="M12 3.2 19 6v5.2c0 4.6-3 8.2-7 9.6-4-1.4-7-5-7-9.6V6z" />,
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12.3 2.5 2.5 5-5.2" />
    </>
  ),
  cross: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  export: <path d="M12 15V3.5M7.5 8 12 3.5 16.5 8M4.5 14v6h15v-6" />,
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  arrowR: <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />,
  arrowD: <path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" />,
};

/* ── Diagram primitives ────────────────────────────────────────────────── */

type Tone = "neutral" | "friction" | "positive" | "strong";

function Arrow({ dir = "right", className = "" }: { dir?: "right" | "down"; className?: string }) {
  return (
    <Icon className={`icon-line !h-[18px] !w-[18px] flex-none opacity-60 ${className}`}>{dir === "right" ? i.arrowR : i.arrowD}</Icon>
  );
}

function Node({ icon, label, tone = "neutral", size = "md", className = "" }: { icon: ReactNode; label: string; tone?: Tone; size?: "sm" | "md" | "lg"; className?: string }) {
  const ring = tone === "friction" ? FRICTION : tone === "positive" ? POSITIVE : tone === "strong" ? "var(--ink)" : "var(--border-strong)";
  const dim = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span
        className={`flex ${dim} items-center justify-center rounded-full`}
        style={{ border: `1px solid ${ring}`, background: tone === "strong" ? "var(--ink)" : "var(--bg-raised)" }}
      >
        <Icon
          className={`icon-line ${size === "sm" ? "!h-[18px] !w-[18px]" : "!h-5 !w-5"}`}
          style={tone === "strong" ? { stroke: "var(--bg)" } : tone === "friction" ? { stroke: FRICTION } : tone === "positive" ? { stroke: POSITIVE } : undefined}
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

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2">
      <span aria-hidden className="mt-[8px] h-1 w-1 flex-none rounded-full bg-[var(--numeral)]" />
      <span>{children}</span>
    </li>
  );
}

/** Browser chrome around a real product still. */
function BrowserFrame({ src, alt, ratio, sizes, priority = false, children }: { src: string; alt: string; ratio: string; sizes: string; priority?: boolean; children?: ReactNode }) {
  return (
    <figure className="w-full overflow-hidden" style={{ borderRadius: 10, border: "1px solid #2f473c", background: "#e6e8e5" }}>
      <div className="flex items-center gap-1.5 px-3.5 py-2.5" aria-hidden style={{ background: "#dfe2de", borderBottom: "1px solid #cfd3ce" }}>
        {["#c9ccc8", "#c9ccc8", "#c9ccc8"].map((c, k) => (
          <span key={k} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="relative" style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        {children}
      </div>
    </figure>
  );
}

function Pin({ n, x, y }: { n: string; x: number; y: number }) {
  return (
    <span
      className="absolute flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-medium"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)", background: "#10231b", color: "#f2efe7", border: "2px solid #f2efe7" }}
    >
      {n}
    </span>
  );
}

/* ── Content ───────────────────────────────────────────────────────────── */

const heroMeta = [
  { icon: i.person, label: "Role", value: "Product Designer + Co-founder" },
  { icon: i.clock, label: "Duration", value: "16 weeks" },
  { icon: i.users, label: "Team", value: "Design · Engineering · Legal · Data Science" },
  { icon: i.tools, label: "Tools", value: "Figma · Miro · Notion · Forms" },
];

const transformation = [
  { icon: i.eye, title: "Notice", body: "“I think this is manipulative.”" },
  { icon: i.search, title: "Detect", body: "Raahi identifies a potential pattern." },
  { icon: i.layers, title: "Classify", body: "Coercive · Deceptive · Addictive" },
  { icon: i.doc, title: "Document", body: "One click creates evidence." },
  { icon: i.chat, title: "Discuss", body: "Bring the evidence to a stakeholder." },
];

const findings = [
  { title: "Language was missing", body: "“Dark pattern” meant something different to every practitioner." },
  { title: "Review happens in the browser", body: "A tool that lives anywhere else doesn't get used." },
  { title: "Instinct without proof", body: "Practitioners knew — they couldn't prove it to a stakeholder." },
  { title: "Speed is the problem", body: "Manipulation works because it's invisible in the moment." },
  { title: "The lever is upstream", body: "Reach the reviewer before the pattern ships." },
];

const changes = [
  {
    n: "01",
    title: "Browser plugin, not standalone app",
    assumption: "Practitioners would use a standalone review application.",
    finding: "Practitioners review live websites inside the browser.",
    decision: "Move detection into a browser plugin.",
    outcome: "Raahi works where the review already happens.",
  },
  {
    n: "02",
    title: "Shared taxonomy",
    assumption: "“Dark pattern” was already a shared vocabulary.",
    finding: "Practitioners used the term differently.",
    decision: "Create a three-tier taxonomy.",
    outcome: "Every flag resolves to a consistent category.",
  },
  {
    n: "03",
    title: "Evidence, not just flags",
    assumption: "Flagging the pattern was enough.",
    finding: "Practitioners could identify patterns but struggled to prove them to stakeholders.",
    decision: "Turn each flag into evidence.",
    outcome: "A practitioner's instinct becomes something they can document and discuss.",
  },
];

const strategy = [
  {
    icon: i.browser,
    title: "Browser plugin, not standalone app",
    why: "Practitioners already review live websites in-browser.",
    tradeoff: "Less freedom than a dedicated review environment.",
    decision: "Workflow fit mattered more than surface area.",
  },
  {
    icon: i.target,
    title: "Practitioner-first, not end-user",
    why: "One practitioner can influence thousands of users downstream.",
    tradeoff: "The product does not directly protect an individual user at the moment of manipulation.",
    decision: "Move the intervention upstream, before harmful patterns ship.",
  },
  {
    icon: i.layers,
    title: "Shared taxonomy",
    why: "Detection needs a stable vocabulary.",
    tradeoff: "A taxonomy necessarily compresses nuance.",
    decision: "Consistency and defensibility were more valuable than individual terminology.",
  },
];

const roleMap = [
  { icon: i.search, title: "Research", tags: ["12 interviews", "57+ survey responses", "Affinity mapping"] },
  { icon: i.target, title: "Product strategy", tags: ["Practitioner-first scope", "Browser-first workflow", "Taxonomy"] },
  { icon: i.pen, title: "UX / Product design", tags: ["Detection card", "Toolbar", "Flag-to-evidence flow", "Information architecture"] },
  { icon: i.users, title: "Collaboration", tags: ["Design", "Engineering", "Legal", "Data Science"] },
  { icon: i.code, title: "Delivery", tags: ["Product specifications", "Prototype", "Practitioner validation"] },
];

const process = [
  { icon: i.search, title: "Discover", body: "Interview practitioners; survey the wider field." },
  { icon: i.map, title: "Synthesize", body: "Affinity-map findings; find recurring workflow gaps." },
  { icon: i.target, title: "Define", body: "Choose the user, workflow, taxonomy and scope." },
  { icon: i.pen, title: "Design", body: "Detection, taxonomy, toolbar and evidence flow." },
  { icon: i.flask, title: "Validate", body: "Bring decisions back to practitioners." },
  { icon: i.code, title: "Prototype", body: "Build the model into a working browser prototype." },
];

const flagFlow = [
  { icon: i.globe, text: "Practitioner encounters a potential dark pattern." },
  { icon: i.search, text: "Raahi surfaces the detection." },
  { icon: i.eye, text: "Practitioner reviews the flag." },
  { icon: i.layers, text: "Pattern is classified using the shared taxonomy." },
  { icon: i.export, text: "The flag is recorded as evidence." },
  { icon: i.chat, text: "Evidence supports a stakeholder conversation." },
];

const prototypeScreens = [
  { src: "/img/raahi/product/live-site.jpg", ratio: AR.full, title: "Live website", alt: "A subscription management page on a live site, before Raahi runs. Account holder's name and delivery details are blurred." },
  { src: "/img/raahi/product/select-area.jpg", ratio: AR.full, title: "Raahi detection", alt: "Raahi's select-area step: the page dims while the practitioner chooses the region to scan. Account holder's name blurred." },
  { src: "/img/raahi/product/detection-card.jpg", ratio: AR.card, title: "Detection card", alt: "The Dark Pattern Detected card with a severity scale, a 65% design trust score, three issues, legal-violation links, and Provide Suggestions and Export buttons." },
  { src: "/img/raahi/product/detection-in-context.jpg", ratio: AR.full, title: "Classification", alt: "The detection card beside the scanned region, listing Visual Interference / Obfuscation, Hidden Costs / Incomplete Information and Forced Continuity, each with a severity marker." },
  { src: "/img/raahi/product/evidence-detail.jpg", ratio: AR.evidence, title: "Evidence", alt: "An expanded issue: high risk of legal violation with a GDPR link, the reason the pattern was flagged, why it matters, and a Read More link." },
];

const signals = [
  { icon: i.repeat, title: "Sustained use", body: "Do practitioners keep Raahi active after the initial novelty?" },
  { icon: i.browser, title: "In-workflow detection", body: "Are flags created during real website reviews rather than demonstrations?" },
  { icon: i.doc, title: "Evidence creation", body: "Do flagged patterns make it into stakeholder conversations?" },
  { icon: i.shield, title: "Detection credibility", body: "Are detections accurate enough that practitioners trust them?" },
  { icon: i.layers, title: "Taxonomy coverage", body: "Can the taxonomy evolve as new patterns emerge without losing consistency?" },
];

const risks = [
  { area: "Product", icon: i.target, title: "Detection accuracy", body: "False positives could undermine practitioner trust." },
  { area: "Product", icon: i.layers, title: "Taxonomy expansion", body: "The three-tier taxonomy will need to evolve as new patterns emerge." },
  { area: "Evidence", icon: i.users, title: "Generalizability", body: "The research sample needs broader validation beyond the self-selected university network." },
  { area: "Evidence", icon: i.repeat, title: "Real-world adoption", body: "Stated intent to use is not evidence of sustained use." },
  { area: "Operations", icon: i.lock, title: "Privacy / operational considerations", body: "A production browser tool would need careful decisions about what websites and browsing information are processed." },
];

const nextSteps = [
  { icon: i.users, title: "Broader practitioner validation", body: "Test the product direction with a more diverse practitioner sample." },
  { icon: i.target, title: "Stronger detection", body: "Improve detection accuracy and evaluate false positives and false negatives." },
  { icon: i.spark, title: "AI dark-pattern coverage", body: "Extend the taxonomy and detection model to manipulation patterns emerging in generative AI interfaces." },
];

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function RaahiPage() {
  return (
    <>
      {/* HERO */}
      <DeepBand>
        <div className="wrap" style={{ paddingTop: "calc(var(--nav-h) + 36px)", paddingBottom: 56 }}>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
            <div>
              <p className="eyebrow eyebrow-rule">Case study · Raahi</p>
              <h1 className="mt-5" style={{ fontSize: "clamp(60px, 7.4vw, 104px)", lineHeight: 0.95 }}>
                Raahi
              </h1>
              <h2 className="mt-3" style={{ fontSize: "clamp(30px, 3.2vw, 44px)", lineHeight: 1.12 }}>
                Spot it. Fix it.
              </h2>
              <p className="mt-5 text-[clamp(17px,1.5vw,20px)] leading-[1.5] text-[var(--ink)]" style={{ maxWidth: "28em" }}>
                An AI browser plugin that helps UX practitioners detect, document, and explain dark
                patterns while reviewing live websites.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--body)]" style={{ maxWidth: "36em" }}>
                Raahi turns a practitioner&rsquo;s instinct — &ldquo;something about this experience
                feels manipulative&rdquo; — into documented, defensible evidence.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#product" className="btn">
                  Explore the product <span aria-hidden>&#8594;</span>
                </a>
                <a href="#research" className="btn btn-outline">
                  See the research <span aria-hidden>&#8594;</span>
                </a>
              </div>
            </div>

            <BrowserFrame
              src="/img/raahi/product/detection-in-context.jpg"
              alt="Raahi's Dark Pattern Detected card open over a live subscription page, next to the region it scanned."
              ratio={AR.full}
              sizes="(max-width: 1024px) 92vw, 600px"
              priority
            />
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 pt-7 md:grid-cols-4" style={{ borderTop: "1px solid var(--rule)" }}>
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
      </DeepBand>

      {/* 01 — THE OUTCOME */}
      <Section id="outcome" divided={false}>
        <div className="sec-grid">
          <SectionHead n="01" eyebrow="The outcome" title="From “I know a dark pattern when I see one” to evidence a team can act on." />
          <div className="sec-copy lg:pt-10">
            <p>Raahi gives UX practitioners a systematic way to identify and document manipulative interface patterns while reviewing live websites.</p>
            <p>Instead of relying on gut feel, checklists, or disconnected notes, practitioners can flag a pattern directly in the browser and connect it to a shared taxonomy.</p>
          </div>
        </div>

        <ol className="mt-12 grid gap-3 sm:grid-cols-5">
          {transformation.map((s, idx) => (
            <li key={s.title} className={`relative flex flex-col items-center p-6 text-center ${idx === 4 ? "panel-sage" : "panel"}`}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: idx === 4 ? "var(--ink)" : "var(--bg-raised)", border: "1px solid var(--border-strong)" }}>
                <Icon className="icon-line !h-6 !w-6" style={idx === 4 ? { stroke: "var(--bg)" } : undefined}>
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
      </Section>

      {/* 02 — WHY IT MATTERED */}
      <Section id="why">
        <div className="sec-grid">
          <div>
            <SectionHead n="02" eyebrow="Why it mattered" title="Practitioners could recognize manipulation. They couldn’t consistently prove it." />
            <dl className="mt-10 grid grid-cols-3 gap-4" style={{ paddingLeft: 0 }}>
              {[
                { value: "78.9%", label: "of surveyed practitioners regularly encounter dark patterns" },
                { value: "57+", label: "practitioners surveyed across the US and India" },
                { value: "12", label: "in-depth practitioner interviews" },
              ].map((m) => (
                <div key={m.value} className="flex flex-col-reverse pt-4" style={{ borderTop: "1px solid var(--rule)" }}>
                  <dt className="mt-2 text-[13px] leading-snug text-[var(--body)]">{m.label}</dt>
                  <dd className="whitespace-nowrap font-[family-name:var(--font-display)] leading-none text-[var(--ink)]" style={{ fontSize: "clamp(34px, 3.6vw, 50px)" }}>
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[12.5px] leading-relaxed text-[var(--muted)]">
              <strong className="font-medium text-[var(--ink)]">Qualifier:</strong> the survey sample was self-selected through a university network. Findings are directional, not statistically representative.
            </p>
          </div>

          <div>
            <figure className="panel p-7" aria-label="How a subtle pattern goes undocumented">
              <div className="mx-auto flex max-w-[320px] flex-col items-stretch">
                {[
                  { icon: i.browser, label: "Live website" },
                  { icon: i.alert, label: "Subtle manipulative pattern" },
                  { icon: i.eye, label: "Practitioner notices", bold: true },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center gap-3 px-4 py-3" style={{ background: "var(--bg-raised)", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
                      <Icon className="icon-line !h-5 !w-5">{s.icon}</Icon>
                      <span className={`text-[14.5px] text-[var(--ink)] ${s.bold ? "font-medium" : ""}`}>{s.label}</span>
                    </div>
                    <div className="flex justify-center py-1.5">
                      <Arrow dir="down" className="!h-4 !w-4" />
                    </div>
                  </div>
                ))}
              </div>
              <ul className="grid gap-2 sm:grid-cols-3">
                {["No consistent vocabulary", "No systematic documentation", "No evidence"].map((g) => (
                  <li key={g} className="flex items-center justify-center gap-2 px-3 py-2.5 text-center text-[12.5px] leading-snug text-[var(--ink)]" style={{ border: `1px dashed ${FRICTION}`, borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
                    <Icon className="icon-line !h-4 !w-4 flex-none" style={{ stroke: FRICTION }}>
                      {i.cross}
                    </Icon>
                    {g}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center py-1.5">
                <Arrow dir="down" className="!h-4 !w-4" />
              </div>
              <div className="mx-auto flex max-w-[320px] items-center justify-center gap-3 px-4 py-3.5" style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}>
                <Icon className="icon-line !h-5 !w-5" style={{ stroke: "var(--bg)" }}>
                  {i.flag}
                </Icon>
                <span className="text-[15px] font-medium" style={{ color: "var(--bg)" }}>
                  Raahi
                </span>
              </div>
            </figure>

            <blockquote className="mt-5 pl-5" style={{ borderLeft: "2px solid var(--numeral)" }}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(19px,1.7vw,22px)] leading-[1.4] text-[var(--ink)]">
                &ldquo;I know dark patterns when I see them — but I have no systematic way to document or prove it to a stakeholder.&rdquo;
              </p>
              <footer className="meta mt-3">Senior UX practitioner, interview · March 2025</footer>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* 03 — THE WORKFLOW */}
      <Section id="workflow">
        <SectionHead n="03" eyebrow="The workflow" title="From manual review to evidence inside the browser." />

        <div className="mt-10 grid gap-3">
          <div className="p-6" style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--radius)" }}>
            <p className="eyebrow" style={{ color: FRICTION }}>Before</p>
            <div className="mt-5 opacity-80">
              <Chain
                size="sm"
                nodes={[
                  { icon: i.browser, label: "Live website" },
                  { icon: i.eye, label: "Notice something", tone: "friction" },
                  { icon: i.camera, label: "Screenshot / notes", tone: "friction" },
                  { icon: i.brain, label: "Remember what happened", tone: "friction" },
                  { icon: i.clock, label: "Explain later", tone: "friction" },
                  { icon: i.chat, label: "Debate terminology", tone: "friction" },
                  { icon: i.scale, label: "Try to prove the issue", tone: "friction" },
                ]}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--ink)" }}>
              <Icon className="icon-line !h-5 !w-5" style={{ stroke: "var(--bg)" }}>
                {i.arrowD}
              </Icon>
            </span>
          </div>

          <div className="panel-sage p-8 sm:p-10">
            <p className="eyebrow" style={{ color: POSITIVE }}>After</p>
            <div className="mt-7">
              <Chain
                size="lg"
                nodes={[
                  { icon: i.browser, label: "Live website", tone: "positive" },
                  { icon: i.search, label: "Raahi detects", tone: "positive" },
                  { icon: i.flag, label: "Practitioner flags", tone: "positive" },
                  { icon: i.layers, label: "Taxonomy classifies", tone: "positive" },
                  { icon: i.doc, label: "Evidence is recorded", tone: "positive" },
                  { icon: i.chat, label: "Stakeholder conversation", tone: "strong" },
                ]}
              />
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[32em] font-[family-name:var(--font-display)] text-[clamp(22px,2.4vw,30px)] leading-[1.3] text-[var(--ink)]">
          Raahi didn&rsquo;t ask practitioners to adopt a new review workflow. It put detection inside the workflow they already had.
        </p>
      </Section>

      {/* 04 — THE PRODUCT: real prototype, annotated */}
      <Section id="product">
        <div className="sec-grid">
          <SectionHead n="04" eyebrow="The product" title="Detection happens where the review happens." />
          <div className="sec-copy lg:pt-10">
            <p>
              Raahi runs as a browser plugin, scanning websites in real time and surfacing potential dark patterns as they appear. A practitioner can flag the pattern directly from the page and connect it to the product&rsquo;s shared taxonomy.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <figure>
            <BrowserFrame
              src="/img/raahi/product/detection-in-context.jpg"
              alt="Raahi's detection card over the scanned region of a live subscription page, with numbered annotations."
              ratio={AR.full}
              sizes="(max-width: 1024px) 94vw, 680px"
            >
              <div aria-hidden className="absolute inset-0">
                <Pin n="01" x={21.5} y={7} />
                <Pin n="03" x={21.5} y={31} />
                <Pin n="04" x={53.5} y={78} />
              </div>
            </BrowserFrame>
            <figcaption className="mt-3 text-[12.5px] text-[var(--muted)]">From the working prototype. The prototype labels each issue by pattern type and severity.</figcaption>
          </figure>

          <div className="flex flex-col gap-5">
            <figure>
              <div className="relative overflow-hidden" style={{ aspectRatio: AR.toolbar, borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                <Image src="/img/raahi/product/toolbar.jpg" alt="Raahi switched on from the browser's extension toolbar, over the page being reviewed. Browser avatar blurred." fill sizes="(max-width: 1024px) 94vw, 400px" className="object-cover" />
                <div aria-hidden className="absolute inset-0">
                  <Pin n="02" x={33} y={21} />
                </div>
              </div>
            </figure>

            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { n: "01", title: "Detection", body: "Potential dark pattern surfaced while browsing." },
                { n: "02", title: "Toolbar", body: "Raahi stays available without taking the practitioner away from the website." },
                { n: "03", title: "Taxonomy", body: "Every flag maps to a consistent category." },
                { n: "04", title: "Evidence", body: "A flagged pattern becomes something the practitioner can document and discuss." },
              ].map((a) => (
                <li key={a.n} className="flex gap-3.5">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-[12px] font-medium" style={{ background: "var(--ink)", color: "var(--bg)" }}>
                    {a.n}
                  </span>
                  <div>
                    <h3 className="text-[17px] leading-snug">{a.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-[var(--body)]">{a.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* 05 — PRODUCT MODEL */}
      <Section id="model">
        <SectionHead n="05" eyebrow="Product model" title="One vocabulary. One workflow. One source of evidence." />

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { tier: "Coercive", icon: i.alert, body: "Patterns that pressure users into an action." },
            { tier: "Deceptive", icon: i.eye, body: "Patterns that obscure, misrepresent, or manipulate information." },
            { tier: "Addictive", icon: i.repeat, body: "Patterns designed to encourage repeated or excessive engagement." },
          ].map((t, idx) => (
            <li key={t.tier} className="panel flex flex-col p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "var(--bg-raised)", border: "1px solid var(--border-strong)" }}>
                  <Icon>{t.icon}</Icon>
                </span>
                <span className="meta">Tier {idx + 1}</span>
              </div>
              <h3 className="mt-8" style={{ fontSize: "clamp(30px, 3vw, 40px)", lineHeight: 1 }}>
                {t.tier}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--body)]">{t.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-14">
          <p className="font-[family-name:var(--font-display)] text-[clamp(20px,2vw,26px)] leading-[1.35] text-[var(--ink)]">
            The taxonomy became the backbone of the product because research showed that &ldquo;dark pattern&rdquo; meant different things to different practitioners.
          </p>
          <p className="text-[15px] leading-[1.7] text-[var(--body)] md:pt-1">Without a shared vocabulary, detection could not scale consistently.</p>
        </div>
      </Section>

      {/* 06 — RESEARCH */}
      <Section id="research">
        <div className="sec-grid">
          <SectionHead n="06" eyebrow="Research" title="12 interviews. 57+ surveys. One product direction.">
            <p>I combined practitioner interviews with a broader survey to understand how UX professionals identify and document dark patterns.</p>
            <p>
              The important finding wasn&rsquo;t simply that practitioners wanted a tool. It was{" "}
              <strong className="font-medium text-[var(--ink)]">who needed it, where they worked, and what was missing from their current workflow.</strong>
            </p>
          </SectionHead>

          <figure aria-label="Research method: interviews and survey converging on five findings">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: i.chat, value: "12", label: "interviews", out: "Recurring workflow patterns" },
                { icon: i.doc, value: "57+", label: "survey responses", out: "Directional validation" },
              ].map((c) => (
                <div key={c.label} className="panel p-5">
                  <div className="flex items-center gap-3">
                    <Icon>{c.icon}</Icon>
                    <p className="font-[family-name:var(--font-display)] text-[30px] leading-none text-[var(--ink)]">{c.value}</p>
                  </div>
                  <p className="mt-1 text-[13px] text-[var(--body)]">{c.label}</p>
                  <div className="my-2.5 flex">
                    <Arrow dir="down" className="!h-4 !w-4" />
                  </div>
                  <p className="text-[14px] font-medium text-[var(--ink)]">{c.out}</p>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 200 26" preserveAspectRatio="none" aria-hidden className="block h-6 w-full">
              <path d="M50 0 C 50 14, 100 12, 100 26 M150 0 C 150 14, 100 12, 100 26" fill="none" stroke="var(--border-strong)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="px-5 py-5" style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}>
              <p className="eyebrow" style={{ color: "#c5cec7" }}>5 product-relevant findings</p>
              <ol className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {findings.map((f, idx) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="font-[family-name:var(--font-display)] text-[18px] leading-none" style={{ color: "#c29a79" }}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-[14px] font-medium" style={{ color: "#f2efe7" }}>
                        {f.title}
                      </p>
                      <p className="mt-0.5 text-[12.5px] leading-snug" style={{ color: "#c5cec7" }}>
                        {f.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)]">
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "2400 / 1286", borderRadius: "var(--radius)", border: "1px solid var(--border)", background: "#fff" }}>
              <Image src="/img/raahi/research/synthesis-board.jpg" alt="The research synthesis board: user pain points, use-case scenarios, guiding questions, and a catalogue of deceptive pattern types." fill sizes="(max-width: 640px) 94vw, 700px" className="object-contain" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">Synthesis board — pain points, use cases, and the pattern types practitioners named.</figcaption>
          </figure>
          <figure>
            <div className="relative overflow-hidden" style={{ aspectRatio: "1200 / 1286", borderRadius: "var(--radius)" }}>
              <Image src="/img/raahi/research/presenting-findings.jpg" alt="Ramya presenting practitioner research findings, with examples of dark patterns on screen." fill sizes="(max-width: 640px) 94vw, 370px" className="object-cover object-[50%_45%]" />
            </div>
            <figcaption className="mt-2.5 text-[12.5px] text-[var(--muted)]">Presenting practitioner research findings.</figcaption>
          </figure>
        </div>
      </Section>

      {/* 07 — RESEARCH → PRODUCT */}
      <Section id="decisions">
        <SectionHead n="07" eyebrow="Research → product" title="Research didn’t validate the original idea. It changed it." />

        <ol className="mt-10 flex flex-col gap-4">
          {changes.map((c) => (
            <li key={c.n} className="panel p-6 lg:p-7">
              <div className="flex items-baseline gap-3">
                <span className="numeral !text-[26px]">{c.n}</span>
                <h3 className="text-[20px] leading-snug">{c.title}</h3>
              </div>
              <div className="mt-5 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch">
                {[
                  { label: "Original assumption", text: c.assumption, style: { border: `1px dashed ${FRICTION}`, background: "var(--bg-raised)" } as CSSProperties, labelColor: FRICTION, strike: true },
                  { label: "Finding", text: c.finding, style: { border: "1px solid var(--border)", background: "var(--bg-raised)" } as CSSProperties },
                  { label: "Decision", text: c.decision, style: { border: "1px solid var(--border-strong)", background: "var(--panel-sage)" } as CSSProperties, labelColor: POSITIVE },
                  { label: "Outcome", text: c.outcome, style: { border: "1px solid var(--ink)", background: "var(--ink)" } as CSSProperties, dark: true },
                ].map((stage, idx, arr) => (
                  <div key={stage.label} className="contents">
                    <div className="flex flex-col p-4" style={{ ...stage.style, borderRadius: "var(--radius)" }}>
                      <p className="meta" style={{ color: stage.dark ? "#c5cec7" : stage.labelColor }}>
                        {stage.label}
                      </p>
                      <p className={`mt-2 text-[14.5px] leading-snug ${stage.strike ? "line-through decoration-[1px]" : ""}`} style={{ color: stage.dark ? "#f2efe7" : stage.strike ? "var(--body)" : "var(--ink)", textDecorationColor: stage.strike ? FRICTION : undefined }}>
                        {stage.text}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flex items-center justify-center py-0.5 md:py-0">
                        <Arrow dir="down" className="md:hidden" />
                        <Arrow className="hidden md:block" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 08 — PRODUCT STRATEGY */}
      <Section id="strategy">
        <SectionHead n="08" eyebrow="Product strategy" title="Three decisions shaped the product." />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {strategy.map((s) => (
            <li key={s.title} className="panel flex flex-col p-6">
              <Icon>{s.icon}</Icon>
              <h3 className="mt-4 text-[19px] leading-snug">{s.title}</h3>
              <dl className="mt-5 flex flex-1 flex-col">
                {[
                  { k: "Why", v: s.why },
                  { k: "Tradeoff", v: s.tradeoff },
                  { k: "Decision", v: s.decision },
                ].map((row) => (
                  <div key={row.k} className="py-3" style={{ borderTop: "1px solid var(--rule)" }}>
                    <dt className="meta" style={row.k === "Tradeoff" ? { color: FRICTION } : row.k === "Decision" ? { color: POSITIVE } : undefined}>
                      {row.k}
                    </dt>
                    <dd className={`mt-1 text-[14px] leading-relaxed ${row.k === "Decision" ? "text-[var(--ink)]" : "text-[var(--body)]"}`}>{row.v}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      {/* 09 — MY ROLE */}
      <Section id="role">
        <div className="sec-grid">
          <SectionHead n="09" eyebrow="My role" title="I connected the research, product strategy, and experience." />
          <div className="sec-copy lg:pt-10">
            <p>As Product Designer and Co-founder, I worked across research, product strategy, UX, and cross-functional decision-making.</p>
            <p>
              I wasn&rsquo;t only designing the interface. I helped determine{" "}
              <strong className="font-medium text-[var(--ink)]">who the product was for, where it should live, what it should detect, and how a detection becomes usable evidence.</strong>
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

      {/* 10 — THE PROCESS */}
      <Section id="process">
        <SectionHead n="10" eyebrow="The process" title="A research-led process with decisions tied to evidence." />

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          <span aria-hidden className="absolute left-[8%] right-[8%] top-[22px] hidden h-px lg:block" style={{ background: "var(--border-strong)" }} />
          {process.map((p, idx) => (
            <li key={p.title} className="relative flex flex-col items-start lg:items-center lg:text-center">
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full" style={{ background: idx === process.length - 1 ? "var(--ink)" : "var(--bg)", border: "1px solid var(--ink)" }}>
                <Icon className="icon-line !h-5 !w-5" style={idx === process.length - 1 ? { stroke: "var(--bg)" } : undefined}>
                  {p.icon}
                </Icon>
              </span>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-[16px] text-[var(--numeral)]">{String(idx + 1).padStart(2, "0")}</span>
                <span className="eyebrow !text-[var(--ink)]">{p.title}</span>
              </p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 11 — CORE INTERACTION: flag-to-evidence */}
      <Section id="interaction">
        <div className="panel-sage p-7 sm:p-10">
          <SectionHead n="11" eyebrow="Core interaction" title="One click turns a hunch into evidence." />

          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {flagFlow.map((s, idx) => {
              const emphasis = idx >= 4;
              return (
                <li key={s.text} className="relative flex items-start gap-4 p-5" style={{ background: emphasis ? "var(--ink)" : "var(--bg-raised)", borderRadius: "var(--radius)", border: emphasis ? "1px solid var(--ink)" : "1px solid var(--border)" }}>
                  <span className="font-[family-name:var(--font-display)] text-[30px] leading-none" style={{ color: emphasis ? "#c29a79" : "var(--numeral)" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <Icon className="icon-line !h-5 !w-5" style={emphasis ? { stroke: "#f2efe7" } : undefined}>
                      {s.icon}
                    </Icon>
                    <p className="mt-2.5 text-[15px] leading-snug" style={{ color: emphasis ? "#f2efe7" : "var(--ink)" }}>
                      {s.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mt-9 max-w-[30em] font-[family-name:var(--font-display)] text-[clamp(21px,2.2vw,28px)] leading-[1.3] text-[var(--ink)]">
            Detection alone isn&rsquo;t enough. The useful outcome is defensible documentation.
          </p>
        </div>
      </Section>

      {/* 12 — THE PROTOTYPE: the real demo and stills */}
      <Section id="prototype">
        <div className="sec-grid">
          <SectionHead n="12" eyebrow="The prototype" title="Raahi works inside the browser, not beside it." />
          <div className="sec-copy lg:pt-10">
            <p>A working prototype demonstrates the core interaction: detecting a potential pattern in context, classifying it, and turning the observation into documented evidence.</p>
          </div>
        </div>

        <div className="video-frame mt-10" style={{ aspectRatio: "1774 / 966" }}>
          <video controls playsInline preload="metadata" poster="/img/raahi/product/detection-in-context.jpg" aria-label="Raahi prototype demo: switching the plugin on, selecting an area of a live page, and reviewing the detected issues">
            <source src="/img/raahi/raahi-demo.mp4" type="video/mp4" />
          </video>
        </div>

        <ol className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {prototypeScreens.map((s, idx) => (
            <li key={s.src} className="flex flex-col">
              <div className="relative flex items-center justify-center overflow-hidden" style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius)", border: "1px solid var(--border)", background: "#111" }}>
                <Image src={s.src} alt={s.alt} fill sizes="(max-width: 1024px) 46vw, 220px" className={s.ratio === AR.full ? "object-cover" : "object-contain"} />
              </div>
              <p className="mt-2.5 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-[16px] text-[var(--numeral)]">{idx + 1}</span>
                <span className="text-[14px] text-[var(--ink)]">{s.title}</span>
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[12.5px] text-[var(--muted)]">
          Recorded on a teammate&rsquo;s own account; their name and delivery details are blurred in the stills.
        </p>
      </Section>

      {/* 13 — IF THIS PRODUCT SHIPPED */}
      <Section id="shipped">
        <div className="sec-grid">
          <SectionHead n="13" eyebrow="If this product shipped" title="The real test wouldn’t be installs. It would be whether practitioners use the evidence." />
          <div className="sec-copy lg:pt-10">
            <p>
              Raahi is a <strong className="font-medium text-[var(--ink)]">working prototype, not a shipped commercial product</strong>. There are therefore no adoption or business-impact numbers to claim.
            </p>
            <p>The right success criteria would be behavioral.</p>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {signals.map((s) => (
            <li key={s.title} className="panel flex flex-col p-5">
              <Icon>{s.icon}</Icon>
              <p className="eyebrow mt-5 !text-[var(--ink)]">{s.title}</p>
              <p className="mt-2 text-[13.5px] leading-snug text-[var(--body)]">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 14 — BEFORE SHIPPING: open risks */}
      <Section id="risks">
        <SectionHead n="14" eyebrow="Before shipping" title="The hardest problem isn’t detecting more. It’s detecting accurately enough to be trusted." />

        <div className="mt-10 grid gap-4 md:grid-cols-3" role="table" aria-label="Open risks by area">
          {(["Product", "Evidence", "Operations"] as const).map((area) => (
            <div key={area} role="rowgroup" className="flex flex-col gap-3">
              <p role="columnheader" className="meta pb-2" style={{ borderBottom: "1px solid var(--border-strong)" }}>
                {area === "Evidence" ? "Research evidence" : area}
              </p>
              {risks
                .filter((r) => r.area === area)
                .map((r) => (
                  <div key={r.title} role="row" className="p-5" style={{ border: `1px dashed ${FRICTION}`, borderRadius: "var(--radius)", background: "var(--bg-raised)" }}>
                    <div className="flex items-center justify-between">
                      <Icon className="icon-line !h-5 !w-5">{r.icon}</Icon>
                      <span className="meta rounded-full px-2 py-0.5" style={{ color: FRICTION, border: `1px solid ${FRICTION}` }}>
                        Open
                      </span>
                    </div>
                    <h3 role="cell" className="mt-3 text-[17px] leading-snug">
                      {r.title}
                    </h3>
                    <p role="cell" className="mt-1.5 text-[14px] leading-relaxed text-[var(--body)]">
                      {r.body}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Section>

      {/* 15 — WHAT'S NEXT */}
      <Section id="next">
        <div className="sec-grid">
          <SectionHead n="15" eyebrow="What’s next" title="The next step is testing whether the concept holds up in real practice." />
          <div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {nextSteps.map((n) => (
                <li key={n.title} className="panel p-6">
                  <Icon>{n.icon}</Icon>
                  <h3 className="mt-4 text-[17px] leading-snug">{n.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--body)]">{n.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 pl-5 text-[15px] leading-relaxed text-[var(--body)]" style={{ borderLeft: "2px solid var(--numeral)" }}>
              The follow-on research is now studying how dark patterns emerge in generative AI, with the longer-term goal of feeding those findings back into the product model. I&rsquo;m leading a team of five with two faculty advisors; the study is in data collection, targeting CHI 2027.
            </p>
          </div>
        </div>
      </Section>

      {/* CLOSING */}
      <DeepBand>
        <div className="wrap py-[clamp(64px,8vw,112px)]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:gap-16">
            <div>
              <p className="eyebrow eyebrow-rule">Final thoughts</p>
              <h2 className="mt-5" style={{ fontSize: "clamp(36px, 4.4vw, 58px)", lineHeight: 1.06, maxWidth: "12em" }}>
                Make manipulation visible before it ships.
              </h2>
            </div>
            <div>
              <p className="lead">
                Raahi started with a simple gap: practitioners could recognize dark patterns, but they lacked a consistent way to document and prove them.
              </p>
              <p className="lead mt-3">
                The product turns that gap into a workflow — <strong className="font-medium text-[var(--ink)]">detect, classify, document, and act.</strong>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#prototype" className="btn">
                  Explore the prototype <span aria-hidden>&#8594;</span>
                </a>
                <Link href="/#work" className="btn btn-outline">
                  Back to projects <span aria-hidden>&#8594;</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 pt-8" style={{ borderTop: "1px solid var(--rule)" }}>
            <div>
              <p className="meta">Next project</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-[30px] leading-tight text-[var(--ink)]">Wellnut</p>
            </div>
            <Link href="/projects/wellnut" className="btn btn-outline">
              View case study <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </DeepBand>
    </>
  );
}
