// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc8EJbcfcNA717M1TJTu80jkff25JTxUU",
  authDomain: "mawless-tattoo.firebaseapp.com",
  projectId: "mawless-tattoo",
  storageBucket: "mawless-tattoo.firebasestorage.app",
  messagingSenderId: "1033555671244",
  appId: "1:1033555671244:web:709691617e61838b27aa69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)