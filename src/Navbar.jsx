import { useReducer } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { cart } = useGlobalContext()
  // Note: cart is a Map type, we must change it into an Array first
  const currentCart = Array.from(cart.entries())

  const cartItems = currentCart.reduce((acc, item) => {
    const [id, cartItem] = item
    return (acc = acc + cartItem.amount)
  }, 0)

  useReducer()
  return (
    <nav>
      <div className="nav-center">
        <h4>Featuring Cart </h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{cartItems}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
