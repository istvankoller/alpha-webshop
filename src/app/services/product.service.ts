import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Product {
  title: string;
  price: number;
  category: string;
  imgUrl: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private itemsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  constructor(private readonly db: AngularFirestore) {
    this.itemsCollection = db.collection<Product>('products');
    this.products = this.itemsCollection.valueChanges({ idField: 'customID' });
  }
  create(product: any) {
    // Persist a document id
    const id = this.db.createId();
    const details: Product = product;
    details.id = id;
    this.itemsCollection.doc(id).set(details);
  }

  getAll() {
    return this.products;
  }
}
