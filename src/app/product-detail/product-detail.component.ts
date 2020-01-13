import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../redux/selectors/products.selector';
import * as Actions from '../redux/actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id
  products

  constructor(private route: ActivatedRoute, private store: Store<fromRoot.ProductState>) { }

  product = () => {
    this.store.pipe(select(state=>state["products"])).subscribe(data => {
      if(data[0]){
        this.products=data;
      }
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.store.dispatch(new Actions.FetchProduct(this.id));
    this.product()
  }

}
