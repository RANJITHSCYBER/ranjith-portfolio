"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["HARDWARE", "SOFTWARE", "ROBOTICS", "SYSTEM READY"];

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(true);
      return;
    }
    const start = performance.now();
    const duration = 1400;
    let raf: number;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setProgress(Math.round(t * 100));
      setStep(Math.min(STEPS.length - 1, Math.floor(t * STEPS.length)));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[90] bg-bg flex flex-col items-center justify-center px-6"
        >
          <div className="w-full max-w-sm">
            <p className="font-mono-label text-[11px] text-text-muted mb-6">
              INITIALIZING SYSTEM...
            </p>
            <div className="space-y-1.5 mb-8">
              {STEPS.map((s, i) => (
                <div
                  key={s}
                  className="font-mono-label text-[11px] flex items-center gap-3"
                >
                  <span className={i <= step ? "text-amber" : "text-text-faint"}>
                    0{i + 1}
                  </span>
                  <span className={i <= step ? "text-text" : "text-text-faint"}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-[2px] bg-line-soft w-full overflow-hidden">
              <motion.div
                className="h-full bg-amber"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-mono-label text-[11px] text-text-muted mt-2">
              SYSTEM BOOT — {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
