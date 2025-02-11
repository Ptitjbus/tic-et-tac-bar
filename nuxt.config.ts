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
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      }
    }
  },
  generate: {
    routes: ['/'], // Ajoutez vos routes ici
  },
  modules: ["@nuxt/image", 'nuxt-icon'],
  image: {
    format: ['webp'],
    domains: ['localhost'],
    provider: 'ipx',
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
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