import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        // Usa la forma de función de actualización para setCart
        setCart(prevCart => {
            if (prevCart.some((prod) => prod.id === item.id)) {
                // Si el producto ya está en el carrito
                const updatedCart = prevCart.map((prod) => {
                    if (prod.id === item.id) {
                        return { ...prod, quantity: prod.quantity + cantidad };
                    } else {
                        return prod;
                    }
                });
                console.log('Carrito actualizado (existente) con función:', updatedCart);
                return updatedCart;
            } else {
                // Si el producto no está en el carrito
                const newCart = [...prevCart, { ...item, quantity: cantidad }];
                console.log('Carrito actualizado (nuevo item) con función:', newCart);
                return newCart;
            }
        });
    };

    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter((prod) => prod.id !== id));
    };

    // Estas funciones ya usan la versión más reciente del 'cart' que React garantiza
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    };
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    // console.log('Estado actual del carrito en CartContext:', cart); // Puedes dejarlo si quieres seguir viendo el estado

    return (
        <CartContext.Provider value={{ cart, addToCart, clear, removeItem, cartTotal, cartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};