
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PaymentMethod } from '../models/paymentmethod.model';
import { PaymentMethodsService } from './payment-methods.service';


@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  paymentMethodsChanged = new Subject<PaymentMethod[]>();
  paymentMethods: PaymentMethod[];
  method: string;
  isFetching = false
  error = ""

  constructor(private paymentMethodsService: PaymentMethodsService,
              private router: Router,
              private http: HttpClient) {}

  ngOnInit() {
    this.isFetching = true
    this.paymentMethodsService.getPaymentMethods().subscribe(paymentMethods => {
      this.isFetching = false;
      this.paymentMethods = paymentMethods;
      this.paymentMethodsChanged.next(this.paymentMethods.slice());
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });

    // this.paymentMethods = this.paymentMethodsService.getPaymentMethods();
    // this.paymentMethodsService.paymentMethodsChanged
    //   .subscribe(
    //     (paymentMethods: PaymentMethod[]) => {
    //       this.paymentMethods = paymentMethods;
    //     }
    //   )
  }

  fetchPaymentMethods() {
    this.paymentMethodsService.getPaymentMethods().subscribe(paymentMethods => {
      this.isFetching = false;
      this.paymentMethods = paymentMethods;
      this.paymentMethodsChanged.next(this.paymentMethods.slice());
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onHandleError() {
    this.error = null
  }

}
