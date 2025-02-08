import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxtfIZU4IPov_0zCVbjfe9wYgLUR2g2fs",
  authDomain: "to-do-list-4fa24.firebaseapp.com",
  projectId: "to-do-list-4fa24",
  storageBucket: "to-do-list-4fa24.firebasestorage.app",
  messagingSenderId: "338431733863",
  appId: "1:338431733863:web:d9c4c002b7e37ce4c464c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
