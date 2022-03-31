import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import "../../App.css"
//import  GetFetch  from "../../helpers/GetFetch.js"
import  ItemList  from "../../container/List/ItemList.jsx"
import  ItemCount  from "../../container/Item/ItemCount.jsx"
import * as firestore from 'firebase/firestore'

const ItemListContainer = () => {
   const saludo = "Welcome e-bags _luk_c";
   const [ clothes, setClothes] = useState([ ]); //Hook Para guardar los datos de manera persistente
   const [ bool, setBoolean] = useState(true); //Hook Para guardar los datos de manera persistente
    //console.log(task)
    const { id } = useParams()

    //useEffect(() => {
    //if (id) {
    //    GetFetch // simulacion a un llamado a una api 
    //    .then((response) => setClothes(() => response))
    //    .catch((err) => console.log (err))
    //    .finally(() => setBoolean(false))
    //} else {
    //    GetFetch // simulacion a un llamado a una api        
    //    .then(resp => setProds(resp))
    //    .catch(err => console.log(err))
    //    .finally(()=> setLoading(false))     
    //}, [id])

    // trae un documento
    // useEffect(()=> {
    //     const db = getFirestore()
    //     const queryDoc = doc(db, 'items', 'OFnvgi8PYvV0VJOFwzQ6') 
    //     getDoc(queryDoc)
    //     .then(resp => setProd( {id: resp.id, ...resp.data()} ))
    // }, [id])


    // traer productos filtrados por tipo
    useEffect(()=> {
        const db = firestore.getFirestore()
        const queryCollection =  firestore.collection(db, 'items' )
        const queryFilter = firestore.query(queryCollection, 
            firestore.where('tipo','==','buzo'), 
            //where('price','>=', 1000),
            firestore.limit(1) 
        )
        firestore.getDocs(queryFilter)
        .then(resp => setClothes( resp.docs.map(items =>( {id: items.id, ...items.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setBoolean(false))   
    }, [id])


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
                  <ItemList clothes={clothes} />
                  <ItemCount initial={1} stock={10} onAdd= { onAdd } />
              </div>
          </div>
      );
  }

}

export default ItemListContainer