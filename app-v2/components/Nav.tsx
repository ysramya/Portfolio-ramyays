"use client";

/**
 * Design-system component: Navigation.
 * Why this exists: global chrome, rendered once in app/layout.tsx — every
 * page shares it, so case studies never redefine navigation. Transparent
 * over a hero, glass-nav once scrolled or the mobile menu is open. Lives
 * outside components/ds/ (rather than duplicated in there) because it's
 * wired to the real site's routes and layout, not a standalone primitive —
 * see components/ds/README.md for how it fits the catalog.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/#work", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default function Nav({ hasLogo }: { hasLogo: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass-nav border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="wrap h-full flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo hasLogo={hasLogo} />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => {
              const active = !l.external && pathname?.startsWith(l.href);
              return (
                <li key={l.href} className="flex flex-col items-center gap-1.5">
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener" : undefined}
                    className={`text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors hover:text-[var(--color-green)] ${
                      active ? "text-[var(--color-ink)]" : "text-[var(--color-ink-muted)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                  <span
                    className={`w-1 h-1 rounded-full bg-[var(--color-green)] transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="https://www.linkedin.com/in/ramyays"
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-5 py-2 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-black transition-transform hover:-translate-y-0.5"
        >
          Contact ↗
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-[1.5px] w-[22px] bg-[var(--color-ink)] transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-[22px] bg-[var(--color-ink)] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-[22px] bg-[var(--color-ink)] transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="md:hidden glass-nav border-t border-white/10">
          <ul className="wrap flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold tracking-[0.1em] uppercase text-[var(--color-ink)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/ramyays"
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-semibold tracking-[0.1em] uppercase text-[var(--color-green)]"
              >
                Contact ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
