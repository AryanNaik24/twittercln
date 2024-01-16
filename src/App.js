import React from "react";
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from "./Widgets";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB1x_QKHc9-d_IErMttpdL9G8J5Dl0K-ZI",
//   authDomain: "twitter-clone-c0bfe.firebaseapp.com",
//   projectId: "twitter-clone-c0bfe",
//   storageBucket: "twitter-clone-c0bfe.appspot.com",
//   messagingSenderId: "954747043907",
//   appId: "1:954747043907:web:5aa6936d24525a15d054f6",
//   measurementId: "G-7ZJPH9NMWR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function App() {
  return (
    //BEM
    <div className="app">


   
    <Sidebar/>
    


    <Feed/>

    <Widgets/>
    </div>
  );
}

export default App;
