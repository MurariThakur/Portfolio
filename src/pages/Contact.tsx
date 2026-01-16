import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Download,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/personal";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [whatsappMessage, setWhatsappMessage] = useState(
    "Hi Murari! I found your portfolio and would like to connect."
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Get in Touch"
            subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
          />

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Contact Info Cards */}
                <div className="grid gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="glass-card rounded-xl p-4 flex items-center gap-4 hover-lift"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{personalInfo.email}</p>
                    </div>
                  </a>

                  <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-xl p-4 flex items-center gap-4 hover-lift"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{personalInfo.location}</p>
                    </div>
                  </a>
                </div>

                {/* WhatsApp Section */}
                <div className="glass-card rounded-xl p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    Quick Connect via WhatsApp
                  </h4>
                  <Textarea
                    value={whatsappMessage}
                    onChange={(e) => setWhatsappMessage(e.target.value)}
                    placeholder="Edit your message..."
                    rows={3}
                    className="bg-muted/50 border-border focus:border-primary resize-none mb-4"
                  />
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Send on WhatsApp
                  </Button>
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Connect on Social</h4>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Download CV */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-14 text-lg border-primary/50 hover:bg-primary/10"
                >
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="mr-2 w-5 h-5" />
                    Download Resume
                  </a>
                </Button>

                {/* Map */}
                <div className="glass-card rounded-xl overflow-hidden h-48">
                  <a
                    href="https://maps.google.com/?q=India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative group"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0015567619967!2d88.34!3d22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzEyLjAiTiA4OMKwMjAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    />
                    <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-sm font-medium">
                        Open in Google Maps
                      </span>
                    </div>
                  </a>
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
