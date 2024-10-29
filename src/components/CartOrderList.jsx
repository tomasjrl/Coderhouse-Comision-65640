// cartorderlist.jsx
import React, { useEffect, useState } from 'react';
import { getOrders } from '../data/orders'; // Asegúrate de que la ruta sea correcta
import CartOrder from './CartOrder'; // Importa el nuevo componente

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await getOrders();
        fetchedOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
        setOrders(fetchedOrders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem('orders');
    setOrders([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Historial de Compras</h2>
      {orders.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        <>
          <button 
            onClick={handleClearHistory} 
            className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Eliminar Historial de Compras
          </button>
          <ul>
            {orders.map(order => (
              <CartOrder key={order.id} order={order} /> // Usa el nuevo componente aquí
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default OrderList;
