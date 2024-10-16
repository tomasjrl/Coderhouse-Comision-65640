import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const allProducts = [
        {
          id: "1",
          name: "Vestido Verano",
          category: "vestidos",
          price: 39.99,
          image:
            "https://images.unsplash.com/photo-1622080159549-11537bf939e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        },
        {
          id: "2",
          name: "Vestido Otoño",
          category: "vestidos",
          price: 29.99,
          image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "3",
          name: "Vestido Invierno",
          category: "vestidos",
          price: 24.99,
          image:
            "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D%3D",
        },
        {
          id: "4",
          name: "Vestido Primavera",
          category: "vestidos",
          price: 24.99,
          image:
            "https://images.unsplash.com/photo-1678713616279-70dc854f387a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3MXx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "5",
          name: "Traje Verano",
          category: "trajes",
          price: 44.99,
          image:
            "https://images.unsplash.com/photo-1634410251313-b65c51944ab3?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "6",
          name: "Traje Otoño",
          category: "trajes",
          price: 44.99,
          image:
            "https://images.unsplash.com/photo-1708024587407-73445142b5a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "7",
          name: "Traje Invierno",
          category: "trajes",
          price: 44.99,
          image:
            "https://plus.unsplash.com/premium_photo-1727942421760-624e3e958b5e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: "8",
          name: "Traje Primavera",
          category: "trajes",
          price: 44.99,
          image:
            "https://images.unsplash.com/photo-1675095525726-c4759069b211?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];

      const foundProduct = allProducts.find((p) => p.id === itemId) || null;
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
