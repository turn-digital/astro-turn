import { readFileSync } from "fs";

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "lv",
    locales: ["lv", "en", "en-En", "lv-LV"],
  // Do NOT enable backend here; we want build-time resources
  i18next: {
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      lv: {
        translation: JSON.parse(
          readFileSync(
            // Keep your JSON in the repo; public is fine since we're inlining it
            new URL("./public/locales/lv/translation.json", import.meta.url)
          )
        ),
      },
    },
  },
};
