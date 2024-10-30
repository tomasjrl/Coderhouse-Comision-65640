import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "../data/products.json"; 

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);

      // Filtra los productos según la categoría
      const filtered = categoryId
        ? products.filter((product) => product.category === categoryId)
        : products;

      setFilteredProducts(filtered);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">
        {categoryId
          ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
          : "Catálogo"}
      </h2>

      {filteredProducts.length > 0 ? (
        <ItemList products={filteredProducts} />
      ) : (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold">Categoría no encontrada</h3>
          <p className="text-lg">
            Lo sentimos, no hay productos en esta categoría.
          </p>
          <p className="text-sm text-gray-600">
            Por favor, verifica la URL o vuelve a la página principal.
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
