import Reveal from "./Reveal";
import { accentVar, type Accent } from "./tokens";

export type InsightCard = {
  label: string;
  title: string;
  body: string;
  note?: string;
  accent?: Accent;
};

/**
 * Why this exists: a labeled card grid for parallel, comparable ideas —
 * research methods side by side, design decisions with their rationale.
 * Accent alternates green/yellow per card by default so the row reads
 * with rhythm rather than one flat color block. Distinct from Metrics
 * (which exists to make a number the hero) and FloatingQuote (verbatim
 * voice, not structured content).
 */
export default function InsightCards({
  cards,
  columns = 3,
}: {
  cards: InsightCard[];
  columns?: 2 | 3;
}) {
  return (
    <Reveal
      className={`wrap py-8 grid grid-cols-1 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-5`}
    >
      {cards.map((card, i) => {
        const accent = accentVar(card.accent ?? (i % 2 === 0 ? "green" : "yellow"));
        return (
          <div
            key={card.title}
            className="rounded-2xl border-t-2 bg-[var(--color-surface)] p-6"
            style={{ borderTopColor: accent }}
          >
            <p
              className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase"
              style={{ color: accent }}
            >
              {card.label}
            </p>
            <h4 className="mt-2 font-[family-name:var(--font-display)] font-semibold">
              {card.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {card.body}
            </p>
            {card.note && (
              <p className="mt-3 text-xs leading-relaxed text-[var(--color-ink-faint)] border-t border-[var(--color-border)] pt-3">
                {card.note}
              </p>
            )}
          </div>
        );
      })}
    </Reveal>
  );
}
