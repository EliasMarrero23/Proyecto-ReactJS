import React from 'react'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({detail}) => {

  const {cart}= useContext(CartContext)

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h1>Detalle del producto: {detail.name}</h1>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>Stock: {detail.stock} unidades</p>
        <p>Price: ${detail.price}</p>
        <ItemCount stock={detail.stock}/>
    </div>
  )
}

export default ItemDetail