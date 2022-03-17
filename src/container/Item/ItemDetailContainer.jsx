import { useState, useEffect } from 'react';
import './App.css';
import GetItem from '../helpers/GetItem.js';
import ItemDetail from '../components/ItemDetail.jsx';

const ItemDetailContainer = ({identificacion}) => {
    const [bool, setBoolean] = useState(true);
    const [cloth, setOneDish] = useState();

    useEffect(() => {
        GetItem(identificacion)
            .then((response) => setOneDish(() => response))
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