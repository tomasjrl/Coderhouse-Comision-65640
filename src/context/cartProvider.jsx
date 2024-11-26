import React, { createContext, useContext, useState } from 'react';

// Crea un contexto para el carrito de compras
export const CartContext = createContext(undefined);

// Componente proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  // Estado para almacenar los items del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un item al carrito
  const addToCart = (item, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  // Función para eliminar un item del carrito por su ID
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== itemId));
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular la cantidad total de items en el carrito
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart solo puede ser utilizado dentro del contexto de un proveedor CartProvider');
  }
  
  return context;
};
