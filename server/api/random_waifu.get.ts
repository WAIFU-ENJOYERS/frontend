import { queryRandomWaifu } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  const rand = Math.floor(Math.random() * 996);
  const docs = await queryRandomWaifu(`${rand}`);
  return docs;
});
