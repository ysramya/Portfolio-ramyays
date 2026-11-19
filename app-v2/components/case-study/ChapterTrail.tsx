"use client";

import { useEffect, useState } from "react";

export type Chapter = { id: string; label: string };

/**
 * Fixed vertical project navigation: a thin dotted trail through small
 * chapter markers, the active one in gold, a small tent at the foot. Desktop
 * and tablet get the labelled rail; phones get a slim column of dots. The
 * chapter being read stays at full strength and the others dim. One IntersectionObserver tracks the
 * active chapter (no scroll listeners); links are plain in-page anchors.
 */
export default function ChapterTrail({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        // The chapter crossing the reading line (just above mid-screen) is active.
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-38% 0px -58% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  // Dim every chapter except the one being read.
  useEffect(() => {
    chapters.forEach((c) => document.getElementById(c.id)?.toggleAttribute("data-dim", c.id !== active));
  }, [active, chapters]);

  return (
    <>
      {/* Rail: wide screens */}
      <nav className="ct-rail" aria-label="Case study chapters">
        <ol>
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} aria-current={c.id === active ? "location" : undefined} onClick={() => setActive(c.id)}>
                <span className="ct-dot" aria-hidden="true" />
                <span className="ct-label">{c.label}</span>
              </a>
            </li>
          ))}
        </ol>
        <svg className="ct-scene" viewBox="0 0 150 80" aria-hidden="true" focusable="false">
          <path d="M20 66 52 28l32 38z M52 28v38 M52 66l-12-17M52 66l12-17 M30 66l22-27 M74 66 52 39" />
          <path d="M96 66V20M96 20l-12 16h6l-10 14h7l-9 12h36l-9-12h7l-10-14h6z" />
          <path d="M122 66V40M122 40l-8 11h4l-7 10h22l-7-10h4z" />
          <path d="M6 70c24-6 46-8 70-6 24-2 48 0 68 6" />
        </svg>
      </nav>

      {/* Dots: phones. A slim vertical rail on the left, no labels. */}
      <nav className="ct-dots" aria-label="Case study chapters">
        <ol>
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} aria-label={c.label} aria-current={c.id === active ? "location" : undefined} onClick={() => setActive(c.id)}>
                <span className="ct-dot" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
