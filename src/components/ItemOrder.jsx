import React from "react";

const ItemOrder = ({ order }) => {
  return (
    <>
      <h3 className="font-semibold">Orden ID: {order.id}</h3>
      <p>Fecha: {new Date(order.date).toLocaleString()}</p>

      {/* Mostrar información del comprador */}
      <h4 className="mt-2">Información del Comprador:</h4>
      <p>Nombre: {order.customer.name}</p>
      <p>Apellido: {order.customer.surname}</p>
      <p>Email: {order.customer.email}</p>

      <h4 className="mt-2 font-semibold">Productos:</h4>
      <ul>
        {order.items.map((item) => {
          const subtotal = (item.price * item.quantity).toFixed(2);
          return (
            <li key={item.id} className="flex items-center py-2 border-b">
              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 object-cover mr-4"
              />
              <span className="flex-grow">
                {item.name} - ${item.price.toFixed(2)} (x{item.quantity}) -
                Subtotal: ${subtotal}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
    </>
  );
};

export default ItemOrder;
