import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div className='d-flex justify-content-around align-items-stretch flex-wrap'>
        {products.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList