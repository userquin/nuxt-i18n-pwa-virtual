import type { I18nOptions } from 'vue-i18n'

export default {
  legacy: false,
  locale: 'en',
  fallbackLocale: 'fr',
  modifiers: {
    snakeCase: (str: string) => str.split(' ').join('-'),
    pascalCase: (str: string) =>
        str
            .split(' ')
            .map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
            .join('')
  },
  messages: {
    ja: {
      bar: {
        buz: 'バズ'
      }
    }
  }
  // fallbackLocale: {
  //   en: ['ja', 'fr', 'en-US'],
  //   ja: ['en', 'fr', 'ja-JP'],
  //   fr: ['en', 'ja', 'fr-FR']
  // }
} satisfies I18nOptions
