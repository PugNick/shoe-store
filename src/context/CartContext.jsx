import { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
}

// Proveedor del contexto
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productInfo) => {
        setCartItems([...cartItems, productInfo]);
    };

    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    // Valor que se proveerá a los componentes
    const value = {
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}