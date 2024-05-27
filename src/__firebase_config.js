// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvszyvxi3_SHydOF0r21rUVroBApI3j_k",
    authDomain: "react-login-auth-practise.firebaseapp.com",
    projectId: "react-login-auth-practise",
    storageBucket: "react-login-auth-practise.appspot.com",
    messagingSenderId: "278439149420",
    appId: "1:278439149420:web:0a557041658c1121057d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;