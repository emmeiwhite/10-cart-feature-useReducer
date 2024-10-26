import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

import cartItems from './data'

// Using a map data-structure
const cartMap = cartItems.map(item => [item.id, item])
const cart = new Map(cartMap)

// console.log('The cart data structure is:')
// console.log(cart)
/*
const arr = ['a', 'b', 'c']
const iterator = arr.entries()
console.log('Iterator:')
console.log(iterator)


const arr =['a','b','c','d'];
const iterator = arr.entries()

// for(let [index,value] of iterator){
//   console.log(index,value);
// }


const backArr = Array.from(iterator)
console.log(backArr);

const originalArray = backArr.map(item=>item[1])
console.log(originalArray)
*/

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: []
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
