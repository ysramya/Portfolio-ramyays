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
import { Quote, ImageFrame } from "@/components/ds/atoms";
import { tintedGlass } from "@/components/ds/tokens";
import { impactsTheme, impactsPalette, impactsGradients } from "./theme";

export const metadata: Metadata = {
  title: "Cost of a Click — Ramya Yerramilli",
  description:
    "Made AI's invisible water cost physically tangible — increasing environmental awareness by 85% through sensor-driven experience design.",
};

const accent = impactsTheme.accent;
const gold = impactsPalette.goldenYellow;
const moss = impactsPalette.mossGreen;
const ivory = impactsPalette.ivory;
const gray = impactsPalette.softGray;

function Eyebrow({ children, color = accent }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase" style={{ color }}>
      {children}
    </p>
  );
}

function GlassNote({ label, text, color = accent, style }: { label: string; text: string; color?: string; style?: React.CSSProperties }) {
  return (
    <div className="rounded-2xl p-6" style={{ ...tintedGlass(color, 0.1), ...style }}>
      <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase" style={{ color }}>{label}</p>
      <p className="mt-3 text-lg leading-relaxed text-[var(--color-ink)]">{text}</p>
    </div>
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

/* ── Design System documentation components — abstract only, no project photos ── */

function ColorSwatch({ name, hex, textDark }: { name: string; hex: string; textDark?: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={tintedGlass(impactsPalette.softGray, 0.05)}>
      <div className="h-24" style={{ backgroundColor: hex }} />
      <div className="p-4">
        <p className="text-sm font-semibold text-[var(--color-ink)]">{name}</p>
        <p className="mt-1 text-xs font-mono text-[var(--color-ink-faint)]">{hex}</p>
      </div>
    </div>
  );
}

function PrincipleCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl p-6" style={tintedGlass(accent, 0.06)}>
      <span className="text-3xl">{icon}</span>
      <p className="mt-4 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{title}</p>
      <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{text}</p>
    </div>
  );
}

function SpacingBar({ label, px }: { label: string; px: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs text-[var(--color-ink-faint)] w-16 flex-shrink-0">{label}</span>
      <div className="h-2 rounded-full" style={{ width: `${px}px`, maxWidth: "100%", backgroundColor: accent }} />
      <span className="text-xs font-mono text-[var(--color-ink-faint)]">{px}px</span>
    </div>
  );
}

function RadiusSwatch({ label, radius }: { label: string; radius: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16" style={{ backgroundColor: `${accent}33`, border: `1.5px solid ${accent}`, borderRadius: `${radius}px` }} />
      <span className="text-[0.65rem] text-[var(--color-ink-faint)]">{label} · {radius}px</span>
    </div>
  );
}

function ElevationSwatch({ label, shadow }: { label: string; shadow: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-14 rounded-xl" style={{ backgroundColor: impactsPalette.surface, boxShadow: shadow }} />
      <span className="text-[0.65rem] text-[var(--color-ink-faint)]">{label}</span>
    </div>
  );
}

function StrokeSwatch({ label, width }: { label: string; width: number }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-14 rounded-xl flex items-center justify-center" style={{ border: `${width}px solid ${accent}` }} />
      <span className="text-[0.65rem] text-[var(--color-ink-faint)]">{label} · {width}px</span>
    </div>
  );
}

function IconGlyph({ label, path }: { label: string; path: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl p-4" style={tintedGlass(impactsPalette.softGray, 0.04)}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
      <span className="text-[0.62rem] text-[var(--color-ink-faint)] text-center">{label}</span>
    </div>
  );
}

function ComponentDemo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-5" style={tintedGlass(impactsPalette.softGray, 0.05)}>
      <p className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-3">{label}</p>
      {children}
    </div>
  );
}

