import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // "@nuxt/eslint",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
  ],
  primevue: {
    // components: {
    //   include: ['Button', 'InputText']
    // },
    // importPT: true,
    // options: {
    //   ripple: true
    // },
    // cssLayerOrder: 'tailwind-base, primevue'
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  devServer: {
    port: 3030,
  },
  compatibilityDate: "2024-11-01",
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  // eslint: {
  //   config: {
  //     stylistic: {
  //       semi: false,
  //       indent: 2,
  //       commaDangle: "always",
  //       quotes: "double",
  //     },
  //   },
  // },
});
