// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss"],
  // This sets global metadata
  app: {
    head: {
      title: "Tanglad Merch",
      meta: [
        {
          name: "description",
          content: "introductio to Nuxt 3",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
