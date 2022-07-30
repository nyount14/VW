import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethod } from '../models/paymentmethod.model';
import { PaymentMethodsService } from './payment-methods.service';


@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  paymentMethods: PaymentMethod[];
  id: number;
  method: string;

  constructor(private paymentMethodsService: PaymentMethodsService,
              private router: Router) {
    console.log()
   }

  ngOnInit(): void{
    this.paymentMethods = this.paymentMethodsService.getPaymentMethods();
    this.paymentMethodsService.paymentMethodsChanged
      .subscribe(
        (paymentMethods: PaymentMethod[]) => {
          this.paymentMethods = paymentMethods;
        }
      )
  }

  onSubmit(){
    console.log('form was submitted')
    // this.categories.push({})
    // this.categoryForm.reset()
  };

}
