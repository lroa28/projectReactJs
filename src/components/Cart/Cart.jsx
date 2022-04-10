import useCartContext from "../../context/cartContext"
import CartContext from "../../context/cartContext"
import { Link } from "react-router-dom"
import { Table } from "react-bootstrap";
import Checkout from "../../components/Cart/Checkout";

const Cart = () => {
    const { cart } = useCartContext(CartContext);
  
    const messageConditional = (
      <div className="card text-center cart-message">
        <div className="card-header">Ops!</div>
        <div className="card-body">
          <h5 className="card-title">¡Tu carrito está vacío!</h5>
          <p className="card-text">
            Seguir comprando ...
          </p>
          <Link to="/" className="btn btn-primary">
            Ir a comprar
          </Link>
        </div>
      </div>
    );

    
    return (
      <div className="cart">
        {cart.length === 0 ? (
          messageConditional
        ) : (
          <div>
            <Table />
            <Checkout />
          </div>
        )}
         <div>
      {cartList.map(prod => 
      <div>
        <ListGroup className="warning" key= {prod.id} as="ol" >
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start warning">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h1>{prod.title}</h1>
                <h3>{prod.description}</h3>
              </div>
              <h3>Precio:{`$${(prod.price * prod.cantidad)}.-`}</h3>
            </div>
            <Badge bg="primary" pill>
              <div className='qtyOfItems'>
                <h2>Unidades: {prod.cantidad}</h2>
                <Button className='botonEliminar' onClick={()=>removeItems(prod.id)}>Eliminar</Button>
              </div>
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>)}
      <div>
        <LegendsInCart/>
      </div>
      <EmptyCartButton/><br /><br />
      <Button className='btn warning' onClick={createOrder}>Crear Orden</Button>
    </div>
  </div>
    );
  };


export default Cart