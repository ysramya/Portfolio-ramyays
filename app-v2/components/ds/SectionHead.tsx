import type { ReactNode } from "react";

/**
 * SectionHead — tan numeral beside an eyebrow, a serif title and a short
 * block of copy. The opening of every numbered section.
 *
 * The numeral carries the sequence, so the eyebrow is just the section's
 * name ("The problem"), not "01 — The problem".
 */
export default function SectionHead({
  n,
  eyebrow,
  title,
  children,
  as: Tag = "h2",
  className = "",
}: {
  n: string;
  /** Optional: omit where the title alone carries the section's name. */
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={`sec-head ${className}`}>
      <span className="numeral" aria-hidden="true">
        {n}
      </span>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag className="sec-title">{title}</Tag>
        {children && <div className="sec-copy">{children}</div>}
      </div>
    </div>
  );
}

/** The section shell: container width, vertical rhythm, hairline above. */
export function Section({
  id,
  divided = true,
  className = "",
  children,
}: {
  id?: string;
  divided?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="wrap" style={{ scrollMarginTop: "var(--nav-h)" }}>
      <div className={`sec ${divided ? "sec-divided" : ""} ${className}`}>{children}</div>
    </section>
  );
}
