import { collection, getDocs, addDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase";

export const generateUniqueId = () => {
  return `order_${Date.now()}`;
};

export const getOrders = async () => {
  const pedidosRef = collection(db, "pedidos");
  const snapshot = await getDocs(pedidosRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

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
  const batch = writeBatch(db);

  try {
    const snapshot = await getDocs(pedidosRef);
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
  } catch (error) {
    console.error("Error al eliminar todas las órdenes: ", error);
    throw error;
  }
};
