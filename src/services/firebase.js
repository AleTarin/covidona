// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4Bjar7PPqqEo2ZBj0xANqj8vwLntXm4w",
  authDomain: "covidona-mx.firebaseapp.com",
  databaseURL: "https://covidona-mx.firebaseio.com",
  projectId: "covidona-mx",
  storageBucket: "covidona-mx.appspot.com",
  messagingSenderId: "99974712105",
  appId: "1:99974712105:web:40bcb90d91678978ff4538",
  measurementId: "G-5LYQ8VPVV0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default firebase;
export {db};