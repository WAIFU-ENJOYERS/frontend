import { it, expect } from "vitest";
import { queryRandomWaifu } from "../../server/lib/firestore"

it("waifu found", async () => {
    console.log(queryRandomWaifu)
    const docs = await queryRandomWaifu(`${0}`)
        expect(docs).not.toBeNull;
        expect(docs.name).toBe('Kurisu Makise')    
        expect(docs.likes).toBe(61169)
})