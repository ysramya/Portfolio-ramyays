import type { Metadata } from "next";
import {
  Spotlight,
  Narrative,
  Evidence,
  Gallery,
  FeatureReveal,
  Workshop,
  Quote,
  Metrics,
  Transition,
  NextProject,
} from "@/components/ds/editorial";
import { raahiTheme } from "@/app/projects/raahi/theme";

export const metadata: Metadata = {
  title: "Editorial Blocks — internal reference",
  robots: { index: false, follow: false },
};

/**
 * Internal QA checkpoint — every Editorial Block, themed with Raahi's real
 * extracted colors and real assets, before committing to the full case
 * study composition. Not linked from nav; safe to delete once verified.
 */
export default function EditorialCheckpointPage() {
  const accent = raahiTheme.accent;

  return (
    <div style={{ backgroundColor: raahiTheme.secondary }}>
      <Spotlight
        eyebrow="Checkpoint · Spotlight"
        title="Editorial block reference"
        image="/img/raahi/brand-splash.png"
        imageAlt="Raahi brand identity"
        accent={accent}
      />

      <Narrative
        chapter="Checkpoint · Narrative"
        pullLine="A pull-line sits here, large and italic, carrying the chapter's thesis."
        body="Supporting body copy follows at a comfortable reading measure, offset from center to avoid a static, templated column."
        accent={accent}
      />

      <Evidence
        title="Evidence block reference"
        items={[
          { label: "Time Consuming", detail: "Manual review of every screen takes too long for sprint pace." },
          { label: "Missed Opportunities", detail: "Subtle patterns get missed during early UX feedback." },
        ]}
        aside={{ label: "Supporting stat", text: "A glass callout can hold one supporting figure or quote fragment." }}
        accent={accent}
      />

      <Gallery
        images={[
          { src: "/img/raahi/research-framework.png", alt: "Research framework board", size: "large" },
          { src: "/img/raahi/survey-results.png", alt: "Survey results page" },
          { src: "/img/raahi/product-specs.png", alt: "Product specs board" },
        ]}
      />

      <FeatureReveal
        eyebrow="Checkpoint · Feature Reveal"
        title="The shipped product, spotlighted"
        body="One real screen, framed and scaled to break its column slightly."
        image="/img/raahi/product-specs.png"
        imageAlt="Raahi product card and toolbar spec"
        accent={accent}
      />

      <Workshop
        label="Checkpoint · Workshop"
        images={[
          { src: "/img/raahi/research-framework.png", alt: "Workshop board" },
          { src: "/img/raahi/IMG_8875.jpg", alt: "Shark Tank pitch" },
        ]}
        accent={accent}
      />

      <Quote
        text="A pull-quote at magazine scale, escaping the grid on purpose."
        attribution="Attribution line — internal reference only"
        accent={accent}
      />

      <Metrics
        hero={{ value: "16", label: "Weeks" }}
        supporting={[
          { value: "57+", label: "Surveyed" },
          { value: "iD Lab", label: "Funded" },
        ]}
        accent={accent}
      />

      <Transition label="Checkpoint · Transition" accent={accent} />

      <NextProject
        href="/design-system"
        label="Next"
        projectName="Design System"
        image="/img/wellnut/vr-session.jpg"
        imageAlt="Next project preview"
        accent={accent}
      />
    </div>
  );
}
