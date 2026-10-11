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
 * Targets are picked up from existing structure, so case studies get their
 * motion without per-section markup. What changed: this used to sweep every
 * `.sec`, which gave a 19-section case study nineteen identical entrances.
 * Reveals are now chosen by role — a figure arrives because it is the thing
 * being shown; a list sequences because it has an order; prose does neither,
 * because prose is already readable sitting still.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Generic reveal: the footer landing, plus anything that opts in. */
const TARGETS = "footer, [data-reveal]";
/**
 * Media — the payload of a case study. Gets the longer `reveal-media`
 * arrival rather than the generic rise.
 */
const MEDIA = "figure, [data-reveal-media]";
/** Groups whose children stagger: cards, metric rows, step lists. */
const GROUPS = "[data-reveal-group]";
/**
 * Section heads — numeral and title, not the section body. Reinstated at
 * Ramya's request after the blanket `.sec` reveal was removed; scoped to
 * the head so each section gets one beat rather than a block shunting up.
 */
const HEADS = ".sec-head";
/** Hero visuals run their own on-load entrance; keep scroll reveals off them. */
const HERO = ".hero-visual";
/**
 * Everything that plays an on-load hero animation. These use keyframes with
 * `fill-mode: both`, and the text ones fade up from opacity 0 — so a paused
 * animation (a page opened in a background tab, a headless renderer) would
 * hold a headline invisible. The backstop below finishes them outright.
 */
const HERO_ANIMATED =
  ".hero-seq > *, .hero-visual, .hero-fan-l, .hero-fan-r, .hero-settle img";
/**
 * The longest hero sequence (the photo settle: 450ms delay + 1400ms) ends
 * at 1.85s, so in a visible tab this never cuts anything short.
 */
const HERO_BACKSTOP_MS = 2500;
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

    // A figure inside a staggered group or a Tier 2 sequence is already
    // being animated by its parent; animating it twice fights itself.
    const media = Array.from(
      document.querySelectorAll<HTMLElement>(MEDIA),
    ).filter((el) => !el.closest(`${GROUPS}, ${SEQUENCED}, ${HERO}`));
    const heads = Array.from(document.querySelectorAll<HTMLElement>(HEADS));

    const revealAll = () => {
      els.forEach((el) => {
        el.classList.add("reveal", "is-in");
      });
      media.forEach((el) => el.classList.add("reveal-media", "is-in"));
      heads.forEach((el) => el.classList.add("reveal-head", "is-in"));
      groups.forEach((el) => el.classList.add("reveal-group", "is-in"));
      sequenced.forEach((el) => el.classList.add("is-in"));
    };

    // Hero backstop — runs whatever else happens below, reduced motion
    // included (where the animations are already off, and this is a no-op).
    const finishHeroes = () => {
      document.querySelectorAll<HTMLElement>(HERO_ANIMATED).forEach((el) => {
        el.getAnimations().forEach((a) => {
          try {
            a.finish();
          } catch {
            // An animation that can't finish (none today) is left alone.
          }
        });
      });
    };
    const heroBackstop = window.setTimeout(finishHeroes, HERO_BACKSTOP_MS);

    if (reduced || typeof IntersectionObserver === "undefined") {
      revealAll();
      return () => {
        window.clearTimeout(heroBackstop);
        root.classList.remove("motion-ready");
      };
    }

    els.forEach((el) => el.classList.add("reveal"));
    media.forEach((el) => el.classList.add("reveal-media"));
    heads.forEach((el) => el.classList.add("reveal-head"));
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

    [...els, ...media, ...heads, ...groups, ...sequenced].forEach((el) => io.observe(el));

    // Backstop: anything still offset after 2s is revealed, so a missed
    // callback can never leave content displaced.
    const backstop = window.setTimeout(revealAll, 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(backstop);
      window.clearTimeout(heroBackstop);
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
