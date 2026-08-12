"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { navLinks, socials, site } from "@/data/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container-lab">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "bg-bg-raised/90 backdrop-blur border border-line px-4 py-2.5"
                : "px-0 py-0"
            }`}
          >
            <a
              href="#top"
              className="font-mono-label text-xs md:text-sm tracking-widest"
              data-cursor="interactive"
              onClick={() => window.dispatchEvent(new Event("logo-click"))}
            >
              [ {site.name.toUpperCase()} ]
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono-label text-[11px] text-text-muted hover:text-amber transition-colors"
                  data-cursor="interactive"
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-cursor="interactive"
                className="w-9 h-9 grid place-items-center border border-line hover:border-amber transition-colors"
              >
                <Github size={15} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-cursor="interactive"
                className="w-9 h-9 grid place-items-center border border-line hover:border-amber transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#contact"
                data-cursor="interactive"
                className="font-mono-label text-[11px] border border-amber text-amber px-4 py-2.5 hover:bg-amber hover:text-bg transition-colors"
              >
                CONTACT
              </a>
            </div>

            <button
              className="md:hidden w-9 h-9 grid place-items-center border border-line"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-bg md:hidden"
          >
            <div className="container-lab pt-6 flex justify-between items-center">
              <span className="font-mono-label text-xs">[ {site.name.toUpperCase()} ]</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 grid place-items-center border border-line"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="container-lab mt-16 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-4xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-lab mt-12 flex gap-4">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="font-mono-label text-[11px] border border-line px-4 py-2.5">
                GITHUB
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono-label text-[11px] border border-line px-4 py-2.5">
                LINKEDIN
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
