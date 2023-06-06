// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const localFirebaseConfig = {
  apiKey: "AIzaSyBedam9rbLHcStoBmfw0I1ftbOfpHXOViY",
  authDomain: "runsam-555bd.firebaseapp.com",
  projectId: "runsam-555bd",
  storageBucket: "runsam-555bd.appspot.com",
  messagingSenderId: "615479663672",
  appId: "1:615479663672:web:450dea4f2f98cc5ffb9acd",
  measurementId: "G-SWM5T8KFC8",
};
// const API_KEY = process.env.REACT_APP_API_KEY;
// const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
// const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
// const STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET;
// const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID;
// const APP_ID = process.env.REACT_APP_APP_ID;
// const MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID;

// const deployFirebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MEASUREMENT_ID,
// };
// const firebaseConfig =
//   process.env.NODE_ENV === "development"
//     ? localFirebaseConfig
//     : deployFirebaseConfig;

const firebaseApp = initializeApp(localFirebaseConfig);

export const auth = getAuth(firebaseApp);

export const RegisterUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const LogInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
