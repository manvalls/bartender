import { API_URL } from './config'

export const placeOrder = async (order) => {
  const response = await fetch(`${API_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })

  if (!response.ok) {
    throw new Error(await response.text())
  }
}

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`)
  return response.json()
}
