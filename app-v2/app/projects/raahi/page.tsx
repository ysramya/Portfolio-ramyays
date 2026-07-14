import type { Metadata } from "next";
import Link from "next/link";
import {
  HeroLayout,
  ReadingLayout,
  EditorialLayout,
  GalleryLayout,
  SplitLayout,
  FullBleedLayout,
} from "@/components/ds/layouts";
import { Quote, ImageFrame, MetricStat } from "@/components/ds/atoms";
import { tintedGlass } from "@/components/ds/tokens";
import { raahiTheme } from "./theme";

export const metadata: Metadata = {
  title: "Raahi — Ramya Yerramilli",
  description: "A browser plugin that catches dark and manipulative patterns on the web.",
};

const accent = raahiTheme.accent;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase" style={{ color: accent }}>
      {children}
    </p>
  );
}

function GlassNote({ label, text, style }: { label: string; text: string; style?: React.CSSProperties }) {
  return (
    <div className="rounded-2xl p-6" style={{ ...tintedGlass(accent, 0.06), ...style }}>
      <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-3 text-lg leading-relaxed">{text}</p>
    </div>
  );
}

export default function RaahiPage() {
  return (
    <div style={{ backgroundColor: raahiTheme.secondary }}>
      {/* 1 — Hero: full-bleed brand image, title overlaps the edge */}
      <HeroLayout image="/img/raahi/brand-splash.png" imageAlt="Raahi brand identity">
        <div>
          <span
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
            style={tintedGlass(accent)}
          >
            <span style={{ color: accent }}>Product Designer + Co-founder · 16 Weeks</span>
          </span>
          <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,9vw,7.5rem)] max-w-[16ch] md:-ml-1">
            Raahi
            <br />
            <span className="italic font-normal text-[0.4em] align-middle">Spot it. Fix it.</span>
          </h1>
        </div>
      </HeroLayout>

      {/* 2 — Meta strip: EditorialLayout, intro col 1-6, glass fact-grid col 8-13 */}
      <EditorialLayout>
        <p className="text-2xl md:text-3xl leading-snug max-w-[24ch]" style={{ gridColumn: "1 / 7" }}>
          A browser plugin that catches dark and manipulative patterns on
          the web.
        </p>
        <dl className="grid grid-cols-2 gap-3" style={{ gridColumn: "8 / 13" }}>
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
      </EditorialLayout>

      {/* 2.5 — Metrics: EditorialLayout, hero stat col 1-7, 2 supporting stacked col 9-13 */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 8" }}>
          <MetricStat size="hero" accent={accent} value="78.9%" label="of surveyed practitioners regularly encounter dark patterns" />
        </div>
        <div className="flex flex-col gap-8" style={{ gridColumn: "9 / 13", alignSelf: "end" }}>
          <MetricStat accent={accent} value="57+" label="Practitioners surveyed, US & India" />
          <MetricStat accent={accent} value="12" label="In-depth interviews" />
        </div>
      </EditorialLayout>

      {/* 3 — The Problem: Split, image narrower-left 5:7 */}
      <SplitLayout
        ratio={[5, 7]}
        left={
          <ImageFrame
            src="/img/raahi/research-framework.png"
            alt="Research and workshop board mapping the problem"
            aspect="2.23/1"
            objectFit="contain"
            style={{ maxWidth: "85%" }}
          />
        }
        right={
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight">
              Dark patterns are everywhere. No one&rsquo;s watching for them.
            </h3>
            <p className="mt-4 text-[var(--color-ink-muted)] text-lg leading-relaxed">
              Raahi is an AI browser plugin that detects dark and
              manipulative patterns on any website, in real time.
            </p>
          </div>
        }
      />

      {/* 4 — Insight quote: FullBleed, right-aligned, no image behind (dark surface only) */}
      <FullBleedLayout
        image="/img/raahi/product-specs.png"
        imageAlt=""
        imageOpacity={0.12}
        minHeight="50dvh"
        overlayClassName="items-center justify-items-end"
      >
        <Quote
          align="right"
          accent={accent}
          text="I know dark patterns when I see them — but I have no systematic way to document or prove it to a stakeholder."
          attribution="The insight that started it — senior UX practitioner, March 2025"
        />
      </FullBleedLayout>

      {/* 5 — Stakes: EditorialLayout, list col 1-7, glass aside col 8-13 */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 8" }}>
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[18ch]">
            Three problems. One practitioner. No tool.
          </h3>
          <ol className="mt-8 flex flex-col">
            {[
              { label: "01 · Scale — Everywhere", detail: "Dark patterns show up across nearly every category of website — most go unnoticed." },
              { label: "02 · Speed — Invisible", detail: "Manipulation works because it's designed to go unnoticed in the moment it happens." },
              { label: "03 · The Gap — No tool", detail: "Practitioners still rely on manual checklists and gut feel — nothing catches this automatically." },
            ].map((item) => (
              <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
                <p className="font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
          <GlassNote label="The Stakes" text="Everyone could describe the manipulation. No one had a consistent way to catch it." />
        </div>
      </EditorialLayout>

      {/* 6 — Research collage: GalleryLayout, large + two staggered/overlapping */}
      <GalleryLayout>
        <div style={{ gridColumn: "1 / 7" }}>
          <ImageFrame src="/img/raahi/survey-results.png" alt="Survey results and taxonomy page" aspect="1.87/1" objectFit="contain" />
        </div>
        <div style={{ gridColumn: "8 / 12" }}>
          <ImageFrame src="/img/raahi/design-workflow.png" alt="Decision-making workshop board" aspect="4/3" objectFit="contain" />
        </div>
        <div style={{ gridColumn: "6 / 10", marginTop: "-6%" }}>
          <ImageFrame src="/img/raahi/product-specs.png" alt="Product specs and brand board" aspect="0.83/1" objectFit="contain" />
        </div>
      </GalleryLayout>

      {/* 7 — Research: Split, reversed ratio 7:5, text left this time */}
      <SplitLayout
        ratio={[7, 5]}
        left={
          <div>
            <Eyebrow>Research</Eyebrow>
            <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight">
              12 interviews. 57+ surveys. One shared vocabulary.
            </h3>
            <p className="mt-4 text-[var(--color-ink-muted)] text-lg leading-relaxed">
              Affinity mapping across 12 practitioner interviews and 57
              survey responses — practitioners confirmed the problem and
              their intent to use a dedicated tool.
            </p>
          </div>
        }
        right={<ImageFrame src="/img/raahi/IMG_8875.jpg" alt="Presenting practitioner research findings" aspect="4/5" />}
      />

      {/* 8 — Survey quote + limitation: EditorialLayout, quote left, note beside it */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 9" }}>
          <Quote
            accent={accent}
            text="I run into AI dark patterns constantly — I just have no consistent way to document them."
            attribution="What confirmed the bet — practitioner survey, Feb–Mar 2025"
          />
        </div>
        <div style={{ gridColumn: "9 / 13", alignSelf: "end" }}>
          <GlassNote
            label="Methodological limitation"
            text="Participants were self-selected through a university network — these figures are directional, not statistically representative."
          />
        </div>
      </EditorialLayout>

      {/* 9 — What we learned: EditorialLayout, 5 items split into two columns */}
      <EditorialLayout>
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight" style={{ gridColumn: "1 / 13" }}>
          What the data made undeniable.
        </h3>
        <ol className="flex flex-col" style={{ gridColumn: "1 / 7" }}>
          {[
            { label: "Language was the missing infrastructure", detail: "\"Dark pattern\" meant something different to every practitioner in the room — detection couldn't scale without shared vocabulary first." },
            { label: "Detection has to live in the browser", detail: "Practitioners review live sites in-browser — a tool has to live there too, or it doesn't get used." },
            { label: "Practitioners already knew — they just couldn't prove it", detail: "Every interview surfaced the same gap: strong instinct, no proof a stakeholder would accept." },
          ].map((item) => (
            <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
              <p className="font-semibold">{item.label}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
        <ol className="flex flex-col" style={{ gridColumn: "7 / 13", alignSelf: "end" }}>
          {[
            { label: "Speed is the attack surface", detail: "Manipulation works because it's invisible in the moment — detection has to be just as fast." },
            { label: "The lever is upstream", detail: "Arm the person reviewing before it ships, not the person encountering it after." },
          ].map((item) => (
            <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
              <p className="font-semibold">{item.label}</p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ol>
      </EditorialLayout>

      {/* 10 — Decisions collage: GalleryLayout with rotation */}
      <GalleryLayout>
        <div style={{ gridColumn: "1 / 7" }}>
          <ImageFrame src="/img/raahi/IMG_8877.jpg" alt="Testing decisions with practitioners" aspect="4/5" rotate={-2} />
        </div>
        <div style={{ gridColumn: "8 / 13", marginTop: "10%" }}>
          <ImageFrame src="/img/raahi/design-workflow.png" alt="Decision workshop board" aspect="4/3" objectFit="contain" rotate={2} />
        </div>
      </GalleryLayout>

      {/* 11 — Decisions + rejected: EditorialLayout, list col 1-7, callout col 8-13 */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 8" }}>
          <h3 className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[20ch]">
            Three decisions, made on purpose. One we chose not to make.
          </h3>
          <ol className="mt-8 flex flex-col">
            {[
              { label: "Browser plugin, not standalone app", detail: "Practitioners work inside the browser — anything outside it doesn't get used." },
              { label: "Practitioner-first, not end-user", detail: "One practitioner protects thousands of users downstream." },
              { label: "A three-tier detection taxonomy", detail: "Coercive, Deceptive, Addictive — one shared vocabulary for every pattern Raahi flags." },
            ].map((item) => (
              <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
                <p className="font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
        <div style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
          <GlassNote
            label="Rejected — a standalone review app"
            text="Solved the same problem, but broke the in-browser workflow practitioners actually use."
          />
        </div>
      </EditorialLayout>

      {/* 12 — Solution: FullBleed, product screenshot near-edge, text overlay chip */}
      <FullBleedLayout
        image="/img/raahi/product-specs.png"
        imageAlt="Raahi detection card and toolbar"
        imageOpacity={1}
        minHeight="90dvh"
        overlayClassName="items-start justify-items-start"
      >
        <div className="max-w-[36ch] rounded-2xl p-6" style={tintedGlass(accent, 0.1)}>
          <Eyebrow>The Solution</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-[1.02]">
            Raahi, in the browser.
          </h3>
          <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
            Raahi&rsquo;s AI scans any site in real time and flags dark
            patterns as they appear. Every flag is logged against the
            taxonomy, one click turning a hunch into evidence ready for a
            stakeholder conversation.
          </p>
        </div>
      </FullBleedLayout>

      {/* 15 — Now: ReadingLayout, pure text, no image */}
      <ReadingLayout>
        <Eyebrow>Now</Eyebrow>
        <p className="mt-4 font-[family-name:var(--font-display)] italic font-medium leading-tight text-[clamp(1.6rem,3.4vw,2.6rem)]">
          This project is becoming an academic research paper.
        </p>
        <p className="mt-6 text-[var(--color-ink-muted)] text-lg leading-relaxed">
          I&rsquo;m leading a team of five — a PhD student and three
          master&rsquo;s students — alongside two faculty advisors,
          studying how dark patterns emerge in generative AI. The study is
          in data collection now, targeting CHI 2027.
        </p>
      </ReadingLayout>

      {/* 16 — Next project: FullBleed, centered overlay */}
      <FullBleedLayout
        image="/img/wellnut/vr-session.jpg"
        imageAlt="Wellnut, a VR mental wellness companion"
        imageOpacity={0.4}
        minHeight="60dvh"
        overlayClassName="items-center justify-items-center text-center"
      >
        <Link href="/#work" className="group">
          <span
            className="inline-flex rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6"
            style={tintedGlass(accent)}
          >
            <span style={{ color: accent }}>Next Project</span>
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
            Wellnut
            <span
              className="block h-[2px] w-0 group-hover:w-full mx-auto mt-4 transition-[width] duration-500 ease-out"
              style={{ backgroundColor: accent }}
            />
          </h2>
        </Link>
      </FullBleedLayout>
    </div>
  );
}
