import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHZLjQlMxyrUGMwjJrDGESZP_TMNymUM4",
    authDomain: "clone-b49ca.firebaseapp.com",
    projectId: "clone-b49ca",
    storageBucket: "clone-b49ca.appspot.com",
    messagingSenderId: "1054451467342",
    appId: "1:1054451467342:web:d4a7d3825b9ac3be842f1f",
    measurementId: "G-0ZWPJLS77R",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
