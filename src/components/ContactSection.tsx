import { useState } from "react";
import { Send, Mail, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Require EmailJS to be configured for sending
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      console.error("EmailJS env vars are missing. Please configure SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY.");
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      emailjs.init(PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        reply_to: email,
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface/80" id="contact">
      <div className="container px-4 sm:px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-heading">
              Get in touch
            </h2>
            <div className="h-[2px] w-16 bg-primary rounded-full shrink-0" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Name
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="bg-background/80 border-border h-11 rounded-xl"
                  disabled={status === "sending"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-background/80 border-border h-11 rounded-xl"
                  disabled={status === "sending"}
                />
              </div>
              {status === "success" && (
                <p className="text-sm text-green-500">Thanks! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full sm:w-auto rounded-xl h-11 px-6 font-semibold"
              >
                {status === "sending" ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit
                  </>
                )}
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
