import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Referencia a la colección de productos
        const productsRef = collection(db, "productos");
        
        // Crear una consulta si hay un categoryId
        const productsQuery = categoryId 
          ? query(productsRef, where("category", "==", categoryId)) 
          : productsRef; // Si no hay categoryId, obtener todos los productos

        // Obtener los documentos de la consulta
        const snapshot = await getDocs(productsQuery);
        
        // Mapea los documentos a un array de objetos
        const productsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setFilteredProducts(productsData); // Establecer los productos filtrados
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false); // Cambia el estado de carga a false al final
      }
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
