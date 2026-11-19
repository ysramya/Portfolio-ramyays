import Image from "next/image";

/**
 * Visual building blocks for the Raahi case study. Everything here is either a
 * real prototype screen, a crop of one, or a diagram built from the project's
 * own findings. Crops are made in CSS from the original image (so a click still
 * opens the whole thing).
 */

export type Crop = { x: number; y: number; w: number; h: number };

/** A window onto part of a real image. x/y/w/h are fractions of the original. */
export function Frag({
  src, iw, ih, crop, alt, sizes = "(max-width: 700px) 90vw, 600px", className = "", style,
}: { src: string; iw: number; ih: number; crop: Crop; alt: string; sizes?: string; className?: string; style?: React.CSSProperties }) {
  const ar = (crop.w * iw) / (crop.h * ih);
  return (
    <div className={`cs-frag ${className}`} style={{ aspectRatio: String(ar), ...style }}>
      <Image
        src={src}
        alt={alt}
        width={iw}
        height={ih}
        sizes={sizes}
        className="cs-shot"
        style={{
          width: `${100 / crop.w}%`,
          height: `${100 / crop.h}%`,
          left: `${(-crop.x / crop.w) * 100}%`,
          top: `${(-crop.y / crop.h) * 100}%`,
        }}
      />
    </div>
  );
}

const IMG = "/img/raahi";

/* ── The real screens and the windows used from them ─────────────────── */
export const S = {
  context: { src: `${IMG}/product/detection-in-context.jpg`, w: 1713, h: 971 },
  live: { src: `${IMG}/product/live-site.jpg`, w: 1713, h: 971 },
  select: { src: `${IMG}/product/select-area.jpg`, w: 1713, h: 971 },
  card: { src: `${IMG}/product/detection-card.jpg`, w: 519, h: 689 },
  evidence: { src: `${IMG}/product/evidence-detail.jpg`, w: 1153, h: 971 },
  toolbar: { src: `${IMG}/product/toolbar.jpg`, w: 887, h: 405 },
  board: { src: `${IMG}/research/synthesis-board.jpg`, w: 2400, h: 1286 },
};

/* ── Challenge ───────────────────────────────────────────────────────── */

