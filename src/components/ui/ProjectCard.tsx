import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="block group"
      >
        <div className="glass-card rounded-xl overflow-hidden hover-lift">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            
            {/* Quick Links */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Live demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="tech-tag">+{project.techStack.length - 4}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
