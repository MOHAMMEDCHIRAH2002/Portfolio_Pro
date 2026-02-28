import HeroSection from "@/components/sections/HeroSection";
import AtAGlanceSection from "@/components/sections/AtAGlanceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AtAGlanceSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
