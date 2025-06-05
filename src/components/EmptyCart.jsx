import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h2>¡Tu carrito está vacío!</h2>
        <h3>Te invitamos a que veas todos nuestros productos</h3>
        <Link className='btn btn-dark' to='/'>¡Hacer un pedido!</Link>
    </div>
  )
}

export default EmptyCart