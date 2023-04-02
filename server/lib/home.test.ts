import { it, expect } from "vitest";
import { queryRandomWaifu } from "../lib/firestore"
it("data not null", async () => {
    console.log(queryRandomWaifu)
    
    const docs = await queryRandomWaifu(`${0}`)
    expect(docs).not.toBeNull;
})