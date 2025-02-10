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
  routeRules: {
    '/carte.pdf': { redirect: '/api/carte' },
    '/cartelyon6.pdf': { redirect: '/api/cartelyon6' },
  },
  runtimeConfig: {
    public: {
      emailServiceId: process.env.EMAIL_SERVICE_ID, 
      emailTemplateIdLyon6: process.env.EMAIL_TEMPLATE_ID_LYON_6,
      emailTemplateIdLyon7: process.env.EMAIL_TEMPLATE_ID_LYON_7,
      emailApiKey: process.env.EMAIL_API_KEY,
    }
  },

  compatibilityDate: "2025-01-12"
})