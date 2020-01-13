import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products
  productsFilter=[]
  productsTotal

  constructor(protected productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.productList()
    .subscribe(
      data => {
        this.products=data
        this.filterProducts(this.products)
      },
      error => {
        console.error(error);
      }
    );
  }
 
  filterProducts= (products) => {
    for (const product in products) {
      if(products[product]["accountInformation"]["bank"]=="BANCO_1"){
        this.productsFilter.push(products[product])
      }
    }
    this.productsTotal=this.productsFilter
  }

  moreProducts = (value) => {
    value.checked ? this.productsTotal=this.products : this.productsTotal=this.productsFilter
  }

}
