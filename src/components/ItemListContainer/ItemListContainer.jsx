import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4">{greeting}</h2>
      <p className="text-lg mb-2">Nuestro catálogo de productos estará pronto!</p>
    </div>
  );
}

export default ItemListContainer;
