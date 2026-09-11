"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const HELP = [
  "Available commands:",
  "  about      — who is this",
  "  projects   — list builds",
  "  skills     — core stack",
  "  contact    — how to reach me",
  "  github     — open GitHub",
  "  clear      — clear the screen",
  "  exit       — close terminal",
];

function run(cmd: string): string[] {
  switch (cmd.trim().toLowerCase()) {
    case "help":
      return HELP;
    case "about":
      return ["Ranjith S — Mechatronics & Robotics Engineer.", "Builds hardware, firmware, and the software that ties them together."];
    case "projects":
      return [`${projects.length} builds logged:`, ...projects.map((p) => `  ${p.number} — ${p.title}`)];
    case "skills":
      return ["Embedded Systems, Robotics, IoT, Programming, AI/ML, CAD/Fabrication, Electronics, Automation"];
    case "contact":
      return ["Scroll to the Contact section, or use the email/social links in the footer."];
    case "github":
      return ["Opening GitHub in a new tab..."];
    case "system.status()":
      return ["SYSTEM ONLINE"];
    case "projects.count()":
      return [String(projects.length).padStart(2, "0")];
    case "coffee.level()":
      return ["UNKNOWN"];
    case "":
      return [];
    default:
      return [`command not found: ${cmd}`, `type 'help' for a list of commands`];
  }
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>(["SYSTEM ONLINE", "type 'help' to get started"]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const clickCount = useRef(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (e.key.toLowerCase() === "l" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onLogoClick() {
      clickCount.current += 1;
      if (clickCount.current >= 5) {
        setOpen(true);
        clickCount.current = 0;
      }
      setTimeout(() => {
        clickCount.current = 0;
      }, 1200);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("logo-click", onLogoClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("logo-click", onLogoClick);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim();
    if (cmd.toLowerCase() === "clear") {
      setLines([]);
    } else if (cmd.toLowerCase() === "exit") {
      setOpen(false);
    } else {
      const output = run(cmd);
      setLines((prev) => [...prev, `> ${cmd}`, ...output]);
      if (cmd.toLowerCase() === "github") {
        window.open("https://github.com", "_blank");
      }
    }
    setInput("");
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-[85] w-[92vw] max-w-md bg-bg-raised border border-line font-mono-label text-[11px] shadow-2xl"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-line-soft">
            <span className="text-text-muted">engineering-terminal</span>
            <button onClick={() => setOpen(false)} aria-label="Close terminal" className="text-text-muted hover:text-amber">
              ×
            </button>
          </div>
          <div className="p-4 h-56 overflow-y-auto flex flex-col gap-1">
            {lines.map((l, i) => (
              <p key={i} className={l.startsWith(">") ? "text-cyan" : "text-text-muted"}>
                {l}
              </p>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-line-soft">
            <span className="text-amber">{">"}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-text"
              aria-label="Terminal command input"
              autoComplete="off"
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
