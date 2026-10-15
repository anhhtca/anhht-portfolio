import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "it-operations-dba",
    position: "IT Operations & Database Administration",
    company: "Enterprise IT Environment",
    location: "Ho Chi Minh City, Vietnam",
    startDate: new Date(NaN),
    endDate: "Present",
    description: [
      "Experience in IT operations, database administration, application support, infrastructure management, and enterprise system reliability.",
    ],
    achievements: [
      "Database administration and troubleshooting",
      "Application deployment and operational support",
      "Linux systems and infrastructure management",
      "Data integrity, system availability, and security",
      "Collaboration with software and infrastructure teams",
    ],
    skills: [
      "PostgreSQL",
      "Oracle Database",
      "Linux",
      "Docker",
      "Database Administration",
      "High Availability",
    ],
    logo: "/logo.png",
  },
  {
    id: "fullstack-ai-builder",
    position: "Fullstack Developer & Independent Builder",
    company: "Independent Projects",
    location: "Ho Chi Minh City, Vietnam",
    startDate: new Date(NaN),
    endDate: "Present",
    description: [
      "Designing and building web applications, reusable platforms, and AI-powered prototypes from concept to deployment.",
    ],
    achievements: [
      "Building fullstack applications with modern web technologies",
      "Designing APIs, data models, and authentication systems",
      "Integrating AI capabilities into practical workflows",
      "Using AI-assisted development tools to accelerate delivery",
      "Deploying and operating self-hosted services",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "LLMs", "RAG", "Docker"],
    logo: "/logo.png",
  },
];
