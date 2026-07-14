import Reveal from "./Reveal";

/**
 * Why this exists: outcome/impact stats where the number itself is the
 * content, not a label+body pair (that's InsightCards). Value renders in
 * yellow by default — "important metrics" is yellow's job per the color
 * system, keeping green reserved for research/process framing.
 */
export default function Metrics({
  stats,
}: {
  stats: { value: string; label: string; desc: string }[];
}) {
  return (
    <Reveal className="wrap py-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[var(--color-surface)] p-7 text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-yellow)]">
            {stat.value}
          </p>
          <p className="mt-2 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-muted)]">
            {stat.label}
          </p>
          <p className="mt-2 text-sm text-[var(--color-ink-faint)]">{stat.desc}</p>
        </div>
      ))}
    </Reveal>
  );
}
