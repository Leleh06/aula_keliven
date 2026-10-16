import { useState } from "react"

export default function Contador(){

    const[contador, setContador] = useState(0)

     const incrementar = () => setContador(contador + 1) 
    
     const decrementar = () => setContador(contador - 1)

     const resertar = () => setContador(0)

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <div>
                <button onClick={incrementar}>+</button>
                <button onClick={decrementar}>-</button>
                <button onClick={resertar}>reset</button>
            </div>
        </div>
    )
}