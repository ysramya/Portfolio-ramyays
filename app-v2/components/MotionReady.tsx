"use client";

/**
 * The one observer behind every scroll reveal on the site — motion spec §03/§04.
 *
 * Two safety rules drive the shape of this:
 *
 * 1. Content is never hidden by markup. The offset state lives behind
 *    `.motion-ready`, which only this component sets, so with JS disabled or
 *    broken nothing is ever displaced.
 * 2. Nothing stays offset. If the observer is unavailable, or a section is
 *    already on screen at mount, or anything goes wrong, every target is
 *    revealed immediately — and a backstop timer reveals the lot regardless.
 *    An earlier version of this site gated opacity on IntersectionObserver
 *    and rendered whole sections blank; the reveal here is transform-only for
 *    the same reason.
 *
 * Targets are picked up from existing structure — `.sec`, footer, and any
 * `[data-reveal]` — so case studies get reveals without touching their markup.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TARGETS = ".sec, footer, [data-reveal]";
/** Groups whose children stagger: cards, metric rows, step lists. */
const GROUPS = "[data-reveal-group]";
/**
 * Tier 2 product motion — ASAP's flow, behaviour machine, confidence and
 * unlock states; MainStreet's workflow and hierarchy. Each is observed
 * individually so it activates when it reaches the viewport, and each is
 * covered by the same backstop as everything else.
 */
const SEQUENCED =
  ".flow-step, .behaviour-step, .confidence-shot, .unlock-shot, .workflow-after, .hierarchy-layer";

export default function MotionReady() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(TARGETS),
    );
    const groups = Array.from(document.querySelectorAll<HTMLElement>(GROUPS));
    const sequenced = Array.from(document.querySelectorAll<HTMLElement>(SEQUENCED));

    const revealAll = () => {
      els.forEach((el) => {
        el.classList.add("reveal", "is-in");
      });
      groups.forEach((el) => el.classList.add("reveal-group", "is-in"));
      sequenced.forEach((el) => el.classList.add("is-in"));
    };

    if (reduced || typeof IntersectionObserver === "undefined") {
      revealAll();
      return () => root.classList.remove("motion-ready");
    }

    els.forEach((el) => el.classList.add("reveal"));
    groups.forEach((el) => el.classList.add("reveal-group"));
    // Sequenced elements carry their own class already; they only need `is-in`.

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      // ~18% of the section in view, per §03.
      { threshold: 0.18, rootMargin: "0px 0px -5% 0px" },
    );

    [...els, ...groups, ...sequenced].forEach((el) => io.observe(el));

    // Backstop: anything still offset after 2s is revealed, so a missed
    // callback can never leave content displaced.
    const backstop = window.setTimeout(revealAll, 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(backstop);
      window.clearTimeout(backstop);
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
