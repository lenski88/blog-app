import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8gmUn3dkc0iS6r4J1aDEd7uVTfqBqmLQ",
  authDomain: "blog-app-1e1db.firebaseapp.com",
  projectId: "blog-app-1e1db",
  storageBucket: "blog-app-1e1db.appspot.com",
  messagingSenderId: "590837230065",
  appId: "1:590837230065:web:3ffdf29f0775f2e2f97c50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
