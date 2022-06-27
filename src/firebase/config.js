// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5RXjAZudzv9GCVygLJrsMy3m3RsyOgHc",
  authDomain: "journal-app-a1a22.firebaseapp.com",
  projectId: "journal-app-a1a22",
  storageBucket: "journal-app-a1a22.appspot.com",
  messagingSenderId: "359308988157",
  appId: "1:359308988157:web:247ab62aba905c8e6bf894"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);