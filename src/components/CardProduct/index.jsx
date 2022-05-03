import { Card } from "./style"

export const CardProduct = ({data, onAddToCart}) =>{
    return(
        <Card>
            <h3>{data.name}</h3>
            <p>stock: {data.stock}</p>
            <p>${data.price}</p>
            <button onClick={()=>onAddToCart(data.id)} >Add</button>
        </Card>
    )
}