import {defineConfig} from 'astro/config';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
    integrations: [alpine()],
    server: {
        port: 3000
    },
    vite: {
        css: {
            transformer: "lightningcss",
        },
    },
});
