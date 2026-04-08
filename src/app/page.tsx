import HeroSection from "@/components/sections/HeroSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import Achievements from "@/components/sections/Achievements";
import InterestsSection from "@/components/sections/InterestsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <AboutSection />
      <Achievements />
      <InterestsSection />
      <ContactSection />
    </div>
  );
}
