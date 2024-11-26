import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlWiukQsPqpGbeeuIxVaBck6lw5FP38o0",

  authDomain: "coderhouse-76065.firebaseapp.com",

  projectId: "coderhouse-76065",

  storageBucket: "coderhouse-76065.appspot.com",

  messagingSenderId: "617253831612",

  appId: "1:617253831612:web:2119fd957e67ba6ae961b9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);