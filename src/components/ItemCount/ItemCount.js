import React, { useState } from 'react';

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <p>Cantidad: {cantidad}</p>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleSumar}>+</button>
    </div>
  );
};

export default ItemCount;