import React, { useEffect, useState } from 'react';
import { getOrders } from '../../../data/orders'; // Asegúrate de que la ruta sea correcta

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await getOrders();
        
        // Ordenar las órdenes de más reciente a más antigua
        fetchedOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setOrders(fetchedOrders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Historial de Compras</h2>
      {orders.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id} className="border-b py-4">
              <h3 className="font-semibold">Orden ID: {order.id}</h3>
              <p>Fecha: {new Date(order.date).toLocaleString()}</p>
              <h4 className="mt-2">Productos:</h4>
              <ul>
                {order.items.map(item => {
                  const subtotal = (item.price * item.quantity).toFixed(2); // Calcular el subtotal
                  return (
                    <li key={item.id} className="flex items-center py-2 border-b">
                      {/* Imagen del producto */}
                      <img src={item.image} alt={item.name} className="h-12 w-12 object-cover mr-4" />
                      <span className="flex-grow">{item.name} - ${item.price.toFixed(2)} (x{item.quantity}) - Subtotal: ${subtotal}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
