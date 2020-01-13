import { Component, OnInit, Input } from '@angular/core';

import { amountFormat } from '../../../utils';

@Component({
  selector: 'app-available-balance',
  templateUrl: './available-balance.component.html',
  styleUrls: ['./available-balance.component.scss']
})
export class AvailableBalanceComponent implements OnInit {
  @Input() product;

  constructor() { }

  amount = amount => amountFormat(amount);

  cardFormat = card => {
    let format = '';
    for (let i = 0; i < card.length; i++) {
      i < 12 ? (format += 'X') : (format += card[i]);
      if ((i + 1) % 4 === 0) {
        format += ' ';
      }
    }
    return format;
  }

  ngOnInit() { }
}
