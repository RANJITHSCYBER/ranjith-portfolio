"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { labTools } from "@/data/skills";

export function LabSection() {
  return (
    <section id="lab" className="container-lab py-24 md:py-32 border-t border-line-soft">
      <FadeIn>
        <span className="font-mono-label text-[11px] text-amber block mb-4">03 / LAB</span>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4">THE LAB</h2>
        <p className="text-text-muted text-lg max-w-xl mb-14">
          A digital workbench of the tools and technologies I reach for.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-px bg-line-soft border border-line-soft">
        {labTools.map((group, gi) => (
          <div key={group.group} className="bg-bg p-8">
            <p className="font-mono-label text-[10px] text-cyan mb-5">{group.group.toUpperCase()}</p>
            <div className="flex flex-col gap-1">
              {group.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 + i * 0.04 }}
                  whileHover={{ x: 6 }}
                  className="font-display text-lg md:text-xl py-1.5 cursor-default hover:text-amber transition-colors"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
