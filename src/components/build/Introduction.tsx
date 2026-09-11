"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function Introduction() {
  return (
    <section id="intro" className="container-lab py-28 md:py-40 border-t border-line-soft">
      <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
        <FadeIn>
          <span className="font-mono-label text-[11px] text-amber block">01 / INTRO</span>
        </FadeIn>
        <div>
          <FadeIn>
            <p className="font-display text-3xl md:text-6xl leading-[1.1] tracking-tight max-w-4xl">
              I don&apos;t just learn technology. I build with it.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed">
              I work across hardware and software — from microcontrollers and sensors to
              robots, drones, IoT systems and intelligent automation. Every build starts
              on the bench, not in a slide deck.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
