import { navbar } from "vuepress-theme-hope";

export default navbar([
  {text: "Pradžia", link: "/", icon: "home"},
  {
    text: "Go",
    icon: "folder-open",
    link: "/go/",
  },
  {
    text: "Java",
    icon: "folder-open",
    link: "/java/",
  },
  {text: "Mano Projektai", link: "/home/", icon: "folder"},

  {
    text: "Testavimas",
    icon: "folder-open",
    link: "/testing/",
  },
]);
