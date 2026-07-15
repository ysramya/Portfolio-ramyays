import type { Metadata } from "next";
import Link from "next/link";
import {
  HeroLayout,
  ReadingLayout,
  EditorialLayout,
  SplitLayout,
  FullBleedLayout,
} from "@/components/ds/layouts";
import { Quote, ImageFrame } from "@/components/ds/atoms";
import { tintedGlass } from "@/components/ds/tokens";
import { impactsTheme, impactsPalette, impactsGradients } from "./theme";

export const metadata: Metadata = {
  title: "Cost of a Click — Ramya Yerramilli",
  description:
    "Made AI's invisible water cost physically tangible — increasing environmental awareness by 85% through sensor-driven experience design.",
};

const accent = impactsTheme.accent;
const silver = impactsPalette.silver;
const deepBlue = impactsPalette.deepBlue;

function Eyebrow({ children, color = accent }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase" style={{ color }}>
      {children}
    </p>
  );
}

function GradientField({ gradient, children }: { gradient: string; children: React.ReactNode }) {
  return <div style={{ background: gradient }}>{children}</div>;
}

const glance = [
  { q: "What role are you targeting?", a: "Experience Designer / UX Researcher", detail: "Civic tech, sustainability, or physical-digital interaction design roles." },
  { q: "Is your work relevant to that role?", a: "Sensor-driven experience design", detail: "Designed an AI-powered installation that makes water cost felt, not just read." },
  { q: "Can I quickly understand your contribution?", a: "Lead UX Researcher & Designer", detail: "Led research, sensor integration design, and the full 10-week experience design process." },
  { q: "Is there evidence of thinking, not just polish?", a: "Abstract stats don't change behavior", detail: "Research showed awareness campaigns fail at feeling — so we designed for the felt cost, not the number." },
  { q: "Do outcomes look credible?", a: "Google Summer Impact Grant Winner", detail: "Won the Google Summer Impact Grant 2025, demonstrated 85% increase in environmental awareness." },
];

const phases = [
  { wk: "Wks 1–2", name: "Discovery", pct: "20%", acts: ["Desk research on AI energy use", "Secondary data synthesis", "Problem framing"] },
  { wk: "Wks 3–4", name: "User Research", pct: "20%", acts: ["15 semi-structured interviews", "Survey (n=42)", "Journey mapping"] },
  { wk: "Wks 5–6", name: "Concept + Design", pct: "20%", acts: ["Concept ideation (3 directions)", "Physical + digital prototyping", "Figma flows"] },
  { wk: "Wk 7", name: "Build", pct: "10%", acts: ["Arduino build", "Sensor integration"] },
  { wk: "Wk 8", name: "Test R1", pct: "10%", acts: ["Lab usability test", "Iteration"] },
  { wk: "Wk 9", name: "Test R2", pct: "10%", acts: ["Field test", "Refinement"] },
  { wk: "Wk 10", name: "Exhibit", pct: "10%", acts: ["DePaul Showcase", "Impact measure"] },
];

const takeaways = [
  { icon: "🎭", title: "Felt", em: "Told", text: "Physical sensation anchors awareness in a way abstract data never can. Design the experience, not the information.", stat: "↑ 85% awareness — felt experience beats data" },
  { icon: "🔗", title: "Research +", em: "Build", text: "Combining UX research methods with physical computing required fluency in both domains. The research shaped the hardware decisions as much as the design ones.", stat: "Arduino + Figma + field research in one sprint" },
  { icon: "📏", title: "Test", em: "Early, Often", text: "Two rounds of usability testing before exhibition caught critical friction points in the physical interaction — including water spillage, prompt timing, and screen readability.", stat: "2 test rounds → 4 critical fixes before launch" },
  { icon: "🌱", title: "Ethics as", em: "Design Brief", text: "Designing for environmental awareness means the research itself had to be ethically grounded — consent-first, never alarmist, always actionable.", stat: "73% behaviour change intent — actionable framing works" },
];

