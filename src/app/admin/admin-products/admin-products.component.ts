import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  editedProduct = {};
  products$;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  filter(query: any) {
    console.log(query.target.value);
  }

  ngOnInit(): void {}
}
