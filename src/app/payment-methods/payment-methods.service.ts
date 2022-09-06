import { EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PaymentMethod } from "../models/paymentmethod.model";


export class PaymentMethodsService {
paymentMethodsChanged = new EventEmitter<PaymentMethod[]>();
  private paymentMethods: PaymentMethod[] = [
    {
      method: 'cash',
    },
    {
      method: 'amazon card',
    },
    {
      method: 'freedom card',
    },
  ]

 getPaymentMethods() {
  return this.paymentMethods.slice();
 }

 getPaymentMethod(index: number){
   return this.paymentMethods[index]
 }

 addPaymentMethod(paymentMethod: PaymentMethod){
  this.paymentMethods.push(paymentMethod);
  this.paymentMethodsChanged.emit(this.paymentMethods.slice());
 }

 deletePaymentMethod(index: number){
  this.paymentMethods.splice(index, 1)
  this.paymentMethodsChanged.next(this.paymentMethods.slice());
 }

}
