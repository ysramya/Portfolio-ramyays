"use client";

import type { ReactNode } from "react";
import { trackClick } from "@/lib/analyticsClient";

/** Shared by the player and every "Watch the demo" button on the page. */
const DEMO_VIDEO_ID = "asap-demo-video";
const DEMO_SECTION_ID = "demo";

/**
 * The main product demo — a 65-second silent screen recording of the web
 * build, in a 16:9 frame. Native controls for keyboard and screen-reader
 * support.
 */
export function DemoVideo({ poster }: { poster: string }) {
  return (
    <div className="video-frame">
      <video
        id={DEMO_VIDEO_ID}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label="ASAP product demo: entering a goal, answering the AI's context questions, and working through the first step"
      >
        <source src="/video/asap-demo.mp4" type="video/mp4" />
        <p className="p-6 text-sm">
          Your browser can&rsquo;t play this video.{" "}
          <a className="underline" href="/video/asap-demo.mp4">
            Open the demo directly
          </a>
          .
        </p>
      </video>
    </div>
  );
}

/**
 * "Watch the demo" — scrolls to the player and starts it in the same click,
 * so the reader doesn't have to find the play button after landing. Falls
 * back to a plain `#demo` anchor if the player isn't on the page.
 */
export function WatchDemoButton({
  className = "btn btn-outline",
  children = "Watch the demo",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={`#${DEMO_SECTION_ID}`}
      className={className}
      onClick={(e) => {
        trackClick("Watch Demo");
        const section = document.getElementById(DEMO_SECTION_ID);
        const video = document.getElementById(DEMO_VIDEO_ID) as HTMLVideoElement | null;
        if (!section || !video) return;
        e.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        section.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        video.play().catch(() => {});
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M8 5.5v13a.75.75 0 0 0 1.14.64l10.4-6.5a.75.75 0 0 0 0-1.28L9.14 4.86A.75.75 0 0 0 8 5.5Z" />
      </svg>
      {children}
    </a>
  );
}
