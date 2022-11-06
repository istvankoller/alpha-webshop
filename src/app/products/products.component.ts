import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
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
  categories$;
  category: any;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService
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
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {}
}
