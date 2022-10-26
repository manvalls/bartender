import { DRINK, BEER } from './constants'
import { BARTENDER_BUSY } from './errors'
import { orderDelay } from './config'

const orders = []

export const addOrder = (customer, type) => {
  const ongoingOrders = orders.filter(order => Date.now() - order.time < orderDelay)

  if (ongoingOrders.some(order => order.customer === customer && order.type === type)) {
    // Service must be idempotent
    return
  }

  if (type === DRINK && ongoingOrders.length > 0) {
    throw new Error(BARTENDER_BUSY)
  }

  const ongoingBeers = ongoingOrders.filter(order => order.type === BEER)
  if (ongoingBeers.length >= 2) {
    throw new Error(BARTENDER_BUSY)
  }

  const ongoingDrinks = ongoingOrders.filter(order => order.type === DRINK)
  if (ongoingDrinks.length >= 1) {
    throw new Error(BARTENDER_BUSY)
  }

  orders.push({
    customer,
    type,
    time: Date.now(),
  })
}

export const getOrders = () => {
  return orders
}
