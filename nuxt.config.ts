// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    baseURL: '/',
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js'
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/i18n',
  ],

  ssr: true,
  nitro: {
    preset: 'static',
    output: {
      publicDir: 'docs',
    },
  },

  i18n: {
    defaultLocale: 'en',
    langDir: 'lang',
    baseUrl: 'https://www.thepalacecompany.com/',
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en.json',
      name: 'English'
    }, {
      code: 'es',
      iso: 'es-MX',
      file: 'es.json',
      name: 'Español'
    }],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      cookieCrossOrigin: true
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  css: ['~/assets/css/main.css', '~/assets/base.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: {
    global: true,
    dirs: [
      '~/components',
      {
        path: '~/components/group',
        prefix: 'group'
      }
    ]
  },

  experimental: {
    defaults: {
      nuxtLink: {
        externalRelAttribute: 'referrer'
      }
    }
  },

  devtools: { enabled: true }
})