import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { socials } from "@/data/site";

export function ContactSection() {

  return (
    <section id="contact" className="container-lab py-24 md:py-32 border-t border-line-soft">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="font-mono-label text-[11px] text-amber block mb-4">07 / CONTACT</span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6">
            LET&apos;S BUILD
            <br />
            SOMETHING.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10">
            Have a project, collaboration, robotics idea or engineering problem?
            Let&apos;s talk.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 justify-center">
            <MagneticButton
              as="a"
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="font-mono-label text-xs border border-[#25D366] text-[#25D366] px-5 py-3 inline-flex items-center gap-2 hover:bg-[#25D366] hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WHATSAPP
            </MagneticButton>
            <MagneticButton
              as="a"
              href={socials.gmail}
              data-cursor="interactive"
              className="font-mono-label text-xs border border-amber text-amber px-5 py-3 inline-flex items-center gap-2 hover:bg-amber hover:text-bg transition-colors"
            >
              <Mail size={14} /> GMAIL
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
    </section>
  );
}
