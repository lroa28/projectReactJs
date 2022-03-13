import { useState, useEffect } from 'react'
import './App.css'
import GetFetch from '../helpers/GetFetch.js'
import ItemList from '../container/ItemList.jsx'

const ItemListContainer = () => {
  const saludo = "Welcome e-bags _luk_c";
  const [dishes, setDishes] = useState([{}]);
  const [bool, setBoolean] = useState(true);

  useEffect(() => {
      GetFetch()
          .then((response) => setDishes(() => response))
          .catch((err) => console.log(err))
          .finally(() => setBoolean(() => false))
  }, []);

  if (bool) {
      return (
          <div className="flex-container">
            <p>Cargando ...</p>
          </div>)
  } else {
      return (
          <div>
              <div className="flex-container">
                  <Greeting saludo={saludo} />
              </div>
              <div className="flex-container-card py-10">
                  <ItemList item={dishes} />
              </div>
          </div>
      );
  }

}


export default ItemListContainer