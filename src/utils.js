export default function getTotal(cart) {
  //   const cartArray = Array.from(cart.entries()).map(arr => arr[1])
  const cartArray = Array.from(cart.values())

  const totals = cartArray.reduce(
    (acc, obj) => {
      const { amount, price } = obj
      acc.totalCost += Number(amount) * Number(price)
      acc.totalItems += Number(amount)
      return acc
    },
    { totalCost: 0, totalItems: 0 }
  )

  return totals
}
