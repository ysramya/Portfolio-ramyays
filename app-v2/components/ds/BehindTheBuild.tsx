import Reveal from "./Reveal";
import { accentVar, type Accent } from "./tokens";
import type { ReactNode } from "react";

export type BuildStep = {
  label: string;
  body: string;
  icon: ReactNode;
  accent?: Accent;
};

/**
 * Why this exists: the "how it was made" beat — tools, process, technical
 * approach — told through icon + label pairs. Distinct from InsightCards
 * (which frames research/decisions, not process) and structurally
 * borrowed from the homepage's PrinciplesRow: same icon-over-label-over-
 * body rhythm, so a reader recognizes the pattern from the homepage.
 */
export default function BehindTheBuild({
  title,
  steps,
}: {
  title: string;
  steps: BuildStep[];
}) {
  return (
    <div className="wrap py-14 md:py-20">
      <Reveal>
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3vw,2.2rem)]">
          {title}
        </h3>
      </Reveal>
      <Reveal
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        delay={0.05}
      >
        {steps.map((step, i) => {
          const accent = accentVar(step.accent ?? (i % 2 === 0 ? "green" : "yellow"));
          return (
            <div key={step.label}>
              <div className="w-6 h-6" style={{ color: accent }}>
                {step.icon}
              </div>
              <h4 className="mt-4 font-[family-name:var(--font-display)] font-semibold">
                {step.label}
              </h4>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                {step.body}
              </p>
            </div>
          );
        })}
      </Reveal>
    </div>
  );
}
