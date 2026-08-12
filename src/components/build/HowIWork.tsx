"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { process } from "@/data/skills";

export function HowIWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="container-lab py-24 md:py-32 border-t border-line-soft">
      <FadeIn>
        <span className="font-mono-label text-[11px] text-amber block mb-4">04 / PROCESS</span>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-16">HOW I WORK</h2>
      </FadeIn>

      <div ref={ref} className="relative max-w-2xl">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line-soft" aria-hidden="true" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-[15px] top-2 bottom-2 w-px bg-amber origin-top"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-10">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="relative pl-12"
            >
              <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-bg border border-line-soft grid place-items-center font-mono-label text-[10px] text-text-muted">
                {step.number}
              </span>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="text-text-muted text-sm mt-1">{step.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
