// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  modules: ["@nuxt/image", 'nuxt-icon'],
  runtimeConfig: {
    public: {
      emailServiceId: process.env.EMAIL_SERVICE_ID, 
      emailTemplateId: process.env.EMAIL_TEMPLATE_ID,
      emailApiKey: process.env.EMAIL_API_KEY,
    }
  }
})