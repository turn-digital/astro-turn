import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import image from '@astrojs/image';
// https://astro.build/config
export default defineConfig({
    integrations: [
        astroI18next(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp'
          })
    ]
});
