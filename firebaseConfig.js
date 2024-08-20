import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3r3WXd56kkU3qs2ydDJIBawmwoGCqWGw",
  authDomain: "mangamound.firebaseapp.com",
  projectId: "mangamound",
  storageBucket: "mangamound.appspot.com",
  messagingSenderId: "918255397865",
  appId: "1:918255397865:web:0c93d49673b4a19282b978",
  measurementId: "G-DRQQD15DNF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
