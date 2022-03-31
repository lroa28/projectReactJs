import { createContext, useContext, useState } from "react"

const cartContext = createContext([]) //context creado con un array vacío
export const useCartContext = () => useContext(cartContext)

function CartContexProv({children}) {
    const [cartList, setCartList] = useState([]) //hook para hacer los datos persistentes
    
//    const addToCart=(item) =>{
//        setCartList( [ ...cartList, item ] ) //me va desplegando lo que ya tenia y lo va agregando, si dejo solo item me lo pisa 
//    }

    const isInCart = (identification) => {
        const item = cartList.find(element => element.id === identification);
        if (item !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    const addToCart = (item) => {
        if (!isInCart(item.id)) {
            setCartList([...cartList, item]); //me va desplegando lo que ya tenia y lo va agregando, si dejo solo item me lo pisa 
        }
        else {
            cartList.cantidad += item.cantidad;
            alert("Item ya esta seleccionado")
            setCartList([...cartList])
        }
    }

    const removeFromCart = (identification) => {
        const item = cartList.find(element => element.id === identification);
        if (item) {
            const index = cartList.indexOf(item)
            cartList.splice(index, 1);
            alert("El item fue removido")
            setCartList([...cartList])
        }
    }

    const vaciarCarrito = (item) => {
        setCartList([]);
    }

    const finalizarCompra = () => {
        setCartList([]);
    }

    return (
        <cartContext.Provider value={{ //los puedo usar en cualq lugar de mi app
            cartList,
            setCartList,
            addToCart,
            vaciarCarrito,
            isInCart,
            removeFromCart,
            finalizarCompra
        }}>
            { children }
        </cartContext.Provider>
    )
};

export default CartContexProv;
