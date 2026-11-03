"use client";

/**
 * Homepage case-study picker: one tab per case study. Every panel is the same
 * card (components/CaseStudyCard.tsx), so only the content changes between
 * tabs. Order comes from lib/projects.ts.
 */

import CaseStudyCard from "@/components/CaseStudyCard";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import type { Project } from "@/lib/projects";

export default function ProjectTabs({ projects }: { projects: Project[] }) {
  return (
    <AnimatedTabs
      label="Case studies"
      tabs={projects.map((p, i) => ({
        id: p.slug,
        label: p.title,
        content: <CaseStudyCard p={p} index={i} total={projects.length} />,
      }))}
    />
  );
}
