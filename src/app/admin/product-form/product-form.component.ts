import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

  save(product: NgForm) {
    console.log(product);
  }

  ngOnInit(): void {}
}
