import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpeg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] sm:min-h-[90vh] flex items-center relative overflow-hidden px-4 sm:px-6">
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container relative w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text - 3 cols */}
          <motion.div
            className="lg:col-span-3 space-y-5 text-center lg:text-left order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border bg-surface px-4 py-1.5 text-xs font-medium text-primary mx-auto lg:mx-0"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Opportunities
            </motion.div>

            <motion.h1
              variants={item}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
            >
              SharanuBasava Aradhya
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-text-body max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Full Stack Engineer crafting scalable web apps with Java, React &
              Node.js - passionate about building reliable, high-performance
              software.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start pt-1"
            >
              <a
                href="mailto:sharanuaradhya0511@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />{" "}
                sharanuaradhya0511@gmail.com
              </a>
              <a
                href="tel:+919632984802"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" /> +91 9632984802
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/sharanu05/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 touch-manipulation"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/Sharanubasava-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 touch-manipulation"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Photo - 2 cols */}
          <motion.div
            className="lg:col-span-2 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 ring-1 ring-border group-hover:shadow-primary/25 transition-shadow duration-500">
                <img
                  src={profileImage}
                  alt="SharanuBasava Aradhya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -z-10 top-3 left-3 sm:top-5 sm:left-5 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5" />
              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-background rounded-2xl shadow-lg border px-3 py-2 sm:px-4 sm:py-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-xs font-medium text-muted-foreground">
                  CGPA
                </p>
                <p className="text-lg sm:text-xl font-display font-bold text-primary">
                  8.2
                </p>
              </motion.div>
              <motion.div
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-background rounded-2xl shadow-lg border px-3 py-2 sm:px-4 sm:py-2.5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-xs font-medium text-muted-foreground">
                  Projects
                </p>
                <p className="text-lg sm:text-xl font-display font-bold text-heading">
                  2+
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
