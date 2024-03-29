import { queryRandomEndBackground } from "../lib/firestore";
// eslint-disable-next-line
export default defineEventHandler(async (event) => {
  const rand = Math.floor(Math.random() * 11);
  const docs = await queryRandomEndBackground(`${rand}`);
  return docs;
});
