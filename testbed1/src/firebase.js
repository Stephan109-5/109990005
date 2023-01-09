// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFmTEcnHV5rxmjH2w2zT5gbBpzXr9bWC0",
  authDomain: "ntut-testbed.firebaseapp.com",
  databaseURL: "https://ntut-testbed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-testbed",
  storageBucket: "ntut-testbed.appspot.com",
  messagingSenderId: "998045430987",
  appId: "1:998045430987:web:2a7d6a136bef978166d74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);