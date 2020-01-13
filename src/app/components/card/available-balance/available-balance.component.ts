import { Component, OnInit, Input } from '@angular/core';

import { amountFormat } from '../../../utils'

@Component({
  selector: 'available-balance',
  templateUrl: './available-balance.component.html',
  styleUrls: ['./available-balance.component.css']
})
export class AvailableBalanceComponent implements OnInit {

  @Input() product

  constructor() { }

  amount = (amount) =>{ return amountFormat(amount) }

  cardFormat = (card) => {
    var format= ""
    for (var i=0; i<card.length; i++) {
      i<12 ? format +="X" : format += card[i];
      if((i+1)%4 == 0){
        format += " ";
      }
    }
    return format
  }
  
  ngOnInit() {
  }

}
