"use client";

/**
 * Site-wide data-rain, rendered once in app/layout.tsx right after the ribbon
 * ground, so the lines fall over the ribbons and under the content. Like the
 * ribbon it only shows on the bare page ground between sections — cards and
 * deep bands sit on top, and those bands carry their own rain (HeroRain).
 *
 * The palette follows the page's theme, the same way PageRibbon's does. Left
 * out of the admin pages and below the md breakpoint, where a full-viewport
 * canvas costs more battery than it gives back.
 */

import { usePathname } from "next/navigation";
import DataRain from "@/components/ui/data-rain";
import { useWide } from "@/components/HeroRain";

const DEFAULT = { calm: "#4d6559", mid: "#12271f", hot: "#a47e61" };
const WELLNUT = { calm: "#6b5a99", mid: "#241a3d", hot: "#a778c0" };
const COAC = { calm: "#4b7099", mid: "#123a5c", hot: "#5b8fc0" };

export default function DataRainBackground() {
  const pathname = usePathname() ?? "/";
  const wide = useWide();

  if (!wide || pathname.startsWith("/admin")) return null;

  const palette = pathname.startsWith("/projects/wellnut")
    ? WELLNUT
    : pathname.startsWith("/projects/invisible-impacts")
      ? COAC
      : DEFAULT;

  return <DataRain palette={palette} count={1800} flowSpeed={0.7} obstacleRadius={56} />;
}
