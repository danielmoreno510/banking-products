import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../redux/selectors/products.selector';
import * as Actions from '../redux/actions';

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
        this.products = this.filterProducts(data, true);
        this.newProducts = data;
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new Actions.FetchProducts());
    this.productsData();
  }

  filterProducts = (products, filter) => {
    const productsFilter = products.reduce((prev, current) => {
      let exists = prev.find(x => x.typeAccount === current.typeAccount);
      if (!exists) {
        exists = { typeAccount: current.typeAccount, data: [] };
        prev.push(exists);
      }
      if (filter) {
        if (current != null && current.accountInformation.bank === 'BANCO_1') {
          exists.data.push(current);
        }
      } else {
        if (current != null) {
          exists.data.push(current);
        }
      }
      return prev;
    }, []);
    for (const product in productsFilter) {
      if (productsFilter[product]) {
        for (const item in productsFilter[product].data) {
          if (item === '0') {
            productsFilter[product].data[0].countTitle = productsFilter[product].data.length;
            productsFilter[product].data[0].showTitle = true;
          }
        }
      }
    }
    return productsFilter;
  }

  moreProducts = (value) => {
    value.checked
      ? (this.products = this.filterProducts(this.newProducts, false))
      : (this.products = this.filterProducts(this.newProducts, true));
  }

}
