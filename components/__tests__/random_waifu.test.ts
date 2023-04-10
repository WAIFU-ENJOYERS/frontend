import { it, expect } from "vitest";
import { queryRandomBackground } from "../../server/lib/firestore";
it("end state background found", async () => {
  const docs = await queryRandomBackground(`${0}`);
  expect(docs).not.toBeNull;
  expect(docs.url).toBe(
    "https://media.tenor.com/0XNOlxxAFvcAAAAM/chuunibyou-anime.gif"
  );
});
