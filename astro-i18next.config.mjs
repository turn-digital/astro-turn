/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv", "en"],

  // Add this block:
  i18next: {
    // only use 'en' / 'lv' instead of 'en-US' / 'lv-LV'
    load: "languageOnly",
    supportedLngs: ["lv", "en"],
    nonExplicitSupportedLngs: true,
    lowerCaseLng: true,
    fallbackLng: "lv",

    backend: {
      // adjust if your files are named/namespaced differently
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    // If you use namespaces, make sure this matches your files
    ns: ["translation"],
    defaultNS: "translation",
  },
};
