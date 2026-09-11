"use client";

/**
 * Design-system component: Footer — design-system.md §4.
 *
 * Left cluster: wordmark → 44px vertical divider → name + role stack.
 * Right cluster: 21px solid social icons at gap 22px → 24px divider →
 * location. Wraps on narrow viewports; padding 36px 32px 44px.
 *
 * It renders on every route now. The homepage used to close with its own
 * collage footer band and suppressed this one; that band is gone with the
 * collage system, so there's a single footer again.
 */

import Logo from "./Logo";
import { trackClick } from "@/lib/analyticsClient";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ramyays",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.46-2.2 2.96V21h-4V9Z",
  },
  {
    label: "Email",
    href: "mailto:ys.ramya@gmail.com",
    path: "M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 5.9-10-5.9v-.4Zm0 2.7V18.5A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5V8.2l-9.49 5.6a1 1 0 0 1-1.02 0L2 8.2Z",
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--rule)" }}>
      <div
        className="mx-auto flex flex-wrap items-center justify-between gap-x-10 gap-y-8"
        style={{ maxWidth: "var(--wrap-max)", padding: "36px var(--wrap-pad) 44px" }}
      >
        <div className="flex items-center gap-5">
          <Logo size={28} />
          <span aria-hidden style={{ width: 1, height: 44, background: "var(--divider)" }} />
          <div>
            <p className="text-[15px] text-[var(--ink)]">Ramya Yerramilli</p>
            <p className="mt-1 text-[13px] text-[var(--muted-2)]">
              Product designer &amp; UX researcher
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center" style={{ gap: 22 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener" : undefined}
                aria-label={s.label}
                onClick={() => trackClick(s.label)}
                className="transition-opacity hover:opacity-60"
              >
                <svg viewBox="0 0 24 24" className="icon-solid" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <span aria-hidden style={{ width: 1, height: 24, background: "var(--divider)" }} />
          <p className="text-[13px] text-[var(--muted-2)]">Chicago, IL</p>
        </div>
      </div>
    </footer>
  );
}
