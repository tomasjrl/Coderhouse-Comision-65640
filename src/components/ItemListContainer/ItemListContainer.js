import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const productos = [
  { id: 1, nombre: 'Remera 1', precio: 1000, categoria: 'remeras' },
  { id: 2, nombre: 'Remera 2', precio: 1200, categoria: 'remeras' },
  { id: 3, nombre: 'Pantalon 1', precio: 2000, categoria: 'pantalones' },
  { id: 4, nombre: 'Pantalon 2', precio: 2200, categoria: 'pantalones' },
];

const ItemListContainer = ({ categoria }) => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    if (categoria) {
      const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(productos);
    }
  }, [categoria]);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;