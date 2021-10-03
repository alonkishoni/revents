import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzUeMf3dMJviv1YyKgDSVv7irXfzYpi74",
  authDomain: "revents-alon.firebaseapp.com",
  projectId: "revents-alon",
  storageBucket: "revents-alon.appspot.com",
  messagingSenderId: "624536557669",
  appId: "1:624536557669:web:9f6fdbbab1c13468e64e8c",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
