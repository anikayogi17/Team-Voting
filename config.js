//import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqqpzF0tKDI8hnSCS98hLJHyHM-GcqAA4",
  authDomain: "team-voin.firebaseapp.com",
  databaseURL: "https://team-voin-default-rtdb.firebaseio.com",
  projectId: "team-voin",
  storageBucket: "team-voin.appspot.com",
  messagingSenderId: "53871026508",
  appId: "1:53871026508:web:0ef22aa7784d85dbaeefe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();