import { navbar } from "vuepress-theme-hope";

export default navbar([
  {text: "Pradžia", link: "/", icon: "home"},
  {text: "Mano Projektai", link: "/home/", icon: "folder"},
  {
    text: "Go kalba",
    icon: "folder-open",
    link: "/go/",
  },
  {
    text: "Java",
    icon: "folder-open",
    link: "/java/",
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
