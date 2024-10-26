import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = ({ dispatch }) => {
  const { cart } = useGlobalContext()

  const cartArray = Array.from(cart.entries())

  let totalBill = cartArray.reduce((acc, item) => {
    const [id, cartItem] = item
    acc = acc + cartItem.price * cartItem.amount
    return acc
  }, 0)

  // Business Logic: We are using one level of props & managing app logic in Parent only
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const deleteItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  const increaseCount = id => {
    dispatch({ type: 'INCREASE_COUNT', payload: { id } })
  }
  const decreaseCount = id => {
    dispatch({ type: 'DECREASE_COUNT', payload: { id } })
  }

  if (cartArray.length === 0) {
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
        {cartArray.map(arr => {
          const [id, cartItem] = arr
          console.log(cartItem)
          return (
            <CartItem
              key={id}
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
