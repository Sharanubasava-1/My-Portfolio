import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            View my detailed professional experience, education, and skills in a
            single document. You can read it directly here or download it for
            later.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="mt-4">
                View Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden">
              <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50">
                <DialogTitle>My Resume</DialogTitle>
              </DialogHeader>
              <div className="w-full h-full">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full"
                  title="Resume PDF"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ResumeSection;
