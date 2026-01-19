import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="hover:bg-muted/50">
              <Link to="/projects">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video rounded-2xl overflow-hidden mb-8"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>

            {/* Title & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3 shrink-0">
                {project.liveUrl && (
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 space-y-8"
              >
                {/* Overview */}
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Features */}
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                {/* Tech Stack */}
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-bold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="font-bold mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
