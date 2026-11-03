import type { Metadata } from "next";
import DeepBand from "@/components/ds/DeepBand";
import { Section } from "@/components/ds/SectionHead";
import CaseStudyCard from "@/components/CaseStudyCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Case Studies | Ramya Yerramilli",
  description:
    "Five case studies in product strategy and operations: the business problem, my contribution, the decisions I influenced and the impact.",
};

/**
 * All case studies in one place. Each card follows the same structure, so a
 * recruiter can compare them at a glance before opening any one.
 */
export default function CaseStudiesPage() {
  return (
    <>
      <DeepBand ribbon>
        <div className="wrap" style={{ paddingTop: "calc(var(--nav-h) + 48px)", paddingBottom: 56 }}>
          <div className="hero-seq">
            <p className="eyebrow eyebrow-rule">Case Studies</p>
            <h1 className="mt-5" style={{ fontSize: "clamp(44px, 5vw, 72px)" }}>
              Five case studies
            </h1>
            <p className="lead mt-5" style={{ maxWidth: "36em" }}>
              Each one covers the <strong>business problem</strong>, what I did, the insight, the{" "}
              <strong>decisions I influenced</strong> and the <strong>impact</strong>. Where a project is a
              prototype, it says so.
            </p>
          </div>
        </div>
      </DeepBand>

      <Section id="case-studies" divided={false}>
        <ol className="flex flex-col gap-8" data-reveal-group>
          {projects.map((p, i) => (
            <li
              key={p.slug}
              className="p-4 sm:p-6"
              style={{ background: "var(--bg-raised)", border: "1px solid var(--border)", borderRadius: "calc(var(--radius) + 4px)" }}
            >
              <CaseStudyCard p={p} index={i} total={projects.length} />
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
