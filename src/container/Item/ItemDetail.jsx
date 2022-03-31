import '../../App.css'
import { Link } from "react-router-dom"
import { React , useState } from "react"
import ItemCount from '../../container/Item/ItemCount'
//import CartContextProv from "../../context/cartContext"
import useCartContextProv  from '../../context/cartContext';

// Vista del detalle expandido del producto con su imagen, título, descripción y precio.
function ItemDetail ({item}) {
  const [isCant, setIsCant] = useState(false)
//const {addToCart} = useContext (CartContextProv)
 const {addToCart} = useCartContextProv() //arrow function que puedo usar en lugar de la anterior y se importa una sola vez como import { useCartContext } from '../context/cartContext.js'; 

  const onAdd= (cant) => {
      console.log(cant)
      addToCart( { ...item, cantidad: cant } )
      setIsCant(true)
  }
  return (
      <div >
          <center>
              <img src={item.imagen} alt='imagen'/>
              <h3>{item.tipo}</h3> 
              <h3>{item.descripcion}</h3> 
              <h3>${item.precio}</h3>
          </center>
          {isCant ?
              <>  
                  <Link to='/'>
                      <button className='btn btn-outline-primary'>Seguir comprando</button>
                  </Link>
                  <Link to='/cart'>
                      <button className='btn btn-outline-success'>Ir a Cart</button>
                  </Link>
              </>
           :
              <ItemCount initial={1} stock={10} onAdd={onAdd} />
          }
      </div>
  )
}

export default ItemDetail