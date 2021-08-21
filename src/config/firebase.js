import firebase from "firebase.js";

const firebaseConfig = {
    apiKey: "AIzaSyBHv_7CMI1S-1x-FSpqR52Or40Qet1AAxM",
    authDomain: "hostel-management-55b70.firebaseapp.com",
    projectId: "hostel-management-55b70",
    storageBucket: "hostel-management-55b70.appspot.com",
    messagingSenderId: "754249843938",
    appId: "1:754249843938:web:580b71f6e10b063cbb0abb",
    measurementId: "G-SN8059HGC5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;