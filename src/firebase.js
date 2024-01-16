import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1x_QKHc9-d_IErMttpdL9G8J5Dl0K-ZI",
    authDomain: "twitter-clone-c0bfe.firebaseapp.com",
    projectId: "twitter-clone-c0bfe",
    storageBucket: "twitter-clone-c0bfe.appspot.com",
    messagingSenderId: "954747043907",
    appId: "1:954747043907:web:5aa6936d24525a15d054f6",
    measurementId: "G-7ZJPH9NMWR"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
//const auth = firebase.auth();

export default db ;

