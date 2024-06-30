// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['normalize.css', '~/assets/css/main.css'],
  modules: [["@nuxtjs/google-fonts", {
    families: {
      Poppins: true
    }
  }]]
})