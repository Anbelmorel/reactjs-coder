import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbEqnEg1no4JYAnkipLFZiwkcjpp0M3Js",
  authDomain: "eleganciaencasa-ecommerce.firebaseapp.com",
  projectId: "eleganciaencasa-ecommerce",
  storageBucket: "eleganciaencasa-ecommerce.appspot.com",
  messagingSenderId: "522628913921",
  appId: "1:522628913921:web:d567832395f2c5af5a9900"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
