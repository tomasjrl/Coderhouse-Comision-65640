// cartProvider.js
import React, { useState } from 'react';
import { CartContext } from './cartContext'; // Asegúrate de que la ruta sea correcta

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
