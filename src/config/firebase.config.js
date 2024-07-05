// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsHJHh3D8Ft15gZgYeCS0uINPVGXPmOMc",
  authDomain: "expense-tracjer-a20e3.firebaseapp.com",
  projectId: "expense-tracjer-a20e3",
  storageBucket: "expense-tracjer-a20e3.appspot.com",
  messagingSenderId: "162938598180",
  appId: "1:162938598180:web:4d4a45230bd75b7129b9b1",
  measurementId: "G-4T33QMC477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();


//firebase login
//firebase init
//firebase deploy
