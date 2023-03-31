import { defineEventHandler } from 'h3';
import { a as queryRandomBackground } from './firestore.mjs';
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

const random_background = defineEventHandler(async (event) => {
  const rand = Math.floor(Math.random() * 10);
  const docs = await queryRandomBackground(`${rand}`);
  return docs;
});

export { random_background as default };
//# sourceMappingURL=random_background.mjs.map
