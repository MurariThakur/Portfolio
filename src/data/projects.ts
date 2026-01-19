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
  type: "personal" | "professional";
}

export const projects: Project[] = [
  // Professional Projects
  {
    id: "omnicontent-studio",
    title: "OmniContent Studio",
    description: "Comprehensive AI-powered content creation and management platform with multi-platform publishing",
    image: "/wonatai.jpg",
    techStack: ["Laravel 12", "React 18", "TypeScript", "PostgreSQL", "OpenAI GPT-4", "Grok", "Claude", "Gemini", "Stripe", "JWT", "TailwindCSS", "Docker"],
    features: [
      "Multi-AI Chat System with 6+ providers",
      "Real-time messaging and notifications",
      "Multi-platform content publishing",
      "Stripe subscription management",
      "OAuth authentication integration",
      "Role-based access control",
      "DALL-E 3 image generation",
      "Docker CI/CD pipeline"
    ],
    overview: "A cutting-edge AI-powered content management platform built with Laravel 12 and React/TypeScript. Features integration with 6+ AI services, multi-platform content publishing, advanced subscription management, and comprehensive security measures. Demonstrates expertise in full-stack development, AI integration, payment systems, and modern web development practices with clean architecture and extensive testing coverage.",
    type: "professional"
  },
  {
    id: "pmg-play",
    title: "PMG Play Admin Panel",
    description: "Comprehensive admin panel with robust user management",
    image: "/png-play.jpg",
    techStack: ["Laravel", "Sanctum", "MySQL", "RESTful APIs", "Bootstrap"],
    features: [
      "Backend admin panel with user management",
      "RESTful APIs for authentication",
      "Laravel Sanctum integration",
      "Role-based access control",
      "Dashboard analytics and reporting"
    ],
    overview: "A comprehensive admin panel designed for PMG Play platform. Built with Laravel and Sanctum for secure API authentication, featuring complete user management and role-based access control systems.",
    type: "professional"
  },
  {
    id: "simplisell-pro",
    title: "Simplisell.in E-commerce",
    description: "Laravel 10 based e-commerce platform enabling users to create and manage online stores",
    image: "/simplisell.jpg",
    techStack: ["Laravel 10", "MySQL", "Bootstrap", "Payment Gateways"],
    features: [
      "Complete e-commerce platform",
      "Product catalog and inventory management",
      "Secure payment gateway integration",
      "Order management and tracking",
      "Customer management dashboard",
      "Responsive design"
    ],
    overview: "A professional e-commerce platform built with Laravel 10, enabling users to create and manage their online stores. Features comprehensive store management, payment processing, and customer relationship tools.",
    type: "professional"
  },
  
  // Personal Projects
  {
    id: "movie-booking",
    title: "Movie Booking System",
    description: "Comprehensive movie booking platform with real-time seat selection, secure payment processing, and admin management capabilities",
    image: "/movie.jpg",
    techStack: ["React 19.2.0", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "TailwindCSS", "Stripe", "Clerk", "TMDB API", "Inngest", "Nodemailer"],
    liveUrl: "https://moviebookings-topaz.vercel.app",
    githubUrl: "https://github.com/MurariThakur/movie-booking",
    features: [
      "Real-time seat selection system",
      "Stripe payment processing",
      "Clerk authentication integration",
      "TMDB API for movie data",
      "Admin dashboard with analytics",
      "Background job processing",
      "Email notifications",
      "MongoDB with complex relationships"
    ],
    overview: "A production-ready full-stack movie booking platform showcasing advanced React/Node.js development with complex business logic. Features comprehensive payment processing, real-time seat management, background job orchestration, and admin analytics. Demonstrates expertise in modern web development, third-party integrations (Stripe, Clerk, TMDB), asynchronous programming, and scalable architecture with security best practices.",
    type: "personal"
  },
  {
    id: "ecommerce-platform",
    title: "Laravel E-Commerce Platform",
    description: "Enterprise-level e-commerce platform with complete admin control system, dynamic content management, and multi-payment gateway integration",
    image: "/ecommerce.jpg",
    techStack: ["Laravel 12", "PHP 8.2+", "MySQL 8.0", "Bootstrap 5", "Blade", "jQuery", "Vite", "PayPal SDK", "Stripe PHP SDK", "DomPDF", "Maatwebsite Excel"],
    githubUrl: "https://github.com/MurariThakur/ecommerce",
    features: [
      "Dynamic admin control system",
      "Multi-payment gateway integration",
      "Product management with variants",
      "Order processing and refund system",
      "Shopping cart with AJAX",
      "Content management system",
      "Advanced security features",
      "Reporting with Excel/PDF export"
    ],
    overview: "An enterprise-level e-commerce platform built with Laravel 12 showcasing advanced full-stack development with complex database architecture, payment gateway integration, and scalable design. Features 100% dynamic frontend control, multi-gateway payment processing, advanced security implementation, and comprehensive admin analytics. Demonstrates expertise in Laravel ecosystem, MVC architecture, performance optimization, and building production-ready e-commerce solutions.",
    type: "personal"
  },
  {
    id: "job-portal",
    title: "CareerVibe Job Portal",
    description: "Full-stack job portal with role-based authentication, advanced search & filtering, application tracking system, and comprehensive admin dashboard",
    image: "/jobportal.jpg",
    techStack: ["Laravel 10.x", "PHP 8.1+", "MySQL", "Bootstrap 5", "jQuery", "Blade", "Laravel Sanctum", "Trumbowyg", "Font Awesome"],
    githubUrl: "https://github.com/MurariThakur/jobportal",
    features: [
      "Multi-role authentication system",
      "Advanced job search and filtering",
      "Admin dashboard with statistics",
      "Application tracking system",
      "File upload with validation",
      "Database relationships and migrations",
      "Responsive UI with Bootstrap 5",
      "Security with CSRF protection"
    ],
    overview: "A comprehensive full-stack job portal built with Laravel 10.x showcasing advanced MVC architecture, secure authentication, and database design. Features role-based access control, advanced search functionality, application tracking, and comprehensive admin management. Demonstrates expertise in Laravel ecosystem, security implementation, responsive design, and modern web development practices with proper database relationships and migration systems.",
    type: "personal"
  },
  {
    id: "task-manager",
    title: "Task Manager Application",
    description: "Full-stack web application for efficient task management with user authentication, CRUD operations, and advanced filtering capabilities",
    image: "/task.jpg",
    techStack: ["Laravel 10.x", "PHP 8.1+", "MySQL", "Bootstrap 5", "Blade", "Font Awesome", "Tabler Icons", "Eloquent ORM"],
    githubUrl: "https://github.com/MurariThakur/task-manager",
    features: [
      "User authentication and authorization",
      "Complete CRUD operations",
      "Task categorization and priorities",
      "Dashboard with analytics",
      "File attachment support",
      "Search and filtering system",
      "Database relationships",
      "Responsive design with Bootstrap 5"
    ],
    overview: "A comprehensive full-stack task management application built with Laravel 10.x showcasing MVC architecture, secure authentication, and advanced database design. Features complete CRUD operations, real-time analytics, file handling, and responsive design. Demonstrates expertise in Laravel ecosystem, security implementation, database relationships, and modern web development practices with proper project structure and documentation.",
    type: "personal"
  }
];
