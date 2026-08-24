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

/** One of the four "My Contributions" cards — same glass surface as GlassNote, list body instead of a paragraph. */
function ContributionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl p-6 h-full" style={tintedGlass(accent, 0.06)}>
      <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase" style={{ color: accent }}>
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A labelled rationale block nested inside a decision list item (the "Why this decision?" / "Tradeoff" pairs). */
function DecisionNote({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <p className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-1.5 text-sm text-[var(--color-ink-muted)] leading-relaxed">{children}</p>
    </div>
  );
}

/** The four-step progression for a change the research forced. Arrows are decorative, hence aria-hidden. */
function IterationFlow({
  assumption,
  finding,
  change,
  outcome,
}: {
  assumption: string;
  finding: string;
  change: string;
  outcome: string;
}) {
  const steps = [
    { label: "Original assumption", text: assumption },
    { label: "Research finding", text: finding },
    { label: "Design change", text: change },
    { label: "Final outcome", text: outcome },
  ];
  return (
    <div className="rounded-2xl p-6" style={tintedGlass(accent, 0.06)}>
      {steps.map((step, i) => (
        <div key={step.label}>
          <p className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase" style={{ color: accent }}>
            {step.label}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed">{step.text}</p>
          {i < steps.length - 1 && (
            <p className="my-3 text-lg leading-none text-[var(--color-ink-faint)]" aria-hidden>
              ↓
            </p>
          )}
        </div>
      ))}
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

      {/* 2.2 — My Contributions: four cards, what I personally owned on a cross-functional founding team */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>My Contributions</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[20ch]">
            What I owned.
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <ContributionCard
              title="Research"
              items={[
                "Conducted 12 in-depth interviews with UX practitioners across the US and India.",
                "Designed and fielded the practitioner survey that reached 57+ respondents (Feb–Mar 2025).",
                "Synthesized both datasets through affinity mapping into the five findings this project runs on.",
                "Documented the study's sampling limitation rather than presenting the numbers as representative.",
              ]}
            />
            <ContributionCard
              title="Product Strategy"
              items={[
                "Scoped the product to practitioners rather than end users — one reviewer protects thousands of users downstream.",
                "Prioritized in-browser detection over a standalone review app, and recorded why the alternative was rejected.",
                "Defined the three-tier taxonomy — Coercive, Deceptive, Addictive — as the product's shared vocabulary.",
                "Translated the \"strong instinct, no proof\" finding into the flag-as-evidence workflow.",
              ]}
            />
            <ContributionCard
              title="Design"
              items={[
                "Designed the in-browser detection card and toolbar that surface flags on a live site.",
                "Designed the flag-to-evidence flow: one click logs a pattern against the taxonomy.",
                "Built the taxonomy into the information architecture for how every flag is classified.",
                "Produced the brand identity and product specs the team designed and prototyped against.",
              ]}
            />
            <ContributionCard
              title="Collaboration"
              items={[
                "Worked on a cross-functional founding team spanning design, engineering, legal, and data science.",
                "Facilitated the decision workshops where scope and taxonomy were tested with practitioners.",
                "Presented research findings back to practitioners to validate the direction before building.",
                "Now leading a team of five, with two faculty advisors, on the follow-on academic study.",
              ]}
            />
          </div>
        </div>
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
              I affinity-mapped 12 practitioner interviews against 57 survey
              responses — practitioners confirmed the problem and their
              intent to use a dedicated tool.
            </p>

            <div className="mt-8">
              <Eyebrow>How this changed the product</Eyebrow>
              <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
                Confirming intent to use a tool wasn&rsquo;t the useful part —
                who would use it was. Practitioners described reviewing live
                sites and catching manipulation they couldn&rsquo;t prove,
                which pointed the product at the reviewer rather than the
                person being manipulated. That set the scope before anything
                was designed: practitioner-first, in the browser, built to
                produce evidence. Every decision in the Decisions section
                follows from that scope.
              </p>
            </div>
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

        <div className="mt-10" style={{ gridColumn: "1 / 9" }}>
          <Eyebrow>How this changed the product</Eyebrow>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed">
            Each finding resolved into a specific decision rather than a
            general principle. That &ldquo;dark pattern&rdquo; meant something
            different to every practitioner made shared vocabulary the first
            thing to build, not a detail to settle later — so the three-tier
            taxonomy became the product&rsquo;s backbone and the thing every
            flag resolves to. That practitioners work in-browser ruled out a
            standalone app and made the plugin the only form that would get
            used. That they already knew but couldn&rsquo;t prove it turned
            detection into documentation: flagging alone wasn&rsquo;t enough,
            so every flag had to log as evidence. Prioritization followed the
            same order — vocabulary first, because without it nothing
            downstream could be classified consistently.
          </p>
        </div>
      </EditorialLayout>

      {/* 9.5 — How the design evolved: the two progressions the research forced */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>How the design evolved</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[22ch]">
            Two things research changed my mind about.
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <IterationFlow
              assumption="A standalone review app where practitioners could document the patterns they found."
              finding="Practitioners review live sites inside the browser — a tool that lives anywhere else doesn't get used."
              change="Moved detection into a browser plugin and rejected the standalone app, even though it solved the same problem."
              outcome="The prototype runs where the review already happens, flagging patterns on the live site in real time."
            />
            <IterationFlow
              assumption="“Dark pattern” was a term practitioners already shared."
              finding="It meant something different to every practitioner interviewed — there was no common vocabulary to detect against."
              change="Defined a three-tier taxonomy — Coercive, Deceptive, Addictive — before building detection on top of it."
              outcome="Every flag the prototype raises resolves to the same shared label, which is what makes it defensible to a stakeholder."
            />
          </div>
        </div>
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
              {
                label: "Browser plugin, not standalone app",
                detail: "Practitioners work inside the browser — anything outside it doesn't get used.",
                why: "Interviews put practitioners on live sites, reviewing in-browser. A separate destination would have asked them to leave the workflow at the exact moment a pattern appears, so the plugin was the only form that fit how the review actually happens.",
                tradeoff: "Gained a tool that lives inside the existing workflow; gave up the freedom of a dedicated surface built purely for review. Acceptable because a tool that isn't opened protects no one — fit mattered more than range.",
              },
              {
                label: "Practitioner-first, not end-user",
                detail: "One practitioner protects thousands of users downstream.",
                why: "Research put the leverage upstream: practitioners review patterns before they ship, while end users meet them only after. Arming the reviewer reaches every user of whatever they approve.",
                tradeoff: "Gained upstream reach through the person who can stop a pattern shipping; gave up directly helping the user meeting one today. Acceptable because the downstream multiplier is larger than anything one-user-at-a-time protection reaches.",
              },
              {
                label: "A three-tier detection taxonomy",
                detail: "Coercive, Deceptive, Addictive — one shared vocabulary for every pattern Raahi flags.",
                why: "The term meant something different to every practitioner interviewed. Without one vocabulary there was nothing stable to detect against, and no way for two people to agree a flag was the same thing.",
                tradeoff: "Gained flags that are comparable and defensible in a stakeholder conversation; gave up the nuance of the individual vocabularies practitioners had built for themselves. Acceptable because those private definitions were exactly what stopped detection from scaling.",
              },
            ].map((item) => (
              <li key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
                <p className="font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
                <DecisionNote label="Why this decision?">{item.why}</DecisionNote>
                <DecisionNote label="Tradeoff">{item.tradeoff}</DecisionNote>
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

      {/* 13.5 — Demo: EditorialLayout, video spanning most of the grid */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Watch It Work</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[20ch]">
            Raahi, spotting a dark pattern in real time.
          </h3>
          <video
            className="mt-8 w-full rounded-2xl"
            style={{ maxWidth: "980px" }}
            src="/img/raahi/raahi-demo.mp4"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </EditorialLayout>

      {/* 14.5 — If This Product Shipped: forward-looking, grounded only in what the research already established */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 8" }}>
          <Eyebrow>If This Product Shipped</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl leading-tight max-w-[20ch]">
            What I&rsquo;d watch for.
          </h3>
          <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
            Raahi is a working prototype — it hasn&rsquo;t shipped, so there
            are no adoption numbers to report. What follows is how I&rsquo;d
            judge it if it did.
          </p>
          <div className="mt-8 flex flex-col">
            {[
              {
                label: "Success criteria",
                detail: "Not installs. The survey captured stated intent to use a tool like this, and stated intent is the weakest kind of evidence — the real test is whether a flag ever makes it into a stakeholder conversation. That's the job the product was scoped to do.",
              },
              {
                label: "How adoption would be evaluated",
                detail: "By whether practitioners keep it on after the novelty passes, and whether flags get logged during real reviews rather than trial runs. Sustained in-workflow use is the signal; a spike at launch isn't.",
              },
              {
                label: "Future iterations",
                detail: "The taxonomy is the backbone, and three tiers were enough to make flags comparable — not enough to describe everything practitioners named. It would need to grow as new patterns appear, without losing the shared vocabulary that made it work.",
              },
              {
                label: "Long-term validation",
                detail: "The follow-on study on dark patterns in generative AI feeds directly back here: patterns emerging in AI interfaces are exactly the kind the current taxonomy was never built against.",
              },
              {
                label: "Operational considerations",
                detail: "Detection accuracy would need ongoing review. A false flag is more expensive than a missed one here — the product's whole value is being credible enough to bring to a stakeholder, and a wrong flag spends that credibility.",
              },
            ].map((item) => (
              <div key={item.label} className="py-5 border-t border-white/10 first:border-t-0">
                <p className="font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ gridColumn: "9 / 13", alignSelf: "start" }}>
          <GlassNote
            label="What would need re-testing first"
            text="The sample was self-selected through a university network. Before trusting these numbers to justify a roadmap, I'd want a broader one."
          />
        </div>
      </EditorialLayout>

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
        <Link href="/projects/wellnut" className="group">
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
