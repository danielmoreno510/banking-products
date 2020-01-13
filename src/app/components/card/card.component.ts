import { Component, OnInit, Input } from '@angular/core';

import { dateFormat, amountFormat } from '../../utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product;
  @Input() detail;
  @Input() section;

  constructor() { }

  date = (date) => dateFormat(date);

  amount = (amount) => amountFormat(amount);

  ngOnInit() {
  }

}
