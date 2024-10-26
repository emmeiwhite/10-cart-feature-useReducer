import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_COUNT,
  DECREASE_COUNT,
  LOADING,
  DISPLAY_ITEMS
} from './actions'

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return { ...state, loading: true }
  }

  if (action.type === DISPLAY_ITEMS) {
    const cartItems = new Map(action.payload.cart.map(item => [item.id, item]))
    console.log(action.type.payload)
    return { ...state, loading: false, cart: cartItems }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() }
  }

  if (action.type === REMOVE_ITEM) {
    const copyOfMap = new Map(state.cart)
    // const filteredState = state.cart.delete(action.payload.id)
    copyOfMap.delete(action.payload.id)
    return { ...state, cart: copyOfMap }
  }

  if (action.type === INCREASE_COUNT) {
    const newCart = new Map(state.cart)

    const itemId = action.payload.id
    const item = newCart.get(itemId)
    const newItem = { ...item, amount: item.amount + 1 }

    newCart.set(itemId, newItem)
    return { ...state, cart: newCart }
  }

  if (action.type === DECREASE_COUNT) {
    const newCart = new Map(state.cart)

    const itemId = action.payload.id
    const item = newCart.get(itemId)

    if (item.amount === 1) {
      newCart.delete(itemId)
      return { ...state, cart: newCart }
    }

    const newItem = { ...item, amount: item.amount - 1 }

    newCart.set(itemId, newItem)
    return { ...state, cart: newCart }
  }

  throw new Error(`No Matching Action Type: ${action.type}`)
}

export default reducer
