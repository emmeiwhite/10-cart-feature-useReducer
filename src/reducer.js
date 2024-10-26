import { CLEAR_CART, REMOVE_ITEM, INCREASE_COUNT, DECREASE_COUNT } from './actions'

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }

  if (action.type === REMOVE_ITEM) {
    const filteredState = state.cart.filter(item => item.id !== action.payload.id)
    return { ...state, cart: filteredState }
  }

  if (action.type === INCREASE_COUNT) {
    const updatedState = state.cart.map(item => {
      if (item.id === action.payload.id) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return { ...state, cart: updatedState }
  }

  if (action.type === DECREASE_COUNT) {
    const updatedState = state.cart.map(item => {
      if (item.id === action.payload.id) {
        return { ...item, amount: item.amount > 0 ? item.amount - 1 : 0 }
      }
      return item
    })

    return { ...state, cart: updatedState }
  }

  throw new Error(`No Matching Action Type: ${action.type}`)
}

export default reducer
