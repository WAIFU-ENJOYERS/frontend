import { getDocs, collection, doc, getDoc } from 'firebase/firestore';
import { d as db } from './firebase.mjs';

const queryByCollection = async (col) => {
  const querySnapshot = await getDocs(collection(db, col));
  const docs = Array.from(querySnapshot.docs).map((doc2) => {
    return {
      ...doc2.data(),
      id: doc2.id
    };
  });
  return docs;
};
const queryRandomWaifu = async (key) => {
  const docRef = doc(db, "waifu", key);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};
const queryRandomBackground = async (key) => {
  const docRef = doc(db, "backgrounds", key);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
};

export { queryRandomBackground as a, queryRandomWaifu as b, queryByCollection as q };
//# sourceMappingURL=firestore.mjs.map
