"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-lab py-24 md:py-32 border-t border-line-soft">
      <FadeIn>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4">CAPABILITIES</h2>
        <p className="text-text-muted text-lg max-w-xl mb-14">
          Tap a category to see what&apos;s inside.
        </p>
      </FadeIn>

      <div className="border-t border-line-soft">
        {skillCategories.map((cat, i) => {
          const open = openIndex === i;
          return (
            <div key={cat.title} className="border-b border-line-soft">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                data-cursor="interactive"
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
              >
                <span className="flex items-center gap-4 md:gap-8">
                  <span className="font-mono-label text-xs text-text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl md:text-4xl group-hover:text-amber transition-colors">
                    {cat.title}
                  </span>
                </span>
                <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
                  <Plus size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 pb-8 pl-0 md:pl-16">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono-label text-[11px] border border-line px-3 py-2 text-text-muted hover:border-cyan hover:text-cyan transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
