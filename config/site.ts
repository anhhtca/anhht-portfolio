const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://anhht.me");

export const siteConfig = {
  name: "Hoang Tuan Anh | Fullstack Developer & AI Builder",
  authorName: "Tuấn Anh",
  username: "anhhtz",
  title: "Fullstack Developer & AI Builder",
  tagline:
    "Building useful software. Exploring AI. Automating the boring stuff.",
  location: "Ho Chi Minh City, Vietnam",
  description:
    "Personal portfolio of Hoang Tuan Anh, a fullstack developer exploring AI engineering, LLM applications, automation, and modern software architecture.",
  bio: "Software developer and technology enthusiast focused on fullstack development, AI engineering, and automation. I enjoy turning ideas into practical products, designing reliable systems, and exploring how AI can solve real-world problems.",
  longBio:
    "I have a strong background in IT operations, database administration, and software development. My work spans the full software lifecycle, from data modeling and backend engineering to user interfaces, infrastructure, and deployment. Today, I am increasingly focused on AI engineering, large language models, retrieval-augmented generation, and intelligent automation. I believe the best technology is not just innovative; it is useful, reliable, and built to solve real problems.",
  url: siteUrl,
  links: {
    github: "https://github.com/anhhtz",
    twitter: "",
    templateRepo: "https://github.com/namanbarkiya/minimal-next-portfolio",
  },
  ogImage: "/og.png",
  avatar: "/profile-img.png",
  iconIco: "/favicon.ico",
  logoIcon: "/apple-touch-icon.png",
  keywords: [
    "Hoang Tuan Anh",
    "Tuấn Anh",
    "Fullstack Developer",
    "AI Builder",
    "AI Engineer",
    "AI Engineering",
    "Next.js",
    "TypeScript",
    "Node.js",
    ".NET",
    "LLM",
    "RAG",
    "Automation",
    "PostgreSQL",
    "Docker",
    "Database Administration",
    "System Architecture",
  ],
};
