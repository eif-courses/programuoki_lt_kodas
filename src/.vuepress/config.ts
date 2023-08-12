import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Programuoki.lt",
  description: "Pradėk mokytis jau dabar!",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
