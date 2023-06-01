// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBedam9rbLHcStoBmfw0I1ftbOfpHXOViY",
  authDomain: "runsam-555bd.firebaseapp.com",
  projectId: "runsam-555bd",
  storageBucket: "runsam-555bd.appspot.com",
  messagingSenderId: "615479663672",
  appId: "1:615479663672:web:450dea4f2f98cc5ffb9acd",
  measurementId: "G-SWM5T8KFC8",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const RegisterUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
