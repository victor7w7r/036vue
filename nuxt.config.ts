import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({

    buildModules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
    modules: ['@vueuse/nuxt'],
    srcDir: 'src/',
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: []
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: { tailwindcss: {}, autoprefixer: {}}
            }
        }
    },
    tailwindcss: {
        cssPath: '~/assets/scss/tailwind.scss',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: false
    }
});