import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Why this exists: the case-study-ending CTA, pointing to whatever comes
 * next so the reader keeps moving through the portfolio instead of
 * bouncing after one project. Generalized from the pattern already proven
 * in the Raahi case study's closing section.
 */
export default function NextProject({
  href,
  label,
  teaser,
}: {
  href: string;
  label: string;
  teaser: string;
}) {
  return (
    <Reveal className="wrap py-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10">
      <p className="italic text-[var(--color-ink-muted)] max-w-[52ch]">{teaser}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] text-black px-6 py-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-transform hover:-translate-y-0.5"
      >
        {label} →
      </Link>
    </Reveal>
  );
}
