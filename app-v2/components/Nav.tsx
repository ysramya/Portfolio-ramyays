"use client";

/**
 * Design-system component: Navigation.
 * Global chrome, rendered once in app/layout.tsx.
 *
 * The nav reads which surface it's floating over. While it overlaps any
 * element marked `data-nav="dark"` (a DeepBand — page heroes and closings)
 * it takes the `.theme-deep` scope, which flips its tokens to ivory text on
 * deep green; over ivory content it's ink on ivory. The hairline appears
 * once the page has scrolled.
 *
 * On case studies the right-hand action is "Back to projects" rather than
 * "Get in touch", matching the reference.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { trackClick } from "@/lib/analyticsClient";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/beyond-the-screen", label: "Beyond the Screen" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCaseStudy = pathname?.startsWith("/projects/") ?? false;

  useEffect(() => {
    const probe = () => {
      setScrolled(window.scrollY > 40);
      // Sample the vertical middle of the nav bar against every dark band.
      const y = 38;
      let dark = false;
      document.querySelectorAll<HTMLElement>('[data-nav="dark"]').forEach((band) => {
        const r = band.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) dark = true;
      });
      setOnDark(dark);
    };
    probe();
    window.addEventListener("scroll", probe, { passive: true });
    window.addEventListener("resize", probe);
    return () => {
      window.removeEventListener("scroll", probe);
      window.removeEventListener("resize", probe);
    };
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 ${onDark ? "theme-deep" : ""}`}
      style={{
        /* §05 — the bar compacts and gains a hairline once scrolled, and
           restores near the top. Height and background are the only things
           that change; the bar is never hidden. */
        height: scrolled ? "calc(var(--nav-h) - 10px)" : "var(--nav-h)",
        backgroundColor: "var(--bg)",
        borderBottom: `1px solid ${scrolled || open ? "var(--rule)" : "transparent"}`,
        transition:
          "background-color 0.3s ease, border-color 0.3s ease, height var(--mo-standard) var(--mo-ease)",
      }}
    >
      <div className="wrap h-full flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Ramya Yerramilli — home">
          <Logo size={28} />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => {
              const active = !l.external && pathname?.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener" : undefined}
                    /* The resume is a static PDF, so Next's RSC prefetch has
                       no payload to fetch and 404s on every page load. */
                    prefetch={l.external ? false : undefined}
                    onClick={() => l.external && trackClick(l.label)}
                    data-active={active ? "true" : undefined}
                    className="nav-link text-[14px] hover:text-[var(--ink)]"
                    style={{ color: active ? "var(--ink)" : "var(--body)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {isCaseStudy ? (
          <Link href="/#work" className="btn btn-outline btn-sm hidden md:inline-flex">
            <span aria-hidden>&#8592;</span> Back to projects
          </Link>
        ) : (
          <a
            href="https://www.linkedin.com/in/ramyays"
            target="_blank"
            rel="noopener"
            onClick={() => trackClick("LinkedIn")}
            className="btn btn-sm hidden md:inline-flex"
          >
            Get in touch <span aria-hidden>&#8594;</span>
          </a>
        )}

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-[1.5px] w-[22px] bg-[var(--ink)] transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-[22px] bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-[22px] bg-[var(--ink)] transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden"
          style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--rule)" }}
        >
          <ul className="wrap flex flex-col py-3">
            {isCaseStudy && (
              <li>
                <Link
                  href="/#work"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-[var(--body)]"
                >
                  <span aria-hidden>&#8592;</span> Back to projects
                </Link>
              </li>
            )}
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener" : undefined}
                  prefetch={l.external ? false : undefined}
                  onClick={() => {
                    setOpen(false);
                    if (l.external) trackClick(l.label);
                  }}
                  className="block py-3 text-[15px] text-[var(--body)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-1">
              <a
                href="https://www.linkedin.com/in/ramyays"
                target="_blank"
                rel="noopener"
                onClick={() => {
                  setOpen(false);
                  trackClick("LinkedIn");
                }}
                className="btn btn-sm"
              >
                Get in touch <span aria-hidden>&#8594;</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
