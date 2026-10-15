import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  category?: string;
}

export interface skillCategoryInterface {
  category: string;
  items: string[];
}

export const skillCategories: skillCategoryInterface[] = [
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      ".NET",
      "REST APIs",
      "Authentication",
      "Authorization",
      "API Design",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "Oracle Database",
      "Prisma ORM",
      "SQL",
      "Database Administration",
      "Data Modeling",
    ],
  },
  {
    category: "AI Engineering",
    items: [
      "LLMs",
      "Prompt Engineering",
      "Retrieval-Augmented Generation",
      "Embeddings",
      "Local LLMs",
      "AI Agents",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      "Docker",
      "Linux",
      "Networking",
      "Reverse Proxies",
      "High Availability",
      "System Administration",
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      "System Architecture",
      "Role-Based Access Control",
      "Audit Logging",
      "Workflow Automation",
      "AI-Assisted Development",
    ],
  },
];

export const skillsUnsorted: skillsInterface[] = [
  // Core Highlights (featured candidates across core themes)
  {
    name: "Next.js",
    category: "Frontend Development",
    description:
      "Build production-grade web applications with modern App Router, layouts, and server actions.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "TypeScript",
    category: "Frontend Development",
    description:
      "Scale software development with robust static type safety and enhanced maintainability.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Node.js",
    category: "Backend Development",
    description:
      "Develop efficient server-side applications, microservices, and backend tooling.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    description:
      "Architect, operate, and optimize robust relational database schemas and queries.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "LLMs",
    category: "AI Engineering",
    description:
      "Integrate large language model capabilities, structured generation, and agentic workflows.",
    rating: 5,
    icon: Icons.brain,
  },
  {
    name: "Docker",
    category: "Infrastructure & DevOps",
    description:
      "Containerize services and environments for reproducible development and deployment.",
    rating: 5,
    icon: Icons.docker,
  },

  // Frontend Development
  {
    name: "React",
    category: "Frontend Development",
    description:
      "Build dynamic and responsive component-based user interfaces with modern React patterns.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "JavaScript",
    category: "Frontend Development",
    description:
      "Create interactive web applications across browser clients and server environments.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML",
    category: "Frontend Development",
    description:
      "Structure semantic, accessible, and standards-compliant web document foundations.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    category: "Frontend Development",
    description:
      "Design flexible, responsive layouts and animations with utility and modern stylesheets.",
    rating: 5,
    icon: Icons.css3,
  },

  // Backend Development
  {
    name: ".NET",
    category: "Backend Development",
    description:
      "Build structured enterprise backend services, data access layers, and APIs.",
    rating: 5,
    icon: Icons.dotnet,
  },
  {
    name: "REST APIs",
    category: "Backend Development",
    description:
      "Design and consume secure, predictable, and standardized HTTP RESTful services.",
    rating: 5,
    icon: Icons.externalLink,
  },
  {
    name: "Authentication",
    category: "Backend Development",
    description:
      "Implement secure identity management, token workflows, and session mechanisms.",
    rating: 5,
    icon: Icons.userFill,
  },
  {
    name: "Authorization",
    category: "Backend Development",
    description:
      "Enforce granular policy-based permissions and secure resource isolation.",
    rating: 5,
    icon: Icons.shield,
  },
  {
    name: "API Design",
    category: "Backend Development",
    description:
      "Architect clean, reusable contracts and consistent service communication interfaces.",
    rating: 5,
    icon: Icons.settings,
  },

  // Databases
  {
    name: "Oracle Database",
    category: "Databases",
    description:
      "Administer enterprise database systems, schema structures, and operational procedures.",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "Prisma ORM",
    category: "Databases",
    description:
      "Manage database schemas, migrations, and type-safe relational database access.",
    rating: 5,
    icon: Icons.prisma,
  },
  {
    name: "SQL",
    category: "Databases",
    description:
      "Write optimized queries, views, transactional logic, and perform index tuning.",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "Database Administration",
    category: "Databases",
    description:
      "Maintain high availability, backup strategies, monitoring, and database reliability.",
    rating: 5,
    icon: Icons.database,
  },
  {
    name: "Data Modeling",
    category: "Databases",
    description:
      "Design normalized schemas, relationship structures, and domain data models.",
    rating: 5,
    icon: Icons.database,
  },

  // AI Engineering
  {
    name: "Prompt Engineering",
    category: "AI Engineering",
    description:
      "Craft structured prompts, system instructions, and schema validation pipelines.",
    rating: 5,
    icon: Icons.sparkles,
  },
  {
    name: "Retrieval-Augmented Generation",
    category: "AI Engineering",
    description:
      "Ground language models on domain documents for source-grounded information retrieval.",
    rating: 5,
    icon: Icons.bot,
  },
  {
    name: "Embeddings",
    category: "AI Engineering",
    description:
      "Compute vector representations for semantic search and contextual knowledge similarity.",
    rating: 5,
    icon: Icons.sparkles,
  },
  {
    name: "Local LLMs",
    category: "AI Engineering",
    description:
      "Deploy and run local open-weight models for privacy-conscious offline inference.",
    rating: 5,
    icon: Icons.cpu,
  },
  {
    name: "AI Agents",
    category: "AI Engineering",
    description:
      "Orchestrate multi-step task loops with function calling, tool use, and automated reasoning.",
    rating: 5,
    icon: Icons.bot,
  },

  // Infrastructure & DevOps
  {
    name: "Linux",
    category: "Infrastructure & DevOps",
    description:
      "Manage Linux server environments, shell automation, security configs, and operations.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "Networking",
    category: "Infrastructure & DevOps",
    description:
      "Configure DNS, routing, firewall rules, and secure communication channels.",
    rating: 5,
    icon: Icons.network,
  },
  {
    name: "Reverse Proxies",
    category: "Infrastructure & DevOps",
    description:
      "Manage traffic routing, TLS termination, load distribution, and proxy gateways.",
    rating: 5,
    icon: Icons.server,
  },
  {
    name: "High Availability",
    category: "Infrastructure & DevOps",
    description:
      "Design clustered failover architectures, quorum consensus, and redundant services.",
    rating: 5,
    icon: Icons.server,
  },
  {
    name: "System Administration",
    category: "Infrastructure & DevOps",
    description:
      "Maintain server uptime, system patching, service monitoring, and operational readiness.",
    rating: 5,
    icon: Icons.settings,
  },

  // Engineering Practices
  {
    name: "System Architecture",
    category: "Engineering Practices",
    description:
      "Design decoupled, reliable, and scalable multi-tier software system architectures.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "Role-Based Access Control",
    category: "Engineering Practices",
    description:
      "Implement application-level RBAC with fine-grained resource and action permissions.",
    rating: 5,
    icon: Icons.shield,
  },
  {
    name: "Audit Logging",
    category: "Engineering Practices",
    description:
      "Establish traceable event logging, administrative activity trails, and audit systems.",
    rating: 5,
    icon: Icons.post,
  },
  {
    name: "Workflow Automation",
    category: "Engineering Practices",
    description:
      "Automate repetitive operational tasks, ETL steps, and pipeline triggers.",
    rating: 5,
    icon: Icons.workflow,
  },
  {
    name: "AI-Assisted Development",
    category: "Engineering Practices",
    description:
      "Accelerate implementation, testing, and system prototyping with AI development workflows.",
    rating: 5,
    icon: Icons.sparkles,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
