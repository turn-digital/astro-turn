/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv"],
  // this tells astro-i18next to actually include the http-backend plugin
  backend: true,
  i18next: {
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      // IMPORTANT: no leading slash → works with GitHub Pages, custom domains
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
  },
};
