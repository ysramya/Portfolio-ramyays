"use client";

/**
 * A sticky "Next project" tab on the right edge of every case-study page, so
 * the next one is always one click away. The order is the one in lib/projects.
 * Renders nothing on pages that aren't one of those projects.
 */
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/lib/projects";

export default function NextProjectFab() {
  const pathname = usePathname() ?? "";
  const m = pathname.match(/^\/projects\/([^/]+)/);
  const idx = m ? projects.findIndex((p) => p.slug === m[1]) : -1;
  const active = idx !== -1;

  // Lets the page CSS leave room for the tab (gutter on desktop, bottom padding on phones).
  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add("has-next-fab");
    return () => document.documentElement.classList.remove("has-next-fab");
  }, [active]);

  if (!active) return null;
  const next = projects[(idx + 1) % projects.length];

  return (
    <Link href={`/projects/${next.slug}`} className="next-fab" aria-label={`Next project: ${next.title}`}>
      <span className="next-fab-text">
        <span className="next-fab-label">Next project</span>
        <span className="next-fab-title">{next.title}</span>
      </span>
      <span className="next-fab-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
