import React from 'react';

const Item = ({ producto }) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default Item;