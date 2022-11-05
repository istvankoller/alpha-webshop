import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.categories = firestore.collection('categories').valueChanges();
  }

  getCategories() {
    return this.categories;
  }
}
