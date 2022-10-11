import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { PaymentMethod } from "../models/paymentmethod.model";
import { Router } from "@angular/router";


@Injectable({providedIn: 'root'})
export class PaymentMethodsService {

constructor(private http: HttpClient,
            private router: Router,){

}

paymentMethodsChanged = new Subject<PaymentMethod[]>();
private paymentMethods: PaymentMethod[] = []

addPaymentMethod(paymentMethod: PaymentMethod){
  // this.paymentMethods.push(paymentMethod);
  // this.paymentMethodsChanged.next(this.paymentMethods.slice());
  this.http
    .post(
      'https://virtualenvelopes-default-rtdb.firebaseio.com/paymentmethods.json',
      paymentMethod
    ).subscribe(responseData => {
    console.log(responseData)
  });
    this.setPaymentMethods();
  }

  setPaymentMethods() {
    this.http
      .get<PaymentMethod>(
        'https://virtualenvelopes-default-rtdb.firebaseio.com/paymentmethods.json'
        )
        .pipe(
          map((responseObject) => {
            const responseArray: PaymentMethod[] = [];
            for (const key in responseObject ) {
              if (responseObject.hasOwnProperty(key))
              responseArray.push({ ...responseObject[key], id: key });
            }
            this.paymentMethods = responseArray;
            this.paymentMethodsChanged.next(this.paymentMethods.slice());
            return responseArray
        })
        ).subscribe(paymentMethods => {
          console.log(paymentMethods)
        })
    }

    deletePaymentMethod(id: string){
      this.http.delete('https://virtualenvelopes-default-rtdb.firebaseio.com/paymentmethods/'+id+'.json')
      .subscribe();
      this.setPaymentMethods();
      this.paymentMethodsChanged.next(this.paymentMethods.slice());
    }

  // deletePaymentMethod(id: string){
  //   for(let i = 0; i < this.paymentMethods.length; i++){
  //     if(this.paymentMethods[i].id === id){
  //       this.paymentMethods.splice(i, 1)
  //       this.paymentMethodsChanged.next(this.paymentMethods.slice());
  //     }
  //     this.http.put(
  //       'https://virtualenvelopes-default-rtdb.firebaseio.com/paymentmethods.json',
  //       this.paymentMethods
  //     ).subscribe(responseData => {
  //       console.log("returned data after put request", responseData)
  //     });
  //     }
  // }

//  getPaymentMethods() {
//   return this.paymentMethods.slice();
//  }


//  getPaymentMethod(index: number){
//    return this.paymentMethods[index]
//  }



//  deletePaymentMethod(index: number){
//   this.paymentMethods.splice(index, 1)
//   this.paymentMethodsChanged.next(this.paymentMethods.slice());
//  }

}
