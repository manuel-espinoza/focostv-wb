// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["normalize.css", "~/assets/css/main.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: true,
        },
      },
    ],
    "@vesp/nuxt-fontawesome",
  ],
  fontawesome: {
    icons:{
      solid: ['cog', 'arrow-up-right-from-square']
    }
  },
});
