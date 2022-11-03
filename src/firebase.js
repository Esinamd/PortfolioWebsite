// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt162vdAucVu-2X4WwA6Wfg-M-7KFV9Do",
  authDomain: "my-website-ec3a7.firebaseapp.com",
//   databaseURL: "https://my-website-ec3a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-website-ec3a7",
  storageBucket: "my-website-ec3a7.appspot.com",
  messagingSenderId: "35960734924",
  appId: "1:35960734924:web:d347fd2b6ccea62a5aae69",
  measurementId: "G-YXQKWBJY9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;