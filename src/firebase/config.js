import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDflCORivzcfLb--wUxMM9rLSwTsY4cE7U",
  authDomain: "comision19850.firebaseapp.com",
  projectId: "comision19850",
  storageBucket: "comision19850.appspot.com",
  messagingSenderId: "1060395876699",
  appId: "1:1060395876699:web:7eec5af792968a07c0da7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}
