import { CLEAR_CART, REMOVE_ITEM, INCREASE_COUNT, DECREASE_COUNT } from './actions'

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cartArray: [] }
  }

  if (action.type === REMOVE_ITEM) {
    const filteredState = state.cartArray.filter(item => item.id !== action.payload.id)
    return { ...state, cartArray: filteredState }
  }

  if (action.type === INCREASE_COUNT) {
    console.log('increase count')
  }

  if (action.type === DECREASE_COUNT) {
    console.log('decrease count')
  }

  throw new Error('No Action Matches')
}

export default reducer
