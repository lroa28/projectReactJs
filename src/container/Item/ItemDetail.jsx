import '../../App.css'

// Vista del detalle expandido del producto con su imagen, título, descripción y precio.

const ItemDetail = ({item}) => {
  return (<>
  <div>
      <img src={item.imagen} alt='imagen'/>
      <h3>{item.tipo}</h3> 
      <h3>{item.descripcion}</h3> 
      <h3>${item.precio}</h3>
  </div>

  </>);
}

export default ItemDetail;