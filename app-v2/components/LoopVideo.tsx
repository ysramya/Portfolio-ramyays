"use client";

import { useEffect, useRef, useState } from "react";

/**
 * LoopVideo — a short, silent, looping clip used in place of a GIF.
 *
 * An H.264 loop is a fraction of an equivalent GIF's weight (the ASAP
 * thumbnail is 410 KB for 8 seconds at 1080²). Because it moves on its own
 * for longer than five seconds it carries a pause button (WCAG 2.2.2), and
 * anyone with reduced motion enabled starts on the poster frame instead.
 *
 * The button is a sibling of the video, positioned against the nearest
 * positioned ancestor, so it can sit over a card that is itself a link
 * without nesting one interactive element inside another.
 */
export default function LoopVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) setPaused(true);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (paused) video.pause();
    else video.play().catch(() => {});
  }, [paused]);

  return (
    <>
      <video
        ref={ref}
        src={src}
        poster={poster}
        aria-label={label}
        className={className}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      />
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? `Play ${label}` : `Pause ${label}`}
        aria-pressed={paused}
        className="absolute bottom-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full"
        style={{ background: "var(--ink)", color: "var(--bg)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          {paused ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h4v14H7zM13 5h4v14h-4z" />}
        </svg>
      </button>
    </>
  );
}
