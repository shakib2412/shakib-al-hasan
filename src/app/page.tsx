import HeroSection from "@/components/sections/HeroSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Achievements from "@/components/sections/Achievements";
import InterestsSection from "@/components/sections/InterestsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <Achievements />
      <InterestsSection />
      <ContactSection />
    </div>
  );
}
