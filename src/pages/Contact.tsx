import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Download,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/personal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import contactBanner from "@/assets/contact-banner.avif";

const Contact = () => {
  const whatsappMessage = "Hi Murari! I found your portfolio and would like to connect.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      {/* Banner Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactBanner}
            alt="Contact and communication"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              Get in Touch
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto px-4">
              Let's collaborate and create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                  <p className="text-muted-foreground text-lg">
                    Ready to bring your ideas to life? I'm here to help you build amazing digital experiences.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.02 }}
                    className="group flex items-center gap-4 p-6 glass-card rounded-2xl hover-lift"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Me</h3>
                      <p className="text-muted-foreground">{personalInfo.email}</p>
                      <p className="text-sm text-primary mt-1">Click to send email →</p>
                    </div>
                  </motion.a>

                  <motion.button
                    onClick={handleWhatsAppClick}
                    whileHover={{ scale: 1.02 }}
                    className="group w-full flex items-center gap-4 p-6 glass-card rounded-2xl hover-lift text-left"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <WhatsAppIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground">{personalInfo.phone}</p>
                      <p className="text-sm text-green-600 mt-1">Quick chat on WhatsApp →</p>
                    </div>
                  </motion.button>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group flex items-center gap-4 p-6 glass-card rounded-2xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-muted-foreground">{personalInfo.location}</p>
                      <p className="text-sm text-muted-foreground mt-1">Available for remote work</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Social & Actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Social Links */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                  <div className="space-y-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-sm text-muted-foreground">Check out my repositories</p>
                      </div>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Professional network</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Download Resume */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Resume</h3>
                  <p className="text-muted-foreground mb-6">
                    Download my resume to learn more about my experience and skills.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    <a href={personalInfo.resumeUrl} download>
                      <Download className="mr-2 w-5 h-5" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <div className="text-2xl font-bold gradient-text">24h</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <div className="text-2xl font-bold gradient-text">3+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <div className="text-2xl font-bold gradient-text">10+</div>
                      <div className="text-sm text-muted-foreground">Projects Done</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <div className="text-2xl font-bold gradient-text">100%</div>
                      <div className="text-sm text-muted-foreground">Remote Ready</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
