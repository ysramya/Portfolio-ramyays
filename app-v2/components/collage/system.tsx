import Link from "next/link";

/**
 * Collage design system — the reusable pieces from Version A.
 *
 * Sections 06 (sticky notes), 07 (stamps), 08 (UI elements) and 09
 * (project card). Colours come from the CSS custom properties defined on
 * `.collage` in globals.css, so every one of these must render inside a
 * `.collage` ancestor.
 */

/* ── 06 · Sticky note system ─────────────────────────────────────── */

const NOTE_KIND = {
  "field-note": { bg: "#dfe6d5", label: "Field Note" },
  question: { bg: "#f6e4b8", label: "Question" },
  personal: { bg: "#f3d3d2", label: "Personal" },
  insight: { bg: "#ded8ec", label: "Insight" },
} as const;

export type NoteKind = keyof typeof NOTE_KIND;

export function StickyNote({
  kind,
  title,
  children,
  rotate = -1.2,
}: {
  kind: NoteKind;
  /** Overrides the default label, e.g. "Field Note #018". */
  title?: string;
  children: React.ReactNode;
  rotate?: number;
}) {
  const k = NOTE_KIND[kind];
  return (
    <div className="relative pt-3" style={{ transform: `rotate(${rotate}deg)` }}>
      <span className="tape left-1/2 -translate-x-1/2 top-0 rotate-[-3deg]" aria-hidden />
      <div className="p-4" style={{ background: k.bg, boxShadow: "2px 3px 0 rgba(29,27,24,0.08)" }}>
        <p
          className="text-[0.58rem] font-bold tracking-[0.18em] uppercase"
          style={{ color: "var(--vermilion)" }}
        >
          {title ?? k.label}
        </p>
        <div
          className="mt-2 text-[0.9rem] leading-snug"
          style={{ fontFamily: "var(--font-hand)", color: "var(--ink)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── 07 · Stamp system ───────────────────────────────────────────── */

const STAMP_KIND = {
  investigation: { color: "var(--vermilion)", top: "RY", bottom: "2026" },
  research: { color: "var(--deep-green)", top: "Research", bottom: "Field Study" },
  experiment: { color: "var(--indigo)", top: "Experiment", bottom: "Test & Learn" },
  publication: { color: "var(--turmeric)", top: "Publication", bottom: "Article 2026" },
  design: { color: "var(--rose)", top: "Design", bottom: "Ideation" },
} as const;

export type StampKind = keyof typeof STAMP_KIND;

/** A categorising postage stamp. `n` prints a large numeral in the middle. */
export function Stamp({ kind, n, rotate = 0 }: { kind: StampKind; n?: string; rotate?: number }) {
  const s = STAMP_KIND[kind];
  return (
    <div className="stamp-edge inline-block" style={{ transform: `rotate(${rotate}deg)` }}>
      <div
        className="px-3 py-2 text-center min-w-[74px]"
        style={{ border: `1.5px solid ${s.color}` }}
      >
        <p className="text-[0.5rem] font-bold tracking-[0.14em] uppercase" style={{ color: s.color }}>
          {s.top}
        </p>
        {n && (
          <p
            className="my-1 text-xl leading-none"
            style={{ fontFamily: "var(--font-display-collage)", color: s.color }}
          >
            {n}
          </p>
        )}
        <p className="text-[0.45rem] tracking-[0.12em] uppercase" style={{ color: "var(--ink-faint)" }}>
          {s.bottom}
        </p>
      </div>
    </div>
  );
}

/* ── 08 · UI elements ────────────────────────────────────────────── */

export function CollageButton({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-[0.7rem] font-bold tracking-[0.16em] uppercase transition-transform duration-300 hover:-translate-y-0.5";
  const style =
    variant === "primary"
      ? { background: "var(--deep-green)", color: "var(--paper)" }
      : { background: "transparent", color: "var(--deep-green)", border: "1.5px solid var(--deep-green)" };

  const inner = (
    <>
      {children}
      <span aria-hidden>→</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={base} style={style}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={base} style={style}>
      {inner}
    </Link>
  );
}

/** The quieter "Look closer ↗" text link, underlined by rule. */
export function CollageLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex flex-col items-start gap-1 group"
      style={{ color: "var(--ink)" }}
    >
      <span className="text-[0.7rem] font-bold tracking-[0.16em] uppercase">
        {children} <span aria-hidden>↗</span>
      </span>
      <span
        className="h-px w-full transition-all duration-300 group-hover:opacity-100 opacity-60"
        style={{ background: "var(--vermilion)" }}
        aria-hidden
      />
    </Link>
  );
}

/** Taped project-number tag. */
export function ProjectTag({ n, rotate = 2 }: { n: string; rotate?: number }) {
  return (
    <div className="relative pt-3 inline-block" style={{ transform: `rotate(${rotate}deg)` }}>
      <span className="tape left-1/2 -translate-x-1/2 top-0 w-[54px] rotate-[-4deg]" aria-hidden />
      <div className="tex-handmade px-5 py-3 text-center" style={{ border: "1px solid var(--hairline)" }}>
        <p className="text-[0.5rem] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--vermilion)" }}>
          Project
        </p>
        <p
          className="text-2xl leading-none mt-0.5"
          style={{ fontFamily: "var(--font-display-collage)", color: "var(--ink)" }}
        >
          {n}
        </p>
      </div>
    </div>
  );
}

/** Dashed divider with a centred floral mark. */
export function OrnamentDivider() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="rule-ornament flex-1" />
      <span style={{ color: "var(--vermilion)" }}>✦</span>
      <span className="rule-ornament flex-1" />
    </div>
  );
}
