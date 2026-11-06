"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * SpotlightBackground — a soft glow that follows the cursor and leaves a
 * fading trail behind it.
 *
 * Adapted from the stock component for this site:
 *  - It is drawn on a canvas in a requestAnimationFrame loop, not through
 *    React state, so moving the mouse never re-renders the page. The loop
 *    only runs while the trail is still fading; at rest it stops.
 *  - The glow takes the page's own palette (warm sage by default, lavender
 *    on Wellnut, icy blue on Cost of a Click), the same switch PageRibbon
 *    makes, so it reads as part of the ground rather than a UI effect.
 *  - It sits BEHIND the page content (same layer as the ribbon ground), so
 *    it never washes over text, cards or the deep green bands. The canvas
 *    itself is capped at 28% opacity however many trail points overlap, so
 *    the muted labels keep a 4.5:1 ratio even at the brightest point.
 *  - Decorative only: hidden from assistive tech, never takes pointer
 *    events, and not rendered at all for touch screens or for people who
 *    have asked for reduced motion.
 */

const GLOW = {
  ivory: "168 196 170",
  lavender: "190 170 225",
  blue: "140 185 225",
} as const;

/** How long a trail point lives, in ms. */
const LIFE = 900;
/** Head radius while moving / at rest, in px. */
const HEAD_MOVING = 190;
const HEAD_REST = 240;
/** Trail point radius at birth, in px. */
const TRAIL_R = 130;
/** A point is dropped roughly every this many px of travel. */
const STEP = 14;

type Point = { x: number; y: number; t: number };

export default function SpotlightBackground() {
  const pathname = usePathname() ?? "/";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  const rgb = pathname.startsWith("/projects/wellnut")
    ? GLOW.lavender
    : pathname.startsWith("/projects/invisible-impacts")
      ? GLOW.blue
      : GLOW.ivory;
  const [r, g, b] = rgb.split(" ");

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
    const canvas = canvasRef.current;
    if (!enabled || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let points: Point[] = [];
    let head: { x: number; y: number; moving: boolean } | null = null;
    let last: { x: number; y: number } | null = null;
    let frame = 0;
    let idle: ReturnType<typeof setTimeout> | undefined;

    const blob = (x: number, y: number, radius: number, alpha: number) => {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const draw = (now: number) => {
      frame = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      points = points.filter((p) => now - p.t < LIFE);
      for (const p of points) {
        const life = 1 - (now - p.t) / LIFE; // 1 → 0
        blob(p.x, p.y, TRAIL_R * (0.45 + 0.55 * life), 0.3 * life * life);
      }
      if (head) blob(head.x, head.y, head.moving ? HEAD_MOVING : HEAD_REST, 0.9);
      // Keep running only while something is still fading.
      if (points.length > 0) frame = requestAnimationFrame(draw);
    };

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const x = e.clientX;
      const y = e.clientY;
      // Fill the gap since the last event so a fast flick is a smooth line.
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.hypot(dx, dy);
        const n = Math.min(Math.floor(dist / STEP), 40);
        for (let i = 1; i <= n; i++) {
          points.push({ x: last.x + (dx * i) / (n + 1), y: last.y + (dy * i) / (n + 1), t: now });
        }
      }
      points.push({ x, y, t: now });
      last = { x, y };
      head = { x, y, moving: true };
      kick();
      clearTimeout(idle);
      idle = setTimeout(() => {
        if (head) head.moving = false; // settles wider when the cursor rests
        kick();
      }, 150);
    };

    const onLeave = () => {
      head = null;
      last = null;
      kick();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, [enabled, r, g, b]);

  if (!enabled || pathname.startsWith("/admin")) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: -1, opacity: 0.28 }}
    />
  );
}
