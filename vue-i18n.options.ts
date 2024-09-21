import fr from './locales/fr.json'
import es from './locales/es.json'

export default defineI18nConfig(() => {
  const config = useRuntimeConfig()
  return {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      es,
      ja: {
        bar: {
          buz: 'こんにちは！{name}!',
          fn: ({ named }: any) => `こんにちは！${named('name')}!`
        },
        items: [{ name: 'りんご' }, { name: 'バナナ' }, { name: 'いちご' }]
      },
      fr
    },
    modifiers: {
      // @ts-ignore
      snakeCase: (str: string) => str.split(' ').join('-'),
      pascalCase: (str: string) =>
          str
              .split(' ')
              .map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
              .join('')
    },
    missingWarn: true,
    fallbackWarn: true,
    warnHtmlMessage: true,
    silentFallbackWarn: false,
    silentTranslationWarn: false
  }
})
