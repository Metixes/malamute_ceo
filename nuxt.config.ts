// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Malamute Ceo",
      meta: [
        {
          name: "The most memeable memecoin in existence. The dogs have had their day, it’s time for Pepe to take reign.",
          content: "The Dog coin of the people",
        },
      ],
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    'nuxt-primevue',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: true,
          Inter: true,
          Italiana: true,
          Raleway: {
            wght: [400, 500, 600],
          },
        },
      },
    ],
  ],
  image: {
    format: ["webp"],
  },
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
    },
    components: {
      include: ['Accordion', 'AccordionTab']
  }
  },
  experimental: {
    defaults: {
      nuxtLink: {
        componentName: "NuxtLink",
        activeClass: "router-link-active",
      },
    },
  },
  css: [
    '~/assets/scss/main.scss', 
    "primevue/resources/themes/mdc-light-indigo/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ]
})
