import CartItem from './CartItem'

const CartContainer = ({ state, dispatch }) => {
  // Derived State: total:

  let totalBill = state.cartArray.reduce((acc, item) => {
    acc = acc + item.price * item.amount
    return acc
  }, 0)

  console.log(totalBill)

  // Business Logic: We are using one level of props & managing app logic in Parent only
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const deleteItem = id => {
    console.log('deleteItem invoked!')
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  const increaseCount = id => {
    dispatch({ type: 'INCREASE_COUNT', payload: { id } })
  }
  const decreaseCount = id => {
    dispatch({ type: 'DECREASE_COUNT', payload: { id } })
  }

  if (state.cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {state.cartArray.map(cartItem => {
          return (
            <CartItem
              key={cartItem.id}
              {...cartItem}
              deleteItem={deleteItem}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          )
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            <span>total</span> <span>${totalBill.toFixed(2)}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
