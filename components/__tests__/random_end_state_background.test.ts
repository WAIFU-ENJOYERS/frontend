import { it, expect } from "vitest";
import { queryRandomEndBackground } from "../../server/lib/firestore"
it("background found", async () => {
    console.log(queryRandomEndBackground)
    const docs = await queryRandomEndBackground(`${0}`)
    expect(docs).not.toBeNull;
    expect(docs.url).toBe('https://pa1.narvii.com/6005/9a136bc0cbdeaccf31669a6dc6d2a546a422e3d8_hq.gif')
})