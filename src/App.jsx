import { Box } from "./styled-components/Box"
import { useReducer } from "react"
import { cartReducer, CART_INITIAL_STATE } from "./reducers/cartReducers"
import { CardProduct } from "./components/CardProduct";
import { Buttons } from "./styled-components/buttons";
import { TYPES } from "./actions/cartActions";
import { CardProductOnCart } from "./components/CardProductOnCart";

function App() {

  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const {products, cart}=state;

  const addToCart = (id) =>{dispatch({type: TYPES.ADD_TO_CART, payload: id})}

  const delItemFromCart = (action, id) => {dispatch({type: action, payload: id})}

  const clearCart = ()=>{dispatch({type: TYPES.CLEAR})}

  return (
    <div className="main" >
      <Box>
        <h2>Productos</h2>
        {products.map(product=>(<CardProduct key={product.id} data={product} onAddToCart={addToCart}/>))}
      </Box>
      
      <Box>
        <h2>Carrito</h2>
        <Buttons>
          <button onClick={clearCart} >Clear Cart</button>
        </Buttons>
        { cart.length > 0 ? cart.map((product, index)=>(<CardProductOnCart key={index} data={product} onDeleteItemFromCart={delItemFromCart}/>)) : <p>Carrito vacio</p> }
      </Box>
    </div>
  )
}

export default App
