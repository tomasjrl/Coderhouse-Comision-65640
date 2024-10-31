// OrderList.jsx
import React, { useEffect, useState } from 'react';
import { getOrders, deleteAllOrders } from '../data/orders'; // Importa solo lo necesario
import CartOrder from './CartOrder';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true); // Inicia la carga
            try {
                const fetchedOrders = await getOrders();
                fetchedOrders.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                setOrders(fetchedOrders);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        fetchOrders();
    }, []);

    const handleDeleteAllOrders = async () => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción eliminará todo el historial de compras y no se puede deshacer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0069d9', // Establece el color del botón de confirmación
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar todo',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            // Mostrar el indicador de carga
            const loadingSwal = Swal.fire({
                title: 'Eliminando...',
                html: 'Por favor espera mientras se elimina el historial.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading(); // Muestra el círculo de carga
                }
            });

            try {
                await deleteAllOrders(); // Llama a la función para eliminar todos los pedidos
                setOrders([]); // Vacía el estado local después de la eliminación
                loadingSwal.close(); // Cierra el modal de carga

                Swal.fire({
                    title: 'Eliminado!',
                    text: 'Todo el historial de compras ha sido eliminado.',
                    icon: 'success',
                    confirmButtonColor: '#0069d9', // Establece el color del botón de confirmación
                });
            } catch (error) {
                console.error("Error al eliminar todas las órdenes: ", error);
                loadingSwal.close(); // Cierra el modal de carga

                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al eliminar el historial.',
                    icon: 'error',
                    confirmButtonColor: '#0069d9', // Establece el color del botón de confirmación
                });
            }
        }
    };

    if (loading) {
        return <div className="text-center py-8">Cargando...</div>; // Mensaje de carga
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Historial de Compras</h2>
            
            {/* Muestra el botón solo si hay órdenes */}
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
                <ul>
                    {orders.map(order => (
                        <li key={order.id} className="border-b py-4">
                            <CartOrder order={order} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderList;
