import { useReducer } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { totalItems } = useGlobalContext()

  useReducer()
  return (
    <nav>
      <div className="nav-center">
        <h4>Featuring Cart </h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalItems}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
