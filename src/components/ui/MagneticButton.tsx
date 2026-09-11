"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

const MOTION_TAGS = {
  button: motion.button,
  a: motion.a,
  div: motion.div,
} as const;

export function MagneticButton({
  children,
  className = "",
  as = "button",
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof MOTION_TAGS;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Comp = MOTION_TAGS[as] ?? motion.button;

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="inline-block"
      data-cursor="interactive"
    >
      <Comp
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
        className={className}
        {...props}
      >
        {children}
      </Comp>
    </div>
  );
}
