import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const ItemDetail = ({detail}) => {
console.log('Detail recibido: ', detail)
  const [purchase, setPurchase]= useState(false)
  
  const {cart, addToCart}= useContext(CartContext)

  const onAdd = (cantidad) => {
    addToCart(detail, cantidad)
    setPurchase(true)
      Swal.fire({
        icon:'success',
        title:`Agregaste ${detail.name} al carrito`,
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1000
      })
  }

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h1>Detalle del producto: {detail.name}</h1>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades</p>
        <p>Price: ${detail.price}</p>
        {
        purchase
        ? <div style={{display:'flex', width:'80%', alignItems:'center', justifyContent:'space-between'}}>
            <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
          </div>
        : <ItemCount stock={detail.stock} onAdd={onAdd}/>  
        }
    </div>
  )
}

export default ItemDetail