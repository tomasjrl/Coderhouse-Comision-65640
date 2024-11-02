import React, { useEffect, useState } from "react";
import { getOrders, deleteAllOrders } from "../data/orders"; 
import ItemOrder from "./ItemOrder";
import Swal from "sweetalert2";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const fetchedOrders = await getOrders();
        fetchedOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
        setOrders(fetchedOrders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteAllOrders = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará todo el historial de compras y no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0069d9", 
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar todo",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      const loadingSwal = Swal.fire({
        title: "Eliminando...",
        html: "Por favor espera mientras se elimina el historial.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await deleteAllOrders();
        setOrders([]);
        loadingSwal.close(); 

        Swal.fire({
          title: "Eliminado!",
          text: "Todo el historial de compras ha sido eliminado.",
          icon: "success",
          confirmButtonColor: "#0069d9",
        });
      } catch (error) {
        console.error("Error al eliminar todas las órdenes: ", error);
        loadingSwal.close(); 

        Swal.fire({
          title: "Error",
          text: "Hubo un problema al eliminar el historial.",
          icon: "error",
          confirmButtonColor: "#0069d9", 
        });
      }
    }
  };

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Historial de Compras</h2>

      {orders.length > 0 && (
        <button
          onClick={handleDeleteAllOrders}
          className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Eliminar Todo el Historial
        </button>
      )}

      {orders.length === 0 ? (
        <p>No hay compras registradas.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {orders.map((order) => (
            <li key={order.id} className="border-b border-gray-300 bg-white shadow-md rounded-lg p-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
              <ItemOrder order={order} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
