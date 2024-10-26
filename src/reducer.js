import { CLEAR_CART, REMOVE_ITEM, INCREASE_COUNT, DECREASE_COUNT } from './actions'

const reducer = (state, action) => {
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
    const newItem = { ...item, amount: item.amount > 0 ? item.amount - 1 : 0 }

    newCart.set(itemId, newItem)
    return { ...state, cart: newCart }
  }

  throw new Error(`No Matching Action Type: ${action.type}`)
}

export default reducer
