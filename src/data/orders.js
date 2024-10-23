const ORDERS_KEY = 'orders';

// Función para obtener las compras desde localStorage
export const getOrders = () => {
  const orders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  return orders;
};

// Función para agregar una compra y guardarla en localStorage
export const addOrder = (order) => {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
};

// Función para generar un ID único
export const generateUniqueId = () => {
  return `order_${Date.now()}`;
};
