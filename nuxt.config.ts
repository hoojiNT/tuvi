import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // "@nuxt/eslint",
    "@pinia/nuxt",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  devServer: {
    port: 3030,
  },
  compatibilityDate: "2024-11-01",
  vite: {
    plugins: [tailwindcss()],
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
