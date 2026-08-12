"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { projects, type Project } from "@/data/projects";

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="container-lab py-24 md:py-32 border-t border-line-soft">
      <FadeIn>
        <div className="mb-16">
          <span className="font-mono-label text-[11px] text-amber block mb-4">02 / WORK</span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4">SELECTED BUILDS</h2>
          <p className="text-text-muted text-lg max-w-xl">
            Things I&apos;ve designed, built, tested, broken and rebuilt.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setActive(project)}
              className={project.size === "large" ? "md:col-span-2" : ""}
              index={i}
            />
          ))}
      </div>

      <FadeIn className="mt-10">
        <a
          href="#lab"
          data-cursor="interactive"
          className="font-mono-label text-[11px] text-text-muted hover:text-amber transition-colors"
        >
          SMALLER EXPERIMENTS LIVE IN THE LAB LOG →
        </a>
      </FadeIn>

      <AnimatePresence>
        {active && <ProjectDetail project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
