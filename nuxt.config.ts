// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],
  // Optionally change the default prefix.
  headlessui: {
      prefix: 'Headless'
  }
})
