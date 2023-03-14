import { collection, getDocs } from "firebase/firestore";
import { queryByCollection } from "../lib/firestore";


export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    const docs = await queryByCollection(query.col as string)
    return { result: docs }
})
