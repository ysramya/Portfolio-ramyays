/**
 * Design-system component: Footer.
 * Why this exists: global chrome, rendered once in app/layout.tsx. Same
 * reasoning as Nav.tsx — wired to real routes/contact links rather than a
 * standalone primitive, documented here rather than duplicated under
 * components/ds/. See components/ds/README.md for the full catalog.
 */

import Logo from "./Logo";

export default function Footer({ hasLogo }: { hasLogo: boolean }) {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="wrap flex flex-wrap items-center justify-between gap-8">
        <div>
          <Logo hasLogo={hasLogo} className="text-xl font-[family-name:var(--font-display)] font-semibold" />
          <p className="mt-2 text-sm text-[var(--color-ink-muted)] max-w-[340px]">
            Creating thoughtful experiences through research, systems
            thinking, and human-centered AI.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3">
          <p className="text-xs text-[var(--color-ink-faint)]">Let&rsquo;s connect</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ramyays"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="glass w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-green)]"
            >
              in
            </a>
            <a
              href="mailto:ys.ramya@gmail.com"
              aria-label="Email"
              className="glass w-9 h-9 rounded-full flex items-center justify-center text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-yellow)]"
            >
              ✉
            </a>
          </div>
        </div>
      </div>

      <div className="wrap mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--color-ink-faint)]">
        <div className="flex items-center gap-3">
          <Logo hasLogo={hasLogo} className="text-sm font-[family-name:var(--font-display)] font-semibold" imageClassName="w-7 h-7 rounded-md object-cover" />
          <span>© {new Date().getFullYear()} Ramya Yerramilli. All rights reserved.</span>
        </div>
        <a
          href="#top"
          className="glass w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:text-[var(--color-green)]"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}
