import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectRow from "@/components/ProjectRow";
import PrinciplesRow from "@/components/PrinciplesRow";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="wrap py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold">
              Projects
            </h2>
            <p className="mt-3 text-[var(--color-ink-muted)] max-w-[52ch]">
              A selection of research and design projects exploring the
              intersection of humans and AI.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-green)] transition-transform hover:translate-x-1"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-4">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <PrinciplesRow />
    </>
  );
}
