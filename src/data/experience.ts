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
    title: "Full Stack Developer",
    company: "Spiral Compute",
    duration: "Sept 2024 – Present",
    description: "Working on full-stack development projects using modern technologies. Contributing to the development of scalable web applications and maintaining code quality standards.",
    projects: [
      "Enterprise web application development",
      "API development and integration",
      "Performance optimization"
    ],
    type: "work"
  },
  {
    id: "mirrar",
    title: "Junior Full Stack Developer",
    company: "Mirrar Innovation Technologies Pvt. Ltd",
    duration: "Oct 2023 – Jul 2024",
    description: "Developed and maintained full-stack applications using Laravel. Worked on multiple projects including admin panels and e-commerce platforms with REST API integration.",
    projects: [
      "PMG Play – Admin Panel (Laravel, REST API, Sanctum)",
      "Simplisell.in – E-commerce Platform (Laravel 10)"
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
