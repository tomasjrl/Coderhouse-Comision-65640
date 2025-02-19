import PropTypes from "prop-types";

const ItemOrder = ({ order }) => {
  return (
    <>
      <h3 className="font-semibold">Orden ID: {order.id}</h3>
      <p>Fecha: {new Date(order.date).toLocaleString()}</p>

      <h4 className="mt-2">Información del Comprador: </h4>
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

ItemOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemOrder;
