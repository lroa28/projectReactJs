// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app'
import 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPrnWg_Tt9ErHnJ5KuvOa0-v11wQQ2rxQ",
  authDomain: "lukc-ecarrito-npx.firebaseapp.com",
  projectId: "lukc-ecarrito-npx",
  storageBucket: "lukc-ecarrito-npx.appspot.com",
  messagingSenderId: "25029793759",
  appId: "1:25029793759:web:ad084d6b7367a385af166a",
  measurementId: "G-GGDY7L6CMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const getFirestoreApp = () => {
        return app
}
