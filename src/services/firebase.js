// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig =
  process.env.NODE_ENV === "production"
    ? {
        apiKey: "AIzaSyAJ3iCdWpyXlEmW9PHTxUIBw80MSekqIw0",
        authDomain: "covidonadev.firebaseapp.com",
        databaseURL: "https://covidonadev.firebaseio.com",
        projectId: "covidonadev",
        storageBucket: "covidonadev.appspot.com",
        messagingSenderId: "704281178819",
        appId: "1:704281178819:web:6a61f125bc4ad9d6ad2876",
        measurementId: "G-4ELD12Q1BL",
      }
    : {
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
export { db };
