// https://nuxt.com/docs/api/configuration/nuxt-config

const isCapacitor = process.env.TARGET_PLATFORM === "capacitor";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@vite-pwa/nuxt",
    "@nuxt/hints",
    "@vueuse/nuxt",
    "@nuxtjs/device",
  ],

  devtools: {
    enabled: true,
  },

  devServer: {
    port: 9696,
  },

  css: ["~/assets/css/main.css"],

  ssr: !isCapacitor,

  pwa: {
    disable: isCapacitor,
    registerType: "autoUpdate",
    manifest: {
      name: "Webdak Nuxt PWA",
      short_name: "WebdakNuxtPWA",
      description: "Nuxt4 PWA template",
      theme_color: "#334155",
      id: "/",
      screenshots: [
        {
          src: "/screenshots/mobile-view.png",
          sizes: "720x1280", // Aspect ratio must match the physical image file
          type: "image/png",
          form_factor: "narrow", // Triggers the app-store layout on Android/Mobile devices
          label: "Mobile dashboard overview",
        },
        {
          src: "/screenshots/desktop-view.png",
          sizes: "1920x1080", // Aspect ratio must match the physical image file
          type: "image/png",
          form_factor: "wide", // Triggers the app-store layout on Desktop/Laptop browsers
          label: "Desktop analytics platform",
        },
      ],
    },
    pwaAssets: {
      config: true, // Tells the module to auto-generate assets using default presets
    },
    devOptions: {
      enabled: true,
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      // suppressWarning: true,
    },
    // meta: {
    //   mobileAppIOS: true,
    //   appleStatusBarStyle: "black-translucent",
    // },
  },

  app: {
    head: {
      htmlAttrs: { lang: "sr" },
      title: "Webdak Nuxt PWA",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { name: "description", content: "Nuxt4 PWA template" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Webdak Nuxt PWA" },
        { name: "twitter:description", content: "Nuxt4 PWA template" },
        { name: "twitter:image", content: "/pwa-512x512.png" },
        { property: "og:title", content: "Webdak Nuxt PWA" },
        { property: "og:description", content: "Nuxt4 PWA template" },
        { property: "og:image", content: "/pwa-512x512.png" },
      ],
    },
  },

  nitro: {
    preset: "static",
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "workbox-window"],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
