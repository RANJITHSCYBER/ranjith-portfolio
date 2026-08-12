"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reducedMotion) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        setExpanded(true);
        setLabel(cursorEl.getAttribute("data-cursor-label"));
      } else {
        setExpanded(false);
        setLabel(null);
      }
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: expanded ? (label ? 88 : 52) : 8,
          height: expanded ? (label ? 88 : 52) : 8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="rounded-full bg-[var(--text)] flex items-center justify-center"
      >
        {label && (
          <span className="font-mono-label text-[9px] text-bg text-center leading-tight px-1">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
