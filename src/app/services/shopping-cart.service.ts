import { Injectable } from '@angular/core';
import { createCartId, addProductToCart } from './firebase-operations';
import { getCartsItems } from './firebase-operations';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  private async getOrCreateCart(): Promise<any> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;
    let result = await createCartId();
    localStorage.setItem('cartId', result);
    return result;
  }

  async addToCart(product: any) {
    let cartId = await this.getOrCreateCart();
    addProductToCart(product, cartId);
  }

  getCart() {
    return getCartsItems();
  }
}
