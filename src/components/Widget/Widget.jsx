import React from 'react'
import cart from '../../assets/img/cart.jpeg'
import '../../components/Styles/Widget.css'

function Widget() {
  return (
    <>
    <div>
      <img src={cart} className="img_carrito-header float-right" alt="carrito" />
    </div>
    </>
  )
}

export default Widget
