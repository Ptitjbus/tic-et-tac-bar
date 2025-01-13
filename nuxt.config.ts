// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    '~/assets/css/main.css'
  ],

  modules: ["@nuxt/image", 'nuxt-icon'],

  runtimeConfig: {
    public: {
      emailServiceId: process.env.EMAIL_SERVICE_ID, 
      emailTemplateId: process.env.EMAIL_TEMPLATE_ID,
      emailApiKey: process.env.EMAIL_API_KEY,
    }
  },

  compatibilityDate: "2025-01-12"
})