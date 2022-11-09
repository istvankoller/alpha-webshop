import { ɵresetJitOptions } from '@angular/core';
import { UserTrackingService } from '@angular/fire/analytics';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { timestamp } from 'rxjs';

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

export async function getProductById(productId: any) {
  const docRef = doc(db, 'products', productId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function updateProduct(productId: string, product: {}) {
  const productRef = doc(db, 'products', productId);
  await updateDoc(productRef, product);
}

export async function deleteProduct(productId: any) {
  await deleteDoc(doc(db, 'products', productId));
}

export async function createCartId() {
  const docRef = await addDoc(collection(db, 'shopping-carts'), {
    dateCreated: Timestamp.fromDate(new Date()),
  });
  return docRef.id;
}

export async function addProductToCart(product: any) {
  let id: string = product.id;
  let cart: any = '';
  let cartId: any = localStorage.getItem('cartId');
  const docRef = doc(db, 'shopping-carts', cartId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    cart = docSnap.data();
  } else {
    console.log('No such document!');
  }
  let findProduct = false;
  for (const p in cart) {
    if (p === id) {
      let plusOne: any = new Object();
      let newQuantity = cart[id] + 1;
      plusOne[p] = newQuantity;
      await updateDoc(docRef, plusOne);
      findProduct = true;
    }
  }
  if (!findProduct) {
    let newProduct: any = new Object();
    newProduct[id] = 1;
    await updateDoc(docRef, newProduct);
  }
}
