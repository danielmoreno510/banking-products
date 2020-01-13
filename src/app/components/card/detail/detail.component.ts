import { Component, OnInit, Input } from '@angular/core';

import { amountFormat } from '../../../utils';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() product;

  constructor() { }

  amount = (amount) => amountFormat(amount);

  ngOnInit() {
  }

}
