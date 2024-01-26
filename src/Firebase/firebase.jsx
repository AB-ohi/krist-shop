// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey: "AIzaSyA588cXIFi7QYI5BggExHsiU6e9m0GgvNw",
  authDomain: "krist-shop-59ff2.firebaseapp.com",
  projectId: "krist-shop-59ff2",
  storageBucket: "krist-shop-59ff2.appspot.com",
  messagingSenderId: "1015240012069",
  appId: "1:1015240012069:web:ac780852ac85f2908aaacc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app