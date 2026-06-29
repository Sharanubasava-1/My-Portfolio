import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <AnimatedSection>
      <section
        id="resume"
        className="py-16 sm:py-24 bg-surface/50 border-y border-border/50"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my detailed professional experience, education, and skills in a
            single document to review at your convenience.
          </p>

          <Button size="lg" className="mt-4" asChild>
            <a href="/C:\Users\LENOVO\Downloads\Sharanu_Basava_Salesforce_AMTS.docx" download="Resume.docx">
              Download Resume
            </a>
          </Button>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ResumeSection;
