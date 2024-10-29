import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <button
          onClick={decrement}
          className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          -
        </button>
        <span className="bg-gray-100 text-gray-800 font-medium py-2 px-4">
          {count}
        </span>
        <button
          onClick={increment}
          className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar a Carrito
      </button>
    </div>
  );
};

export default ItemCount;
