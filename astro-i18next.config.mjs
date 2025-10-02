import { readFileSync } from "fs";

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv"],
  i18next: {
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      lv: {
        translation: JSON.parse(
          readFileSync(new URL("./public/locales/lv/translation.json", import.meta.url))
        ),
      },
    },
  },
};
