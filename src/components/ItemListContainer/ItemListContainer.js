import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const productos = [
  { id: 1, nombre: 'Remera 1', precio: 1000, categoria: 'remeras' },
  { id: 2, nombre: 'Remera 2', precio: 1200, categoria: 'remeras' },
  { id: 3, nombre: 'Pantalon 1', precio: 2000, categoria: 'pantalones' },
  { id: 4, nombre: 'Pantalon 2', precio: 2200, categoria: 'pantalones' },
  { id: 5, nombre: 'Camisa 1', precio: 1500, categoria: 'camisas' },
  { id: 6, nombre: 'Camisa 2', precio: 1800, categoria: 'camisas' },
  { id: 7, nombre: 'Short 1', precio: 2000, categoria: 'pantalones' },
  { id: 8, nombre: 'Short 2', precio: 2200, categoria: 'pantalones' },
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
      <h1>{categoria ? `Lista de ${categoria}` : 'Lista de Productos'}</h1>
      <ItemList productos={productosFiltrados} />
    </div>
  );
};

export default ItemListContainer;