import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../NavBar/CartWidget/CartWidget";

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (count) => {
    addToCart(product, count);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {product.category}
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {product.name}
          </h2>
          <p className="mt-2 text-gray-500">${product.price.toFixed(2)}</p>
          <div className="mt-4">
            <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
