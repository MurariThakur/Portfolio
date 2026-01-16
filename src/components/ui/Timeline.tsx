import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  children: ReactNode;
  index: number;
}

export const TimelineItem = ({ children, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-primary shadow-lg shadow-primary/50" />
      
      {/* Content */}
      <div className="glass-card rounded-xl p-6 hover-lift">
        {children}
      </div>
    </motion.div>
  );
};

interface TimelineProps {
  children: ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  return <div className="relative">{children}</div>;
};
