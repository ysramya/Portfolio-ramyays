"use client";

/**
 * Pick a part of the product, see it close up. Chips on the left, the real
 * crop, screen or clip on the right, inside a dark stage card. Arrow keys move
 * between chips. Tall (phone) images are fitted by height, wide ones by width.
 */

import { useRef, useState } from "react";
import Image from "next/image";

export type ExplorerItem = {
  id: string;
  label: string;
  /** Still image, or the poster when `video` is set. */
  src: string;
  w: number;
  h: number;
  alt: string;
  /** One short line: what the user can do here and why it matters. */
  cap?: string;
  video?: string;
};

export default function ShotExplorer({ items }: { items: ExplorerItem[] }) {
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const cur = items[i];
  const tall = cur.h > cur.w * 1.15;

  const move = (to: number) => {
    const n = (to + items.length) % items.length;
    setI(n);
    tabs.current[n]?.focus();
  };

  return (
    <div className="cs-stage cs-explorer">
      <div
        role="tablist"
        aria-label="Parts of the product"
        className="cs-chips"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); move(i + 1); }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); move(i - 1); }
        }}
      >
        {items.map((it, n) => (
          <button
            key={it.id}
            ref={(el) => { tabs.current[n] = el; }}
            role="tab"
            id={`ex-tab-${it.id}`}
            aria-selected={n === i}
            aria-controls="ex-panel"
            tabIndex={n === i ? 0 : -1}
            onClick={() => setI(n)}
            className="cs-chip"
          >
            {it.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id="ex-panel" aria-labelledby={`ex-tab-${cur.id}`} className="cs-view">
        {cur.video ? (
          <video
            key={cur.id}
            className="cs-view-img cs-view-video"
            controls
            playsInline
            preload="metadata"
            poster={cur.src}
            aria-label={cur.alt}
            style={{ aspectRatio: `${cur.w} / ${cur.h}`, maxHeight: tall ? "min(64vh, 580px)" : undefined }}
          >
            <source src={cur.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            key={cur.id}
            src={cur.src}
            width={cur.w}
            height={cur.h}
            alt={cur.alt}
            sizes="(max-width: 1024px) 90vw, 640px"
            className={`cs-shot cs-view-img${tall ? " cs-view-tall" : ""}`}
            style={tall ? undefined : { maxWidth: Math.round(cur.w * 1.6) }}
          />
        )}
        {cur.cap && <p className="mt-4 max-w-[34ch] text-center text-[14px] leading-snug text-[var(--body)]">{cur.cap}</p>}
      </div>
    </div>
  );
}
