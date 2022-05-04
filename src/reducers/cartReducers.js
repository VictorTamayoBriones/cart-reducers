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
    cart: [],
    totalToPay: 0
}

export function cartReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find( item => item.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id);
            let pay = state.cart.map( item => item.toPay ).reduce((acc, n) => acc + n, newItem.price)
            
            return itemInCart
            ? {...state,
                cart: state.cart.map((item)=>
                    item.id === newItem.id 
                        ?{...item, quantity: item.quantity +1, toPay: item.price * (item.quantity+1)}
                        : item
                ),
                totalToPay: pay
            }
            : {...state, cart:[...state.cart, {...newItem, quantity: 1, toPay: newItem.price}], totalToPay: state.totalToPay + newItem.price}

            
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find( item => item.id === action.payload );

            
            return{
                ...state,
                cart: itemToDelete.quantity >1 
                ? state.cart.map( item => item.id === action.payload ? {...item, quantity: item.quantity -1, toPay: item.toPay - item.price } : item ) 
                : state.cart.filter( item => item.id != action.payload ),
                totalToPay: state.totalToPay - itemToDelete.price
            }
            
            
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            let itemToRemove = state.cart.find( item => item.id === action.payload )
            return{...state, cart: state.cart.filter( item => item.id != action.payload ), totalToPay: state.totalToPay - itemToRemove.toPay}
        }
        case TYPES.CLEAR:{
            return {...state, cart: [], totalToPay: 0}
        }
    
        default:
            return state;
    }
}