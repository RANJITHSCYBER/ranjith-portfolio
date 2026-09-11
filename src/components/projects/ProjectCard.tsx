"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onOpen,
  className = "",
  index,
}: {
  project: Project;
  onOpen: () => void;
  className?: string;
  index: number;
}) {
  const statusColor =
    project.status === "Shipped"
      ? "bg-ok"
      : project.status === "Testing"
      ? "bg-cyan"
      : "bg-amber";

  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="interactive"
      data-cursor-label="VIEW PROJECT"
      className={`group text-left relative overflow-hidden border border-line-soft ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-raised">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <Image
            src={project.image}
            alt={`${project.title} — project preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColor}`} />
          <span className="font-mono-label text-[10px] text-text bg-bg/70 px-2 py-1 backdrop-blur-sm">
            {project.status.toUpperCase()}
          </span>
        </div>
        <span className="absolute top-4 right-4 font-mono-label text-[11px] text-text-muted bg-bg/70 px-2 py-1 backdrop-blur-sm">
          {project.number}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-mono-label text-[10px] text-cyan mb-2">{project.category.toUpperCase()}</p>
          <h3 className="font-display text-2xl md:text-3xl text-text">{project.title}</h3>
        </div>
      </div>
    </motion.button>
  );
}
