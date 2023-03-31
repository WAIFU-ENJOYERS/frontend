import { defineEventHandler } from 'h3';
import { b as queryRandomWaifu } from './firestore.mjs';
import 'firebase/firestore';
import './firebase.mjs';
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

const random_waifu_get = defineEventHandler(async (event) => {
  const rand = Math.floor(Math.random() * 996);
  const docs = await queryRandomWaifu(`${rand}`);
  return docs;
});

export { random_waifu_get as default };
//# sourceMappingURL=random_waifu.get.mjs.map
