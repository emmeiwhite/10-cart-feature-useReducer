import { useReducer } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import reducer from './reducer'
import { defaultState } from './defaultstate'

const Navbar = ({ state }) => {
  const cartItems = state.cartArray.reduce((acc, item) => {
    return (acc = acc + item.amount)
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
