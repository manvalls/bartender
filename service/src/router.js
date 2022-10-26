import Router from '@koa/router'
import { getOrders, addOrder } from './db.js'

export const router = new Router()

router.get('/orders', async (ctx) => {
  ctx.body = await getOrders()
})

router.post('/order', async (ctx) => {
  const { customer, type } = ctx.request.body

  try {
    await addOrder(customer, type)
    ctx.status = 200
  } catch (e) {
    ctx.status = 429
    ctx.body = e.message
  }
})
