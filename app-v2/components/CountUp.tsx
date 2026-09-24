"use client";

/**
 * CountUp — motion spec §21, for documented KPI values only.
 *
 * The values on the PM Dashboard aren't bare numbers: "~3 hrs", "$1.2B+",
 * "<10 sec", "6". So the number is extracted and animated while the prefix
 * and suffix are preserved verbatim — "$1.2B+" counts to 1.2 and keeps both
 * the "$" and the "B+". Anything with no number renders as-is.
 *
 * Safety, matching the rest of the motion system:
 * - The final value is the initial render. If JS never runs, or reduced
 *   motion is set, or the observer never fires, the real number is on screen.
 *   Counting only ever replaces a number that is already correct.
 * - `tabular-nums` keeps the width stable so the layout doesn't jitter.
 * - Runs once, when the value scrolls into view.
 */

import { useEffect, useRef, useState } from "react";

/** Splits "$1.2B+" into "$", 1.2, "B+" — or returns null when there's no number. */
function parse(value: string) {
  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return { prefix, target: parseFloat(digits), suffix, decimals: (digits.split(".")[1] ?? "").length };
}

export default function CountUp({
  value,
  className,
  style,
  duration = 600,
}: {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parse(value);
    const el = ref.current;
    if (!parsed || !el) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    let done = false;

    const run = () => {
      if (done) return;
      done = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // Same easing family as the rest of the system.
        const eased = 1 - Math.pow(1 - t, 3);
        const current = parsed.target * eased;
        setDisplay(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`);
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    // Backstop: the real value is restored regardless.
    const backstop = window.setTimeout(() => setDisplay(value), 2500);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(backstop);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums", ...style }}>
      {display}
    </span>
  );
}
