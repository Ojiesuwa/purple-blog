// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCJUhAL9rSggfPDBFOCgOqJeZdS7b_uSio",
  authDomain: "web-app-a18b1.firebaseapp.com",
  databaseURL: "https://web-app-a18b1-default-rtdb.firebaseio.com",
  projectId: "web-app-a18b1",
  storageBucket: "web-app-a18b1.appspot.com",
  messagingSenderId: "141357181463",
  appId: "1:141357181463:web:955a2ee550043d7c508a52",
  measurementId: "G-RS09YE80G5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const appForStorage = initializeApp(firebaseConfigForStorage);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
