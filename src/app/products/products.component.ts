import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: any = [];
  filteredProducts: any = [];

  category: any;
  cart: any = {};

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    shoppingCarts: ShoppingCartService
  ) {
    productService.getAll().subscribe((products) => {
      this.products = products;

      route.queryParamMap.subscribe((params) => {
        this.category = params.get('category');
        this.filteredProducts = this.category
          ? this.products.filter((p: any) => p.category === this.category)
          : this.products;
      });
    });
    shoppingCarts.getCart().then((data) => {
      this.cart = data;
    });
  }
}
