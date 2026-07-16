"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/analytics");
      router.refresh();
    } else {
      setError(true);
    }
  }

  return (
    <main
      className="flex items-center justify-center px-6"
      style={{ minHeight: "100dvh", paddingTop: "var(--nav-h)" }}
    >
      <form onSubmit={handleSubmit} className="glass-strong w-full max-w-[380px] rounded-2xl p-8">
        <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-green)]">Admin</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-2xl text-[var(--color-ink)]">
          Analytics access
        </h1>

        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-6 w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-green)] transition-colors"
        />

        {error && <p className="mt-3 text-sm text-[#ff6b6b]">Incorrect password.</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-xl bg-[var(--color-green)] py-3 text-sm font-semibold tracking-[0.08em] uppercase text-black transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {loading ? "Checking…" : "Enter"}
        </button>
      </form>
    </main>
  );
}
