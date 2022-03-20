import { useState, useEffect } from 'react';
import '../../App.css';
import GetItem from '../../helpers/GetItem';
import ItemDetail from '../../container/Item/ItemDetail';

// Implementación mock invocando a getItems() y utilizando el resolver then return /* JSX que devuelva un ItemDetail (desafío 6b) */

const ItemDetailContainer = ({identificacion}) => {
    const [bool, setBoolean] = useState(true);  //Para guardar los datos de manera persistente
    const [cloth, setClothes] = useState(); //Para guardar los datos de manera persistente

    useEffect(() => {
        GetItem(identificacion)
            .then((response) => setClothes( response.find (cloth => cloth.id === 1)))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false))
    }, [identificacion]);

    if (bool) {
        return (
            <div className="flex-container">
                <p>Cargando ...</p>
            </div>)
    } else {
        return (
            <>
                <ItemDetail item = {cloth} />
            </>
        );
    }

}


export default ItemDetailContainer;