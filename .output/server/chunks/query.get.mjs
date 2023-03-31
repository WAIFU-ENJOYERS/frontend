import { defineEventHandler, getQuery } from 'h3';
import { q as queryByCollection } from './firestore.mjs';
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

const query_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const docs = await queryByCollection(query.col);
  return { result: docs };
});

export { query_get as default };
//# sourceMappingURL=query.get.mjs.map
