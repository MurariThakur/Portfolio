export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  projects?: string[];
  type: "work" | "internship";
}

export const experiences: Experience[] = [
  {
    id: "spiral-compute",
    title: "SDE2",
    company: "Spiral Compute Limited",
    duration: "Sept 2024 – Present",
    description: "Developed a full-stack web application using Laravel 12 & React following MVC architecture, integrating multiple AI APIs (OpenAI, Grok, Claude) for automated content generation with real-time chat interface.",
    projects: [
      "Wonati studio – AI Content Management Platform with multi-platform content publishing (WordPress, Shopify, Wix, HubSpot)",
      "Built RESTful APIs and responsive UI components with Stripe subscription management",
      "Implemented JWT authentication with OAuth provider and role-based access control using MySQL database"
    ],
    type: "work"
  },
  {
    id: "mirrar",
    title: "Junior Full Stack Developer",
    company: "Mirrar Innovation Technologies Private",
    duration: "Oct 2023 – Jul 2024",
    description: "Designed and developed robust backend admin panels for application administration with comprehensive control over app functionality and user management.",
    projects: [
      "PMG Play – Admin Panel with RESTful APIs for user login, registration, search, and listing using Laravel sanctum package",
      "Simplisell.in – Laravel 10 based e-commerce platform enabling users to create and manage online stores",
      "Implemented role-based access control and comprehensive user management systems"
    ],
    type: "work"
  },
  {
    id: "techno-exponent",
    title: "Trainee Software Developer",
    company: "Techno Exponent (T-Web)",
    duration: "Oct 2022 – Jun 2023",
    description: "Developed property listing platforms and web applications using Laravel following MVC architecture with comprehensive admin controls.",
    projects: [
      "Kenzie-Real Estate – Property listing platform with administrative dashboard for content and listing management",
      "Built features including blog, service pages, contact forms and CMS-style admin controls",
      "Modern Dating – Dating platform with user registration, profile creation, and chatbot integration for personalized matchmaking"
    ],
    type: "work"
  },
  {
    id: "the-hooman",
    title: "Frontend Developer Intern",
    company: "THE Hooman",
    duration: "Mar 2022 – Aug 2022",
    description: "Contributed to frontend development projects using WordPress and custom web solutions. Gained hands-on experience with responsive design and cross-browser compatibility.",
    projects: [
      "WordPress theme customization",
      "Responsive web design",
      "HTML/CSS development"
    ],
    type: "internship"
  }
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
}

export const education: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Information Technology",
    institution: "MCKV Institute of Engineering",
    duration: "2018 – 2022",
    score: "8.82",
    scoreType: "CGPA"
  },
  {
    id: "xii",
    degree: "XII (CBSE)",
    institution: "Sudhir Memorial Institute",
    duration: "2017 – 2018",
    score: "57.6",
    scoreType: "Percentage"
  },
  {
    id: "x",
    degree: "X (ICSE)",
    institution: "M.C. Kejriwal Vidyapeeth",
    duration: "2015 – 2016",
    score: "78.8",
    scoreType: "Percentage"
  }
];
