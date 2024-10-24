import { useReducer } from 'react'
import CartItem from './CartItem'
import cartItems from './data'

import { CLEAR_CART } from './actions'

const defaultState = {
  cartArray: [...cartItems],
  isLoading: false
}

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cartArray: [] }
  }

  throw new Error('No Action Matches')
}
const CartContainer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  // Business Logic

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  if (state.cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {state.cartArray.map(cartItem => {
          return (
            <CartItem
              key={cartItem.id}
              {...cartItem}
            />
          )
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            <span>total</span> <span>$10</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
