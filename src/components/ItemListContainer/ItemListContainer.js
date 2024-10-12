import React from 'react';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Nuestro catálogo de productos estarán pronto!</p>
    </div>
  );
}

export default ItemListContainer;