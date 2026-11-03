"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { interests } from "./interests";

/**
 * Areas of interest as small buttons. Each opens a short card: why the topic
 * interests me, and where it shows up in the case studies. Hover or focus
 * shows it; a click or tap pins it open (needed on touch); Escape or a click
 * elsewhere closes it. The card flips to the right edge when it would
 * otherwise run off the screen.
 */
export default function InterestTags() {
  const uid = useId();
  const [hovered, setHovered] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const [alignRight, setAlignRight] = useState(false);
  const root = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setPinned(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinned(null);
        setHovered(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const show = (i: number, el: HTMLElement) => {
    setHovered(i);
    const rect = el.getBoundingClientRect();
    setAlignRight(rect.left + 336 > window.innerWidth - 16);
  };

  return (
    <ul ref={root} data-reveal-group className="flex flex-wrap gap-2.5 md:pt-2">
      {interests.map((item, i) => {
        const open = hovered === i || pinned === i;
        const panelId = `${uid}-interest-${i}`;
        return (
          <li
            key={item.tag}
            className="relative"
            onMouseEnter={(e) => show(i, e.currentTarget)}
            onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
          >
            <button
              type="button"
              className="pill cursor-pointer"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={(e) => {
                show(i, e.currentTarget);
                setPinned((p) => (p === i ? null : i));
              }}
              onFocus={(e) => show(i, e.currentTarget)}
              onBlur={(e) => {
                if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                  setHovered((h) => (h === i ? null : h));
                }
              }}
            >
              {item.tag}
            </button>

            {open && (
              <div
                id={panelId}
                role="group"
                aria-label={`${item.tag}: why it interests me and where it shows up`}
                className={`absolute top-full z-30 mt-2 ${alignRight ? "right-0" : "left-0"}`}
                style={{
                  width: "min(21rem, calc(100vw - 2rem))",
                  background: "var(--bg-raised)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: "var(--radius)",
                  padding: "16px 18px",
                }}
              >
                <p className="meta">Why I&rsquo;m interested</p>
                <p className="mt-1 text-[14px] leading-[1.6] text-[var(--ink)]">{item.why}</p>
                <p className="meta mt-3">Where it shows up</p>
                <p className="mt-1 text-[14px] leading-[1.6] text-[var(--body)]">{item.how}</p>
                {item.links && (
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
                    {item.links.map((l) => (
                      <Link key={l.href} href={l.href} className="underline underline-offset-2 text-[var(--ink)]">
                        {l.label} <span aria-hidden>&#8594;</span>
                      </Link>
                    ))}
                  </p>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
