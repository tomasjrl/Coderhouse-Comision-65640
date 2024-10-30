import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "../data/products.json"; 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);

      // Buscar el producto por ID
      const foundProduct = products.find((p) => p.id === itemId) || null;
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Producto no encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
