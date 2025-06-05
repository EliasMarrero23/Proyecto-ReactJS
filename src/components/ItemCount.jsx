import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]=useState(1)
    
    const sumar = () => {
        if(count < stock){

            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }
    
    const comprar = ()=>{
        onAdd(count)
    }

  return (
    <div>
        <div className='counter-container'>
            <button className='btn btn-danger counter-button' onClick={restar}>-</button>
            <span  className='btn counter-value'>{count}</span>
            <button  className='btn btn-success counter-button' onClick={sumar}>+</button>
        </div>
        <button  className='btn btn-primary' onClick={comprar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount