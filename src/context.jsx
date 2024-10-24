import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: [{ id: 123, title: 'Samsung Galaxy' }]
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
