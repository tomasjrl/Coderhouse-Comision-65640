import { createContext, useContext } from 'react';


export const CartContext = createContext(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart solo puede ser utilizado dentro del contexto de un proveedor CartProvider');
  }
  
  return context;
};
