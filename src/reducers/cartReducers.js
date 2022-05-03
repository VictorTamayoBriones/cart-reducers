import { TYPES } from '../actions/cartActions';

export const CART_INITIAL_STATE = {
    products:[
        {
            id: 1,
            name: "producto 1",
            price: 100,
            stock: 10
        },
        {
            id: 2,
            name: "producto 2",
            price: 200,
            stock: 20
        },
        {
            id: 3,
            name: "producto 3",
            price: 300,
            stock: 30
        },
        {
            id: 4,
            name: "producto 4",
            price: 400,
            stock: 40
        },
        {
            id: 5,
            name: "producto 5",
            price: 500,
            stock: 50
        },
        {
            id: 6,
            name: "producto 6",
            price: 600,
            stock: 60
        },
    ],
    cart: []
}

export function cartReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find( item => item.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id);
            
            return itemInCart
            ? {...state,
                cart: state.cart.map((item)=>
                    item.id === newItem.id 
                        ?{...item, quantity: item.quantity +1}
                        : item
                )
            }
            : {...state, cart:[...state.cart, {...newItem, quantity: 1}]}

            
        }
        case TYPES.REMOVE_ONE_FROM_CART:{

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.CLEAR:{

        }
    
        default:
            return state;
    }
}