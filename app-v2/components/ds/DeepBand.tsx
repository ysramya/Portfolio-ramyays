import type { ReactNode } from "react";

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
  as: Tag = "section",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  shapes?: boolean;
  as?: "section" | "div" | "header";
}) {
  return (
    <Tag
      id={id}
      data-nav="dark"
      className={`theme-deep relative overflow-hidden ${className}`}
    >
      {shapes && (
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
