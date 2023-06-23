import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [
        vue(),
        svgLoader({
            svgoConfig: {
                multipass: true,
            },
        }),
    ],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                            @use 'sass:math';
                            @import "@/assets/css/variables-scss";
                            @import "@/assets/css/functions";
                            @import "@/assets/css/mixins";
                         `,
            },
        },
    },

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
