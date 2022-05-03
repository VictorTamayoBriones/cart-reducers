import { TYPES } from "../../actions/cartActions"
import { Card } from "./style"

export const CardProductOnCart = ({data, onDeleteItemFromCart})=>{
    return(
        data ?
        <Card>      
            <h3>{data?.name}</h3>
            <p>No. Items: {data?.quantity}</p>
            <p>pay: {data?.price}</p>
            <button onClick={()=>onDeleteItemFromCart(TYPES.REMOVE_ONE_FROM_CART ,data?.id)} >Remove One</button>
            <button onClick={()=>onDeleteItemFromCart(TYPES.REMOVE_ALL_FROM_CART ,data?.id)} >Remove All</button>               
        </Card>
        : null
    )
}