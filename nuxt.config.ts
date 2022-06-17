import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    srcDir: 'src/',
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: []
    }
});