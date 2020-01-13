import { Component, OnInit, Input } from '@angular/core';

import { dateFormat, amountFormat } from '../../utils'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product
  @Input() detail

  constructor() { }

  date = (date) => dateFormat(date)

  amount = (amount) => amountFormat(amount)

  ngOnInit() {
  }

}
