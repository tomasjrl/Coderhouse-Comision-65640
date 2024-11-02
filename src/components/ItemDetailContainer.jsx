import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore"; // Importar funciones necesarias
import { db } from "../firebase"; // Importar la instancia de Firestore

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); { /* Inicia la carga */ }

        { /* Referencia al documento específico en Firestore */ }
        const productRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          { /* Si el documento existe, obtener los datos */ }
          setProduct({ ...docSnap.data(), id: docSnap.id });
        } else {
          { /* Si no se encuentra el producto */ }
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false); { /* Cambia el estado de carga a false al final */ }
      }
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
