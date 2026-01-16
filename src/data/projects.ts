export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  overview: string;
}

export const projects: Project[] = [
  {
    id: "pmg-play",
    title: "PMG Play",
    description: "Admin Panel for fantasy sports platform with comprehensive management features",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    techStack: ["Laravel", "REST API", "Sanctum", "MySQL", "Blade"],
    liveUrl: "#",
    githubUrl: "https://github.com/MurariThakur",
    features: [
      "User management with role-based access control",
      "Real-time sports data integration",
      "Secure API authentication with Sanctum",
      "Dashboard analytics and reporting",
      "Content management system"
    ],
    overview: "A robust admin panel built for PMG Play, a fantasy sports platform. Developed using Laravel with REST API architecture and Sanctum for secure authentication. Features comprehensive user management, real-time data updates, and advanced analytics dashboard."
  },
  {
    id: "simplisell",
    title: "Simplisell.in",
    description: "Full-featured e-commerce platform with modern shopping experience",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    techStack: ["Laravel 10", "MySQL", "Stripe", "Tailwind CSS", "Alpine.js"],
    liveUrl: "https://simplisell.in",
    githubUrl: "https://github.com/MurariThakur",
    features: [
      "Multi-vendor marketplace support",
      "Secure payment gateway integration",
      "Inventory management system",
      "Order tracking and notifications",
      "Customer reviews and ratings"
    ],
    overview: "A comprehensive e-commerce platform developed using Laravel 10. Features include multi-vendor support, secure payment processing, real-time inventory management, and a seamless shopping experience for customers."
  },
  {
    id: "job-portal",
    title: "Job Portal",
    description: "Employment platform connecting job seekers with employers",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    techStack: ["Laravel", "Vue.js", "MySQL", "Redis", "Elasticsearch"],
    githubUrl: "https://github.com/MurariThakur",
    features: [
      "Advanced job search with filters",
      "Resume builder and management",
      "Application tracking system",
      "Employer dashboard with analytics",
      "Email notifications and alerts"
    ],
    overview: "A full-featured job portal that connects job seekers with potential employers. Built with Laravel backend and Vue.js frontend, featuring advanced search capabilities, resume management, and real-time application tracking."
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "Project management tool for teams with real-time collaboration",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    techStack: ["Laravel", "React", "PostgreSQL", "WebSockets", "Docker"],
    githubUrl: "https://github.com/MurariThakur",
    features: [
      "Kanban board with drag-and-drop",
      "Real-time collaboration features",
      "Time tracking and reporting",
      "Team management and permissions",
      "Integration with popular tools"
    ],
    overview: "A comprehensive task management application designed for team collaboration. Features include Kanban boards, real-time updates via WebSockets, time tracking, and detailed project analytics."
  },
  {
    id: "kenzie-real-estate",
    title: "Kenzie Real Estate",
    description: "Property listing and management platform with virtual tours",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    techStack: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/MurariThakur",
    features: [
      "Property listings with advanced filters",
      "Virtual property tours",
      "Mortgage calculator",
      "Agent profiles and scheduling",
      "Map-based property search"
    ],
    overview: "A modern real estate platform built with the MERN stack. Features comprehensive property listings, virtual tours, mortgage calculations, and seamless communication between buyers and agents."
  },
  {
    id: "modern-dating",
    title: "Modern Dating",
    description: "Dating application with smart matching algorithms",
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80",
    techStack: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
    githubUrl: "https://github.com/MurariThakur",
    features: [
      "AI-powered matching algorithm",
      "Real-time chat with media sharing",
      "Profile verification system",
      "Location-based discovery",
      "Privacy and security features"
    ],
    overview: "A modern dating application featuring intelligent matching algorithms, real-time messaging, and robust privacy controls. Built with React Native for cross-platform mobile experience."
  }
];
