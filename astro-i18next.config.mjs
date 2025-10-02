/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv"],

  // 👇 Ensure both SSR-time and browser-time loading
  load: ["server", "client"],

  // You're on a root custom domain, translations live at /public/locales
  resourcesBasePath: "/locales",

  // Make the browser loader robust and explicit
  i18nextClient: {
    fallbackLng: "lv",
    supportedLngs: ["lv"],
    nonExplicitSupportedLngs: true, // maps lv-LV -> lv
    load: "currentOnly",
    backend: {
      // where to fetch the JSON from in the browser
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    // debug: true, // uncomment to see logs in DevTools console
  },
};
