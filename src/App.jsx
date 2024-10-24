// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { defaultState } from './defaultstate'
import reducer from './reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <main>
      <Navbar state={state} />
      <CartContainer
        state={state}
        dispatch={dispatch}
      />
    </main>
  )
}

export default App
