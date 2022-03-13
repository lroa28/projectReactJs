import '../App.css';

const ItemDetail = ({item}) => {
  return (<>
  <div>
      <h3>{item.descripcion}</h3> 
      <h3>{item.precio}$</h3>
  </div>

  </>);
}

export default ItemDetail;