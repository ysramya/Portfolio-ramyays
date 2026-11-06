"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * SpotlightBackground — a soft glow that follows the cursor.
 *
 * Adapted from the stock component for this site:
 *  - Position is written straight to the element's transform in a
 *    requestAnimationFrame, not through React state, so moving the mouse
 *    never re-renders the page.
 *  - The glow takes the page's own palette (warm ivory by default, lavender
 *    on Wellnut, icy blue on Cost of a Click), the same switch PageRibbon
 *    makes, so it reads as part of the ground rather than a UI effect.
 *  - It is deliberately faint (peak 15% opacity): text under it keeps its
 *    contrast ratio, including the muted labels on cream.
 *  - Decorative only: hidden from assistive tech, never takes pointer
 *    events, and not rendered at all for touch screens or for people who
 *    have asked for reduced motion.
 */

const GLOW = {
  ivory: "196 160 118",
  lavender: "170 140 200",
  blue: "100 160 215",
} as const;

export default function SpotlightBackground() {
  const pathname = usePathname() ?? "/";
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);

  // Only for a real pointer, and only when motion is welcome.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setEnabled(fine.matches && !calm.matches);
    apply();
    fine.addEventListener("change", apply);
    calm.addEventListener("change", apply);
    return () => {
      fine.removeEventListener("change", apply);
      calm.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let idle: ReturnType<typeof setTimeout> | undefined;

    const paint = () => {
      frame = 0;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.dataset.on = "true";
      el.dataset.moving = "true";
      if (!frame) frame = requestAnimationFrame(paint);
      clearTimeout(idle);
      idle = setTimeout(() => {
        el.dataset.moving = "false"; // settles wider when the cursor rests
      }, 150);
    };
    const onLeave = () => {
      el.dataset.on = "false";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, [enabled]);

  if (!enabled || pathname.startsWith("/admin")) return null;

  const rgb = pathname.startsWith("/projects/wellnut")
    ? GLOW.lavender
    : pathname.startsWith("/projects/invisible-impacts")
      ? GLOW.blue
      : GLOW.ivory;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div
        ref={ref}
        className="spotlight-glow absolute left-0 top-0 rounded-full"
        data-on="false"
        data-moving="false"
        style={{
          background: `radial-gradient(circle, rgb(${rgb} / 0.15) 0%, rgb(${rgb} / 0) 70%)`,
        }}
      />
    </div>
  );
}
