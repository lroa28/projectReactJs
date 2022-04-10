import "../../App.css"
import Item from "../../container/Item/Item.jsx"

const ItemList = ({clothes}) => {

    return (
    
        <>
          {clothes.map((prod) => <Item key = {prod.id} producto = {prod}/>)}
        </>  
    
    )}


//return <div>
//    <h1>Ropa</h1>
//    {clothes.map((cloth) => {
//        return (
//            <div className="flex-container-card">
//            <div key={cloth.id}>
//                <h1>{cloth.descripcion}</h1>
//                <h1>{cloth.foto}</h1>
//            </div>
//            </div>
//        )
//      })
//    }
//    
//    </div>;
//}


export default ItemList