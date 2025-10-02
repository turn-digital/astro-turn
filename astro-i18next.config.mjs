/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv"],
  i18next: {
    ns: ["translation"],        // we have just one namespace
    defaultNS: "translation",
    backend: {
      // IMPORTANT: no leading slash
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
  },
};
