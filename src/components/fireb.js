// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN5VIRpBx8dHMo_BnQIL5C-w4UHKTCM2Q",
    authDomain: "amar-zone.firebaseapp.com",
    projectId: "amar-zone",
    storageBucket: "amar-zone.appspot.com",
    messagingSenderId: "469559561400",
    appId: "1:469559561400:web:c65479af1d1e274871784d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { app }