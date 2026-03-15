import { GraduationCap, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const EducationSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" id="education">
      <div className="container px-0">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-10 sm:mb-14">
            Education
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl border bg-card p-5 sm:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-display font-semibold">
                Bachelor of Engineering in Computer Science
              </h3>
              <p className="text-primary font-semibold">K S Institute of Technology, Bengaluru</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Dec 2022 – Jun 2026 (Expected)
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-heading bg-primary/10 px-3 py-0.5 rounded-full">
                  CGPA: 8.2
                </span>
              </div>
            </div>
          </div>

          <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl border bg-card p-5 sm:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-display font-semibold">
                PCMB(Physics, Chemistry, Mathematics, Biology)
              </h3>
              <p className="text-primary font-semibold">Vishwachetana PU College, Davangere</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Aug 2020 - Apr 2022
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-heading bg-primary/10 px-3 py-0.5 rounded-full">
                  Percentage: 94.33%
                </span>
              </div>
            </div>
          </div>

          <div className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl border bg-card p-5 sm:p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-display font-semibold">
                Karnataka State Syllabus (SSLC)
              </h3>
              <p className="text-primary font-semibold">S.F.S High School, Kuknoor(Koppal)</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Jun 2019 – Aug 2020
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-heading bg-primary/10 px-3 py-0.5 rounded-full">
                  Percentage: 87.84%
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EducationSection;
