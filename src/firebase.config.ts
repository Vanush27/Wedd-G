import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhy1v_--XUoGMND7SgOlsEhWQZufGJwAA",
  authDomain: "wedding-e3f7b.firebaseapp.com",
  databaseURL: "https://wedding-e3f7b-default-rtdb.firebaseio.com",
  projectId: "wedding-e3f7b",
  storageBucket: "wedding-e3f7b.firebasestorage.app",
  messagingSenderId: "68395348813",
  appId: "1:68395348813:web:3a58d6cbaf9efef8a5fd04",
  measurementId: "G-BF3VF83P7P",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection, doc, getDoc, setDoc };
