import lv from "./public/locales/lv/translation.json" assert { type: "json" };

export default {
  defaultLocale: "lv",
  locales: ["lv"],
  i18next: {
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      lv: { translation: lv },
    },
  },
};
