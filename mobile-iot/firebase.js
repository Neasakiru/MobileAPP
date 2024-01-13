import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZLccXxl0awGHV-Ofi9A2zPa6saRxo8Eo",
  authDomain: "test-3edb2.firebaseapp.com",
  databaseURL:
    "https://test-3edb2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-3edb2",
  storageBucket: "test-3edb2.appspot.com",
  messagingSenderId: "154862054357",
  appId: "1:154862054357:web:b57c92fa63716cd2f7ab5c",
};

//Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
