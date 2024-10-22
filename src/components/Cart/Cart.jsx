import React from 'react';
import { useCart } from '../NavBar/CartWidget/CartWidget';

const Cart = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay actualmente productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">
            Total: ${totalAmount.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;