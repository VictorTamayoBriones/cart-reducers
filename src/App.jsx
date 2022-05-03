import { Box } from "./styled-components/Box"
import { useReducer } from "react"
import { cartReducer, CART_INITIAL_STATE } from "./reducers/cartReducers"
import { CardProduct } from "./components/CardProduct";

function App() {

  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  
  const addToCart = (id) =>{console.log(id)}

  return (
    <div className="main" >
      <Box>
        <h2>Productos</h2>
        {state.products.map(product=>(<CardProduct key={product.id} data={product} onAddToCart={addToCart}/>))}
      </Box>
      <Box>
        <p>Carrito</p>
      </Box>
    </div>
  )
}

export default App
