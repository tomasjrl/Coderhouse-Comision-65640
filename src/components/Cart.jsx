import React from "react";
import { useCart } from "./CartWidget";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addOrder, generateUniqueId } from "../data/orders";
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClear = () => {
    clearCart();
  };

  const handleCheckout = () => {
    // Muestra el formulario de entrada
    MySwal.fire({
      title: "Completa tus datos",
      html: `
        <input id="name" class="swal2-input" placeholder="Nombre">
        <input id="surname" class="swal2-input" placeholder="Apellido">
        <input id="email" class="swal2-input" placeholder="Correo Electrónico">
      `,
      focusConfirm: false,
      showCancelButton: true, // Muestra el botón de cancelar
      confirmButtonColor: '#0069d9', // Establece el color del botón de confirmación
      confirmButtonText: 'Enviar', // Cambia el texto del botón a "Enviar"
      cancelButtonText: 'Cancelar', // Cambia el texto del botón de cancelar
      preConfirm: () => {
        // Accede a los inputs directamente
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;

        // Validación para asegurar que los campos no estén vacíos
        if (!name || !surname || !email) {
          Swal.showValidationMessage("Por favor completa todos los campos");
          return false; // Retorna false para evitar continuar
        }

        // Validación del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
        if (!emailPattern.test(email)) {
          Swal.showValidationMessage("Por favor ingresa un correo electrónico válido");
          return false; // Retorna false para evitar continuar
        }

        return { name, surname, email }; // Retorna los valores si son válidos
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { name, surname, email } = result.value;

        // Muestra un SweetAlert indicando que el pago está siendo procesado
        const loadingSwal = MySwal.fire({
          title: 'Procesando Pago...',
          html: 'Por favor espera mientras se procesa tu compra.',
          allowOutsideClick: false,
          didOpen: () => {
            MySwal.showLoading(); // Muestra el círculo de carga
          }
        });

        // Genera un ID único y crea los detalles del pedido
        const orderId = generateUniqueId();
        const orderDetails = {
          id: orderId,
          items: cartItems,
          total: totalAmount,
          date: new Date().toISOString(),
          customer: { name, surname, email } // Agrega la información del cliente
        };

        try {
          await addOrder(orderDetails); // Agrega la orden a Firebase
          loadingSwal.close(); // Cierra el modal de carga

          MySwal.fire({
            title: "Compra realizada con éxito!",
            text: "Gracias por tu compra.",
            icon: "success",
            confirmButtonColor: "#0069d9",
            confirmButtonText: "Aceptar",
          }).then(() => {
            clearCart(); // Limpia el carrito después de completar la compra
          });
        } catch (error) {
          console.error("Error al agregar la orden:", error);
          loadingSwal.close(); // Cierra el modal de carga

          MySwal.fire({
            title: 'Error',
            text: 'Hubo un problema al procesar tu compra.',
            icon: 'error',
            confirmButtonColor: '#d33'
          });
        }
      }
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
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-2 border-b"
              >
                {/* Imagen del producto */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 object-cover mr-4"
                />
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                {/* Botón para eliminar el producto */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total: ${totalAmount.toFixed(2)}</div>
          <button
            onClick={handleClear}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Vaciar Carrito
          </button>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Concretar Compra
          </button>
        </>
      )}

      <Link
        to="/orders"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ver Compras Realizadas
      </Link>
    </div>
  );
};

export default Cart;