import { defineEventHandler } from 'h3';
import { collection, getCountFromServer } from 'firebase/firestore';
import { d as db } from './firebase.mjs';
import 'firebase/app';
import 'dotenv';
import './nitro/firebase.mjs';
import 'node-fetch-native/polyfill';
import 'firebase-functions';
import 'ofetch';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';

const count_get = defineEventHandler(async (event) => {
  const coll = collection(db, "waifu");
  const snapshot = await getCountFromServer(coll);
  return snapshot.data().count;
});

export { count_get as default };
//# sourceMappingURL=count.get.mjs.map
