import { collection, getDocs, addDoc, writeBatch } from "firebase/firestore";
import { db } from '../firebase';

export const generateUniqueId = () => {
  // Genera un ID basado en la fecha actual
    return `order_${Date.now()}`; 
};

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
    return docRef.id; 
  } catch (error) {
    console.error("Error al agregar la orden: ", error);
    throw error; 
  }
};

export const deleteAllOrders = async () => {
  const pedidosRef = collection(db, "pedidos");
   // Crea un batch para realizar múltiples operaciones
  const batch = writeBatch(db);

  try {
    const snapshot = await getDocs(pedidosRef);
    snapshot.docs.forEach(doc => {
      // Agrega cada eliminación al batch
      batch.delete(doc.ref); 
    });

    // Ejecuta todas las eliminaciones en una sola operación
    await batch.commit(); 
  } catch (error) {
    console.error("Error al eliminar todas las órdenes: ", error);
    throw error; 
  }
};
