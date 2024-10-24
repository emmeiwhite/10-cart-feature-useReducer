import { CLEAR_CART } from './actions'

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cartArray: [] }
  }

  throw new Error('No Action Matches')
}

export default reducer
