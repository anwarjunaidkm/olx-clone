import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA1ARQfr2nDD41gdsbwHBp3L5eE-I7hqA0",
  authDomain: "olx-clone-21d93.firebaseapp.com",
  projectId: "olx-clone-21d93",
  storageBucket: "olx-clone-21d93.appspot.com",
  messagingSenderId: "6398899886",
  appId: "1:6398899886:web:e649fc59cc96334d805f3f",
  measurementId: "G-1HQLQ0CHEM"
};
  

  export default firebase.initializeApp(firebaseConfig);