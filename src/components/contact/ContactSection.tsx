"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Instagram, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site, socials } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Name is required.";
    if (!email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (!message) next.message = "Tell me a bit about the project.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    setStatus("loading");
    // TODO: wire this up to a real backend — Resend, Formspree, or EmailJS
    // all work well with a static Next.js export. Until then, this only
    // simulates a submission so the UI states are testable.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="container-lab py-24 md:py-32 border-t border-line-soft">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <FadeIn>
            <span className="font-mono-label text-[11px] text-amber block mb-4">07 / CONTACT</span>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6">
              LET&apos;S BUILD
              <br />
              SOMETHING.
            </h2>
            <p className="text-text-muted text-lg max-w-md mb-10">
              Have a project, collaboration, robotics idea or engineering problem?
              Let&apos;s talk.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                as="a"
                href={`mailto:${site.email}`}
                data-cursor="interactive"
                className="font-mono-label text-xs border border-amber text-amber px-5 py-3 inline-flex items-center gap-2 hover:bg-amber hover:text-bg transition-colors"
              >
                <Mail size={14} /> EMAIL ME
              </MagneticButton>
              <MagneticButton
                as="a"
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="interactive"
                className="font-mono-label text-xs border border-line px-5 py-3 inline-flex items-center gap-2 hover:border-text transition-colors"
              >
                <Github size={14} /> GITHUB
              </MagneticButton>
              <MagneticButton
                as="a"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="interactive"
                className="font-mono-label text-xs border border-line px-5 py-3 inline-flex items-center gap-2 hover:border-text transition-colors"
              >
                <Linkedin size={14} /> LINKEDIN
              </MagneticButton>
              <MagneticButton
                as="a"
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="interactive"
                className="font-mono-label text-xs border border-line px-5 py-3 inline-flex items-center gap-2 hover:border-text transition-colors"
              >
                <Instagram size={14} /> INSTAGRAM
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          {status === "success" ? (
            <div className="border border-line-soft p-10 flex flex-col items-center text-center gap-4 h-full justify-center">
              <CheckCircle2 className="text-ok" size={32} />
              <p className="font-display text-2xl">Message drafted.</p>
              <p className="text-text-muted text-sm max-w-xs">
                This form isn&apos;t wired to a backend yet — connect Resend,
                Formspree or EmailJS to send this for real.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="font-mono-label text-[11px] text-amber mt-2"
              >
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <div>
                <label htmlFor="projectType" className="font-mono-label text-[10px] text-text-muted block mb-2">
                  PROJECT TYPE
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full bg-transparent border border-line px-4 py-3 font-body text-sm focus-visible:outline-2 focus-visible:outline-amber"
                >
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance">Freelance / paid work</option>
                  <option value="mentorship">Mentorship / advice</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="font-mono-label text-[10px] text-text-muted block mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border border-line px-4 py-3 font-body text-sm resize-none focus-visible:outline-2 focus-visible:outline-amber"
                  placeholder="What are you building, or what do you want to build?"
                />
                {errors.message && <p className="text-amber text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                data-cursor="interactive"
                className="font-mono-label text-xs bg-amber text-bg px-6 py-4 inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> SENDING...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono-label text-[10px] text-text-muted block mb-2">
        {label.toUpperCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent border border-line px-4 py-3 font-body text-sm focus-visible:outline-2 focus-visible:outline-amber"
      />
      {error && <p className="text-amber text-xs mt-1.5">{error}</p>}
    </div>
  );
}
