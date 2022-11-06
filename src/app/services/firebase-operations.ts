import { ɵresetJitOptions } from '@angular/core';
import { UserTrackingService } from '@angular/fire/analytics';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

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
export let userData = {
  isAdmin: false,
};

export async function get(productId: string) {
  const docRef = doc(db, 'products', productId);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
}

async function getUserById(id: string) {
  let data: any;
  const q = query(collection(db, 'users'), where('id', '==', id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => (data = doc.data()));
  return data;
}

export async function saveNewUser(user: any) {
  userData = await getUserById(user.uid);
  if (userData == undefined) {
    let userwithId = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      isAdmin: false,
    };
    await addDoc(collection(db, 'users'), userwithId);
  }
}

// export async function getIsAdmin(id: string) {
//   let data: any;
//   const q = query(collection(db, 'users'), where('id', '==', id));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => (data = doc.data()));
//   return data.isAdmin == true ? true : false;
// }
