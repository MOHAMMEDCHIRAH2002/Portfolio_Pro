import HeroSection from "@/components/sections/HeroSection";
import AtAGlanceSection from "@/components/sections/AtAGlanceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      {/* Home page decorative background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Top-left warm accent glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent_70%)] blur-3xl" />
        {/* Bottom-right subtle glow */}
        <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[45%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.02),transparent_65%)] blur-3xl" />
        {/* Center soft ambient */}
        <div className="absolute top-[30%] left-[40%] w-[35%] h-[30%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.008),transparent_70%)] blur-2xl" />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <AtAGlanceSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
