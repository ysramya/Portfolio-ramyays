"use client";

/**
 * Data rain inside a page-opening band (DeepBand / the light hero of Cost of
 * a Click). Same engine as the site-wide backdrop, contained to the band and
 * recoloured for the ground it sits on. Desktop only, like the backdrop.
 */

import { useEffect, useState } from "react";
import DataRain from "@/components/ui/data-rain";

export function useWide(): boolean {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return wide;
}

const ON_DEEP = { calm: "#8fb5a3", mid: "#f2efe7", hot: "#c29a79" };
const ON_LIGHT = { calm: "#4d6559", mid: "#12271f", hot: "#a47e61" };

export default function HeroRain({ tone = "deep" }: { tone?: "deep" | "light" }) {
  const wide = useWide();
  if (!wide) return null;
  return (
    <DataRain
      fullscreen={false}
      palette={tone === "deep" ? ON_DEEP : ON_LIGHT}
      count={1400}
      flowSpeed={0.7}
      obstacleRadius={52}
      className={tone === "deep" ? "dr-root--deep" : "dr-root--light"}
    />
  );
}
