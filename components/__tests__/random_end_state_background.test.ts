import { it, expect } from "vitest";
import { queryRandomEndBackground } from "../../server/lib/firestore"
it("background found", async () => {
    console.log(queryRandomEndBackground)
    const docs = await queryRandomEndBackground(`${0}`)
    expect(docs).not.toBeNull;
})