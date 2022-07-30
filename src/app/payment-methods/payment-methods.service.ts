import { EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PaymentMethod } from "../models/paymentmethod.model";


export class PaymentMethodsService {
paymentMethodsChanged = new EventEmitter<PaymentMethod[]>();
  private paymentMethods: PaymentMethod[] = [
    {
      id: 1,
      method: 'cash',
    },
    {
      id: 2,
      method: 'amazon card',
    },
    {
      id: 3,
      method: 'freedom card',
    },
  ]

 getPaymentMethods() {
  return this.paymentMethods.slice();
 }

 getPaymentMethod(id: number){
  const paymentMethods = this.paymentMethods.find(
    (c) => {
      return c.id === id;
    }
  );
  return paymentMethods;
 }

 addPaymentMethod(paymentMethod: PaymentMethod){
  this.paymentMethods.push(paymentMethod);
  this.paymentMethodsChanged.emit(this.paymentMethods.slice());
 }

}
