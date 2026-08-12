import { Loader } from "@/components/ui/Loader";
import { StarField } from "@/components/ui/StarField";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Terminal } from "@/components/ui/Terminal";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/navigation/Footer";
import { Hero } from "@/components/hero/Hero";
import { Introduction } from "@/components/build/Introduction";
import { WhatIBuild } from "@/components/build/WhatIBuild";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { LabSection } from "@/components/lab/LabSection";
import { SkillsSection } from "@/components/lab/SkillsSection";
import { HowIWork } from "@/components/build/HowIWork";
import { Journey } from "@/components/build/Journey";
import { FreelanceSection } from "@/components/build/FreelanceSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <StarField />
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Terminal />
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <WhatIBuild />
        <ProjectsSection />
        <LabSection />
        <SkillsSection />
        <HowIWork />
        <Journey />
        <FreelanceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
