import React from 'react';
import { useCart } from '../NavBar/CartWidget/CartWidget';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calcular el total
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Manejar la eliminación de un producto
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  // Manejar el vaciado del carrito
  const handleClear = () => {
    clearCart();
  };

  // Manejar la compra
  const handleCheckout = () => {
    MySwal.fire({
      title: 'Compra realizada con éxito!',
      text: 'Gracias por tu compra.',
      icon: 'success',
      confirmButtonColor: '#0069d9',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      clearCart(); // Limpiar el carrito después de la compra.
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay actualmente productos en el carrito.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between py-2 border-b">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                {/* Botón para eliminar el producto */}
                <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">
            Total: ${totalAmount.toFixed(2)}
          </div>
          {/* Botón para vaciar el carrito */}
          <button onClick={handleClear} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Vaciar Carrito</button>
          {/* Botón para concretar la compra */}
          <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Concretar Compra</button>
        </>
      )}
    </div>
  );
};

export default Cart;