import useCartContext from "../../context/cartContext"
//import CartContext from "../../context/cartContext"
//import { Link } from "react-router-dom"

function Cart() {

    const {cartList, emptyCart} = useCartContext()

    return (
      <div>
        {cartList.map(prod => 
        <li key= {prod.id}>
              Nombre: {prod.title}
              <br />
              Precio: {prod.price}                                 
              <br />
              Descripión: {prod.description}
              <br />
              Cantidad: {prod.cantidad}
        </li>)}
        <br/>
        <button onClick={emptyCart}>Vaciar Cart</button>
      </div>
    )
  }


export default Cart