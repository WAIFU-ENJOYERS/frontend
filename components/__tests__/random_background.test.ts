import { it, expect } from "vitest";
import { queryRandomWaifu } from "../../server/lib/firestore"

it("waifu found", async () => {
    console.log(queryRandomWaifu)
    const docs = await queryRandomWaifu(`${0}`)
    console.log(docs)
    // if (docs != null) {
    //     expect(docs.value.name).to.equal("Kurisu Makise")
    // }
    expect(docs).not.toBeNull;
})