import { defineConfig } from 'vite';
import { fileURLToPath } from "url";

import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  }
});