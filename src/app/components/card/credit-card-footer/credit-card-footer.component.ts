import { Component, OnInit, Input } from '@angular/core';

import { dateFormat, amountFormat } from '../../../utils';

@Component({
  selector: 'app-credit-card-footer',
  templateUrl: './credit-card-footer.component.html',
  styleUrls: ['./credit-card-footer.component.scss']
})
export class CreditCardFooterComponent implements OnInit {

  @Input() product;

  constructor() { }

  date = (date) => dateFormat(date);

  amount = (amount) => amountFormat(amount);

  ngOnInit() {
    if (this.product.typeAccount === 'CREDIT_CARD') {
      this.product.productAccountBalances.pago_total_pesos.range =
        (this.product.productAccountBalances.pago_total_pesos.amount * 100) /
        this.product.productAccountBalances.saldo_actual.amount;
    }
  }

}
