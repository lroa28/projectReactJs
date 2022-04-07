import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import "../../App.css"
//import  GetFetch  from "../../helpers/GetFetch.js"
import  ItemList  from "../../container/List/ItemList.jsx"
import  ItemCount  from "../../container/Item/ItemCount.jsx"
//import * as firestore from 'firebase/firestore'
import { collection, getDocs, getFirestore, query, where, limit} from 'firebase/firestore' //importarmos libreria de Firestore

const ItemListContainer = () => {
   const saludo = "Welcome e-bags _luk_c";
   const [ clothes, setClothes] = useState([ ]); //Hook Para guardar los datos de manera persistente
   const [ bool, setBoolean] = useState(true); //Hook Para guardar los datos de manera persistente
    //console.log(task)
    const { id } = useParams()

    //useEffect(() => {
    //if (id) {
    //    GetFetch // simulacion a un llamado a una api 
    //    .then((data) => setClothes(() => data))
    //    .catch((err) => console.log (err))
    //    .finally(() => setBoolean(false))
    //} else {
    //    GetFetch // simulacion a un llamado a una api        
    //    .then(data => setProds(data))
    //    .catch(err => console.log(err))
    //    .finally(()=> setLoading(false))     
    //}, [id])

    // trae un documento, que usamos en detail
    // useEffect(()=> {
    //     const db = getFirestore()
    //     const queryDoc = doc(db, 'items', 'OFnvgi8PYvV0VJOFwzQ6') //apunta a ese doc a ese items
    //     getDoc(queryDoc) // trae el doc
    //     .then(resp => setProd( {id: resp.id, ...resp.data()} )) //esta es la promesa, extraigo los datos c la fx data
    // }, [id])

    // traer todos los items
    // useEffect(()=> {
    //     const db = getFirestore()
    //     const queryCollection = collection (db , 'items')
    //     getDocs (queryCollection)
    //     .then(resp => setProds( resp.docs.map(producto => ( {id:producto.id, ...producto.data()})))
    //     .catch((err) => console.log (err))
    //     .finally(() => setBoolean(false))    
    // }, [id])

    // traer productos filtrados por tipo
    useEffect(()=> {
        const db = getFirestore() //usamos nuestra base de datos, es distinta a la fx getFirestoreApp, inicializa y trae las APIKey
        const queryCollection =  collection(db, 'items' ) //traemos todos los items, usa 2 parametros
        const queryFilter = query(queryCollection, 
            where('tipo','==','buzo'), //recibe 3 parametros
            where('precio','>=', 1000),
            limit(1) //del filtro me trae uno solo
        )
        getDocs(queryFilter) // es el array
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