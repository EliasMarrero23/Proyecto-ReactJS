import React from 'react';
import { Link } from 'react-router-dom';
import { IoBagOutline } from 'react-icons/io5'

const EmptyCart = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh', 
      textAlign: 'center',
      padding: '20px'
    }}>
      <IoBagOutline size={80} color="#555" className="mb-3" /> 
      <h2 className="mb-2">¡Tu carrito está vacío!</h2>
      <h3 className="mb-4 text-muted">Te invitamos a que veas todos nuestros productos</h3>
      <Link className='btn btn-dark btn-lg' to='/'>
        ¡Hacer un pedido!
      </Link>
    </div>
  );
};

export default EmptyCart;