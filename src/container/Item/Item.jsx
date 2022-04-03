import '../../App.css'
import { Link } from "react-router-dom"
import ItemDetailContainer from "../../container/Item/ItemDetailContainer.jsx"
import ItemCount from "../../container/Item/ItemCount.jsx"

const Item = ({ cloth }) => {
  let order = 0;
  let identificacion = cloth.id;
  return (
    <Link to={`detalle/ ${cloth.id}`}>
    <div className="card m-2 p-0 ">
        <div className="card-header centrar">
            <ItemDetailContainer identificacion = {identificacion}/>
        </div>
        <div className="card-body centrar">
            <ItemCount stock={ 10 } initial={ 1 } cloth={cloth} order={order} />
        </div>
        <div className="card-footer centrar m-0 p-0">
            <h3>Horario de atención</h3>
            <h3>de 09:00 a 18:00 horas</h3>
        </div>
    </div>
    </Link>
    );
}

export default Item