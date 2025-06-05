import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase' 
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

//Checkout con alertas, loading

const CheckoutHookForm = () => {
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, cartTotal, clear } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const finalizarCompra = async (dataDelForm) => { 
        setLoading(true); 

        let orden = {
            buyer: {
                name: dataDelForm.name,
                address: dataDelForm.address,
                email: dataDelForm.email
            },
            compras: cart, 
            total: cartTotal(), 
            date: serverTimestamp() 
        };

        const ventasCollection = collection(db, "orders"); 

        try {
            const res = await addDoc(ventasCollection, orden); 
            setOrderId(res.id); 
            clear(); 
            Swal.fire({
                icon: 'success',
                title: '¡Compra exitosa!',
                text: `El ID de tu orden es: ${res.id}`,
                confirmButtonText: 'Genial'
            });
        } catch (error) {
            console.error("Error al guardar la orden:", error);
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Hubo un problema al procesar tu compra. Por favor, inténtalo de nuevo.',
                confirmButtonText: 'Entendido'
            });
        } finally {
            setLoading(false); 
        }
    };

    // Si el carrito está vacío y no hay OrderId, redirige o muestra un mensaje
    if (cart.length === 0 && !orderId) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
                <h2>¡Tu carrito está vacío!</h2>
                <h3>No hay productos para finalizar la compra.</h3>
                <Link className='btn btn-dark mt-3' to='/'>Ir a comprar</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            {orderId
                ? ( // Si hay orderId, muestra el mensaje de éxito
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <h2>¡Tu orden se ha generado con éxito!</h2>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>El id de seguimiento es: <span style={{ color: 'green' }}>{orderId}</span></p>
                        <Link className='btn btn-dark mt-3' to='/'>¡Volver al inicio!</Link>
                    </div>
                ) : ( // Si no hay orderId, muestra el formulario
                    <div>
                        <h1>Completa con tus datos</h1>
                        <form onSubmit={handleSubmit(finalizarCompra)} style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre completo</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id='name'
                                    placeholder='Ingrese su nombre completo'
                                    {...register("name", { required: true, minLength: 5 })}
                                />
                                {errors?.name?.type === 'required' && <span style={{ color: 'red', fontSize: '0.9em' }}>Por favor complete el campo Nombre</span>}
                                {errors?.name?.type === 'minLength' && <span style={{ color: 'red', fontSize: '0.9em' }}>El nombre debe tener como mínimo 5 caracteres</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Dirección</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id='address'
                                    placeholder='Ingrese su dirección'
                                    {...register("address", { required: true, minLength: 10, maxLength: 25 })}
                                />
                                {errors?.address?.type === 'required' && <span style={{ color: 'red', fontSize: '0.9em' }}>Por favor complete el campo dirección</span>}
                                {errors?.address?.type === 'minLength' && <span style={{ color: 'red', fontSize: '0.9em' }}>La dirección debe tener como mínimo 10 caracteres</span>}
                                {errors?.address?.type === 'maxLength' && <span style={{ color: 'red', fontSize: '0.9em' }}>La dirección no debe exceder los 25 caracteres</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input
                                    className='form-control'
                                    type="email"
                                    id='email'
                                    placeholder='Ingrese su correo'
                                    {...register("email", { required: true })}
                                />
                                {errors?.email?.type === 'required' && <span style={{ color: 'red', fontSize: '0.9em' }}>Por favor complete el campo</span>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email-2" className="form-label">Repita su correo electrónico</label>
                                <input
                                    className='form-control'
                                    type="email"
                                    id='email-2'
                                    placeholder='Repita su correo'
                                    {...register("secondmail", {
                                        required: true,
                                        validate: {
                                            equalsMails: mail2 => mail2 === getValues().email || "Los correos no coinciden"
                                        }
                                    })}
                                />
                                {errors?.secondmail?.type === "required" && <span style={{ color: 'red', fontSize: '0.9em' }}>Por favor complete el campo </span>}
                                {errors?.secondmail?.type === "equalsMails" && <span style={{ color: 'red', fontSize: '0.9em' }}>Los correos deben ser iguales </span>}
                            </div>

                            <button className='btn btn-success' type='submit' disabled={loading}>
                                {loading ? 'Procesando Compra...' : 'Finalizar Compra'}
                            </button>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default CheckoutHookForm;