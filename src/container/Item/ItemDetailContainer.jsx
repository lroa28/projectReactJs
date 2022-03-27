import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import '../../App.css'
import GetItem from "../../helpers/GetItem.js"
import ItemDetail from "../../container/Item/ItemDetail.jsx"
//import Item from "../../container/Item/Item.jsx"

// Implementación mock invocando a getItems() y utilizando el resolver then return /* JSX que devuelva un ItemDetail (desafío 6b) */

const ItemDetailContainer = () => {
    const [bool, setBoolean] = useState(true);  //Para guardar los datos de manera persistente
    const [ item, setItem ] = useState (); //Para guardar los datos de manera persistente
    const {detalleId} = useParams () //Me almacena el valor de ItemDetailContainer que se esta seleccionando
    console.log (detalleId)

    useEffect(() => {
        GetItem()
            .then((response) => setItem( response.find (cloth => cloth.id === 1)))
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
            <>
                <ItemDetail item = {item} />
            </>
        );
    }

}

export default ItemDetailContainer;