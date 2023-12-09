import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3JS8vx4pj-G94xJuRW8ogHWh5Ti7c3Wg",
  authDomain: "supercheck-av.firebaseapp.com",
  projectId: "supercheck-av",
  storageBucket: "supercheck-av.appspot.com",
  messagingSenderId: "937027859306",
  appId: "1:937027859306:web:99567e47bcd03230c3ab13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exporto mi base de datos a toda la app
export const db = getFirestore(app); 