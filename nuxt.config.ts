import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({

    buildModules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
    modules: ['@vueuse/nuxt'],
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