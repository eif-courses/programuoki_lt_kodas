import { navbar } from "vuepress-theme-hope";

export default navbar([
  {text: "Pradžia", link: "/", icon: "home"},
  {text: "Projektai", link: "/home/", icon: "software"},
  {
    text: "Java",
    icon: "java",
    link: "/java/",
  },
  {
    text: "Android",
    icon: "tool",
    link: "/android/",
  },
  {
    text: "Testavimas",
    icon: "tool",
    link: "/testing/",
  },
  {
    text: "C/C++",
    icon: "code",
    link: "/cpp/",
  },
]);
