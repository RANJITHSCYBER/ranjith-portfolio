import { navLinks, socials, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="container-lab py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-mono-label text-sm mb-2">{site.name.toUpperCase()}</p>
          <p className="text-text-muted text-sm">Mechatronics • Robotics • Embedded Systems</p>
        </div>
        <div>
          <p className="font-mono-label text-[10px] text-text-faint mb-4">NAVIGATION</p>
          <div className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-text-muted hover:text-amber transition-colors text-sm w-fit">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono-label text-[10px] text-text-faint mb-4">SOCIAL</p>
          <div className="flex flex-col gap-2">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-amber transition-colors text-sm w-fit">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-amber transition-colors text-sm w-fit">
              LinkedIn
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-amber transition-colors text-sm w-fit">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="container-lab py-6 border-t border-line-soft flex flex-col md:flex-row justify-between gap-2 font-mono-label text-[10px] text-text-faint">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Built with curiosity + code.</span>
      </div>
    </footer>
  );
}
