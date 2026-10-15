import { LocaleDictionary } from "./types";

export const enLocale: LocaleDictionary = {
  localeName: "English",
  flag: "🇬🇧",
  nav: {
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    blogs: "Blogs",
    contact: "Contact",
    resume: "Resume",
    menu: "Menu",
  },
  common: {
    viewAll: "View All",
    readMore: "Read more",
    back: "Back",
    allProjects: "All Projects",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
    present: "Present",
    all: "All",
    personal: "Personal",
    professional: "Professional",
    contactMe: "Contact",
    resume: "Resume",
  },
  site: {
    authorName: "Hoang Tuan Anh",
    title: "Fullstack Developer & AI Builder",
    tagline:
      "Building useful software. Exploring AI. Automating the boring stuff.",
    bio: "Software developer and technology enthusiast focused on fullstack development, AI engineering, and automation. I enjoy turning ideas into practical products, designing reliable systems, and exploring how AI can solve real-world problems.",
    location: "Ho Chi Minh City, Vietnam",
  },
  pages: {
    home: {
      title: "Home",
      description: "Welcome to my portfolio.",
    },
    skills: {
      title: "Skills",
      description: "Core technical capabilities defining my engineering profile.",
    },
    projects: {
      title: "Projects",
      description: "Showcasing impactful software projects and technical achievements.",
    },
    experience: {
      title: "Experience",
      description: "Professional journey and career milestones.",
    },
    contact: {
      title: "Contact",
      description: "Get in touch and explore collaboration opportunities.",
      githubCardTitle: "Like this project?",
      githubCardDesc: "It's open source. Explore and contribute on GitHub.",
      sourceCode: "Source Code",
    },
    blogs: {
      title: "Blog",
      description: "Thoughts on AI, software engineering, and building in public.",
      noPosts: "No posts yet",
      checkBack: "Check back soon — posts are coming.",
    },
    resume: {
      title: "Resume",
      description: "Resume of Hoang Tuan Anh.",
      redirecting: "Redirecting to the resume...",
    },
  },
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Enter your message",
    socialLabel: "Social (optional)",
    socialPlaceholder: "Link for social account",
    submitButton: "Submit",
    submitting: "Sending...",
    successTitle: "Thank you!",
    successMessage:
      "Your message has been received! I appreciate your contact and will get back to you shortly.",
    validation: {
      nameMin: "Name must contain at least 3 characters.",
      emailValid: "Please enter a valid email.",
      messageMin: "Please write something more descriptive (at least 10 characters).",
      socialUrl: "Please enter a valid URL.",
    },
  },
};
