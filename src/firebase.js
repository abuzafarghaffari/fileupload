// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoUsVWghrE7TyFNCvMbRybURg0rGNqz0A",
  authDomain: "react-http-9823c.firebaseapp.com",
  databaseURL: "https://react-http-9823c-default-rtdb.firebaseio.com",
  projectId: "react-http-9823c",
  storageBucket: "react-http-9823c.appspot.com",
  messagingSenderId: "820164071000",
  appId: "1:820164071000:web:55b561f9a79cb4037fc42d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);