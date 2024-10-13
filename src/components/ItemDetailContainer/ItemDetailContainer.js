import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const productos = [
  { id: 1, nombre: 'Remera 1', precio: 1000, categoria: 'remeras' },
  { id: 2, nombre: 'Remera 2', precio: 1200, categoria: 'remeras' },
  { id: 3, nombre: 'Pantalon 1', precio: 2000, categoria: 'pantalones' },
  { id: 4, nombre: 'Pantalon 2', precio: 2200, categoria: 'pantalones' },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productoEncontrado = productos.find((producto) => producto.id === parseInt(id));
    setProducto(productoEncontrado);
  }, [id]);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      {producto && <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;