import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addOrder, generateUniqueId } from "../data/orders"; // Asegúrate de que la ruta sea correcta

const MySwal = withReactContent(Swal);

const PaymentProcessor = async ({ cartItems, totalAmount, customer, clearCart }) => {
  const loadingSwal = MySwal.fire({
    title: 'Procesando Pago...',
    html: 'Por favor espera mientras se procesa tu compra.',
    allowOutsideClick: false,
    didOpen: () => {
      MySwal.showLoading();
    }
  });

  const orderId = generateUniqueId();
  const orderDetails = {
    id: orderId,
    items: cartItems,
    total: totalAmount,
    date: new Date().toISOString(),
    customer // Agrega la información del cliente
  };

  try {
    await addOrder(orderDetails);
    loadingSwal.close();

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
    loadingSwal.close();

    MySwal.fire({
      title: 'Error',
      text: 'Hubo un problema al procesar tu compra.',
      icon: 'error',
      confirmButtonColor: '#d33'
    });
  }
};

export default PaymentProcessor;
