import type { Metadata } from "next";
import {
  Spotlight,
  Evidence,
  Gallery,
  FeatureReveal,
  Workshop,
  Quote,
  Metrics,
  Transition,
  NextProject,
} from "@/components/ds/editorial";
import { SplitLayout } from "@/components/ds";
import { tintedGlass } from "@/components/ds/tokens";
import { raahiTheme } from "./theme";

export const metadata: Metadata = {
  title: "Raahi — Ramya Yerramilli",
  description: "A browser plugin that catches dark and manipulative patterns on the web.",
};

const accent = raahiTheme.accent;

export default function RaahiPage() {
  return (
    <div style={{ backgroundColor: raahiTheme.secondary }}>
      <Spotlight
        eyebrow="Product Designer + Co-founder · 16 Weeks"
        title={
          <>
            Raahi
            <br />
            <span className="italic font-normal text-[0.4em] align-middle">
              Spot it. Fix it.
            </span>
          </>
        }
        image="/img/raahi/brand-splash.png"
        imageAlt="Raahi brand identity"
        accent={accent}
      />

      {/* Meta strip: intro text left, glass fact-panel right — a real
          two-column split instead of a lone narrow text block, using glass
          for metadata exactly as the liquid-glass guidance intends. */}
      <div className="wrap py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <p className="text-2xl md:text-3xl leading-snug max-w-[24ch]">
          A browser plugin that catches dark and manipulative patterns on
          the web.
        </p>
        <dl className="grid grid-cols-2 gap-3">
          {[
            { label: "Role", value: "Product Designer + Co-founder" },
            { label: "Duration", value: "16 Weeks" },
            { label: "Team", value: "Design · Engineering · Legal · Data Science" },
            { label: "Tools", value: "Figma · Miro · Forms · Notion" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl px-4 py-3" style={tintedGlass(accent, 0.06)}>
              <dt className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <SplitLayout
        eyebrow="The Problem"
        title="Dark patterns are everywhere. No one's watching for them."
        body="Raahi is an AI browser plugin that detects dark and manipulative patterns on any website, in real time."
        image="/img/raahi/research-framework.png"
        imageAlt="Research and workshop board mapping the problem"
        imageSide="right"
        accent={accent}
      />

      <Quote
        text="I know dark patterns when I see them — but I have no systematic way to document or prove it to a stakeholder."
        attribution="The insight that started it — senior UX practitioner, March 2025"
        accent={accent}
      />

      <Evidence
        title="Three problems. One practitioner. No tool."
        items={[
          {
            label: "01 · Scale — Everywhere",
            detail: "Dark patterns show up across nearly every category of website — most go unnoticed.",
          },
          {
            label: "02 · Speed — Invisible",
            detail: "Manipulation works because it's designed to go unnoticed in the moment it happens.",
          },
          {
            label: "03 · The Gap — No tool",
            detail: "Practitioners still rely on manual checklists and gut feel — nothing catches this automatically.",
          },
        ]}
        aside={{
          label: "The Stakes",
          text: "Everyone could describe the manipulation. No one had a consistent way to catch it.",
        }}
        accent={accent}
      />

      <Gallery
        images={[
          { src: "/img/raahi/survey-results.png", alt: "Survey results and taxonomy page", size: "large" },
          { src: "/img/raahi/design-workflow.png", alt: "Decision-making workshop board" },
          { src: "/img/raahi/product-specs.png", alt: "Product specs and brand board" },
        ]}
      />

      <SplitLayout
        eyebrow="Research"
        title="12 interviews. 57+ surveys. One shared vocabulary."
        body="Affinity mapping across 12 practitioner interviews and 57 survey responses — practitioners confirmed the problem and their intent to use a dedicated tool."
        image="/img/raahi/IMG_8875.jpg"
        imageAlt="Presenting practitioner research findings"
        imageSide="left"
        accent={accent}
      />

      <Quote
        text="I run into AI dark patterns constantly — I just have no consistent way to document them."
        attribution="What confirmed the bet — practitioner survey, Feb–Mar 2025"
        accent={accent}
      />
      <div className="wrap -mt-16 pb-8 flex justify-center">
        <p
          className="inline-block max-w-[60ch] text-center rounded-xl px-5 py-3 text-xs text-[var(--color-ink-faint)]"
          style={tintedGlass(accent, 0.05)}
        >
          Methodological limitation. Participants were self-selected
          through a university network — these figures are directional,
          not statistically representative.
        </p>
      </div>

      <Evidence
        title="What the data made undeniable."
        items={[
          {
            label: "Language was the missing infrastructure",
            detail: "\"Dark pattern\" meant something different to every practitioner in the room — detection couldn't scale without shared vocabulary first.",
          },
          {
            label: "Detection has to live in the browser",
            detail: "Practitioners review live sites in-browser — a tool has to live there too, or it doesn't get used.",
          },
          {
            label: "Practitioners already knew — they just couldn't prove it",
            detail: "Every interview surfaced the same gap: strong instinct, no proof a stakeholder would accept.",
          },
          {
            label: "Speed is the attack surface",
            detail: "Manipulation works because it's invisible in the moment — detection has to be just as fast.",
          },
          {
            label: "The lever is upstream",
            detail: "Arm the person reviewing before it ships, not the person encountering it after.",
          },
        ]}
        accent={accent}
      />

      <Workshop
        label="Decisions"
        images={[
          { src: "/img/raahi/IMG_8877.jpg", alt: "Testing decisions with practitioners" },
          { src: "/img/raahi/design-workflow.png", alt: "Decision workshop board" },
        ]}
        accent={accent}
      />

      <Evidence
        title="Three decisions, made on purpose. One we chose not to make."
        items={[
          {
            label: "Browser plugin, not standalone app",
            detail: "Practitioners work inside the browser — anything outside it doesn't get used.",
          },
          {
            label: "Practitioner-first, not end-user",
            detail: "One practitioner protects thousands of users downstream.",
          },
          {
            label: "A three-tier detection taxonomy",
            detail: "Coercive, Deceptive, Addictive — one shared vocabulary for every pattern Raahi flags.",
          },
        ]}
        aside={{
          label: "Rejected — a standalone review app",
          text: "Solved the same problem, but broke the in-browser workflow practitioners actually use.",
        }}
        accent={accent}
      />

      <FeatureReveal
        eyebrow="The Solution"
        title="Raahi, in the browser."
        body="Raahi's AI scans any site in real time and flags dark patterns as they appear. Every flag is logged against the taxonomy, one click turning a hunch into evidence ready for a stakeholder conversation."
        image="/img/raahi/product-specs.png"
        imageAlt="Raahi detection card and toolbar"
        accent={accent}
      />

      <Metrics
        hero={{ value: "78.9%", label: "of surveyed practitioners regularly encounter dark patterns" }}
        supporting={[
          { value: "57+", label: "Practitioners surveyed, US & India" },
          { value: "12", label: "In-depth interviews" },
          { value: "iD Lab", label: "Shark Tank — competitively funded" },
        ]}
        accent={accent}
      />

      <Transition label="Feb–Mar 2025 · Research — April 2025 · iD Lab Funded — May 2025 · Validated" accent={accent} />

      <SplitLayout
        eyebrow="Now"
        title="This project is becoming an academic research paper."
        body="I'm leading a team of five — a PhD student and three master's students — alongside two faculty advisors, studying how dark patterns emerge in generative AI. The study is in data collection now, targeting CHI 2027."
        image="/img/profile/ramya.jpg"
        imageAlt="Ramya Yerramilli"
        imageSide="right"
        accent={accent}
      />

      <NextProject
        href="/#work"
        label="Next Project"
        projectName="Wellnut"
        image="/img/wellnut/vr-session.jpg"
        imageAlt="Wellnut, a VR mental wellness companion"
        accent={accent}
      />
    </div>
  );
}
