"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="container-lab py-24 md:py-32 border-t border-line-soft">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden border border-line-soft bracket">
            <Image
              src="/images/portrait.jpg"
              alt="Ranjith S - Mechatronics & Robotics Engineer"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <span className="font-mono-label text-[11px] text-amber block mb-4">06 / ABOUT</span>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mb-8">
              ENGINEER.
              <br />
              BUILDER.
              <br />
              EXPERIMENTER.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-text-muted leading-relaxed mb-6 max-w-xl">
              I&apos;m interested in the space where mechanical systems, electronics and
              software meet. Most of what I build lives across all three at once — a
              circuit is only useful once it moves something, and code only matters
              once it controls something real.
            </p>
            <p className="text-text-muted leading-relaxed mb-10 max-w-xl">
              My background is in mechatronics, robotics, embedded systems, IoT and
              automation. I enjoy turning a rough concept into a physical prototype
              I can actually test — then testing it until it breaks, and rebuilding
              it until it doesn&apos;t.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {["Mechatronics", "Robotics", "Embedded Systems", "IoT", "Automation"].map((t) => (
                <span key={t} className="font-mono-label text-[10px] border border-line px-3 py-1.5 text-text-muted">
                  {t.toUpperCase()}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
