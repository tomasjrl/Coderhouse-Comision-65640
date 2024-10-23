import React from 'react';
import { useCart } from '../NavBar/CartWidget/CartWidget';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { addOrder, generateUniqueId } from '../../data/orders';
import { Link } from 'react-router-dom';

const MySwal = withReactContent(Swal);

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClear = () => {
    clearCart();
  };

  const handleCheckout = () => {
    const orderId = generateUniqueId();
    const orderDetails = {
      id: orderId,
      items: cartItems,
      total: totalAmount,
      date: new Date().toISOString(),
    };

    addOrder(orderDetails);

    MySwal.fire({
      title: 'Compra realizada con éxito!',
      text: 'Gracias por tu compra.',
      icon: 'success',
      confirmButtonColor: '#0069d9',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      clearCart();
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
              <li key={item.id} className="flex items-center justify-between py-2 border-b">
                {/* Imagen del producto */}
                <img src={item.image} alt={item.name} className="h-12 w-12 object-cover mr-4" />
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
          <button onClick={handleClear} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Vaciar Carrito</button>
          <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Concretar Compra</button>
        </>
      )}

      <Link to="/orders" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Ver Compras Realizadas
      </Link>
    </div>
  );
};

export default Cart;