function MotionDiagram({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl p-5" style={tintedGlass(gold, 0.06)}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: gold }} />
        <span className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${gold}, transparent)` }} />
        <span className="w-2 h-2 rounded-full border" style={{ borderColor: gold }} />
      </div>
      <p className="text-sm font-semibold" style={{ color: gold }}>{label}</p>
      <p className="mt-1 text-xs text-[var(--color-ink-muted)] leading-relaxed">{text}</p>
    </div>
  );
}

function MoodSwatch({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={tintedGlass(impactsPalette.softGray, 0.04)}>
      <div className="h-20" style={{ background: gradient }} />
      <p className="px-4 py-3 text-xs text-[var(--color-ink-muted)]">{label}</p>
    </div>
  );
}

function A11yRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-4" style={{ borderBottom: `1px solid ${impactsPalette.divider}` }}>
      <span className="text-sm text-[var(--color-ink)]">{label}</span>
      <span className="text-sm font-mono" style={{ color: moss }}>{value}</span>
    </div>
  );
}

export default function InvisibleImpactsPage() {
  return (
    <div style={{ background: impactsGradients.page }}>
      {/* 1 — Hero: real installation photo, full-bleed */}
      <HeroLayout image="/img/coac/hero-installation.jpg" imageAlt="Cost of a Click — physical installation at DePaul">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold tracking-[0.22em] uppercase mb-6" style={tintedGlass(accent)}>
            <span style={{ color: gold }}>DePaul Summer Impact Grant 2025 · Winner</span>
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
            { label: "Duration", value: "10 Weeks · July – Sept 2025" },
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
          <div style={tintedGlass(gold, 0.08)} className="rounded-2xl p-6 h-full">
            <p className="text-sm text-[var(--color-ink-faint)]">{glance[1].q}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">{glance[1].a}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{glance[1].detail}</p>
          </div>
        </div>
        {[glance[2], glance[3], glance[4]].map((g, i) => (
          <div key={g.q} style={{ gridColumn: `${1 + i * 4} / ${5 + i * 4}` }}>
            <div style={tintedGlass(i === 1 ? accent : gold, 0.07)} className="rounded-2xl p-6 h-full">
              <p className="text-sm text-[var(--color-ink-faint)]">{g.q}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">{g.a}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{g.detail}</p>
            </div>
          </div>
        ))}
      </EditorialLayout>

      {/* 4 — Problem: split, real photo, insight strip, callout */}
      <GradientField gradient={impactsGradients.forestCharcoal}>
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
            <div key={c.label} className="rounded-2xl p-6" style={tintedGlass(gold, 0.06)}>
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
              <div key={p.wk} className="rounded-2xl p-4" style={tintedGlass(i < 3 ? accent : gold, i < 3 ? 0.08 : 0.05)}>
                <div className="h-1.5 rounded-full mb-3" style={{ backgroundColor: i < 3 ? accent : gold, opacity: i < 3 ? 1 - i * 0.15 : 1 - (i - 3) * 0.15 }} />
                <p className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase" style={{ color: i < 3 ? accent : gold }}>{p.wk}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] font-semibold text-sm text-[var(--color-ink)]">{p.name}</p>
                <p className="text-xs font-semibold" style={{ color: i < 3 ? accent : gold }}>{p.pct}</p>
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
        <div className="rounded-2xl p-8" style={{ gridColumn: "7 / 13", ...tintedGlass(gold, 0.07) }}>
          <span className="text-3xl">🌳</span>
          <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.28em] uppercase" style={{ color: gold }}>The dying tree</p>
          <p className="mt-2 font-[family-name:var(--font-display)] font-semibold text-xl text-[var(--color-ink)]">Visible Consequence</p>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed">
            A tree withering on screen as users type creates a real-time cost
            metaphor — making systemic impact personal and immediate.
          </p>
          <div className="mt-4 rounded-lg p-3 text-xs text-[var(--color-ink-faint)]" style={{ backgroundColor: `${gold}0d` }}>
            <strong className="text-[var(--color-ink)]">Design decision:</strong> Negative visual feedback (loss aversion) outperforms neutral information delivery in behaviour change research.
          </div>
        </div>
      </EditorialLayout>

      {/* ═══════════════════════════════════════════════════════════════
          8 — DESIGN SYSTEM: abstract documentation only, no repeated
          project photos. Every visual here is a swatch, diagram, icon,
          or reusable component demo — never a screenshot already shown
          elsewhere on this page.
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{ backgroundColor: impactsPalette.background }}>
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Design System</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              Design <span className="italic" style={{ color: accent }}>System</span>
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed" style={{ maxWidth: "68ch" }}>
              The visual language translates invisible environmental impact into
              tangible human experiences through contrast, minimalism, and physical
              metaphors.
            </p>
          </div>
        </EditorialLayout>

        {/* 01 Color Palette */}
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow color={gray}>01 · Color Palette</Eyebrow>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4" style={{ gridColumn: "1 / 13" }}>
            <ColorSwatch name="Primary — Forest Green" hex={impactsPalette.forestGreen} />
            <ColorSwatch name="Secondary — Moss Green" hex={impactsPalette.mossGreen} />
            <ColorSwatch name="Accent — Golden Yellow" hex={impactsPalette.goldenYellow} />
            <ColorSwatch name="Neutral — Soft Gray" hex={impactsPalette.softGray} />
            <ColorSwatch name="Surface" hex={impactsPalette.surface} />
          </div>
        </EditorialLayout>

        {/* 02 Typography */}
        <GradientField gradient={impactsGradients.surfaceBlack}>
          <EditorialLayout maxWidth="1500px">
            <div style={{ gridColumn: "1 / 13" }}>
              <Eyebrow color={gray}>02 · Typography</Eyebrow>
            </div>
            <div className="rounded-2xl p-8" style={{ gridColumn: "1 / 6", ...tintedGlass(gray, 0.05) }}>
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)]">Display Font</p>
              <p className="mt-3 font-[family-name:var(--font-display)] italic text-4xl text-[var(--color-ink)]">Cormorant Garamond</p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]">Used for pull-quotes and editorial moments — the project&rsquo;s serif voice.</p>
              <div className="mt-6 flex gap-6 text-xs text-[var(--color-ink-faint)]">
                <div><p className="text-[var(--color-ink)] font-semibold">Weights</p><p>300 · 400 · 600</p></div>
                <div><p className="text-[var(--color-ink)] font-semibold">Line height</p><p>1.5 (display) · 1.8 (body)</p></div>
              </div>
            </div>
            <div className="flex flex-col gap-3" style={{ gridColumn: "6 / 13" }}>
              {[
                { tag: "H1", size: "clamp(3rem, 7vw, 7rem)", sample: "Cost of a Click" },
                { tag: "H2", size: "clamp(1.8rem, 3.5vw, 2.8rem)", sample: "AI has a water bill" },
                { tag: "H3", size: "1.1rem", sample: "Sensation over Statistics" },
                { tag: "Body", size: "1rem / 1.8", sample: "Abstract facts don't change behaviour." },
                { tag: "Caption", size: "0.72rem", sample: "Photo caption — 0.72rem, 0.04em tracking" },
              ].map((t) => (
                <div key={t.tag} className="flex items-baseline gap-4 rounded-xl px-4 py-3" style={tintedGlass(gray, 0.04)}>
                  <span className="text-[0.6rem] font-mono w-16 flex-shrink-0" style={{ color: accent }}>{t.tag}</span>
                  <span className="flex-1 text-[var(--color-ink)] truncate" style={{ fontSize: t.tag === "H1" ? "1.6rem" : t.tag === "H2" ? "1.3rem" : t.tag === "H3" ? "1.05rem" : "0.95rem" }}>{t.sample}</span>
                  <span className="text-[0.6rem] font-mono text-[var(--color-ink-faint)] flex-shrink-0">{t.size}</span>
                </div>
              ))}
            </div>
          </EditorialLayout>
        </GradientField>

        {/* 03 Principles */}
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow color={gray}>03 · Principles</Eyebrow>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ gridColumn: "1 / 13" }}>
            <PrincipleCard icon="👁" title="Visibility over abstraction" text="Make the invisible physically visible." />
            <PrincipleCard icon="🪵" title="Physical before digital" text="The sensor and the water come first; the screen supports it." />
            <PrincipleCard icon="⚡" title="Contrast creates attention" text="Dark ground, single accent — nothing competes for focus." />
            <PrincipleCard icon="◻" title="Minimal UI, maximum focus" text="Every extra element dilutes the felt experience." />
            <PrincipleCard icon="❤" title="Emotion through interaction" text="Design the reaction, not just the interface." />
          </div>
        </EditorialLayout>

        {/* 04 Visual Language */}
        <GradientField gradient={impactsGradients.forestCharcoal}>
          <EditorialLayout maxWidth="1500px">
            <div style={{ gridColumn: "1 / 13" }}>
              <Eyebrow color={gray}>04 · Visual Language</Eyebrow>
            </div>
            <div className="rounded-2xl p-6" style={{ gridColumn: "1 / 5", ...tintedGlass(gray, 0.05) }}>
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-4">Border Radius</p>
              <div className="flex gap-4 justify-center">
                <RadiusSwatch label="sm" radius={4} />
                <RadiusSwatch label="md" radius={14} />
                <RadiusSwatch label="lg" radius={24} />
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ gridColumn: "5 / 9", ...tintedGlass(gray, 0.05) }}>
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-4">Spacing Scale</p>
              <div className="flex flex-col gap-3">
                <SpacingBar label="xs" px={8} />
                <SpacingBar label="sm" px={16} />
                <SpacingBar label="md" px={32} />
                <SpacingBar label="lg" px={56} />
                <SpacingBar label="xl" px={88} />
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ gridColumn: "9 / 13", ...tintedGlass(gray, 0.05) }}>
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-4">Elevation</p>
              <div className="flex gap-5 justify-center">
                <ElevationSwatch label="Flat" shadow="none" />
                <ElevationSwatch label="Raised" shadow="0 8px 24px rgba(0,0,0,0.35)" />
                <ElevationSwatch label="Floating" shadow="0 20px 48px rgba(0,0,0,0.5)" />
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ gridColumn: "1 / 5", ...tintedGlass(gray, 0.05) }}>
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-4">Stroke Widths</p>
              <div className="flex gap-5 justify-center">
                <StrokeSwatch label="Hairline" width={1} />
                <StrokeSwatch label="Default" width={1.5} />
                <StrokeSwatch label="Emphasis" width={2.5} />
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ gridColumn: "5 / 13", ...tintedGlass(gray, 0.05) }}>
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--color-ink-faint)] mb-4">Container Widths</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Reading", w: "40%" },
                  { label: "Editorial", w: "70%" },
                  { label: "Gallery", w: "85%" },
                  { label: "Full-bleed", w: "100%" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <span className="text-xs text-[var(--color-ink-faint)] w-20 flex-shrink-0">{c.label}</span>
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: `${accent}22` }}>
                      <div className="h-full rounded-full" style={{ width: c.w, backgroundColor: accent }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[0.65rem] text-[var(--color-ink-faint)]">12-column grid · margins scale from 24px (mobile) to 96px (desktop) · section spacing 180px</p>
            </div>
          </EditorialLayout>
        </GradientField>

        {/* 05 Iconography */}
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow color={gray}>05 · Iconography</Eyebrow>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]" style={{ maxWidth: "60ch" }}>Minimal outlined icons, consistent 1.5px stroke weight throughout.</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3" style={{ gridColumn: "1 / 13" }}>
            <IconGlyph label="Water drop" path="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" />
            <IconGlyph label="Leaf" path="M5 21c8 0 14-6 14-14V5h-2C9 5 3 11 3 19v2h2z" />
            <IconGlyph label="Tree" path="M12 2l5 8h-3l4 6h-4v6h-4v-6H6l4-6H7z" />
            <IconGlyph label="Data center" path="M4 4h16v6H4zM4 14h16v6H4zM7 7h.01M7 17h.01" />
            <IconGlyph label="AI" path="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4M8 8h8v8H8z" />
            <IconGlyph label="Pump" path="M6 3h6l3 3v6h-3V9H8v9H5V6z" />
            <IconGlyph label="Warning" path="M12 3l10 18H2L12 3zM12 10v4M12 17h.01" />
            <IconGlyph label="Energy" path="M13 2L4 14h6l-1 8 9-12h-6z" />
            <IconGlyph label="Information" path="M12 3a9 9 0 100 18 9 9 0 000-18zM12 8h.01M11 12h1v5h1" />
          </div>
        </EditorialLayout>

        {/* 06 Components */}
        <GradientField gradient={impactsGradients.surfaceBlack}>
          <EditorialLayout maxWidth="1500px">
            <div style={{ gridColumn: "1 / 13" }}>
              <Eyebrow color={gray}>06 · Components</Eyebrow>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]" style={{ maxWidth: "60ch" }}>Abstract reusable patterns — every project section is built from these.</p>
            </div>
            <div style={{ gridColumn: "1 / 5" }}>
              <ComponentDemo label="Metric Card">
                <p className="font-[family-name:var(--font-display)] font-semibold text-3xl" style={{ color: accent }}>85%</p>
                <p className="mt-1 text-xs text-[var(--color-ink-faint)]">Label goes here</p>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "5 / 9" }}>
              <ComponentDemo label="Quote Block">
                <p className="font-[family-name:var(--font-display)] italic text-sm text-[var(--color-ink)]">&ldquo;A short pull-quote sits here.&rdquo;</p>
                <p className="mt-2 text-[0.65rem] text-[var(--color-ink-faint)]">— Attribution</p>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "9 / 13" }}>
              <ComponentDemo label="Callout">
                <div className="rounded-lg p-3" style={{ borderLeft: `3px solid ${gold}`, backgroundColor: `${gold}0d` }}>
                  <p className="text-xs text-[var(--color-ink-muted)]">Highlighted note or aside text.</p>
                </div>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "1 / 4" }}>
              <ComponentDemo label="Research Insight Card">
                <span className="text-lg">◆</span>
                <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-wide" style={{ color: accent }}>Finding</p>
                <p className="mt-1 text-xs text-[var(--color-ink-muted)]">One-line insight summary.</p>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "4 / 8" }}>
              <ComponentDemo label="Timeline Item">
                <div className="flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full mt-1" style={{ backgroundColor: accent }} />
                  <div>
                    <p className="text-xs font-semibold" style={{ color: accent }}>Date</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">Event description</p>
                  </div>
                </div>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "8 / 11" }}>
              <ComponentDemo label="Number Highlight">
                <p className="font-[family-name:var(--font-display)] font-semibold text-2xl" style={{ color: gold }}>6M+</p>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "11 / 13" }}>
              <ComponentDemo label="Tag">
                <span className="text-[0.6rem] font-medium tracking-wide uppercase rounded-full px-3 py-1.5" style={{ backgroundColor: `${gray}1a`, color: gray }}>Tag label</span>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "1 / 5" }}>
              <ComponentDemo label="Stat Card">
                <div className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-display)] font-semibold text-2xl" style={{ color: moss }}>73%</span>
                  <span className="text-xs text-[var(--color-ink-faint)]">Sub-label</span>
                </div>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "5 / 9" }}>
              <ComponentDemo label="Buttons">
                <div className="flex gap-2">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-wide rounded-full px-4 py-2" style={{ backgroundColor: accent, color: impactsPalette.background }}>Primary</span>
                  <span className="text-[0.6rem] font-semibold uppercase tracking-wide rounded-full px-4 py-2 border" style={{ borderColor: `${ivory}40`, color: ivory }}>Ghost</span>
                </div>
              </ComponentDemo>
            </div>
            <div style={{ gridColumn: "9 / 13" }}>
              <ComponentDemo label="Image Caption">
                <div className="rounded-lg h-10" style={{ backgroundColor: `${gray}14` }} />
                <p className="mt-2 text-[0.65rem] text-[var(--color-ink-faint)]">Caption sits directly beneath the image, always.</p>
              </ComponentDemo>
            </div>
          </EditorialLayout>
        </GradientField>

        {/* 07 Motion Guidelines */}
        <EditorialLayout maxWidth="1500px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow color={gray}>07 · Motion Guidelines</Eyebrow>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridColumn: "1 / 13" }}>
            <MotionDiagram label="Fade + Scroll Reveal" text="Content translates up 24px and fades in as it enters the viewport, once." />
            <MotionDiagram label="Parallax" text="Background imagery drifts slower than foreground content on scroll." />
            <MotionDiagram label="Number Counter" text="Stats count up from 0 to their final value when they enter view." />
            <MotionDiagram label="Image Zoom" text="A subtle 1.03x scale on hover signals interactivity without motion sickness." />
            <MotionDiagram label="Hover Elevation" text="Cards lift 4px and their shadow deepens on hover — tactile, not flashy." />
            <MotionDiagram label="Easing" text="One soft ease-out curve everywhere — nothing bounces, nothing snaps." />
          </div>
        </EditorialLayout>

        {/* 08 Photography Direction — abstract mood board, not real photos */}
        <GradientField gradient={impactsGradients.goldCharcoal}>
          <EditorialLayout maxWidth="1500px">
            <div style={{ gridColumn: "1 / 13" }}>
              <Eyebrow color={gray}>08 · Photography Direction</Eyebrow>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)]" style={{ maxWidth: "60ch" }}>
                Guidelines for the project&rsquo;s photography — represented here as mood,
                not as the photos themselves.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ gridColumn: "1 / 13" }}>
              <MoodSwatch label="Dark environments" gradient={`linear-gradient(135deg, ${impactsPalette.background}, ${impactsPalette.surface})`} />
              <MoodSwatch label="Blue ambient lighting" gradient="linear-gradient(135deg, #0D0D0D, #1a2a33)" />
              <MoodSwatch label="High contrast" gradient={`linear-gradient(135deg, ${impactsPalette.background} 50%, ${ivory} 50%)`} />
              <MoodSwatch label="Physical hardware" gradient={`linear-gradient(135deg, ${gray}, ${impactsPalette.surface})`} />
              <MoodSwatch label="Water reflections" gradient={`linear-gradient(135deg, #1a2a33, ${accent}44)`} />
              <MoodSwatch label="Industrial textures" gradient={`linear-gradient(135deg, ${impactsPalette.surface}, ${gray}55)`} />
              <MoodSwatch label="Minimal clutter" gradient={`linear-gradient(135deg, ${impactsPalette.background}, ${impactsPalette.background})`} />
              <MoodSwatch label="Accent glow" gradient={`radial-gradient(circle, ${gold}33, ${impactsPalette.background})`} />
            </div>
          </EditorialLayout>
        </GradientField>

        {/* 09 Accessibility */}
        <ReadingLayout>
          <Eyebrow color={gray}>09 · Accessibility</Eyebrow>
          <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-2xl text-[var(--color-ink)]">WCAG AA, by default.</h3>
          <div className="mt-6">
            <A11yRow label="Contrast ratio (body text)" value="≥ 4.5:1" />
            <A11yRow label="Contrast ratio (large text)" value="≥ 3:1" />
            <A11yRow label="Minimum text size" value="14px" />
            <A11yRow label="Focus states" value="2px visible outline" />
            <A11yRow label="Keyboard navigation" value="Full tab order support" />
            <A11yRow label="Compliance target" value="WCAG 2.1 AA" />
          </div>
        </ReadingLayout>
      </div>
      {/* ═══════════════════════════════════ /Design System ═══════════════════════════════════ */}

      {/* 9 — Behind the Build: real photo gallery */}
      <GalleryLayout maxWidth="1600px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Behind the Build</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            From sensor <span className="italic" style={{ color: accent }}>to experience.</span>
          </h2>
        </div>
        <div style={{ gridColumn: "1 / 7", marginTop: "2rem" }}>
          <ImageFrame src="/img/coac/arduino-wiring.jpg" alt="Arduino relay circuit — physical computing backbone" aspect="3/4" objectFit="contain" caption="Arduino relay circuit — triggers the water pump on each prompt" />
        </div>
        <div style={{ gridColumn: "7 / 13", marginTop: "4rem" }}>
          <ImageFrame src="/img/coac/digital-interface.png" alt="Digital interface — real-time water counter as users type" aspect="1/1" objectFit="contain" caption="Digital interface — real-time water cost counter as users type" />
        </div>
        <div style={{ gridColumn: "1 / 7" }}>
          <ImageFrame src="/img/coac/team-build.jpg" alt="The four-person build team assembling the installation" aspect="4/3" objectFit="contain" caption="The build team — assembling and wiring the installation" />
        </div>
        <div style={{ gridColumn: "7 / 13" }}>
          <ImageFrame src="/img/coac/team-testing.jpg" alt="Team conducting usability testing" aspect="3/4" objectFit="contain" caption="Usability testing — observing how participants respond to the physical feedback" />
        </div>
      </GalleryLayout>

      {/* 10 — Exhibition: real photo gallery */}
      <GradientField gradient={impactsGradients.forestCharcoal}>
        <GalleryLayout maxWidth="1600px">
          <div style={{ gridColumn: "1 / 13" }}>
            <Eyebrow>Exhibition</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
              DePaul Summer <span className="italic" style={{ color: accent }}>Showcase 2025</span>
            </h2>
          </div>
          <div style={{ gridColumn: "1 / 8", marginTop: "2rem" }}>
            <ImageFrame src="/img/coac/exhibition-room.jpg" alt="Exhibition room at DePaul" aspect="4/3" objectFit="contain" caption="Full exhibition space — visitors experiencing the installation first-hand" />
          </div>
          <div style={{ gridColumn: "8 / 13", marginTop: "5rem" }}>
            <ImageFrame src="/img/coac/marketing-materials.jpg" alt="Exhibition marketing materials" aspect="2.58/1" objectFit="contain" caption="Research materials designed to extend the conversation beyond the room" />
          </div>
          <div style={{ gridColumn: "1 / 6" }}>
            <ImageFrame src="/img/coac/video-wall.jpg" alt="Cost of a Click video wall at DePaul exhibition" aspect="3/4" objectFit="contain" caption="&ldquo;Cost of a Click&rdquo; video wall — exhibition room centrepiece" />
          </div>
          <div style={{ gridColumn: "6 / 13" }}>
            <ImageFrame src="/img/coac/team-showcase.jpg" alt="The full team of 6 at DePaul Summer Showcase" aspect="4/3" objectFit="contain" caption="The full team at DePaul Summer Showcase 2025" />
          </div>
        </GalleryLayout>
      </GradientField>

      {/* 11 — Viral video */}
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

      {/* 12 — Impact: 3 stats */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Impact</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            Numbers that <span className="italic" style={{ color: accent }}>moved people.</span>
          </h2>
        </div>
        {[
          { n: "85%", label: "Awareness Increase", desc: "Of participants reported changed awareness of AI's environmental footprint after interacting with the installation.", color: accent },
          { n: "73%", label: "Behaviour Change Intent", desc: "Committed to more mindful AI usage — specifically reducing unnecessary or casual queries.", color: gold },
          { n: "30%", label: "More Informed Usage", desc: "Increase in self-reported informed decision-making about when to use AI tools.", color: moss },
        ].map((s, i) => (
          <div key={s.label} className="rounded-2xl p-8 text-center" style={{ gridColumn: `${1 + i * 4} / ${5 + i * 4}`, ...tintedGlass(s.color, 0.08) }}>
            <p className="font-[family-name:var(--font-display)] font-semibold text-6xl" style={{ color: s.color }}>{s.n}</p>
            <p className="mt-3 text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-[var(--color-ink)]">{s.label}</p>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </EditorialLayout>

      {/* 13 — Recognition track */}
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

      {/* 14 — Key Takeaways */}
      <EditorialLayout maxWidth="1440px">
        <div style={{ gridColumn: "1 / 13" }}>
          <Eyebrow>Key Takeaways</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-semibold text-4xl md:text-5xl leading-[1.02] text-[var(--color-ink)]">
            What this project <span className="italic" style={{ color: accent }}>taught me.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridColumn: "1 / 13" }}>
          {takeaways.map((t, i) => (
            <div key={t.title} className="rounded-2xl p-6" style={tintedGlass(i % 2 === 0 ? accent : gold, 0.07)}>
              <span className="text-2xl">{t.icon}</span>
              <p className="mt-3 font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-ink)]">
                {t.title} <span className="italic" style={{ color: i % 2 === 0 ? accent : gold }}>{t.em}</span>
              </p>
              <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">{t.text}</p>
              <p className="mt-3 text-xs font-semibold" style={{ color: i % 2 === 0 ? accent : gold }}>{t.stat}</p>
            </div>
          ))}
        </div>
      </EditorialLayout>

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
            <span style={{ color: gold }}>Next Project</span>
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
