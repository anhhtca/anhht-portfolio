import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  positionVi?: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  descriptionVi?: string[];
  achievements: string[];
  achievementsVi?: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "it-operations-dba",
    position: "IT Operations & Database Administration",
    positionVi: "Quản trị Cơ sở Dữ liệu & Vận hành CNTT",
    company: "Enterprise IT Environment",
    location: "Ho Chi Minh City, Vietnam",
    startDate: new Date(NaN),
    endDate: "Present",
    description: [
      "Experience in IT operations, database administration, application support, infrastructure management, and enterprise system reliability.",
    ],
    descriptionVi: [
      "Kinh nghiệm trong vận hành hệ thống CNTT, quản trị cơ sở dữ liệu, hỗ trợ ứng dụng, quản lý hạ tầng và đảm bảo độ tin cậy hệ thống doanh nghiệp.",
    ],
    achievements: [
      "Database administration and troubleshooting",
      "Application deployment and operational support",
      "Linux systems and infrastructure management",
      "Data integrity, system availability, and security",
      "Collaboration with software and infrastructure teams",
    ],
    achievementsVi: [
      "Quản trị và khắc phục sự cố hệ thống cơ sở dữ liệu",
      "Triển khai ứng dụng và hỗ trợ vận hành dịch vụ",
      "Quản lý hệ thống máy chủ Linux và hạ tầng mạng",
      "Đảm bảo toàn vẹn dữ liệu, tính sẵn sàng và an toàn bảo mật",
      "Phối hợp chặt chẽ với các đội ngũ phát triển phần mềm và hạ tầng",
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
    positionVi: "Kỹ sư Fullstack & Nhà phát triển Độc lập",
    company: "Independent Projects",
    location: "Ho Chi Minh City, Vietnam",
    startDate: new Date(NaN),
    endDate: "Present",
    description: [
      "Designing and building web applications, reusable platforms, and AI-powered prototypes from concept to deployment.",
    ],
    descriptionVi: [
      "Thiết kế và xây dựng các ứng dụng web, nền tảng tái sử dụng và nguyên mẫu tích hợp AI từ giai đoạn ý tưởng đến triển khai thực tế.",
    ],
    achievements: [
      "Building fullstack applications with modern web technologies",
      "Designing APIs, data models, and authentication systems",
      "Integrating AI capabilities into practical workflows",
      "Using AI-assisted development tools to accelerate delivery",
      "Deploying and operating self-hosted services",
    ],
    achievementsVi: [
      "Xây dựng các ứng dụng fullstack với công nghệ web hiện đại",
      "Thiết kế API, cấu trúc mô hình dữ liệu và hệ thống xác thực",
      "Tích hợp các năng lực AI vào quy trình làm việc thực tiễn",
      "Tận dụng các công cụ hỗ trợ lập trình bằng AI để tối ưu tốc độ triển khai",
      "Triển khai và vận hành các dịch vụ tự lưu trữ (self-hosted)",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "LLMs", "RAG", "Docker"],
    logo: "/logo.png",
  },
];
