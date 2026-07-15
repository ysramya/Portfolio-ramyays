import type { Metadata } from "next";
import AboutPortrait from "./AboutPortrait";

export const metadata: Metadata = {
  title: "About — Ramya Yerramilli",
  description: "How I think, and what shaped my journey as a designer.",
};

const paragraphs = [
  "I started my career designing spaces, but somewhere along the way I became more interested in the people moving through them than the spaces themselves. During my first master's in Design Management & Entrepreneurship, I discovered design thinking, service design, and the idea that great design isn't just about aesthetics—it's about understanding people, systems, and the experiences they create. That realization completely changed the direction of my career.",
  "Over the next six years, I led residential and commercial design projects, collaborating with clients, contractors, and cross-functional teams to bring complex ideas to life. In 2024, I moved to Chicago to pursue a second master's in Human–Computer Interaction at DePaul University. Today, I work at the intersection of research, design, and AI, exploring how emerging technologies can be more intuitive, trustworthy, and human-centered. My work spans healthcare, finance, and responsible AI, where I'm equally excited by asking the right questions as I am by designing the solutions.",
  "Outside of work, you'll usually find me behind a camera, creating digital paintings, or experimenting in the kitchen. Different mediums, same curiosity—observing, exploring, and making. That's probably the thread connecting everything I do.",
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 md:gap-16 lg:gap-20 items-center px-6"
        style={{ maxWidth: "1400px", padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)" }}
      >
        <AboutPortrait src="/img/profile/ramya.jpg" alt="Portrait of Ramya Yerramilli" />

        <div style={{ maxWidth: "700px" }}>
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[var(--color-green)]">
            About
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,5vw,4rem)] text-[var(--color-ink)]">
            Hi, I&rsquo;m Ramya.
          </h1>

          <div className="mt-8 flex flex-col gap-6">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-[1.85] text-[var(--color-ink-muted)]"
                style={{
                  animation: `about-rise 0.9s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.15}s both`,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* transform-only — never opacity, so text can never get stuck invisible
          if an animation somehow fails to complete */}
      <style>{`
        @keyframes about-rise {
          from { transform: translateY(16px); }
          to { transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
