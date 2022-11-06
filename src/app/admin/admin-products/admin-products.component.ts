import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  editedProduct = {};
  products: any;
  filteredProducts: any;
  subscription: Subscription;
  constructor(private productService: ProductService) {
    this.subscription = this.productService
      .getAll()
      .subscribe(
        (products) => (this.filteredProducts = this.products = products)
      );
  }

  filter(query: any) {
    let searchParam = query.target.value;
    this.filteredProducts = searchParam
      ? this.products.filter((p: any) =>
          p.title.toLowerCase().includes(searchParam.toLowerCase())
        )
      : this.products;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {}
}
