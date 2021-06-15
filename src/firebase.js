import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApsaAfdCbh19QRJfgjrOXAvCGHjfaefM8",
  authDomain: "expense-tracker-32ce5.firebaseapp.com",
  databaseURL: "https://expense-tracker-32ce5.firebaseio.com",
  projectId: "expense-tracker-32ce5",
  storageBucket: "expense-tracker-32ce5.appspot.com",
  messagingSenderId: "1070966647059",
  appId: "1:1070966647059:web:4d7ead23c43986739912e6",
  measurementId: "G-FD7LJEVLDC",
});

// create database
const db = firebaseApp.firestore();

export default db;
