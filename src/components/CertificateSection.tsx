import { Award, Link as LinkIcon, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certificates = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Mar 2025",
    link: "#",
  },
  {
    title: "Java Essentials",
    issuer: "Infosys Springboard",
    date: "Jan 2024",
    link: "#",
  },
];

const CertificateSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface px-4 sm:px-6" id="certificates">
      <div className="container relative z-10 px-0">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-heading">
              Certifications
            </h2>
            <div className="h-[2px] w-16 bg-primary rounded-full"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group flex flex-col gap-4 rounded-2xl border border-border/50 bg-card p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between relative z-10 w-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  {cert.link && cert.link.startsWith("http") && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                      title="View Certificate"
                    >
                      <LinkIcon className="w-4 h-4 text-primary" />
                    </a>
                  )}
                </div>

                <div className="space-y-2 mt-2 relative z-10">
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                </div>

                <div className="mt-auto pt-2 flex items-center text-sm text-muted-foreground relative z-10">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificateSection;
