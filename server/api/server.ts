export default defineEventHandler(async event => {
  const t = await useTranslation(event)
  const query = getQuery(event)
  return {
    hello: t('hello', { name: query.name ?? 'world' }),
  }
})
