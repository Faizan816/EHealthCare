// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5AYKzXRVJuEXidTAF4Tq7Hi6DeCGoLE",
  authDomain: "e-healthcare-21846.firebaseapp.com",
  projectId: "e-healthcare-21846",
  storageBucket: "e-healthcare-21846.appspot.com",
  messagingSenderId: "249022272830",
  appId: "1:249022272830:web:2b083d0ff0999b85e5c86f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {app, auth};