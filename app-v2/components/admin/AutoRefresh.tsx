"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EVERY_MS = 30_000;

const clock = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" });

/** Re-runs the server component every 30s while the tab is visible. */
export default function AutoRefresh() {
  const router = useRouter();
  const [updated, setUpdated] = useState<string | null>(null);

  useEffect(() => {
    const refresh = () => {
      if (document.hidden) return;
      router.refresh();
      setUpdated(clock());
    };
    const id = setInterval(refresh, EVERY_MS);
    // Catch up straight away when returning to a tab that sat in the background.
    document.addEventListener("visibilitychange", refresh);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [router]);

  return (
    <p className="flex items-center gap-2 text-xs text-[var(--color-ink-faint)]">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]" aria-hidden />
      Refreshes every 30s{updated ? ` · updated ${updated}` : ""}
    </p>
  );
}
