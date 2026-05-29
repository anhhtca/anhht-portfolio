import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@anhhtca",
    icon: Icons.gitHub,
    link: "https://github.com/anhhtca",
  },
  // {
  //   name: "LinkedIn",
  //   username: "Hoàng Tuấn Anh",
  //   icon: Icons.linkedin,
  //   link: "https://www.linkedin.com/in/namanbarkiya",
  // },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "anhht.ca",
    icon: Icons.gmail,
    link: "mailto:anhht.ca@gmail.com",
  },
];
