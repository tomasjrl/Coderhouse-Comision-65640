import { useCart } from "../context/cartProvider";

const CartWidget = () => {
  const { cartCount } = useCart();

  return (
    <div className="cart-widget">
      <span>Carrito</span>
      <span>Cantidad: {cartCount}</span>
    </div>
  );
};

export default CartWidget;
