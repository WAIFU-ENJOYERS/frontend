import {
  // eslint-disable-next-line
  collection,
  doc,
  // eslint-disable-next-line
  getDocs,
  // eslint-disable-next-line
  setDoc,
  // eslint-disable-next-line
  addDoc,
  // eslint-disable-next-line
  getCountFromServer,
  // eslint-disable-next-line
  where,
  // eslint-disable-next-line
  query,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const queryRandomWaifu = async (key: string) => {
  const docRef = doc(db, "waifu", key);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};

export const queryRandomBackground = async (key: string) => {
  const docRef = doc(db, "backgrounds", key);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};

export const queryRandomEndBackground = async (key: string) => {
  const docRef = doc(db, "end_backgrounds", key);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};
