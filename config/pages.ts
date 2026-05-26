import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Trang chủ",
    description: "Chào mừng bạn đến với trang portfolio của tôi.",
    metadata: {
      title: "Trang chủ",
      description: "Trang portfolio của Hoàng Tuấn Anh.",
    },
  },
  skills: {
    title: "Kỹ năng",
    description: "Các kỹ năng cốt lõi định danh bản sắc chuyên môn.",
    metadata: {
      title: "Kỹ năng",
      description:
        "Các kỹ năng cốt lõi định danh bản sắc chuyên môn của Hoàng Tuấn Anh.",
    },
  },
  projects: {
    title: "Dự án",
    description: "Trình diễn các dự án có ảnh hưởng và thành tựu kỹ thuật.",
    metadata: {
      title: "Dự án",
      description: "Các dự án của Hoàng Tuấn Anh trong việc xây dựng ứng dụng web.",
    },
  },
  contact: {
    title: "Liên hệ",
    description: "Kết nối và khám phá cơ hội hợp tác.",
    metadata: {
      title: "Liên hệ",
      description: "Liên hệ với Hoàng Tuấn Anh.",
    },
  },
  contributions: {
    title: "Đóng góp",
    description: "Đóng góp mã nguồn mở và tham gia cộng đồng.",
    metadata: {
      title: "Đóng góp",
      description:
        "Đóng góp mã nguồn mở và tham gia cộng đồng của Hoàng Tuấn Anh.",
    },
  },
  resume: {
    title: "Sơ yếu lý lịch",
    description: "Sơ yếu lý lịch của Hoàng Tuấn Anh.",
    metadata: {
      title: "Sơ yếu lý lịch",
      description: "Sơ yếu lý lịch của Hoàng Tuấn Anh.",
    },
  },
  blogs: {
    title: "Blog",
    description:
      "Những suy nghĩ về AI, kỹ thuật phần mềm và xây dựng công khai.",
    metadata: {
      title: "Blog",
      description:
        "Blog của Hoàng Tuấn Anh — những suy nghĩ về AI, kỹ thuật phần mềm và xây dựng công khai.",
    },
  },
  experience: {
    title: "Kinh nghiệm",
    description: "Hành trình chuyên môn và lộ trình sự nghiệp.",
    metadata: {
      title: "Kinh nghiệm",
      description:
        "Hành trình chuyên môn và lộ trình sự nghiệp của Hoàng Tuấn Anh.",
    },
  },
};
