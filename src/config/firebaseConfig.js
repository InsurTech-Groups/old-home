import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const apikey = process.env.REACT_APP_FIREBASE_APIKEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID;
const appId = process.env.REACT_APP_FIREBASE_APP_ID;
const databaseURL = process.env.REACT_APP_FIREBASE_DATA_URL;

const firebaseConfig = {
  apiKey: apikey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket:storageBucket,
  messagingSenderId: messagingSenderId,
  appId:  appId,
  databaseURL:databaseURL

};

const fb = initializeApp(firebaseConfig);
export const auth = getAuth(fb)
export const db = getFirestore(fb);

