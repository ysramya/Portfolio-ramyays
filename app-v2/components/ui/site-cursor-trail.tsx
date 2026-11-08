"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DottedTrailCursor from "@/components/ui/dotted-trail-cursor";

/**
 * Site-wide cursor trail: the dotted-trail shader in overlay mode (trail
 * only, no grid), fixed behind the page content, so photos, cards and text sit
 * on top of it and are never tinted. It shows on the open ground of every
 * page; the hero draws its own over the wave. Opacity is capped so the
 * small grey labels keep their contrast. Decorative: no pointer events, hidden from assistive
 * tech, and only for a real pointer with motion welcome.
 */
export default function SiteCursorTrail() {
  const pathname = usePathname() ?? "/";
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setOn(fine.matches && !calm.matches);
    apply();
    fine.addEventListener("change", apply);
    calm.addEventListener("change", apply);
    return () => {
      fine.removeEventListener("change", apply);
      calm.removeEventListener("change", apply);
    };
  }, []);

  if (!on || pathname.startsWith("/admin")) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1, opacity: 0.7 }}
    >
      <DottedTrailCursor
        transparent
        className="h-full"
        colorA="#5a9c82"
        colorB="#3a7a64"
        headRadius={70}
        glowRadius={260}
        trailLength={20}
        idleDelay={250}
        idleFade={1400}
      />
    </div>
  );
}
