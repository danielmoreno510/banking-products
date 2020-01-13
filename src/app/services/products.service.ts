import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="http://localhost:3000/product"

  constructor(protected http: HttpClient) { }
  
  productList() {
    return this.http.get(this.url);
  }

  product(id) {
    return this.http.get(this.url+"?id="+id);
  }
}
