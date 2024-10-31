// orders.js
import { collection, getDocs, addDoc, writeBatch } from "firebase/firestore";
import { db } from '../firebase';

// Función para generar un ID único
export const generateUniqueId = () => {
    return `order_${Date.now()}`; // Genera un ID basado en la fecha actual
};

// Función para obtener las compras desde Firebase
export const getOrders = async () => {
  const pedidosRef = collection(db, "pedidos");
  const snapshot = await getDocs(pedidosRef);
  
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Función para agregar una compra y guardarla en Firebase
export const addOrder = async (order) => {
  const pedidosRef = collection(db, "pedidos");
  try {
    const docRef = await addDoc(pedidosRef, order);
    return docRef.id; // Retorna el ID del nuevo pedido
  } catch (error) {
    console.error("Error al agregar la orden: ", error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};

// Función para eliminar todos los pedidos de Firebase
export const deleteAllOrders = async () => {
  const pedidosRef = collection(db, "pedidos");
  const batch = writeBatch(db); // Crea un batch para realizar múltiples operaciones

  try {
    const snapshot = await getDocs(pedidosRef);
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref); // Agrega cada eliminación al batch
    });

    await batch.commit(); // Ejecuta todas las eliminaciones en una sola operación
  } catch (error) {
    console.error("Error al eliminar todas las órdenes: ", error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};
