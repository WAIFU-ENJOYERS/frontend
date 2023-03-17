import { getImage } from "../../lib/s3"

export default defineEventHandler( async (event) => {
    const query = event.context.params.name
    const docs = await getImage(query as string)
    return docs
})