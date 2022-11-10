import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input('product') product: any;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: any;

  @Output() clicked = new EventEmitter();

  constructor(private CartService: ShoppingCartService) {}

  addToCart(product: any) {
    this.CartService.addToCart(product);
  }

  getQuantity() {
    return this.shoppingCart;
  }

  btnClicked(): void {
    this.clicked.emit();
  }
}
