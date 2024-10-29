import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, price, image }) => {
  return (
    <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
        <Link
          to={`/item/${id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Product;
