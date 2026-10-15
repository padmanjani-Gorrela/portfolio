export const profile = {
  name: "Sri Padmanjani Gorrela",
  email: "padmanjanigorrela55@gmail.com",
};

export const links = {
  email: "mailto:padmanjanigorrela55@gmail.com",
  linkedin: "https://linkedin.com/in/sri-padmanjani-gorrela55",
  github: "https://github.com/padmanjani-Gorrela",
  leetcode: "https://leetcode.com/u/padmanjani/",
  codechef: "https://www.codechef.com/users/anjani_io",
  gfg: "https://www.geeksforgeeks.org/profile/padmanjanigorrela",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Problem Solving", href: "#problem-solving" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  { value: "SDE Intern", label: "Amazon" },
  { value: "400+", label: "Coding problems solved" },
  { value: "2027", label: "B.Tech Information Technology" },
];

export const experience = [
  {
    org: "Amazon",
    role: "Software Development Engineer Intern",
    period: "July 2026 – Present",
    team: "Global Logistics",
    description:
      "Contributing to the development of an intelligent conversational assistant designed to support sales workflows within the logistics domain.",
    points: [
      "Contributing to an AI-powered conversational experience for business users",
      "Supporting chat-based interactions designed to streamline sales-related workflows",
      "Applying software engineering principles to build user-focused, workflow-oriented solutions",
    ],
  },
  {
    org: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    period: "May 2026 – June 2026",
    team: "Open Source",
    description:
      "Collaborated with project maintainers through GitHub pull requests, code reviews, and issue tracking.",
    points: ["Pull requests", "Code reviews", "Issue tracking"],
    note: "",
  },
];

export const skills = [
  { title: "Languages", items: ["Java"] },
  {
    title: "Backend Engineering",
    items: ["Spring Boot", "Spring Data JPA", "Spring Security", "REST APIs"],
  },
  { title: "Databases", items: ["MySQL"] },
  { title: "Testing", items: ["JUnit 5"] },
  {
    title: "Developer Tools",
    items: ["Git", "Maven", "Docker", "Postman", "Swagger"],
  },
  { title: "Frontend", items: ["HTML", "CSS"] },
  {
    title: "Core Computer Science",
    items: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "SOLID Principles",
    ],
  },
];

export const projects = [
  {
    index: "01",
    title: "HireLyft",
    category: "Full-Stack Job Portal",
    description:
      "Built a job portal that enables recruiters to post job openings and candidates to search and apply for opportunities.",
    stack: [
      "React",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "Docker",
    ],
    highlights: [
      "Designed REST APIs using a layered architecture.",
      "Implemented input validation, pagination, and global exception handling.",
      "Added JWT-based authentication using Spring Security.",
      "Optimized Spring Data JPA queries.",
      "Reduced API response time by approximately 38%.",
      "Containerized the MySQL database with Docker.",
      "Tested REST endpoints using Postman.",
    ],
    metric: "~38%",
    metricLabel: "faster API response time",
    layers: [
      "React UI",
      "REST Controllers",
      "Service Layer",
      "JPA Repositories",
      "MySQL (Docker)",
    ],
    sourceUrl: "" as string,
    demoUrl: "" as string,
  },
  {
    index: "02",
    title: "E-Commerce Backend System",
    category: "Backend Engineering",
    description:
      "Developed backend REST APIs for a product catalog, shopping cart, and order management system.",
    stack: ["Spring Boot", "MySQL"],
    highlights: [
      "Implemented CRUD operations.",
      "Added input validation and pagination.",
      "Followed layered architecture and REST API design practices.",
      "Optimized Spring Data JPA queries.",
      "Improved product retrieval performance by approximately 36%.",
      "Tested endpoints using Postman.",
    ],
    metric: "~36%",
    metricLabel: "faster product retrieval",
    layers: ["REST Controllers", "Service Layer", "JPA Repositories", "MySQL"],
    sourceUrl: "" as string,
    demoUrl: "" as string,
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "padmanjani",
    achievement: "400+ problems solved",
    url: links.leetcode,
  },
  {
    platform: "CodeChef",
    username: "anjani_io",
    achievement: "2-star",
    url: links.codechef,
  },
  {
    platform: "GeeksforGeeks",
    username: "padmanjanigorrela",
    achievement: "Coding profile",
    url: links.gfg,
  },
];

export const education = {
  school: "Vishnu Institute of Technology",
  degree: "B.Tech in Information Technology",
  period: "2023–2027",
  cgpa: "9.03/10",
  achievements: [
    "Selected for Amazon Future Engineer 2024 — Top 500 nationwide",
    "Selected for ICPC AlgoQueen ’26",
    "LG Scholar 2024",
  ],
};
