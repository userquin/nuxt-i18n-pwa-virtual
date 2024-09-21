// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n'/*, '@vite-pwa/nuxt'*/],
  i18n: {
    restructureDir: false,
    experimental: {
      localeDetector: './localeDetector.ts',
    },
    compilation: {
      // jit: false,
      strictMessage: false,
      escapeHtml: true
    },
    langDir: 'locales',
    defaultLocale: 'en',
    lazy: true,
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        // domain: 'localhost',
        name: 'English'
      }, {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
        // domain: 'localhost',
        name: 'Español'
      },
      {
        code: 'en-GB',
        iso: 'en-GB',
        files: ['en.json', 'en-GB.js', 'en-KK.js', 'en-US.yaml', 'en-CA.json5'],
        name: 'English (UK)'
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja.ts',
        domain: 'mydomain.com',
        name: 'Japanses'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
        domain: 'project-fr.example.com',
        name: 'Français'
      }
    ],
    // bundle: {
    //   runtimeOnly: true
    // },
    // trailingSlash: true,
    debug: true,
    vueI18n: './vue-i18n.options.ts'
  }
})
