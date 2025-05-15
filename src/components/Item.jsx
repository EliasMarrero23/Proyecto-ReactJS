import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({prod}) => {
    const {name, price, img, id}= prod
  return (
    <div className='card d-flex flex-column m-2' style={{width:'18rem', marginTop:15}}>
        <img className='card-img-top' src={img} alt={name}/>
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title mt-auto'>{name}</h5>
            <p className='card-text mt-auto'>${price},00</p>
              <Link className='btn btn-dark mt-auto' to={`/item/${id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item