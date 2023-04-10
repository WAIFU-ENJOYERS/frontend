import { queryRandomBackground } from "../lib/firestore";
// eslint-disable-next-line
export default defineEventHandler(async (event) => {
  const rand = Math.floor(Math.random() * 10);
  const docs = await queryRandomBackground(`${rand}`);
  return docs;
});
