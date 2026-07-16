"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackClick } from "@/lib/analyticsClient";

/** A plain <a> that fires a click event before navigating — for tracked CTAs on server-component pages (e.g. a case study's "Live Prototype" link). */
export default function TrackedLink({
  label,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { label: string }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackClick(label);
        onClick?.(e);
      }}
    />
  );
}
