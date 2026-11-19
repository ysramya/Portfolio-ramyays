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
      style={{ zIndex: -1, opacity: 0.68 }}
    >
      {/* Electric layer: a white-cyan core running out to saturated blue-violet */}
      <DottedTrailCursor
        transparent
        className="absolute inset-0 h-full"
        colorA="#eaf8ff"
        colorB="#4b4dff"
        headRadius={56}
        glowRadius={300}
        trailLength={30}
        followSpeed={0.32}
        tailTilt={0.7}
        edgeDesaturate={0.15}
        idleDelay={250}
        idleFade={1400}
      />
      {/* Gold layer: a tighter spark that lags behind, so gold flickers through the blue */}
      <DottedTrailCursor
        transparent
        className="absolute inset-0 h-full"
        colorA="#fff2c2"
        colorB="#f5b400"
        headRadius={34}
        glowRadius={150}
        trailLength={16}
        followSpeed={0.18}
        tailTilt={0.5}
        idleDelay={250}
        idleFade={1200}
      />
    </div>
  );
}
