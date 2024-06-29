import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve, dirname } from "node:path";
import vue from "@vitejs/plugin-vue";
// import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
    // VueI18nPlugin({
    //   include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
