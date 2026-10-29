"use client";

import { useEffect, useRef } from "react";

/**
 * Ribbon Field — a canvas stripe field along `angle`, after the 21st.dev
 * gradient of the same name. Each band is a flat colour; its edges are
 * feathered by `softness`; `wave` bends the bands with a cross-axis sine
 * offset of (wave / 100) · 0.35 · sin(cross · 2.4 · 2π + clock).
 *
 * The clock runs from WAVE_START and advances at 1.2 rad/s, so the field is
 * already in a settled state at t = 0 and never snaps when motion starts.
 * Nothing animated is quantised. The field is rendered at a fraction of the
 * element's size and scaled up by the browser, which is what keeps a
 * per-pixel loop cheap enough to run every frame.
 */

export interface RibbonFieldProps {
  /** Band colours, in order along the axis. */
  colors: string[];
  /** Where each band hands over to the next, as 0–1 fractions (length = colors.length − 1). */
  stops?: number[];
  angle?: number;
  softness?: number;
  wave?: number;
  /** Seconds-per-second multiplier for the wave clock; 0 freezes the field. */
  speed?: number;
  className?: string;
}

const WAVE_START = 20.75;
const WAVE_RATE = 1.2;
const RES = 0.25; // render scale; the browser smooths it back up

type RGB = [number, number, number];

function hexToRgb(hex: string): RGB {
  const s = hex.replace("#", "");
  const n = parseInt(s.length === 3 ? s.replace(/./g, "$&$&") : s, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function smoothstep(a: number, b: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

export default function RibbonField({
  colors,
  stops = [0.35, 0.585, 0.8],
  angle = 32,
  softness = 24,
  wave = 14,
  speed = 1,
  className,
}: RibbonFieldProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const key = colors.join(",") + "|" + stops.join(",");

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;

    const rgb = colors.map(hexToRgb);
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const th = (angle * Math.PI) / 180;
    const cos = Math.cos(th);
    const sin = Math.sin(th);
    const feather = (softness / 100) * 0.08;
    const waveAmp = (wave / 100) * 0.35;

    let w = 0;
    let h = 0;
    let img: ImageData | null = null;
    let raf = 0;
    let t0 = 0;
    let inView = true;
    let disposed = false;

    const draw = (clock: number): void => {
      if (!img) return;
      const bw = img.width;
      const bh = img.height;
      const data = img.data;
      const extAlong = Math.abs(w * cos) + Math.abs(h * sin);
      const extCross = Math.abs(w * sin) + Math.abs(h * cos);
      let o = 0;
      for (let y = 0; y < bh; y++) {
        const py = ((y + 0.5) / bh - 0.5) * h;
        for (let x = 0; x < bw; x++) {
          const px = ((x + 0.5) / bw - 0.5) * w;
          const along = (px * cos + py * sin) / extAlong;
          const cross = (-px * sin + py * cos) / extCross;
          const tt = along + 0.5 + waveAmp * Math.sin(cross * 2.4 * Math.PI * 2 + clock);

          let r = rgb[0][0];
          let g = rgb[0][1];
          let b = rgb[0][2];
          for (let k = 0; k < stops.length; k++) {
            const m = smoothstep(stops[k] - feather, stops[k] + feather, tt);
            if (m <= 0) break;
            const c = rgb[k + 1];
            r += (c[0] - r) * m;
            g += (c[1] - g) * m;
            b += (c[2] - b) * m;
          }
          data[o++] = r;
          data[o++] = g;
          data[o++] = b;
          data[o++] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    };

    const size = (): void => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = Math.max(2, Math.round(w * RES));
      canvas.height = Math.max(2, Math.round(h * RES));
      img = ctx.createImageData(canvas.width, canvas.height);
      draw(WAVE_START);
    };

    const frame = (now: number): void => {
      if (disposed) return;
      if (t0 === 0) t0 = now;
      draw(WAVE_START + ((now - t0) / 1000) * speed * WAVE_RATE);
      raf = requestAnimationFrame(frame);
    };
    const run = (): void => {
      if (reduced || speed === 0 || raf !== 0 || !inView || document.hidden) return;
      raf = requestAnimationFrame(frame);
    };
    const halt = (): void => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    size();
    const ro = new ResizeObserver(size);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) run();
      else halt();
    });
    io.observe(canvas);
    const onVis = (): void => (document.hidden ? halt() : run());
    document.addEventListener("visibilitychange", onVis);
    run();

    return () => {
      disposed = true;
      halt();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, angle, softness, wave, speed]);

  return <canvas ref={ref} aria-hidden="true" className={className} style={{ width: "100%", height: "100%" }} />;
}
