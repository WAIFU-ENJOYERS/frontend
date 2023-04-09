import { collection, doc, getDocs, setDoc, addDoc, getCountFromServer, where, query, getDoc } from "firebase/firestore";
import { db } from "./firebase"

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
