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
      </div>
    );
  };


export default Cart