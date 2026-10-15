import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  shortDescriptionVi?: string;
  shortDescriptionEn?: string;
  websiteLink?: string;
  githubLink?: string;
  thumbnail?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "bankquiz",
    companyName: "BankQuiz",
    type: "Personal",
    category: ["Web Application", "Web Dev", "Full Stack"],
    shortDescription:
      "A web-based learning and assessment platform designed to make knowledge practice more engaging and accessible.",
    shortDescriptionVi:
      "Nền tảng học tập và ôn luyện trực tuyến được thiết kế giúp việc luyện tập kiến thức trở nên tương tác và dễ tiếp cận hơn.",
    shortDescriptionEn:
      "A web-based learning and assessment platform designed to make knowledge practice more engaging and accessible.",
    websiteLink: "https://bankquiz.app",
    thumbnail: "",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Learning & Practice Experience",
        description:
          "Mobile-first learning workflow featuring interactive quizzes, question review, and repeated practice for retention.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "BankQuiz is a web-based learning and assessment platform designed to make knowledge practice more engaging and accessible.",
        "The application emphasizes structured practice sessions and retention reinforcement by prioritizing questions answered incorrectly during previous attempts, packaged with progressive web app capabilities.",
      ],
      bullets: [
        "Interactive quizzes and practice sessions",
        "Repeated practice for incorrectly answered questions",
        "Progress-oriented learning experience",
        "Progressive Web App capabilities",
      ],
    },
  },
  {
    id: "ums",
    companyName: "Unified Management System (UMS)",
    type: "Personal",
    category: ["Developer Platform", "Full Stack", "Backend"],
    shortDescription:
      "A centralized identity and access management platform designed to support multiple applications with shared authentication and application-specific authorization.",
    shortDescriptionVi:
      "Nền tảng quản lý danh tính và phân quyền tập trung hỗ trợ xác thực dùng chung và ủy quyền riêng biệt cho nhiều ứng dụng.",
    shortDescriptionEn:
      "A centralized identity and access management platform designed to support multiple applications with shared authentication and application-specific authorization.",
    websiteLink: "https://ums.io.vn",
    thumbnail: "",
    techStack: [
      "Next.js",
      "TypeScript",
      "Authentication",
      "JWT",
      "RBAC",
      "Docker",
    ],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Centralized Identity & Access Management",
        description:
          "Standardized authentication, application-level roles, and comprehensive API documentation at docs.ums.io.vn.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A centralized identity and access management platform designed to support multiple applications with shared authentication and application-specific authorization.",
        "Engineered with resource-action-based RBAC, JWT tokens, audit logging, and reusable client integration patterns for modern web applications.",
      ],
      bullets: [
        "Centralized identity management",
        "Application-level role and permission separation",
        "Resource-action-based RBAC",
        "JWT authentication and audit logging",
        "Reusable client integration for web applications",
      ],
    },
  },
  {
    id: "local-ai-knowledge-assistant",
    companyName: "Local AI Knowledge Assistant",
    type: "Personal",
    category: ["AI Engineering", "Backend"],
    shortDescription:
      "An exploration of privacy-focused AI applications using locally hosted language models to retrieve information from documents and domain-specific knowledge bases.",
    shortDescriptionVi:
      "Trợ lý tri thức AI nội bộ ưu tiên bảo mật, hoạt động hoàn toàn offline trên phần cứng cá nhân sử dụng các mô hình LLM mã nguồn mở và RAG.",
    shortDescriptionEn:
      "An exploration of privacy-focused AI applications using locally hosted language models to retrieve information from documents and domain-specific knowledge bases.",
    thumbnail: "",
    techStack: [
      "Ollama",
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Search",
      "TypeScript",
    ],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Private Local Knowledge Retrieval",
        description:
          "Privacy-first architecture using local language models to query internal documents and bilingual domain corpora.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "An exploration of privacy-focused AI applications using locally hosted language models to retrieve information from documents and domain-specific knowledge bases.",
        "Built on a local Retrieval-Augmented Generation (RAG) architecture supporting document ingestion, semantic search embeddings, and Vietnamese-language knowledge retrieval without external API leakage.",
      ],
      bullets: [
        "Local LLM inference",
        "Retrieval-Augmented Generation architecture",
        "Document ingestion and semantic retrieval",
        "Vietnamese-language knowledge retrieval",
        "Privacy-conscious AI deployment",
      ],
    },
  },
  {
    id: "workflow-automation",
    companyName: "AI Workflow Automation",
    type: "Personal",
    category: ["Automation", "Backend"],
    shortDescription:
      "A collection of experiments using workflow automation and LLMs to transform structured inputs into useful, validated outputs.",
    shortDescriptionVi:
      "Hệ thống tự động hóa luồng công việc tích hợp các API bên ngoài, quy trình trích xuất dữ liệu và đồng bộ định kỳ kết hợp LLM.",
    shortDescriptionEn:
      "A collection of experiments using workflow automation and LLMs to transform structured inputs into useful, validated outputs.",
    thumbnail: "",
    techStack: ["n8n", "Gemini", "REST APIs", "JSON", "TypeScript"],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Automated Data Processing Pipelines",
        description:
          "Integrates workflow automation tools with LLM nodes to automate multi-stage data transformation pipelines.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A collection of experiments using workflow automation and LLMs to transform structured inputs into useful, validated outputs.",
        "Orchestrates event triggers, schema validation, and structured JSON output generation across automated processing pipelines.",
      ],
      bullets: [
        "LLM-powered data transformation",
        "Structured JSON generation",
        "Automated document processing",
        "API-based workflow orchestration",
      ],
    },
  },
  {
    id: "postgresql-ha-lab",
    companyName: "PostgreSQL High Availability Lab",
    type: "Personal",
    category: ["Infrastructure", "Backend"],
    shortDescription:
      "A hands-on infrastructure lab exploring highly available PostgreSQL deployments and automated database failover across multiple Linux nodes.",
    shortDescriptionVi:
      "Kiến trúc cụm cơ sở dữ liệu PostgreSQL có tính sẵn sàng cao với cơ chế tự động chuyển đổi dự phòng và giám sát đồng bộ.",
    shortDescriptionEn:
      "A hands-on infrastructure lab exploring highly available PostgreSQL deployments and automated database failover across multiple Linux nodes.",
    thumbnail: "",
    techStack: ["PostgreSQL", "Patroni", "etcd", "HAProxy", "Docker", "Linux"],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Database Cluster Architecture",
        description:
          "Containerized high-availability deployment featuring automated failover and consensus coordination.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A hands-on infrastructure lab exploring highly available PostgreSQL deployments and automated database failover across multiple Linux nodes.",
        "Implements Patroni for cluster management, etcd for distributed coordination, and HAProxy for resilient client routing under simulated node failover.",
      ],
      bullets: [
        "PostgreSQL replication and failover",
        "Patroni cluster management",
        "etcd distributed coordination",
        "HAProxy connection routing",
        "Containerized infrastructure",
      ],
    },
  },
  {
    id: "sdtn-project",
    companyName: "SDTN - Credit File Transfer System",
    type: "Professional",
    category: ["Web Application", "Web Dev", "Full Stack"],
    shortDescription:
      "Phần mềm nghiệp vụ khởi tạo và luân chuyển hồ sơ tín dụng vượt thẩm quyền từ chi nhánh lên Trụ sở chính (TSC).",
    shortDescriptionVi:
      "Phần mềm nghiệp vụ khởi tạo và luân chuyển hồ sơ tín dụng vượt thẩm quyền từ chi nhánh lên Trụ sở chính (TSC).",
    shortDescriptionEn:
      "Specialized banking workflow software for initiating and routing credit files requiring Head Office approval.",
    websiteLink: "https://sdtn-project.web.app/",
    thumbnail: "",
    techStack: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML 5",
      "CSS 3",
      "REST APIs",
      "Authentication",
    ],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg:
      "https://sdtn-project.web.app/assets/images/hero/sdtn-demo-browser-frame.png",
    pagesInfoArr: [
      {
        title: "Khởi tạo & luân chuyển hồ sơ tín dụng",
        description:
          "Quy trình số hóa luân chuyển và quản lý hồ sơ tín dụng vượt thẩm quyền từ chi nhánh lên Trụ sở chính.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SDTN là phần mềm nghiệp vụ chuyên trách khởi tạo, quản lý và luân chuyển hồ sơ tín dụng vượt thẩm quyền phê duyệt từ các chi nhánh ngân hàng lên Trụ sở chính.",
        "Hệ thống số hóa toàn diện quy trình trình duyệt, rút ngắn thời gian xử lý hồ sơ, chuẩn hóa tài liệu thẩm định và đảm bảo tính minh bạch, an toàn thông tin tín dụng.",
      ],
      bullets: [
        "Khởi tạo và luân chuyển hồ sơ tín dụng đa cấp độ",
        "Theo dõi tiến độ thẩm định và phê duyệt thời gian thực",
        "Phân quyền truy cập và bảo mật hồ sơ tài liệu chặt chẽ",
        "Giao diện tối ưu hóa nghiệp vụ cho cán bộ tín dụng và cấp quản lý",
      ],
    },
  },
  {
    id: "agribank-los-reviewer",
    companyName: "Agribank LOS Reviewer",
    type: "Professional",
    category: ["Web Application", "Full Stack", "Developer Platform"],
    shortDescription:
      "Nền tảng rà soát, theo dõi và phê duyệt tài liệu phân tích nghiệp vụ và yêu cầu hệ thống Khởi tạo khoản vay (LOS).",
    shortDescriptionVi:
      "Nền tảng rà soát, theo dõi và phê duyệt tài liệu phân tích nghiệp vụ và yêu cầu hệ thống Khởi tạo khoản vay (LOS).",
    shortDescriptionEn:
      "Collaborative review platform for tracking, evaluating, and approving business requirements and system specifications for Loan Origination Systems (LOS).",
    websiteLink: "http://los.anhht.me/",
    thumbnail: "",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Authentication",
      "RBAC",
      "REST APIs",
    ],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Rà soát yêu cầu và đặc tả nghiệp vụ LOS",
        description:
          "Không gian làm việc tập trung để theo dõi, đối chiếu và phê duyệt các yêu cầu hệ thống khởi tạo khoản vay.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Agribank LOS Reviewer là nền tảng quản lý và rà soát tài liệu phân tích nghiệp vụ (Business Analysis) cùng các yêu cầu kỹ thuật cho hệ thống Khởi tạo khoản vay (Loan Origination System - LOS).",
        "Ứng dụng hỗ trợ các bên liên quan theo dõi tiến độ phê duyệt tài liệu, đối chiếu quy chuẩn nghiệp vụ ngân hàng và kiểm soát chặt chẽ các thay đổi xuyên suốt vòng đời triển khai.",
      ],
      bullets: [
        "Rà soát và quản lý tài liệu phân tích nghiệp vụ LOS",
        "Kiểm soát phiên bản và lịch sử thay đổi tài liệu yêu cầu",
        "Tích hợp xác thực, phân quyền vai trò người dùng (RBAC)",
        "Giao diện dashboard hiện đại với trải nghiệm người dùng trực quan",
      ],
    },
  },
  {
    id: "agribank-community",
    companyName: "Agribank Community",
    type: "Personal",
    category: ["Web Application", "Web Dev", "Full Stack"],
    shortDescription:
      "Nền tảng cộng đồng chia sẻ tri thức, tài liệu nghiệp vụ, công cụ phần mềm và kinh nghiệm làm việc cho cán bộ ngân hàng.",
    shortDescriptionVi:
      "Nền tảng cộng đồng chia sẻ tri thức, tài liệu nghiệp vụ, công cụ phần mềm và kinh nghiệm làm việc cho cán bộ ngân hàng.",
    shortDescriptionEn:
      "An internal knowledge-sharing community platform connecting banking professionals with operational guidelines, software utilities, and technical workflows.",
    websiteLink: "https://community.agribank.me/",
    thumbnail: "",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
    ],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "https://community.agribank.me/og-image.png",
    pagesInfoArr: [
      {
        title: "Cộng đồng chia sẻ tri thức & công cụ tiện ích",
        description:
          "Không gian số kết nối đồng nghiệp, chia sẻ kiến thức chuyên môn và tài nguyên nâng cao năng suất công việc.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Agribank Community ('Share for All, All for Share') là nền tảng số kết nối đồng nghiệp, chia sẻ kiến thức chuyên môn, kinh nghiệm thực tiễn và các giải pháp nâng cao hiệu suất công việc.",
        "Cung cấp kho tri thức, công cụ phần mềm tiện ích, tài liệu quy trình ngân hàng và không gian trao đổi học hỏi tích cực cho cộng đồng người làm ngân hàng.",
      ],
      bullets: [
        "Chia sẻ và tiếp cận tài liệu nghiệp vụ, cẩm nang quy trình chuyên môn",
        "Cung cấp các công cụ và phần mềm tiện ích nâng cao năng suất",
        "Diễn đàn trao đổi kinh nghiệm công việc và giải đáp vướng mắc nghiệp vụ",
        "Hệ thống phân phối nội dung tốc độ cao, giao diện chuẩn hóa hiện đại",
      ],
    },
  },
  {
    id: "smart-tab-cleaner",
    companyName: "Smart Tab Cleaner",
    type: "Personal",
    category: ["Browser Extension", "Automation", "Frontend"],
    shortDescription:
      "Automated tab lifecycle and anti-clutter Chrome extension with custom rules, instant quick block, and Google Cloud Sync. 100% Client-Side & Privacy-First.",
    shortDescriptionVi:
      "Tiện ích Chrome tự động dọn dẹp các tab thừa, liên kết chuyển hướng spam và tab launcher trung gian (Zoom, Teams, Telegram) bằng regex và đồng bộ Google Cloud.",
    shortDescriptionEn:
      "Automated tab lifecycle and anti-clutter Chrome extension with custom rules, instant quick block, and Google Cloud Sync. 100% Client-Side & Privacy-First.",
    websiteLink: "https://anhhtz.github.io/smart-tab-cleaner-extension/",
    githubLink: "https://github.com/anhhtz/smart-tab-cleaner-extension",
    thumbnail: "",
    techStack: [
      "Chrome Extension",
      "Manifest V3",
      "JavaScript",
      "HTML 5",
      "CSS 3",
      "Tailwind CSS",
    ],
    startDate: new Date(NaN),
    endDate: new Date(NaN),
    companyLogoImg: "/smart-tab-cleaner-icon.png",
    pagesInfoArr: [
      {
        title: "Automated Tab Lifecycle & Anti-Clutter",
        description:
          "Keep your browser clean and fast with automated rules, regex matching, customizable delay timers, and zero-tracking local privacy.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Smart Tab Cleaner is a lightweight, privacy-first Chrome extension that automatically closes clutter tabs, popup ads, spam redirects, and disposable launcher links (such as Zoom, Teams, or Telegram).",
        "It features customizable countdown delays, instant 1-click blocking from tab history, a regex tester for custom URL rules, and encrypted Chrome Sync to effortlessly synchronize configuration across devices without any external tracking or ads.",
      ],
      bullets: [
        "Automated tab closing with custom regex patterns and countdown delays",
        "1-Click quick block directly from open tabs and history",
        "Encrypted Google Chrome Cloud Sync across devices",
        "100% client-side execution with zero ads, analytics, or tracking",
        "Full Manifest V3 compliance with modern shadcn-inspired interface",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

