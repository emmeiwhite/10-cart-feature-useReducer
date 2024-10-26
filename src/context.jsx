import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import getTotal from './utils.js'
import cartItems from './data'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

const cartMap = new Map(cartItems.map(item => [item.id, item]))

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: cartMap
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { totalItems, totalCost } = getTotal(state.cart)

  // Business Logic: We are using one level of props & managing app logic in Parent only
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const deleteItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  const increaseCount = id => {
    dispatch({ type: 'INCREASE_COUNT', payload: { id } })
  }

  const decreaseCount = id => {
    dispatch({ type: 'DECREASE_COUNT', payload: { id } })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const response = await fetch(url)
      const cart = await response.json()
      dispatch({ type: 'DISPLAY_ITEMS', payload: { cart } })
    } catch (error) {}
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        deleteItem,
        increaseCount,
        decreaseCount,
        totalItems,
        totalCost
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
