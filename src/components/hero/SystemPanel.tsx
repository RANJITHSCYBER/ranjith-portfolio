"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { freelance } from "@/data/freelance";

const metrics = [
  { value: String(projects.length), label: "Builds documented" },
  { value: freelance.stats[0].value, label: "Clients delivered" },
  { value: freelance.stats[1].value, label: "Projects completed" },
];

export function SystemPanel() {
  return (
    <div className="w-full max-w-sm border border-line-soft bg-bg-raised/40 backdrop-blur-sm">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line-soft">
        <span className="font-mono-label text-[10px] text-text-muted">SYSTEM STATUS</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ok" />
          <span className="font-mono-label text-[10px] text-ok">ONLINE</span>
        </span>
      </div>
      <div className="divide-y divide-line-soft">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            className="flex items-center justify-between px-5 py-4"
          >
            <span className="font-mono-label text-[10px] text-text-muted">{m.label.toUpperCase()}</span>
            <span className="font-display text-2xl text-amber">{m.value}</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-3 border-t border-line-soft">
        <span className="font-mono-label text-[9px] text-text-faint">
          MECHANICAL · ELECTRONICS · SOFTWARE · AI
        </span>
      </div>
    </div>
  );
}
