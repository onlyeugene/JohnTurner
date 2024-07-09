import React from 'react'
import { UseSelector } from 'react-redux'
import CartPage from './CartPage'

const CartTab = () => {
    const carts = UseSelector(store => store.cart.items)

  return (
    <div>
      <h1>Shopping Cart</h1>
        <div>
            {carts.map((item, key) =>
                <CartPage />
            )}
        </div>
      <div>
        <button>close</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default CartTab
