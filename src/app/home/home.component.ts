import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../redux/selectors/products.selector';
import * as Actions from '../redux/actions';
import { filterProducts } from '../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products;
  newProducts;

  constructor(private store: Store<fromRoot.ProductState>) { }

  productsData = () => {
    this.store.pipe(select(state => state['products'])).subscribe(data => {
      if (data[0]) {
        this.products = filterProducts(data, true);
        this.newProducts = data;
      }
    });
  }

  moreProducts = (value) => {
    value.checked
      ? (this.products = filterProducts(this.newProducts, false))
      : (this.products = filterProducts(this.newProducts, true));
  }

  ngOnInit() {
    this.store.dispatch(new Actions.FetchProducts());
    this.productsData();
  }

}
