
export const logger = async (ctx, next) => {
  const { url, body } = ctx.request
  console.log(`Request: ${url} ${JSON.stringify(body)}`)
  await next()
}
