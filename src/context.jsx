import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

import cartItems from './data'

/* Map() Data-Structure:
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

// Using a map data-structure
// const cartMap = new Map() Card is empty
const cartMap = new Map(cartItems.map(item => [item.id, item]))

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: cartMap
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
