import React from 'react';
import { getOrders } from '../../../data/orders';

const OrderList = () => {
  const orders = getOrders(); // Obtener las compras almacenadas

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
              <h4 className="mt-2 font-semibold">Productos:</h4>
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
