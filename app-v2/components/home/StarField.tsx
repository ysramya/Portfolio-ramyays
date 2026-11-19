"use client";

import { useEffect, useRef } from "react";

/**
 * Persistent Himalayan night sky. Two canvases: a static field of stars and a
 * smaller twinkling layer that is only an opacity animation in CSS, so there
 * is no per-frame JS. Sized to its parent, which is the whole homepage.
 */
function paint(canvas: HTMLCanvasElement, density: number, seed: number) {
  const parent = canvas.parentElement;
  if (!parent) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = parent.clientWidth;
  const h = parent.clientHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);
  // Small deterministic PRNG so stars don't jump between resizes.
  let s = seed;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const count = Math.round((w * h) / density);
  for (let i = 0; i < count; i++) {
    const x = rnd() * w;
    const y = rnd() * h;
    const r = 0.3 + rnd() * rnd() * 1.4;
    const warm = rnd() > 0.82;
    ctx.fillStyle = warm
      ? `rgba(233,208,150,${0.45 + rnd() * 0.4})`
      : `rgba(242,239,231,${0.3 + rnd() * 0.6})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function StarField() {
  const a = useRef<HTMLCanvasElement>(null);
  const b = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const draw = () => {
      if (a.current) paint(a.current, 13000, 7);
      if (b.current) paint(b.current, 80000, 91);
    };
    draw();
    const parent = a.current?.parentElement;
    const ro = parent ? new ResizeObserver(draw) : null;
    if (parent && ro) ro.observe(parent);
    return () => ro?.disconnect();
  }, []);

  return (
    <div aria-hidden="true" className="night-stars">
      <canvas ref={a} />
      <canvas ref={b} className="night-twinkle" />
    </div>
  );
}
