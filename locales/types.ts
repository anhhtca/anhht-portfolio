export type Locale = "vi" | "en";

export interface LocaleDictionary {
  localeName: string;
  flag: string;
  nav: {
    projects: string;
    experience: string;
    skills: string;
    blogs: string;
    contact: string;
    resume: string;
    menu: string;
  };
  common: {
    viewAll: string;
    readMore: string;
    back: string;
    allProjects: string;
    sourceCode: string;
    liveDemo: string;
    present: string;
    all: string;
    personal: string;
    professional: string;
    contactMe: string;
    resume: string;
  };
  site: {
    authorName: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
  };
  pages: {
    home: {
      title: string;
      description: string;
    };
    skills: {
      title: string;
      description: string;
    };
    projects: {
      title: string;
      description: string;
    };
    experience: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      githubCardTitle: string;
      githubCardDesc: string;
      sourceCode: string;
    };
    blogs: {
      title: string;
      description: string;
      noPosts: string;
      checkBack: string;
    };
    resume: {
      title: string;
      description: string;
      redirecting: string;
    };
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    socialLabel: string;
    socialPlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    validation: {
      nameMin: string;
      emailValid: string;
      messageMin: string;
      socialUrl: string;
    };
  };
}
