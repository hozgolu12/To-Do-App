import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAy6iZSpyjyeu9CS5ouMpz8xLWcD9E0V10",
  authDomain: "to-do-list-aac53.firebaseapp.com",
  projectId: "to-do-list-aac53",
  storageBucket: "to-do-list-aac53.firebasestorage.app",
  messagingSenderId: "27896738282",
  appId: "1:27896738282:web:bdfe3fb72376a00a790293",
  measurementId: "G-L0RX6FPYZ9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
