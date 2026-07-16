"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
      }}
      className="glass rounded-full px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
    >
      Log out
    </button>
  );
}
