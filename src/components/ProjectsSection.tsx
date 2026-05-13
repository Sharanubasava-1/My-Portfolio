import { Brain, ShoppingCart, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    icon: Brain,
    title: "AI-Driven Bone Cancer Detection",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    description: "Deep learning web app to detect bone cancer from X-ray images using CNN models with optimized preprocessing pipelines and real-time prediction.",
    color: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: ShoppingCart,
    title: "Full Stack E-Commerce Platform",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    description: "Engineered a complete MERN e-commerce application for groceries with cart, order management, and subscriptions. Integrated Razorpay for secure transactions and designed a scalable RESTful API with JWT authentication.",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
    demo: "https://full-stack-ecommerce-grocery-1.onrender.com/"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" id="projects">
      <div className="container px-0">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-10 sm:mb-14">
            Projects
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl border bg-card p-5 sm:p-7 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative flex-grow flex flex-col">
                  <div className={`w-11 h-11 rounded-xl bg-background border flex items-center justify-center mb-4 ${project.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-5 group/link w-fit"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
