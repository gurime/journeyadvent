import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyDn6o1cUEQal7Kf_2iUNczw8zvpCXYi-PA",
    authDomain: "journey-7a4b2.firebaseapp.com",
    projectId: "journey-7a4b2",
    storageBucket: "journey-7a4b2.appspot.com",
    messagingSenderId: "170946230964",
    appId: "1:170946230964:web:8524185566ff9f187bb5e1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };