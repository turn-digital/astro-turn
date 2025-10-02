import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import image from "@astrojs/image";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://www.turn.lv", // full custom domain
  integrations: [
    astroI18next(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    preact(),
  ],
});
