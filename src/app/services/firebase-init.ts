import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBsu1FOpUhGXFvW62gXpjAXAN3O8GWq2ho',
  authDomain: 'alpha-webshop.firebaseapp.com',
  projectId: 'alpha-webshop',
  storageBucket: 'alpha-webshop.appspot.com',
  messagingSenderId: '119583348653',
  appId: '1:119583348653:web:aa28622f69d9108246b324',
  measurementId: 'G-1J6XX7Z8LN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Init db
const db = getFirestore();
export { db };
