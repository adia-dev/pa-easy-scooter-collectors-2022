// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2duniGRGAC19rKRCIw8788rBi9YxW2uw",
    authDomain: "pay-easy-scooter.firebaseapp.com",
    projectId: "pay-easy-scooter",
    storageBucket: "pay-easy-scooter.appspot.com",
    messagingSenderId: "93316121345",
    appId: "1:93316121345:web:6aa16bd44fd37899f65100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
export { auth };

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

