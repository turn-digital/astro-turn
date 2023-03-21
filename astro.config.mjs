import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import vanillaExtract from 'astro-vanilla-extract';
// https://astro.build/config
export default defineConfig({
    integrations: [
        astroI18next(),
        vanillaExtract()
    ]
});
