"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DottedTrailCursor from "@/components/ui/dotted-trail-cursor";

/**
 * Site-wide cursor trail: the dotted-trail shader in overlay mode (trail
 * only, no grid), fixed over the whole viewport so it shows on every page,
 * on ivory and on the deep-green bands alike. Held to 30% opacity so text
 * keeps its contrast. Decorative: no pointer events, hidden from assistive
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
      className="pointer-events-none fixed inset-0 z-30"
      style={{ opacity: 0.3 }}
    >
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
  );
}
