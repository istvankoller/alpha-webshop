import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { get } from 'src/app/services/firebase-operations';
import {
  updateProduct,
  deleteProduct,
} from 'src/app/services/firebase-operations';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: any = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.productService.get(this.id).then((data) => {
        this.product = data;
      });
  }

  save(product: NgForm) {
    if (this.id) {
      updateProduct(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  deleteProduct() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    deleteProduct(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit(): void {}
}
