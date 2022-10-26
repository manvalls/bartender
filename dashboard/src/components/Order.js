import { useState } from 'react'
import { BEER, DRINK } from '../utils/constants.js'
import { placeOrder } from '../utils/api.js'

const Order = () => {
  const [customer, setCustomer] = useState('')
  const [type, setType] = useState(DRINK)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await placeOrder({ customer, type })
      setMessage('Order accepted')
    } catch(err) {
      setMessage('Order denied, bartender is busy')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer"
        value={customer}
        onChange={(event) => setCustomer(event.target.value)}
      />
      <select value={type} onChange={(event) => setType(event.target.value)}>
        <option value={DRINK}>Drink</option>
        <option value={BEER}>Beer</option>
      </select>
      <button type="submit">Order</button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default Order
