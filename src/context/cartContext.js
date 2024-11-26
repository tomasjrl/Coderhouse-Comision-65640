// CartContext.js
import { createContext, useContext } from 'react';

// Crea un contexto para el carrito de compras
export const CartContext = createContext(undefined);

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart solo puede ser utilizado dentro del contexto de un proveedor CartProvider');
  }
  
  return context;
};
