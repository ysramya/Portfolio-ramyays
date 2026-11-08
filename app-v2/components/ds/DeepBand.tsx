import type { ReactNode } from "react";
import DottedTrailCursor from "@/components/ui/dotted-trail-cursor";
import RibbonField from "@/components/ui/ribbon-field";
import { DEEP_GREEN } from "@/components/ribbonPalettes";


/**
 * DeepBand — the deep-green ground used for page openings and closings.
 *
 * It applies `.theme-deep`, which re-defines the colour tokens, so whatever
 * is placed inside (headings, `.btn`, panels, tags) renders ivory-on-green
 * without a dark variant of its own. `data-nav="dark"` lets the fixed nav
 * detect that it's sitting over this band and switch to light text.
 *
 * The two large leaf shapes are flat fills a shade lighter than the ground —
 * the reference's organic texture, done without gradients or blur.
 */
export default function DeepBand({
  children,
  id,
  className = "",
  shapes = true,
  ribbon = false,
  as: Tag = "section",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  shapes?: boolean;
  /** Animated ribbon-field gradient as the band ground (replaces the leaf shapes). Pass a palette to match a themed page; `true` uses deep green. */
  ribbon?: boolean | string[];
  as?: "section" | "div" | "header";
}) {
  return (
    <Tag
      id={id}
      data-nav="dark"
      className={`theme-deep relative overflow-hidden ${className}`}
    >
      {ribbon && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <RibbonField colors={Array.isArray(ribbon) ? ribbon : DEEP_GREEN} />
          <div className="ribbon-grain absolute inset-0" />
          <div className="absolute inset-0">
            <DottedTrailCursor
              transparent
              className="h-full"
              colorA="#7fb89a"
              colorB="#4f8f78"
              headRadius={70}
              glowRadius={260}
              trailLength={20}
              idleDelay={250}
              idleFade={1400}
            />
          </div>
        </div>
      )}
      {shapes && !ribbon && (
        <svg
          aria-hidden="true"
          focusable="false"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M1080 -60 C 1260 40 1470 170 1460 430 C 1452 620 1330 760 1190 960 L 1500 960 L 1500 -60 Z"
            fill="var(--deep-3)"
          />
          <path
            d="M-80 620 C 70 560 250 620 330 760 C 380 850 360 930 330 980 L -80 980 Z"
            fill="var(--deep-3)"
          />
        </svg>
      )}
      <div className="relative">{children}</div>
    </Tag>
  );
}
