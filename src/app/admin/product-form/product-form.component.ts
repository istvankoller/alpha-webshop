import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(
    categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
  }

  save(product: NgForm) {
    this.productService.create(product);
  }

  ngOnInit(): void {}
}
