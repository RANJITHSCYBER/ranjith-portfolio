"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { buildCategories } from "@/data/skills";

export function WhatIBuild() {
  return (
    <section className="container-lab py-24 md:py-32 border-t border-line-soft">
      <FadeIn>
        <div className="flex items-baseline justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">WHAT I BUILD</h2>
          <span className="font-mono-label text-[11px] text-text-muted">08 CATEGORIES</span>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 border-t border-l border-line-soft">
        {buildCategories.map((cat, i) => (
          <motion.div
            key={cat.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group border-r border-b border-line-soft p-8 md:p-10 hover:bg-bg-raised transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono-label text-xs text-text-faint">{cat.number}</span>
              <span className="w-2 h-2 rounded-full bg-line group-hover:bg-amber transition-colors" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-3">{cat.title}</h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 max-w-md">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono-label text-[10px] text-text-muted border border-line px-2 py-1 group-hover:border-cyan group-hover:text-cyan transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
