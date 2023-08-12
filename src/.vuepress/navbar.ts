import { navbar } from "vuepress-theme-hope";

export default navbar([
  {text: "Pradžia", link: "/", icon: "home"},
  {text: "Mano Projektai", link: "/home/", icon: "folder"},
  {
    text: "Java",
    icon: "folder-open",
    link: "/java/",
  },
  {
    text: "Android",
    icon: "folder-open",
    link: "/android/",
  },
  {
    text: "Testavimas",
    icon: "folder-open",
    link: "/testing/",
  },
  {
    text: "C/C++",
    icon: "folder-open",
    link: "/cpp/",
  },
]);
