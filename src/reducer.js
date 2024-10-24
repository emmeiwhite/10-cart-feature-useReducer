import { CLEAR_CART, REMOVE_ITEM } from './actions'

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cartArray: [] }
  }

  if (action.type === REMOVE_ITEM) {
    console.log('remove_item')
    const filteredState = state.cartArray.filter(item => item.id !== action.payload.id)
    return { ...state, cartArray: filteredState }
  }

  throw new Error('No Action Matches')
}

export default reducer
