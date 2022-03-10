//import './App.css'; No lo toma
import React from 'react'
import cart from '../../Assets/img/cart.jpeg'

function Widget() {
  return (
    <>
    <div>
      <img src={cart} style={{ height: 50, width: 50 }} className="img_carrito-header" alt="carrito" />
    </div>
    </>
  )
}

export default Widget
