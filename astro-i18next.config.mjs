// astro-i18next.config.mjs
/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "lv",
  locales: ["lv"],

  // make i18next robust in production
  i18next: {
    fallbackLng: "lv",
    supportedLngs: ["lv"],
    nonExplicitSupportedLngs: true, // maps lv-LV -> lv
    load: "currentOnly",            // only load 'lv' (not 'lv-LV')
    // debug: true, // (optional) enable to see loading/fallback logs in console
  },

  // leave this as the root path since you’re on a root custom domain
  resourcesBasePath: "/locales",
};
