// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDMsrZoI2scWkvQImGicwKzMN8_VnZLnR0",
  authDomain: "netflix-clone-e679c.firebaseapp.com",
  projectId: "netflix-clone-e679c",
  storageBucket: "netflix-clone-e679c.appspot.com",
  messagingSenderId: "540093362459",
  appId: "1:540093362459:web:902cc4fd36a29aefd8a3be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();
export { app, db, storage };