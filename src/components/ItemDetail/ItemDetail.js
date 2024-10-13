import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;