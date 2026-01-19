import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CollapsibleSection } from "@/components/ui/CollapsibleSection";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { experiences } from "@/data/experience";
import experienceBanner from "@/assets/experience-banner.jpg";
import teamWorkImg from "@/assets/team-work.jpg";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const workExperience = experiences.filter((exp) => exp.type === "work");
  const internshipExperience = experiences.filter(
    (exp) => exp.type === "internship"
  );

  return (
    <Layout>
      {/* Banner Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={experienceBanner}
            alt="Professional workspace"
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
              Experience
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto px-4">
              My professional journey building innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Side Image - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <div className="sticky top-32 space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
                  <img
                    src={teamWorkImg}
                    alt="Team collaboration"
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Years of Experience
                    </p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>Full Stack Developer MERN | Laravel</span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span>2 Companies</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Work Experience */}
              <CollapsibleSection
                title="Work Experience"
                icon={<Briefcase className="w-5 h-5" />}
                defaultOpen={false}
              >
                <Timeline>
                  {workExperience.map((exp, index) => (
                    <TimelineItem key={exp.id} index={index}>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-xl text-primary">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <Building2 className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{exp.description}</p>

                        {exp.projects && exp.projects.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-foreground">
                              Key Projects:
                            </h4>
                            <ul className="space-y-1">
                              {exp.projects.map((project, pIndex) => (
                                <li
                                  key={pIndex}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CollapsibleSection>

              {/* Internship Experience */}
              <CollapsibleSection
                title="Internship Experience"
                icon={<GraduationCap className="w-5 h-5" />}
                defaultOpen={false}
              >
                <Timeline>
                  {internshipExperience.map((exp, index) => (
                    <TimelineItem key={exp.id} index={index}>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-xl text-primary">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <Building2 className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{exp.description}</p>

                        {exp.projects && exp.projects.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-foreground">
                              Key Responsibilities:
                            </h4>
                            <ul className="space-y-1">
                              {exp.projects.map((project, pIndex) => (
                                <li
                                  key={pIndex}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CollapsibleSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
