"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { site, socials } from "@/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Laptop } from "@/components/hero/Laptop";

const LINES = ["I BUILD", "INTELLIGENT", "MACHINES."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // As the hero scrolls out of view, the headline eases back and fades —
  // a subtle cinematic exit rather than an abrupt cut.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} id="top" className="relative min-h-[100svh] overflow-hidden">
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
        className="container-lab pt-16 md:pt-24 pb-16 relative z-10 will-change-transform"
      >
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-center">
          <h1 className="font-display font-medium leading-[0.92] tracking-tight text-[15vw] md:text-[8vw] lg:text-[7.2rem]">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${i === LINES.length - 1 ? "text-amber" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block h-[400px] w-[400px]"
          >
            <Laptop />
          </motion.div>
        </div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-xl text-lg md:text-xl text-text-muted"
          >
            {site.role} — {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-2 font-mono-label text-[10px] text-text-muted"
          >
            {["MECHATRONICS", "ROBOTICS", "EMBEDDED SYSTEMS", "IoT"].map((t) => (
              <span key={t} className="border border-line px-2.5 py-1">
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#work"
            className="font-mono-label text-xs bg-amber text-bg px-6 py-3.5 inline-block"
          >
            EXPLORE MY WORK
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="font-mono-label text-xs border border-line px-6 py-3.5 inline-block hover:border-text transition-colors"
          >
            CONTACT ME
          </MagneticButton>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="font-mono-label text-xs text-text-muted hover:text-text inline-flex items-center gap-2 px-2 py-3.5"
          >
            <Github size={14} /> VIEW GITHUB
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a href="#intro" className="flex flex-col items-center gap-2 text-text-faint" data-cursor="interactive">
          <span className="font-mono-label text-[10px]">SCROLL</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={14} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
