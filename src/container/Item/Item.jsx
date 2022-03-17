import ItemDetailContainer from '../container/Item/ItemDetailContainer';
import ItemCount from '../container/Item/ItemCount.jsx'


const ItemCard = ({ item }) => {
  let order = 0;
  let identificacion = item.id;
  return (
    <div className="card m-2 p-0 ">
        <div className="card-header centrar">
            <ItemDetailContainer identificacion = {identificacion}/>
        </div>
        <div className="card-body centrar">
            <ItemCount item={item} order={order} />
        </div>
        <div className="card-footer centrar m-0 p-0">
            <h3>Horario de atención</h3>
            <h3>de 09:00 a 18:00 horas</h3>
      </div>
    </div>);
}

export default ItemCard;