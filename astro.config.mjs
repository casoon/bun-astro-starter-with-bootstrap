import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
    integrations: [alpine()],
    vite: {
        css: {
            transformer: "lightningcss",
        },
    },
});
