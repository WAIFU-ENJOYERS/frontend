import { collection, doc, getDocs, setDoc, addDoc, getCountFromServer, where, query, getDoc } from "firebase/firestore";
import { db } from "./firebase"

export const addWaifu = async (name: string, likes: number, image_url: string, id: string) => {
    return await setDoc(doc(db, "waifu", `${id}`), {   
        name: name, 
        likes: likes, 
        image_url: image_url,
    });
}

export const queryByCollection = async (col: string) => {
    const querySnapshot = await getDocs(collection(db, col));
    const docs = Array.from(querySnapshot.docs).map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });
    return docs;
};

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
