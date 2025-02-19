import { useContext, useState } from "react";
import Item from "./Item";
import { CartContext } from "../context/cartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropTypes from "prop-types";

const MySwal = withReactContent(Swal);

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(
      "useCart solo puede ser utilizado dentro del contexto de un proveedor CartProvider"
    );
  }
  return context;
};

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [isCountVisible, setIsCountVisible] = useState(true);

  const handleAddToCart = (count) => {
    addToCart(product, count);
    setIsCountVisible(false);

    MySwal.fire({
      title: "Producto Agregado!",
      text: `${product.name} ha sido agregado al carrito.`,
      icon: "success",
      confirmButtonColor: "#0069d9",
      confirmButtonText: "Aceptar",
    });
  };

  const handleCountChange = () => {
  };

  return (
    <Item
      product={product}
      isCountVisible={isCountVisible}
      handleAddToCart={handleAddToCart}
      handleCountChange={handleCountChange}
    />
  );
};

ItemDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemDetail;
