import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'

//import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/vite'
//import postcss from 'postcss'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon'),
        },
      },
    }),
  ],
  css: {
    // plugins: {
    //   "@tailwindcss/postcss": {},
    // }
    // postcss: {

    // },
    plugins: [autoprefixer(), tailwindcss()],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
