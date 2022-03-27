import { useState, useEffect } from 'react'
import "../../App.css"
import  GetFetch  from "../../helpers/GetFetch.js"
import  ItemList  from "../../container/List/ItemList.jsx"
import  ItemCount  from "../../container/Item/ItemCount.jsx"


const ItemListContainer = () => {

   const saludo = "Welcome e-bags _luk_c";
  const [ clothes, setClothes] = useState(); //Para guardar los datos de manera persistente
  const [ bool, setBoolean] = useState(true); //Para guardar los datos de manera persistente

  useEffect(() => {
      GetFetch()
      .then((response) => setClothes(() => response))
      .catch((err) => console.log(err))
      .finally(() => setBoolean(() => false))
  }, []);

  const onAdd = (cant) => {
    console.log(cant)
}

  if (bool) {
      return (
          <div className="flex-container">
            <p>Cargando ...</p>
          </div>)
  } else {
      return (
          <div>
              <div className="flex-container">
                  <p> {saludo} </p>
              </div>
              <div className="flex-container-card py-10">
                  <ItemList item={clothes} />
                  <ItemCount initial={1} stock={10} onAdd= { onAdd } />
              </div>
          </div>
      );
  }

}

export default ItemListContainer;