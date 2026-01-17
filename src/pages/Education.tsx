import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { education } from "@/data/experience";
import educationBanner from "@/assets/education-banner.jpg";
import graduationImg from "@/assets/graduation.jpg";

const Education = () => {
  return (
    <Layout>
      {/* Banner Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={educationBanner}
            alt="Education and learning"
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
              Education
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto px-4">
              My academic journey and qualifications
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Timeline Section */}
            <div className="lg:col-span-2">
              <Timeline>
                {education.map((edu, index) => (
                  <TimelineItem key={edu.id} index={index}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{edu.degree}</h3>
                            <p className="text-muted-foreground text-sm">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 sm:flex-col sm:items-end">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary">
                            {edu.scoreType === "CGPA"
                              ? `CGPA: ${edu.score}`
                              : `${edu.score}%`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <div className="sticky top-32 space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
                  <img
                    src={graduationImg}
                    alt="Graduation celebration"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {education[0].degree.split(' ')[0]}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {education[0].degree.split(' ').slice(1).join(' ')}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary">
                      {education[0].scoreType === "CGPA"
                        ? `CGPA: ${education[0].score}`
                        : `${education[0].score}%`}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Node.js",
                "Laravel",
                "PHP",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "MySQL",
                "PostgreSQL",
                "REST APIs",
                "Git",
                "Docker",
                "AWS",
                "Tailwind CSS",
                "Bootstrap",
                "WordPress",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="tech-tag text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
