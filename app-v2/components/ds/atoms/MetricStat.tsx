import type { CSSProperties } from "react";

/**
 * MetricStat atom — one number + label, no wrapper. Compose 2-4 of these
 * directly into an EditorialLayout grid cell (stacked or side by side);
 * the "hero vs. supporting" size distinction is just a `size` prop, not a
 * different component, so any stat can be the headline number.
 */
export default function MetricStat({
  value,
  label,
  accent,
  size = "supporting",
  style,
}: {
  value: string;
  label: string;
  accent: string;
  size?: "hero" | "supporting";
  style?: CSSProperties;
}) {
  return (
    <div style={style}>
      <p
        className={`font-[family-name:var(--font-display)] font-semibold leading-[0.9] ${
          size === "hero" ? "text-[clamp(3.5rem,8vw,6.5rem)]" : "text-3xl"
        }`}
        style={{ color: size === "hero" ? accent : "var(--color-ink)" }}
      >
        {value}
      </p>
      <p
        className={`mt-2 font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)] ${
          size === "hero" ? "text-[0.7rem]" : "text-[0.62rem]"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
