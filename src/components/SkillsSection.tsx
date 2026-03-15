import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  { label: "Languages", skills: ["Core Java", "JavaScript", "Python"] },
  { label: "Frontend", skills: ["React.js", "HTML5", "CSS3"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Flask"] },
  { label: "Databases", skills: ["MySQL", "MongoDB"] },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Docker", "Firebase", "Postman"],
  },
  { label: "AI/ML", skills: ["TensorFlow", "OpenCV", "NumPy", "CNN"] },
  {
    label: "Core Concepts",
    skills: ["DSA", "OOP", "DBMS", "SDLC", "API Design"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface px-4 sm:px-6" id="skills">
      <div className="container px-0">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-10 sm:mb-14">
            Skills & Technologies
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.label} delay={i * 0.06}>
              <div className="space-y-3">
                <h3 className="text-xs font-display font-bold uppercase tracking-widest text-primary">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-background border text-foreground font-medium hover:border-primary hover:text-primary hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
