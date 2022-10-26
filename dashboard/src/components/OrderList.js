import { useEffect, useState } from 'react'
import { getOrders } from '../utils/api.js'
import './OrderList.css'

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
    <div className="OrderList">
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.time}>
            {order.customer} ordered {order.type}
          </li>
        ))}
      </ul>
      <button onClick={fetchOrders}>Refresh</button>
    </div>
  )
}

export default OrderList