// i18next.config.mjs
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const lv = require("./public/locales/lv/translation.json");

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv"],
  // Do NOT enable backend here; we want everything at build-time
  i18next: {
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      lv: { translation: lv },
    },
  },
};
