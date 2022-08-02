import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { PaymentMethod } from 'src/app/models/paymentmethod.model';
import { Transaction } from 'src/app/models/transaction.model';
import { PaymentMethodsService } from '../payment-methods.service';

@Component({
  selector: 'app-payment-method-new',
  templateUrl: './payment-method-new.component.html',
  styleUrls: ['./payment-method-new.component.css']
})
export class PaymentMethodNewComponent implements OnInit {

  paymentmethods: PaymentMethod[];
  id: number;
  method: string;
  newPaymentMethod: PaymentMethod

  constructor(private paymentMethodsService: PaymentMethodsService,
    private router: Router) {
console.log()
}

ngOnInit(): void {
}

onAddPaymentMethod() {
this.newPaymentMethod = new PaymentMethod(this.id, this.method);
this.paymentMethodsService.addPaymentMethod(this.newPaymentMethod);
this.router.navigate(['/paymentmethods'])
};

}
