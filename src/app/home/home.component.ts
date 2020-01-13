import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products

  constructor(protected productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.productList()
    .subscribe(
      data => {
        this.products=data
      },
      error => {
        console.error(error);
      }
    );
  }

}