export default function InvisibleImpactsPage() {
  return (
    <div style={{ background: impactsGradients.page }}>
      {/* 1 — Hero: real installation photo, full-bleed */}
      <HeroLayout image="/img/coac/hero-installation.jpg" imageAlt="Cost of a Click — physical installation at DePaul">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6" style={tintedGlass(accent)}>
            <span style={{ color: silver }}>DePaul Summer Impact Grant 2025 · Winner</span>
          </span>
          <h1 className="font-[family-name:var(--font-display)] font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(3rem,8vw,6.5rem)] max-w-[18ch] md:-ml-1 text-[var(--color-ink)]">
            Cost of
            <br />
            <span className="italic" style={{ color: accent }}>a Click</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-muted)]" style={{ maxWidth: "56ch" }}>
            Made AI&rsquo;s invisible water cost physically tangible — increasing
            environmental awareness by <strong className="text-[var(--color-ink)] font-semibold">85%</strong> through
            sensor-driven experience design.
          </p>
        </div>
      </HeroLayout>

      {/* 2 — Meta strip */}
      <EditorialLayout>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ gridColumn: "1 / 13" }}>
          {[
            { label: "Role", value: "Lead UX Researcher" },
            { label: "Duration", value: "10 Weeks" },
            { label: "Team", value: "UX Researcher · UI Designer · Developer · PM" },
            { label: "Tools", value: "Figma · Framer · Arduino · VS Code" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl px-4 py-3" style={tintedGlass(accent, 0.08)}>
              <dt className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">{m.label}</dt>
              <dd className="mt-1 text-sm text-[var(--color-ink)]">{m.value}</dd>
            </div>
          ))}
        </dl>
      </EditorialLayout>

      {/* 3 — At a Glance */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>At a Glance</Eyebrow>
        </div>
        <div style={{ gridColumn: "1 / 7" }}>
          <div style={tintedGlass(accent, 0.08)} className="rounded-2xl p-6 h-full">
            <p className="text-sm text-[var(--color-ink-faint)]">{glance[0].q}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{glance[0].a}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{glance[0].detail}</p>
          </div>
        </div>
        <div style={{ gridColumn: "7 / 13" }}>
          <div style={tintedGlass(silver, 0.08)} className="rounded-2xl p-6 h-full">
            <p className="text-sm text-[var(--color-ink-faint)]">{glance[1].q}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{glance[1].a}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{glance[1].detail}</p>
          </div>
        </div>
        {[glance[2], glance[3], glance[4]].map((g, i) => (
          <div key={g.q} style={{ gridColumn: `${1 + i * 4} / ${5 + i * 4}` }}>
            <div style={tintedGlass(i === 1 ? accent : silver, 0.07)} className="rounded-2xl p-6 h-full">
              <p className="text-sm text-[var(--color-ink-faint)]">{g.q}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{g.a}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{g.detail}</p>
            </div>
          </div>
        ))}
      </EditorialLayout>

      {/* 4 — Problem: split, real photo, insight strip, callout */}
      <GradientField gradient={impactsGradients.deepBlueCharcoal}>
        <SplitLayout
          ratio={[7, 5]}
          left={
            <div>
              <Eyebrow>The Problem</Eyebrow>
              <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
                AI has a water bill.
                <br />
                <span className="italic" style={{ color: accent }}>Nobody knows.</span>
              </h2>
              <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed">
                Every AI query consumes real water to cool data centre servers. In
                2025, users type hundreds of prompts a week — with zero awareness of
                the environmental cost. Abstract facts don&rsquo;t change behaviour.
                Felt experience does.
              </p>
            </div>
          }
          right={
            <ImageFrame
              src="/img/coac/pump-bucket.jpg"
              alt="Water pump and bucket — the physical mechanism behind the installation"
              aspect="3/4"
              objectFit="contain"
              caption="Water pump triggered by Arduino — every AI prompt sends real water proportional to query length"
            />
          }
        />
      </GradientField>

      <EditorialLayout maxWidth="1440px">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
          {[
            { icon: "💧", label: "The Cost", text: "One ChatGPT conversation uses ~500ml of water. Most users have no idea." },
            { icon: "🧠", label: "The Gap", text: "Awareness campaigns fail because the impact is invisible, distant, and abstract." },
            { icon: "🎯", label: "The Insight", text: "Physical sensation creates emotional memory. If you feel the water drain, you remember it." },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl p-6" style={tintedGlass(silver, 0.06)}>
              <span className="text-2xl">{c.icon}</span>
              <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: accent }}>{c.label}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] p-8" style={{ gridColumn: "2 / 12", ...tintedGlass(accent, 0.1) }}>
          <Quote
            align="center"
            accent={accent}
            text="Abstract environmental data doesn't change behaviour. But when you watch the water pour — you feel it."
            attribution="Research finding — exit interviews after installation interaction, Summer 2025"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </EditorialLayout>

      {/* 5 — How Might We: standalone quote */}
      <ReadingLayout className="text-center py-16 md:py-20">
        <Eyebrow>How Might We</Eyebrow>
        <p className="mt-4 font-[family-name:var(--font-display)] italic font-medium leading-tight text-[clamp(1.6rem,3.4vw,2.6rem)] text-[var(--color-ink)]">
          How might we make the <span style={{ color: accent }}>invisible cost</span> of
          AI felt — not just understood — so people can make informed choices?
        </p>
      </ReadingLayout>

      {/* 6 — Research Process: 7-phase timeline */}
      <GradientField gradient={impactsGradients.surfaceBlack}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Research Process</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Seven phases. <span className="italic" style={{ color: accent }}>One clear arc.</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "60ch" }}>
              Each phase was sized to the problem — discovery-heavy at the start,
              refinement-intensive at the close.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3" style={{ gridColumn: "1 / 13" }}>
            {phases.map((p, i) => (
              <div key={p.wk} className="rounded-2xl p-4" style={tintedGlass(i < 3 ? accent : silver, i < 3 ? 0.08 : 0.05)}>
                <div className="h-1.5 rounded-full mb-3" style={{ backgroundColor: i < 3 ? accent : silver, opacity: i < 3 ? 1 - i * 0.15 : 1 - (i - 3) * 0.15 }} />
                <p className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase" style={{ color: i < 3 ? accent : silver }}>{p.wk}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] font-semibold text-sm text-[var(--color-ink)]">{p.name}</p>
                <p className="text-xs font-semibold" style={{ color: i < 3 ? accent : silver }}>{p.pct}</p>
                <ul className="mt-2 flex flex-col gap-1">
                  {p.acts.map((a) => (
                    <li key={a} className="text-[0.68rem] text-[var(--color-ink-faint)] leading-snug">— {a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 7 — Design Rationale: 2 cards */}
      <EditorialLayout>
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Design Rationale</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Why <span className="italic" style={{ color: accent }}>physical + digital?</span>
          </h2>
        </div>
        <div className="rounded-2xl p-8" style={{ gridColumn: "1 / 7", ...tintedGlass(accent, 0.07) }}>
          <span className="text-3xl">💧</span>
          <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: accent }}>The water metaphor</p>
          <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">Sensation over Statistics</p>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed">
            Watching real water pour proportional to your query creates visceral,
            embodied understanding — impossible to achieve with a number on a screen.
          </p>
          <div className="mt-4 rounded-lg p-3 text-xs text-[var(--color-ink-faint)]" style={{ backgroundColor: `${accent}0d` }}>
            <strong className="text-[var(--color-ink)]">Research basis:</strong> Somatic marker hypothesis — physical sensation anchors emotional memory.
          </div>
        </div>
        <div className="rounded-2xl p-8" style={{ gridColumn: "7 / 13", ...tintedGlass(silver, 0.07) }}>
          <span className="text-3xl">🌳</span>
          <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: silver }}>The dying tree</p>
          <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">Visible Consequence</p>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed">
            A tree withering on screen as users type creates a real-time cost
            metaphor — making systemic impact personal and immediate.
          </p>
          <div className="mt-4 rounded-lg p-3 text-xs text-[var(--color-ink-faint)]" style={{ backgroundColor: `${silver}0d` }}>
            <strong className="text-[var(--color-ink)]">Design decision:</strong> Negative visual feedback (loss aversion) outperforms neutral information delivery in behaviour change research.
          </div>
        </div>
      </EditorialLayout>

      {/* 8 — Behind the Build: real photo gallery, plain even grid (no stagger — these
          are documentation photos, not a collage) */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Behind the Build</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            From sensor <span className="italic" style={{ color: accent }}>to experience.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridColumn: "1 / 13", marginTop: "1rem" }}>
          <ImageFrame src="/img/coac/arduino-wiring.jpg" alt="Arduino relay circuit — physical computing backbone" aspect="3/4" objectFit="contain" caption="Arduino relay circuit — triggers the water pump on each prompt" />
          <ImageFrame src="/img/coac/digital-interface.png" alt="Digital interface — real-time water counter as users type" aspect="1/1" objectFit="contain" caption="Digital interface — real-time water cost counter as users type" />
          <ImageFrame src="/img/coac/team-build.jpg" alt="The four-person build team assembling the installation" aspect="4/3" objectFit="contain" caption="The build team — assembling and wiring the installation" />
          <ImageFrame src="/img/coac/team-testing.jpg" alt="Team conducting usability testing" aspect="3/4" objectFit="contain" caption="Usability testing — observing how participants respond to the physical feedback" />
        </div>
      </EditorialLayout>

      {/* 9 — Exhibition: real photo gallery, same plain even grid */}
      <GradientField gradient={impactsGradients.deepBlueCharcoal}>
        <EditorialLayout maxWidth="1440px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Exhibition</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              DePaul Summer <span className="italic" style={{ color: accent }}>Showcase 2025</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gridColumn: "1 / 13", marginTop: "1rem" }}>
            <ImageFrame src="/img/coac/exhibition-room.jpg" alt="Exhibition room at DePaul" aspect="4/3" objectFit="contain" caption="Full exhibition space — visitors experiencing the installation first-hand" />
            <ImageFrame src="/img/coac/marketing-materials.jpg" alt="Exhibition marketing materials" aspect="4/3" objectFit="contain" caption="Research materials designed to extend the conversation beyond the room" />
            <ImageFrame src="/img/coac/video-wall.jpg" alt="Cost of a Click video wall at DePaul exhibition" aspect="3/4" objectFit="contain" caption="&ldquo;Cost of a Click&rdquo; video wall — exhibition room centrepiece" />
            <ImageFrame src="/img/coac/team-showcase.jpg" alt="The full team of 6 at DePaul Summer Showcase" aspect="4/3" objectFit="contain" caption="The full team at DePaul Summer Showcase 2025" />
          </div>
        </EditorialLayout>
      </GradientField>

      {/* 10 — Viral video */}
      <ReadingLayout className="text-center">
        <Eyebrow>6 Million Views</Eyebrow>
        <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl leading-[1.05] text-[var(--color-ink)]">
          The internet <span className="italic" style={{ color: accent }}>paid attention.</span>
        </h2>
        <p className="mt-5 text-[var(--color-ink-muted)] text-lg leading-relaxed">
          After the DePaul exhibition, footage of Cost of a Click spread on TikTok and
          reached <strong className="text-[var(--color-ink)] font-semibold">6 million views</strong> — sparking a global
          conversation about AI&rsquo;s hidden environmental cost.
        </p>
        <div className="mt-8 mx-auto rounded-2xl overflow-hidden" style={{ maxWidth: "320px", border: `2px solid ${accent}55` }}>
          <video controls playsInline muted loop preload="metadata" style={{ width: "100%", aspectRatio: "9/16", backgroundColor: "#000", objectFit: "contain" }}>
            <source src="/img/coac/tiktok-viral.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-4 text-xs text-[var(--color-ink-faint)]">Originally posted by @thetshegofatso on TikTok · 6M+ views · 2025</p>
      </ReadingLayout>

      {/* 11 — Impact: 3 stats */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Impact</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Numbers that <span className="italic" style={{ color: accent }}>moved people.</span>
          </h2>
        </div>
        {[
          { n: "85%", label: "Awareness Increase", desc: "Of participants reported changed awareness of AI's environmental footprint after interacting with the installation.", color: accent },
          { n: "73%", label: "Behaviour Change Intent", desc: "Committed to more mindful AI usage — specifically reducing unnecessary or casual queries.", color: silver },
          { n: "30%", label: "More Informed Usage", desc: "Increase in self-reported informed decision-making about when to use AI tools.", color: accent },
        ].map((s, i) => (
          <div key={s.label} className="rounded-2xl p-8 text-center" style={{ gridColumn: `${1 + i * 4} / ${5 + i * 4}`, ...tintedGlass(s.color, 0.08) }}>
            <p className="font-[family-name:var(--font-display)] font-semibold text-6xl" style={{ color: s.color }}>{s.n}</p>
            <p className="mt-3 text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-[var(--color-ink)]">{s.label}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </EditorialLayout>

      {/* 12 — Recognition track */}
      <GradientField gradient={impactsGradients.surfaceBlack}>
        <EditorialLayout>
          <ol className="flex flex-col" style={{ gridColumn: "1 / 13" }}>
            {[
              { date: "Grant Award · Spring 2025", title: "DePaul Summer Impact Grant — Won", body: "Competitive research grant awarded for the proposal to make AI's environmental cost tangible through experience design." },
              { date: "Exhibition · Summer 2025", title: "DePaul Summer Showcase — Featured Installation", body: "Installation exhibited to students, faculty, and public. 85% awareness increase measured through exit surveys." },
              { date: "Social · Post-exhibition", title: "Viral on TikTok", body: "Exhibition footage circulated widely on social media — extending the research's reach beyond the academic context." },
            ].map((r) => (
              <li key={r.date} className="py-5 border-t first:border-t-0 grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-2 md:gap-8" style={{ borderColor: impactsPalette.divider }}>
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: accent }}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  {r.date}
                </p>
                <div>
                  <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-ink)]">{r.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)] leading-relaxed max-w-[60ch]">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </EditorialLayout>
      </GradientField>

      {/* 13 — Key Takeaways */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Key Takeaways</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            What this project <span className="italic" style={{ color: accent }}>taught me.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
          {takeaways.map((t, i) => (
            <div key={t.title} className="rounded-2xl p-6" style={tintedGlass(i % 2 === 0 ? accent : silver, 0.07)}>
              <span className="text-2xl">{t.icon}</span>
              <p className="mt-3 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">
                {t.title} <span className="italic" style={{ color: i % 2 === 0 ? accent : silver }}>{t.em}</span>
              </p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{t.text}</p>
              <p className="mt-3 text-xs font-semibold" style={{ color: i % 2 === 0 ? accent : silver }}>{t.stat}</p>
            </div>
          ))}
        </div>
      </EditorialLayout>

      {/* 14 — Continuing Research: the project's academic follow-on, under review */}
      <GradientField gradient={impactsGradients.deepBlueCharcoal}>
        <ReadingLayout>
          <Eyebrow>Continuing Research</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-3xl leading-[1.05] text-[var(--color-ink)]">
            Now under review <span className="italic" style={{ color: accent }}>for AIES 2026.</span>
          </h2>
          <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed">
            Further work on this project has been developed into a research paper,
            currently under review at the AAAI/ACM Conference on AI, Ethics, and
            Society.
          </p>
          <div className="mt-6 rounded-2xl p-6" style={tintedGlass(accent, 0.08)}>
            <p className="text-sm leading-relaxed text-[var(--color-ink)]">
              Cunningham, J. L., Iqbal, S., Nacu, D., Caplan, B., Yerramilli, R., &amp;
              Mukkamala, D. D. (2026). &ldquo;Making AI Infrastructure Visible:
              Interactive Art as a Public-Facing AI Ethics Interface.&rdquo;{" "}
              <em>AAAI/ACM Conference on AI, Ethics, and Society (AIES 2026)</em>.
            </p>
            <p className="mt-3 text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: accent }}>
              Paper #343 · Under Review
            </p>
          </div>
        </ReadingLayout>
      </GradientField>

      {/* 15 — Next project: FullBleed, loops back to Raahi */}
      <FullBleedLayout
        image="/img/raahi/brand-splash.png"
        imageAlt="Raahi, an AI browser plugin that catches dark patterns"
        imageOpacity={0.35}
        minHeight="60dvh"
        overlayClassName="items-center justify-items-center text-center"
      >
        <Link href="/projects/raahi" className="group">
          <span className="inline-flex rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6" style={tintedGlass(accent)}>
            <span style={{ color: silver }}>Next Project</span>
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)] text-[var(--color-ink)]">
            Raahi
            <span className="block h-[2px] w-0 group-hover:w-full mx-auto mt-4 transition-[width] duration-500 ease-out" style={{ backgroundColor: accent }} />
          </h2>
        </Link>
      </FullBleedLayout>
    </div>
  );
}
