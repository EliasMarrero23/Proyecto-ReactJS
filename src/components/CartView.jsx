import React, { useContext } from 'react';
import { CartContext } from '../components/context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const { cart, removeItem, cartTotal, clear } = useContext(CartContext);

    // Función para confirmar vaciar carrito
    const handleClearCart = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Esto eliminará todos los productos de tu carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, vaciarlo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                clear();
                Swal.fire(
                    '¡Vaciado!',
                    'Tu carrito ha sido vaciado.',
                    'success'
                );
            }
        });
    };

    if (cart.length === 0) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
                <h2>¡Tu carrito está vacío!</h2>
                <h3>Te invitamos a que veas todos nuestros productos</h3>
                <Link className='btn btn-dark mt-3' to='/'>¡Hacer un pedido!</Link>
            </div>
        );
    }

    return (
        <div className="container my-5"> 
            <h3 className="text-center mb-4">Tu Carrito de Compras</h3>

            <div className="d-none d-md-flex row align-items-center py-2 px-3 border-bottom fw-bold text-muted small">
                <div className="col-2">Producto</div>
                <div className="col-4">Descripción</div>
                <div className="col-1 text-center">Cantidad</div>
                <div className="col-2 text-end">Precio Unitario</div>
                <div className="col-2 text-end">Subtotal</div>
                <div className="col-1 text-center"></div> 
            </div>

            {cart.map((compra) => (
                <div key={compra.id} className="row align-items-center py-3 px-3 border-bottom cart-item">
                    {/* Imagen */}
                    <div className="col-md-2 col-12 text-center mb-2 mb-md-0">
                        <img src={compra.img} alt={compra.name} className="img-fluid rounded" style={{ maxWidth: '80px', maxHeight: '80px', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="col-md-4 col-12 text-center text-md-start mb-2 mb-md-0">
                        <h5 className="mb-0">{compra.name}</h5>
                        <p className="text-muted small d-md-none">{compra.description.substring(0, 50)}...</p> 
                        <p className="text-muted small d-none d-md-block">{compra.description}</p> 
                    </div>
                    
                    <div className="col-md-1 col-4 text-center">
                        <span className="fw-bold d-md-none">Cant: </span>{compra.quantity}
                    </div>
                    
                    <div className="col-md-2 col-4 text-end">
                        <span className="fw-bold d-md-none">Unit: </span>${compra.price.toLocaleString('es-AR')}
                    </div>
                    
                    <div className="col-md-2 col-4 text-end">
                        <span className="fw-bold d-md-none">Subt: </span>${(compra.price * compra.quantity).toLocaleString('es-AR')}
                    </div>
                    
                    <div className="col-md-1 col-12 text-center mt-2 mt-md-0">
                        <button className='btn btn-danger btn-sm' onClick={() => removeItem(compra.id)}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            ))}

            <div className="row justify-content-end align-items-center mt-4">
                <div className="col-md-4 col-12 text-end">
                    <h4 className="fw-bold">Total a pagar: ${cartTotal().toLocaleString('es-AR')}</h4>
                </div>
            </div>

            <div className="row justify-content-center mt-4 mb-5">
                <div className="col-md-6 col-12 text-center d-flex justify-content-around">
                    <Link to="/" className='btn btn-outline-secondary'>Seguir comprando</Link>
                    <button className='btn btn-warning' onClick={handleClearCart}>Borrar carrito</button>
                    <Link to="/checkout" className='btn btn-success'>Terminar compra</Link>
                </div>
            </div>
        </div>
    );
};

export default CartView;