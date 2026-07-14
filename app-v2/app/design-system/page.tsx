import type { Metadata } from "next";
import {
  Hero,
  EditorialStatement,
  SplitLayout,
  FeatureShowcase,
  Gallery,
  ImageGrid,
  ResearchGallery,
  InsightCards,
  Metrics,
  FloatingQuote,
  BehindTheBuild,
  NextProject,
  GlassCard,
} from "@/components/ds";

export const metadata: Metadata = {
  title: "Design System — internal reference",
  robots: { index: false, follow: false },
};

/**
 * Internal QA / visual reference only — not a case-study page. Renders
 * every components/ds/* component with real project assets (no fabricated
 * content) so the system can be checked end-to-end in the browser. Safe
 * to delete once the design system is verified; not linked from any nav.
 */
export default function DesignSystemPage() {
  return (
    <div>
      <Hero
        badge="iD Lab Shark Tank · Competitively Funded · 2025"
        title="Design system reference: Hero"
        intro="Every field below is real Raahi content, reused to verify the component renders correctly — not fabricated copy."
        meta={[
          { label: "Role", value: "Product Designer + Co-founder" },
          { label: "Duration", value: "16 weeks" },
        ]}
        image="/img/raahi/brand-splash.png"
        imageAlt="Raahi brand identity"
      />

      <EditorialStatement
        eyebrow="How Might We"
        statement="How might we give UX practitioners a reliable, systematic tool to detect AI-generated dark patterns before harmful designs ship?"
      />

      <SplitLayout
        eyebrow="The Format"
        title="Browser toolbar, not a standalone app"
        body="Practitioners review live products inside the browser — a toolbar embeds directly into the workflow with zero context-switching."
        image="/img/raahi/design-workflow.png"
        imageAlt="Raahi design workflow"
        imageSide="left"
      />
      <SplitLayout
        eyebrow="The Audience"
        title="Practitioner-first, not end-user"
        body="Arming practitioners to catch dark patterns upstream scales the impact — one practitioner protects thousands of users."
        image="/img/raahi/product-specs.png"
        imageAlt="Raahi product specs"
        imageSide="right"
        accent="var(--color-yellow)"
      />

      <FeatureShowcase
        eyebrow="The Solution"
        title="From insight to shipped product"
        body="Raahi detects, categorizes, and surfaces AI-generated dark patterns in real time, with one-click reporting."
        image="/img/raahi/brand-splash.png"
        imageAlt="Raahi shipped product"
      />

      <Gallery
        items={[
          { src: "/img/raahi/IMG_8875.jpg", alt: "Shark Tank pitch", caption: "iD Lab Shark Tank pitch", wide: true },
          { src: "/img/raahi/research-framework.png", alt: "Research framework", caption: "Affinity mapping across 12 interviews" },
          { src: "/img/raahi/survey-results.png", alt: "Survey results", caption: "57-respondent validation survey" },
        ]}
      />

      <ImageGrid
        columns={3}
        images={[
          { src: "/img/asap/phone-mockup.png", alt: "ASAP" },
          { src: "/img/wellnut/brand-poster.png", alt: "Wellnut" },
          { src: "/img/mainstreet/laptop-mockup.png", alt: "PM Dashboard" },
        ]}
      />

      <ResearchGallery
        method="Practitioner Interviews · Feb–Mar 2025"
        items={[
          { src: "/img/raahi/research-framework.png", alt: "Research framework", caption: "12 interviews, affinity mapped" },
          { src: "/img/raahi/survey-results.png", alt: "Survey results", caption: "57 practitioners surveyed" },
        ]}
      />

      <InsightCards
        cards={[
          {
            label: "Recruitment",
            title: "How participants were found",
            body: "Recruited through DePaul's participant pool, flyers, and word of mouth in UX practitioner communities.",
          },
          {
            label: "Interviews",
            title: "What I was trying to understand",
            body: "Do practitioners consciously weigh dark patterns when smoothing UX flows?",
          },
          {
            label: "Survey",
            title: "Confirming the problem at scale",
            body: "78.9% confirmed regularly encountering AI-generated dark patterns.",
          },
        ]}
      />

      <Metrics
        stats={[
          { value: "16", label: "Weeks", desc: "Jan–May 2025" },
          { value: "57+", label: "Practitioners Surveyed", desc: "US and India" },
          { value: "iD Lab", label: "Shark Tank Winner", desc: "Competitively funded" },
        ]}
      />

      <FloatingQuote
        text="I know dark patterns when I see them — but I have no systematic way to document or prove it to a stakeholder."
        attribution="The insight that started it — senior UX practitioner, March 2025"
      />

      <BehindTheBuild
        title="Behind the build"
        steps={[
          {
            label: "Discover",
            body: "Literature review and problem framing before talking to anyone.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <circle cx="12" cy="12" r="8" />
              </svg>
            ),
          },
          {
            label: "Define",
            body: "12 interviews and a 57-person survey run in parallel.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
              </svg>
            ),
          },
          {
            label: "Frame",
            body: "Synthesis into a three-tier detection taxonomy.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
              </svg>
            ),
          },
          {
            label: "Ship",
            body: "Toolbar UI, brand identity, and practitioner validation.",
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <circle cx="9" cy="8" r="3" />
                <path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
              </svg>
            ),
          },
        ]}
      />

      <div className="wrap py-8">
        <GlassCard className="p-6 max-w-md">
          <p className="text-sm text-[var(--color-ink-muted)]">
            Raw GlassCard — for one-off content that doesn&rsquo;t warrant a
            bespoke component.
          </p>
        </GlassCard>
      </div>

      <NextProject
        href="/projects/raahi"
        label="View Raahi"
        teaser="Next project: the real Raahi case study, built from these same components."
      />
    </div>
  );
}
