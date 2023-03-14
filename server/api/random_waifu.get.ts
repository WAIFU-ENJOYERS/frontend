import { queryRandomWaifu } from "../lib/firestore";


export default defineEventHandler( async (event) => {
    const query = getQuery(event)
    const docs = await queryRandomWaifu(query.key as string)
    return { result: docs } 
})