export function MetricsVisual() {
  const m = [
    { v: "12", l: "practitioner interviews" },
    { v: "57+", l: "survey responses" },
    { v: "78.9%", l: "regularly encounter dark patterns" },
  ];
  return (
    <figure data-reveal className="cs-stage m-0" aria-label="Research snapshot">
      <dl className="grid gap-x-8 gap-y-8 py-4 sm:grid-cols-3">
        {m.map((x) => (
          <div key={x.l}>
            <dt className="cs-bigmetric">{x.v}</dt>
            <dd className="mt-3 text-[14px] leading-snug text-[var(--body)]">{x.l}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-6 text-[12.5px] leading-relaxed text-[var(--muted)]">
        Self-selected university-network sample; findings are directional, not statistically representative.
      </figcaption>
    </figure>
  );
}

export function SynthesisCrops() {
  const b = S.board;
  return (
    <figure data-reveal className="cs-stage m-0">
      <div className="grid items-end gap-5 md:grid-cols-[minmax(0,1.14fr)_minmax(0,0.76fr)]">
        <Frag
          src={b.src} iw={b.w} ih={b.h}
          crop={{ x: 0.325, y: 0.028, w: 0.36, h: 0.588 }}
          alt="Research synthesis board, pain points and the questions to focus on: time consuming, difficulty spotting subtle dark patterns, missed opportunities for early UX feedback, misalignment in analysis, users struggle to communicate trust issues."
          sizes="(max-width: 800px) 94vw, 640px"
        />
        <Frag
          src={b.src} iw={b.w} ih={b.h}
          crop={{ x: 0.565, y: 0.187, w: 0.25, h: 0.616 }}
          alt="Research synthesis board, types of deceptive patterns: comparison prevention, confirmshaming, disguised ads, fake scarcity, fake social proof, hidden subscription, nagging, obstruction, visual interference and more."
          sizes="(max-width: 800px) 94vw, 420px"
        />
      </div>
      <figcaption className="mt-4 text-[13px] tracking-wide text-[var(--muted)]">
        The research synthesis board: pain points and questions, and the pattern types practitioners named. Click to see the whole board.
      </figcaption>
    </figure>
  );
}

const pains = [
  ["Inconsistent terminology", "“Dark pattern” means different things."],
  ["Review happens in the browser", "A tool outside the workflow adds friction."],
  ["Difficulty substantiating concerns", "Hard to prove to stakeholders."],
  ["Patterns can be hard to notice", "Easy to miss in the moment."],
  ["Opportunity to intervene before launch", "Reach reviewers before it ships."],
];

export function PainMap() {
  return (
    <ol data-reveal className="cs-steps relative grid gap-7 md:gap-5" style={{ ["--n" as string]: pains.length }} aria-label="Five findings">
      {pains.map(([t, d], k) => (
        <li key={t} className="relative pl-9 md:pl-0 md:pt-9">
          <span className="absolute left-0 top-0.5 h-[12px] w-[12px] rounded-full border-2 border-[#e8b870] md:top-0" aria-hidden="true" />
          {k < pains.length - 1 && (
            <span aria-hidden="true" className="absolute left-[5px] top-5 h-[calc(100%+20px)] border-l border-dashed border-[#f2efe7]/45 md:left-[18px] md:top-[5px] md:h-0 md:w-[calc(100%+4px)] md:border-l-0 md:border-t" />
          )}
          <p className="text-[15.5px] leading-snug text-[var(--ink)]">{t}</p>
          <p className="mt-1.5 text-[13px] leading-snug text-[var(--muted)]">{d}</p>
        </li>
      ))}
    </ol>
  );
}

/* ── Product direction ───────────────────────────────────────────────── */

const rows = [
  ["A separate review app is needed", "Practitioners review live websites", "Browser extension"],
  ["Everyone defines dark patterns the same way", "Terminology varies", "Shared taxonomy"],
  ["A flag is enough", "Stakeholders need evidence", "Documented findings"],
];

export function DirectionDiagram() {
  return (
    <div data-reveal className="cs-stage cs-rows-big" role="table" aria-label="From assumption to decision">
      <div role="row" className="cs-rows-head">
        <span role="columnheader" className="meta">Assumption</span>
        <span aria-hidden="true" />
        <span role="columnheader" className="meta">Research insight</span>
        <span aria-hidden="true" />
        <span role="columnheader" className="meta">Product decision</span>
      </div>
      {rows.map(([a, i, d]) => (
        <div role="row" key={d} className="cs-rows-row">
          <p role="cell" data-l="Assumption" className="cs-cell">{a}</p>
          <span aria-hidden="true" className="cs-rows-arrow">→</span>
          <p role="cell" data-l="Research insight" className="cs-cell">{i}</p>
          <span aria-hidden="true" className="cs-rows-arrow">→</span>
          <p role="cell" data-l="Product decision" className="cs-cell cs-cell-gold">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function WorkflowStrip() {
  const steps = [
    {
      t: "Detect",
      f: <Frag src={S.card.src} iw={S.card.w} ih={S.card.h} crop={{ x: 0.03, y: 0.03, w: 0.94, h: 0.31 }} alt="The Dark Pattern Detected card header with Severe, Moderate and Low labels and a 65% design trust score." />,
    },
    {
      t: "Classify",
      f: <Frag src={S.card.src} iw={S.card.w} ih={S.card.h} crop={{ x: 0.07, y: 0.385, w: 0.88, h: 0.205 }} alt="The issues list: Visual Interference / Obfuscation, Hidden Costs / Incomplete Information and Forced Continuity, each with a severity marker." />,
    },
    {
      t: "Document",
      f: <Frag src={S.evidence.src} iw={S.evidence.w} ih={S.evidence.h} crop={{ x: 0.06, y: 0.05, w: 0.88, h: 0.62 }} alt="An expanded issue showing the reason the pattern was flagged and why it matters." />,
    },
    {
      t: "Discuss",
      f: <Frag src={S.card.src} iw={S.card.w} ih={S.card.h} crop={{ x: 0.03, y: 0.63, w: 0.94, h: 0.33 }} alt="Legal-violation links and the Provide Suggestions and Export buttons." />,
    },
  ];
  return (
    <figure data-reveal className="cs-stage m-0" aria-label="Detect, classify, document, discuss">
      <ol className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {steps.map((s, n) => (
          <li key={s.t} className="relative">
            <div className="mb-3 flex items-center gap-3 text-[15px] text-[var(--ink)]">
              <span className="cs-badge" aria-hidden="true">{n + 1}</span>
              {s.t}
              {n < steps.length - 1 && <span aria-hidden="true" className="ml-auto hidden text-[#e8b870] lg:block">→</span>}
            </div>
            {s.f}
          </li>
        ))}
      </ol>
    </figure>
  );
}

/* ── Solution: the walkthrough ───────────────────────────────────────── */

type Shot = { n: number; t: string; cap: string; node: React.ReactNode };

export function Walkthrough() {
  const shots: Shot[] = [
    {
      n: 1, t: "Live page", cap: "The page before review.",
      node: <Frag src={S.live.src} iw={S.live.w} ih={S.live.h} crop={{ x: 0, y: 0, w: 1, h: 1 }} sizes="(max-width: 1100px) 94vw, 1100px" alt="A subscription management page on a live site, before Raahi runs. Account holder’s name and delivery details are blurred." />,
    },
    {
      n: 2, t: "Select", cap: "The page dims while the practitioner chooses a region to scan.",
      node: <Frag src={S.select.src} iw={S.select.w} ih={S.select.h} crop={{ x: 0, y: 0, w: 1, h: 1 }} sizes="(max-width: 1100px) 94vw, 1100px" alt="Raahi’s select-area step: the page dims while the practitioner chooses the region to scan. Account holder’s name blurred." />,
    },
    {
      n: 3, t: "Detect", cap: "Raahi surfaces a potential dark pattern in the scanned region.",
      node: <Frag src={S.context.src} iw={S.context.w} ih={S.context.h} crop={{ x: 0.557, y: 0.026, w: 0.353, h: 0.52 }} sizes="(max-width: 900px) 94vw, 640px" style={{ maxWidth: 640, marginInline: "auto" }} alt="The region Raahi scanned, outlined with a dashed border: Manage Membership, Remind me before renewing and End Membership." />,
    },
    {
      n: 4, t: "Classify", cap: "Each issue is mapped to the taxonomy, with severity.",
      node: <Frag src={S.card.src} iw={S.card.w} ih={S.card.h} crop={{ x: 0, y: 0, w: 1, h: 1 }} sizes="(max-width: 700px) 80vw, 420px" style={{ maxWidth: 420, marginInline: "auto" }} alt="The Dark Pattern Detected card with a severity scale, a 65% design trust score, three issues, legal-violation links, and Provide Suggestions and Export buttons." />,
    },
    {
      n: 5, t: "Document", cap: "The reason, why it matters, and a link to read more.",
      node: <Frag src={S.evidence.src} iw={S.evidence.w} ih={S.evidence.h} crop={{ x: 0, y: 0, w: 1, h: 1 }} sizes="(max-width: 900px) 94vw, 640px" style={{ maxWidth: 640, marginInline: "auto" }} alt="An expanded issue: high risk of legal violation with a GDPR link, the reason the pattern was flagged, why it matters, and a Read More link." />,
    },
  ];
  return (
    <ol className="grid gap-8" aria-label="Prototype walkthrough">
      {shots.map((s) => (
        <li key={s.n}>
          <figure data-reveal className="cs-stage m-0">
            <figcaption className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-[var(--ink)]">
              <span className="cs-badge" aria-hidden="true">{s.n}</span>
              {s.t}
              <span className="text-[13px] text-[var(--muted)]">{s.cap}</span>
            </figcaption>
            {s.node}
          </figure>
        </li>
      ))}
    </ol>
  );
}

export function TaxonomyTree() {
  const t = [
    ["Coercive", "Pressures users into an action."],
    ["Deceptive", "Obscures or misrepresents information."],
    ["Addictive", "Encourages repeated or excessive engagement."],
  ];
  return (
    <figure data-reveal className="cs-stage m-0" aria-label="The three-category taxonomy">
      <div className="cs-tree">
        <span className="cs-tree-root">Dark pattern</span>
        <span className="cs-tree-stem" aria-hidden="true" />
        <ul className="cs-tree-branches">
          {t.map(([n, d]) => (
            <li key={n} className="cs-tree-branch">
              <p className="text-[20px] text-[#e8b870]" style={{ fontFamily: "var(--font-prata), serif" }}>{n}</p>
              <p className="mt-1 text-[14px] leading-snug text-[var(--body)]">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

/* ── My role ─────────────────────────────────────────────────────────── */

export function AnnotatedScreen() {
  const legend = ["Browser-first workflow", "Shared taxonomy", "Detection card and toolbar", "Flag-to-evidence flow"];
  return (
    <figure data-reveal className="cs-stage m-0" aria-label="Annotated product screen">
      <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="relative">
          <Image src={S.toolbar.src} width={S.toolbar.w} height={S.toolbar.h} alt="Raahi switched on from the browser’s extension toolbar, over the page being reviewed. Browser avatar blurred." sizes="(max-width: 800px) 94vw, 620px" className="cs-shot" />
          <span className="cs-mark" style={{ left: "63%", top: "31%" }} aria-hidden="true">1</span>
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <Image src={S.card.src} width={S.card.w} height={S.card.h} alt="The Dark Pattern Detected card with a severity scale, a 65% design trust score, three issues, legal-violation links, and Provide Suggestions and Export buttons." sizes="(max-width: 800px) 80vw, 420px" className="cs-shot" />
          <span className="cs-mark" style={{ left: "96%", top: "49%" }} aria-hidden="true">2</span>
          <span className="cs-mark" style={{ left: "92%", top: "9%" }} aria-hidden="true">3</span>
          <span className="cs-mark" style={{ left: "90%", top: "84%" }} aria-hidden="true">4</span>
        </div>
      </div>
      <ol className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
        {legend.map((t, n) => (
          <li key={t} className="flex items-center gap-3 text-[14px] text-[var(--ink)]">
            <span className="cs-badge" aria-hidden="true">{n + 1}</span>{t}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function ContributionStrip() {
  const items = ["Research", "Product strategy", "UX design", "Prototype"];
  return (
    <ol data-reveal className="cs-chip-flow" aria-label="My contribution">
      {items.flatMap((t, k) => {
        const li = <li key={t}>{t}</li>;
        return k < items.length - 1 ? [li, <li key={`${t}-a`} aria-hidden="true" className="!p-0 !shadow-none !text-[#e8b870]">→</li>] : [li];
      })}
    </ol>
  );
}
