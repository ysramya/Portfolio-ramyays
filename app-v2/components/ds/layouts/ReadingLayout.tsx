import type { ReactNode } from "react";

/**
 * ReadingLayout — 720px, single column, centered.
 *
 * For sections that are deliberately narrow: a pacing beat, a short
 * personal note. Committing to a narrow max-width (not just a narrow
 * child inside a wide container) is what makes it read as an intentional
 * editorial pause rather than unfinished layout — use this sparingly, for
 * the 1-2 moments per page that should feel like a breath.
 */
export default function ReadingLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto px-6" style={{ maxWidth: "720px" }}>
        {children}
      </div>
    </section>
  );
}
