/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv"],
  i18next: {
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
  },
  // this is important: tell astro-i18next to enable the backend plugin
  backend: true,
};
