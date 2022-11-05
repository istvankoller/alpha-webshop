import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'alpha-webshop',
  appId: '1:119583348653:web:aa28622f69d9108246b324',
  storageBucket: 'alpha-webshop.appspot.com',
  locationId: 'europe-west',
  apiKey: 'AIzaSyBsu1FOpUhGXFvW62gXpjAXAN3O8GWq2ho',
  authDomain: 'alpha-webshop.firebaseapp.com',
  messagingSenderId: '119583348653',
  measurementId: 'G-1J6XX7Z8LN',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export async function get(productId: string) {
  const docRef = doc(db, 'products', productId);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
}
