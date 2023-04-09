import { it, expect } from "vitest";
import { queryRandomBackground } from "../../server/lib/firestore"
it("end state background found", async () => {
    console.log(queryRandomBackground)
    const docs = await queryRandomBackground(`${0}`)
    expect(docs).not.toBeNull;
})