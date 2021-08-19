import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


/* Firebase Configuration */
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDERS_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  });

  // firebase.initializeApp(firebaseConfig);
  // firebase.firestore();

  // export default firebase;

  

  // firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();