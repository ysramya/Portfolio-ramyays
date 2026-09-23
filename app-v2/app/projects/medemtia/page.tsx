import type { Metadata } from "next";
import Link from "next/link";
import DeepBand from "@/components/ds/DeepBand";

/**
 * Medemtia — placeholder.
 *
 * Deliberately says nothing about the project beyond its name: there is no
 * brief, no imagery and no figures in the repo for it yet, and inventing a
 * description, a role or a timeline here would be worse than saying nothing.
 *
 * It is also intentionally absent from lib/projects.ts. That array drives the
 * homepage grid and the next-project chain, so adding it now would put an
 * image-less card on the homepage and reroute Invisible Impacts' closing band
 * into an empty page. The route is reachable by URL until there's something
 * to show.
 */

export const metadata: Metadata = {
  title: "Medemtia — Ramya Yerramilli",
  description: "A case study in progress.",
  robots: { index: false, follow: true },
};

export default function MedemtiaPage() {
  return (
    <DeepBand>
      <div
        className="wrap flex flex-col justify-center"
        style={{ minHeight: "100svh", paddingTop: "calc(var(--nav-h) + 48px)", paddingBottom: 72 }}
      >
        <p className="eyebrow eyebrow-rule">Case study · In progress</p>

        <h1 className="mt-5" style={{ fontSize: "clamp(52px, 6.4vw, 92px)", lineHeight: 0.98 }}>
          Medemtia
        </h1>

        <p
          className="mt-5 text-[clamp(20px,2.4vw,30px)] leading-[1.25] text-[var(--ink)]"
          style={{ maxWidth: "16em" }}
        >
          This one is still under construction.
        </p>

        <p className="lead mt-5" style={{ maxWidth: "34em" }}>
          The case study is being written. It will land here alongside the rest of the work.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/#work" className="btn">
            Back to projects <span aria-hidden>&#8594;</span>
          </Link>
          <a href="mailto:ys.ramya@gmail.com" className="btn btn-outline">
            Ask me about it
          </a>
        </div>
      </div>
    </DeepBand>
  );
}
