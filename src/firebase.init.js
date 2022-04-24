// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI83EkwBHm_SqVdl-TYVn-GQ33b8DTf5w",
    authDomain: "router-firebase-integrat-8f5d0.firebaseapp.com",
    projectId: "router-firebase-integrat-8f5d0",
    storageBucket: "router-firebase-integrat-8f5d0.appspot.com",
    messagingSenderId: "695314842910",
    appId: "1:695314842910:web:475ec0fdadd4362c99f50f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;