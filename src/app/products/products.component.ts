import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: any = [];
  filteredProducts: any = [];

  category: any;

  constructor(route: ActivatedRoute, productService: ProductService) {
    productService.getAll().subscribe((products) => {
      this.products = products;

      route.queryParamMap.subscribe((params) => {
        this.category = params.get('category');
        this.filteredProducts = this.category
          ? this.products.filter((p: any) => p.category === this.category)
          : this.products;
      });
    });
  }

  ngOnInit(): void {}
}
