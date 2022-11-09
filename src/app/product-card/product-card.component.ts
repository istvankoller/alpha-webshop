import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input('product') product: any;
  @Input('show-actions') showActions = true;
  constructor(private CartService: ShoppingCartService) {}

  public product2: {} = {
    id: 'd7Ibbmxxhntgtmrb2kwA',
    title: 'CPU',
  };

  addToCart(product2: any) {
    this.CartService.addToCart(product2);
  }
}
