// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { defaultState } from './defaultstate'
import reducer from './reducer'
import { useReducer } from 'react'
import { useGlobalContext } from './context'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

function App() {
  const { state } = useGlobalContext()

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
