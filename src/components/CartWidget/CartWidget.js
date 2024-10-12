import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart size="22px" /> 
      <span className="cart-items">0</span>
    </div>
  );
}

export default CartWidget;