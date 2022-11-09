import { Injectable } from '@angular/core';
import { createCartId } from './firebase-operations';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  private getOrCreateCart(): any {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      createCartId().then((data) => {
        localStorage.setItem('cartId', data);
        return data;
      });
    } else {
      return localStorage.getItem('cartId');
    }
  }
}
