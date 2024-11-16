// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk7ajy-Fay-3Q_THhtOYesLeKd38eli9I",
  authDomain: "dragon-news-bcd42.firebaseapp.com",
  projectId: "dragon-news-bcd42",
  storageBucket: "dragon-news-bcd42.firebasestorage.app",
  messagingSenderId: "156600017748",
  appId: "1:156600017748:web:aba81d1ad4eddf36c25ec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;