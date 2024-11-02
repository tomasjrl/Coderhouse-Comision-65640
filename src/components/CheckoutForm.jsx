import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CheckoutForm = ({ onConfirm }) => {
  const handleCheckout = () => {
    MySwal.fire({
      title: "Completa tus datos",
      html: `
        <input id="name" class="swal2-input" placeholder="Nombre">
        <input id="surname" class="swal2-input" placeholder="Apellido">
        <input id="email" class="swal2-input" placeholder="Correo Electrónico">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: '#0069d9',
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;

        { /* Validación para asegurar que los campos no estén vacíos */ }
        if (!name || !surname || !email) {
          Swal.showValidationMessage("Por favor completa todos los campos");
          return false; { /* Retorna false para evitar continuar */ }
        }

        { /* Validación del correo electrónico */ }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          Swal.showValidationMessage("Por favor ingresa un correo electrónico válido");
          return false; { /* Retorna false para evitar continuar */ }
        }

        return { name, surname, email }; { /* Retorna los valores si son válidos */ }
      }
    }).then(result => {
      if (result.isConfirmed) {
        onConfirm(result.value); { /* Llama a la función onConfirm con los datos del formulario */ }
      }
    });
  };

  return { handleCheckout }; { /* Exporta la función para que pueda ser llamada desde Cart */ }
};

export default CheckoutForm;
