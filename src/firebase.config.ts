/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_Auth_Domain,
  databaseURL: process.env.REACT_APP_DataBase_URL,
  projectId: process.env.REACT_APP_Project_Id,
  storageBucket: process.env.REACT_APP_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_Messaging_SenderId,
  appId: process.env.REACT_APP_App_Id,
  measurementId: process.env.REACT_APP_Measurement_Id,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection, doc, getDoc, setDoc };
