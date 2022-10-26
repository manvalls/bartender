import { useEffect, useState } from 'react'
import { getOrders } from '../utils/api.js'

const OrderList = () => {
  const [orders, setOrders] = useState([])
  
  const fetchOrders = async () => {
    const orders = await getOrders()
    setOrders(orders)
  }

  useEffect(() => {
    fetchOrders()
    return () => {} 
  }, [])

  return (
    <>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.time}>
            {order.customer} ordered {order.type}
          </li>
        ))}
      </ul>
      <button onClick={fetchOrders}>Refresh</button>
    </>
  )
}

export default OrderList