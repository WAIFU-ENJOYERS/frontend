// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const runtimeConfig = useRuntimeConfig()

const firebaseConfig = {
  apiKey: runtimeConfig.apiKey,
  authDomain: runtimeConfig.authDomain,
  projectId: runtimeConfig.projectId,
  storageBucket: runtimeConfig.storageBucket,
  messagingSenderId: runtimeConfig.messagingSenderId,
  appId: runtimeConfig.appId,
  measurementId: runtimeConfig.measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
  db
}