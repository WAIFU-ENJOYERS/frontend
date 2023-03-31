import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import * as dotenv from 'dotenv';
import { u as useRuntimeConfig } from './nitro/firebase.mjs';

dotenv.config();
const runtimeConfig = useRuntimeConfig();
const firebaseConfig = {
  apiKey: runtimeConfig.apiKey,
  authDomain: runtimeConfig.authDomain,
  projectId: runtimeConfig.projectId,
  storageBucket: runtimeConfig.storageBucket,
  messagingSenderId: runtimeConfig.messagingSenderId,
  appId: runtimeConfig.appId,
  measurementId: runtimeConfig.measurementId
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db as d };
//# sourceMappingURL=firebase.mjs.map
