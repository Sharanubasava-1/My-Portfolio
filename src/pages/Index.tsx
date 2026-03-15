import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main className="scroll-smooth">
        <HeroSection />
        <ResumeSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificateSection />
        <ContactSection />
      </main>

      <footer className="py-8 border-t border-border/50 bg-surface/50">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground px-4 sm:px-6">
          <p>© 2026 SharanuBasava Aradhya</p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/sharanu05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sharanubasava-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:sharanuaradhya0511@gmail.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
