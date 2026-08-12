"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[95] bg-bg overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-line-soft">
          <div className="container-lab flex items-center justify-between py-4">
            <span className="font-mono-label text-[11px] text-text-muted">
              {project.number} — {project.title.toUpperCase()}
            </span>
            <button
              onClick={onClose}
              aria-label="Close case study"
              data-cursor="interactive"
              className="w-9 h-9 grid place-items-center border border-line hover:border-amber transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="container-lab py-12 md:py-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start mb-12">
            <div>
              <p className="font-mono-label text-[11px] text-amber mb-4">{project.category.toUpperCase()}</p>
              <h1 className="font-display text-4xl md:text-7xl tracking-tight leading-[0.95]">
                {project.title}
              </h1>
            </div>
            <div className="font-mono-label text-[11px] text-text-muted space-y-2 md:text-right">
              <p>YEAR — {project.year}</p>
              <p>STATUS — {project.status.toUpperCase()}</p>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-16 overflow-hidden border border-line-soft">
            <Image src={project.image} alt={`${project.title} hero`} fill sizes="100vw" className="object-cover" priority />
          </div>

          {project.specs && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line-soft mb-16">
              {project.specs.map((s) => (
                <div key={s.label} className="bg-bg p-6 md:p-8">
                  <p className="font-display text-2xl md:text-4xl mb-1">{s.value}</p>
                  <p className="font-mono-label text-[10px] text-text-muted">{s.label.toUpperCase()}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-16">
            <div className="md:col-span-2 space-y-10">
              <Block title="Overview" text={project.longDescription} />
              {project.problem && <Block title="Problem" text={project.problem} />}
              {project.approach && <Block title="Approach" text={project.approach} />}
              {project.challenges && <Block title="Challenges" text={project.challenges} />}
              {project.result && <Block title="Result" text={project.result} />}
              {project.learnings && <Block title="Learnings" text={project.learnings} />}
            </div>

            <div className="space-y-10">
              {project.hardware.length > 0 && <TagBlock title="Hardware" items={project.hardware} />}
              {project.software.length > 0 && <TagBlock title="Software" items={project.software} />}
              {project.features.length > 0 && <TagBlock title="Features" items={project.features} />}

              <div className="flex flex-col gap-3 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="interactive"
                    className="font-mono-label text-[11px] border border-line px-4 py-3 flex items-center justify-between hover:border-amber transition-colors"
                  >
                    GITHUB <Github size={14} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="interactive"
                    className="font-mono-label text-[11px] border border-line px-4 py-3 flex items-center justify-between hover:border-amber transition-colors"
                  >
                    LIVE DEMO <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {project.architecture.length > 0 && (
            <div className="mb-16">
              <h3 className="font-mono-label text-[11px] text-amber mb-6">SYSTEM ARCHITECTURE</h3>
              <div className="flex flex-col gap-0 border border-line-soft">
                {project.architecture.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 px-5 py-4 border-b border-line-soft last:border-b-0"
                  >
                    <span className="font-mono-label text-[10px] text-text-faint w-6">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-mono-label text-xs md:text-sm">{step}</span>
                    {i < project.architecture.length - 1 && (
                      <ArrowRight size={12} className="ml-auto text-text-faint" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-mono-label text-[11px] text-amber mb-6">GALLERY</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {project.gallery.map((src, i) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden border border-line-soft">
                  <Image src={src} alt={`${project.title} gallery ${i + 1}`} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-mono-label text-[11px] text-amber mb-3">{title.toUpperCase()}</h3>
      <p className="text-text-muted leading-relaxed">{text}</p>
    </div>
  );
}

function TagBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono-label text-[11px] text-amber mb-3">{title.toUpperCase()}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="font-mono-label text-[10px] border border-line px-2.5 py-1.5 text-text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
