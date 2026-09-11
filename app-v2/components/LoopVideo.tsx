"use client";

import { useEffect, useRef } from "react";

/**
 * LoopVideo — a short, silent, looping clip used in place of a GIF.
 *
 * An H.264 loop is a fraction of an equivalent GIF's weight (the ASAP
 * thumbnail is 410 KB for 8 seconds at 1080²), and unlike a GIF it can be
 * paused: anyone with reduced motion enabled gets the poster frame instead.
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

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) video.pause();
      else video.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
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
  );
}
