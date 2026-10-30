import type { ReactNode } from "react";
import SectionHead, { Section } from "@/components/ds/SectionHead";

/**
 * CaseSummary: the case in six lines, directly under a case study's hero.
 *
 * A recruiter skimming for fit should get the business problem, what Ramya
 * personally did, what was learned, which decisions she influenced, what was
 * built and what changed, without reading the full page. Every row is written
 * from facts already stated further down the same page or on the resume, and
 * prototypes say so rather than implying adoption numbers they do not have.
 */

export type CaseSummaryRow = { label: string; body: ReactNode };

export default function CaseSummary({ rows }: { rows: CaseSummaryRow[] }) {
  return (
    <Section id="at-a-glance" divided={false}>
      <div className="sec-grid">
        <SectionHead n="00" eyebrow="At a glance" title="The short version" />
        <dl data-reveal-group>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 py-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-6"
              style={{ borderTop: "1px solid var(--rule)" }}
            >
              <dt className="text-[13px] font-medium tracking-[0.04em] text-[var(--muted)] md:pt-1">{row.label}</dt>
              <dd className="text-[16px] leading-[1.7] text-[var(--body)]">{row.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
