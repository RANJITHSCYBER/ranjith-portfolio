"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { freelance } from "@/data/freelance";

export function FreelanceSection() {
  return (
    <section className="container-lab py-24 md:py-32 border-t border-line-soft">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
        <div>
          <FadeIn>
            <span className="font-mono-label text-[11px] text-amber block mb-4">CLIENT WORK</span>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6">
              {freelance.headline.toUpperCase()}
            </h2>
            <p className="text-text-muted text-lg max-w-lg leading-relaxed">
              {freelance.summary}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-mono-label text-[11px] text-cyan mt-8">
              {freelance.note.toUpperCase()}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 gap-px bg-line-soft border border-line-soft h-fit">
          {freelance.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg p-8 md:p-10"
            >
              <p className="font-display text-5xl md:text-6xl text-amber mb-2">{stat.value}</p>
              <p className="font-mono-label text-[10px] text-text-muted">{stat.label.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
