import { Calendar, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ExperienceSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface px-4 sm:px-6" id="experience">
      <div className="container px-0">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-10 sm:mb-14">
            Experience
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-surface" />
            <div className="rounded-2xl border bg-background p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                <h3 className="text-xl font-display font-semibold">Intern</h3>
                <span className="text-primary font-semibold">@ Intrainz</span>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-muted-foreground mb-5">
                <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Nov 2023 – Jan 2024</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Bengaluru, Karnataka</span>
              </div>
              <ul className="space-y-3 text-text-body text-sm sm:text-base">
                {[
                  "Developed and optimized interactive web pages using HTML, CSS, and JavaScript, ensuring responsiveness across devices.",
                  "Collaborated with team members using Git for version control and workflow management.",
                  "Improved front-end performance by 20% through efficient code structuring and optimization.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
