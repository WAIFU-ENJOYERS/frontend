import { collection, getCountFromServer } from "firebase/firestore";
import { db } from  "../lib/firebase";


export default defineEventHandler( async (event) => {
    const coll = collection(db, "waifu");
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count;
})
