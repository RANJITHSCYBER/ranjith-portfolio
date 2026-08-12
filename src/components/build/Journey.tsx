"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { timeline } from "@/data/experience";

export function Journey() {
  return (
    <section id="journey" className="container-lab py-24 md:py-32 border-t border-line-soft">
      <FadeIn>
        <span className="font-mono-label text-[11px] text-amber block mb-4">05 / JOURNEY</span>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-16">EDUCATION &amp; BUILDS</h2>
      </FadeIn>

      <div className="flex flex-col">
        {timeline.map((entry, i) => (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            className="grid md:grid-cols-[100px_auto_1fr] gap-3 md:gap-8 py-7 border-b border-line-soft items-start"
          >
            <span className="font-mono-label text-[11px] text-text-faint">{entry.date}</span>
            <span
              className={`font-mono-label text-[10px] px-2 py-1 border w-fit ${
                entry.tag === "Education" ? "border-cyan text-cyan" : "border-amber text-amber"
              }`}
            >
              {entry.tag.toUpperCase()}
            </span>
            <div>
              <h3 className="font-display text-xl md:text-2xl">{entry.title}</h3>
              <p className="font-mono-label text-[10px] text-text-muted mt-1 mb-2">{entry.subtitle.toUpperCase()}</p>
              <p className="text-text-muted text-sm max-w-xl">{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
