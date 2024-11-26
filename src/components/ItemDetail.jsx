import React, { useContext, useState } from "react";
import Item from "./Item";
import { CartContext } from "../context/cartProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart solo puede ser utilizado dentro del contexto de un proveedor CartProvider');
  }
  return context;
};

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [isCountVisible, setIsCountVisible] = useState(true);
  const [selectedCount, setSelectedCount] = useState(1);

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

  const handleCountChange = (count) => {
    setSelectedCount(count);
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

export default ItemDetail;
