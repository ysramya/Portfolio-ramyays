"use client";

/**
 * Site-wide ribbon-field ground, rendered once in app/layout.tsx. Fixed
 * behind the content, so it shows on the bare page ground between sections
 * while cards and deep bands sit on top. The palette follows the page's own
 * theme — ivory/sage by default, lavender for Wellnut, icy blue for Cost of
 * a Click — and ink text keeps its contrast on every step.
 */

import { usePathname } from "next/navigation";
import RibbonField from "@/components/ui/ribbon-field";
import { LIGHT_BLUE, LIGHT_IVORY, LIGHT_LAVENDER } from "@/components/ribbonPalettes";

export default function PageRibbon() {
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/admin")) return null;

  const colors = pathname.startsWith("/projects/wellnut")
    ? LIGHT_LAVENDER
    : pathname.startsWith("/projects/invisible-impacts")
      ? LIGHT_BLUE
      : LIGHT_IVORY;

  return (
    <div aria-hidden="true" className="page-ribbon">
      <RibbonField colors={colors} wave={24} />
      <div className="ribbon-grain absolute inset-0" />
    </div>
  );
}
