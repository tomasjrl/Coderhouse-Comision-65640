import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const productRef = doc(db, "productos", itemId);
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          setProduct({ ...docSnap.data(), id: docSnap.id });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
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
