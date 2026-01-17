import { motion } from "framer-motion";

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "MongoDB", color: "#47A248" },
  { name: "JavaScript", color: "#3178C6" },
  { name: "MySQL", color: "#4479A1" },
];

export const TechIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 mb-20 md:mb-20">
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="px-4 py-2 rounded-full glass-card text-sm font-medium flex items-center gap-2"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: tech.color }}
          />
          {tech.name}
        </motion.div>
      ))}
    </div>
  );
};
