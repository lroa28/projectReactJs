import {useState} from 'react'
import '../../App.css'


const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        console.log (count)
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    const agregar = () => {
        onAdd (count)
    }
    
    return (
        <div>
            <button onClick={restar}> - </button>
            <label> { count } </label>
            <button onClick={sumar}> + </button><br/>
            <button onClick={agregar}>Add to Cart</button>
        </div>
    )
}

export default ItemCount;
