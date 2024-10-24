import { useReducer } from 'react'
import { FaCartPlus } from 'react-icons/fa'

const Navbar = () => {
  useReducer()
  return (
    <nav>
      <div className="nav-center">
        <h4>Featuring Cart </h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">2</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
