// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCS-93ohJ9W2CQ90_Zw2PYcb5kUrF_1z8U",
  authDomain: "netflix-clone-2b72b.firebaseapp.com",
  projectId: "netflix-clone-2b72b",
  storageBucket: "netflix-clone-2b72b.appspot.com",
  messagingSenderId: "870773032694",
  appId: "1:870773032694:web:7194ae7757645a0cc08ed7",
  measurementId: "G-9P3KRZW0L3"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth};
export default db;