import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ItemCount = ({ stock, initial, onAdd, visible, onCountChange }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    onCountChange(count);
  }, [count, onCountChange]);

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

  if (!visible) return null;

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

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onCountChange: PropTypes.func.isRequired,
};

export default ItemCount;
