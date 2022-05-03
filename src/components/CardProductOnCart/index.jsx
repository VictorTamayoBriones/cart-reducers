import { Card } from "./style"

export const CardProductOnCart = ({data})=>{
    return(
        <Card>
            <h3>{data.name}</h3>
            <p>No. Items: {data?.quantity}</p>
            <p>pay: {data.price}</p>
            <button>Remove One</button>
            <button>Remove All</button>
        </Card>
    )
}