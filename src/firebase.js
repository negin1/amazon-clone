import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBlnP1P5P_OFNOWb2cH_0uiuaEkjaX1bMI",
  authDomain: "clone-a7b42.firebaseapp.com",
  databaseURL: "https://clone-a7b42-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "clone-a7b42",
  storageBucket: "clone-a7b42.appspot.com",
  messagingSenderId: "228058572732",
  appId: "1:228058572732:web:0f5d976c776da1f913adb9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};