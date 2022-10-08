import { Purchase } from "../models/purchase.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PurchasesService {

  constructor(private http: HttpClient,
    private router: Router,){

}

  purchasesChanged = new Subject<Purchase[]>();
  private purchases: Purchase[] = []


  addPurchase(purchase: Purchase) {
    // this.purchases.push(purchase);
    // this.purchasesChanged.next(this.purchases.slice());
    this.http
      .post(
        'https://virtualenvelopes-default-rtdb.firebaseio.com/purchases.json',
      purchase
    ).subscribe(responseData => {
      console.log(responseData)
    });
    this.setPurchases();
   }


 setPurchases() {
  // return this.purchases.slice();
  this.http
    .get<Purchase>(
      'https://virtualenvelopes-default-rtdb.firebaseio.com/purchases.json'
      )
      .pipe(
        map((responseObject) => {
          const responseArray: Purchase[] = [];
          for (const key in responseObject ) {
            if (responseObject.hasOwnProperty(key))
            responseArray.push({ ...responseObject[key], id: key });
      }
      this.purchases = responseArray;
      this.purchasesChanged.next(this.purchases.slice());
      return this.purchases
    })
    ).subscribe(purchases => {
      console.log(purchases)
    })
  }

//  getPurchase(index: number){
//   return this.purchases[index]
//  }

//  getPurchasesByCategory(category: string) {
//   return this.purchases[category];
//  }



//  deletePurchase(index: number){
//   this.purchases.splice(index, 1);
//   this.purchasesChanged.next(this.purchases.slice());
//  }

//  deletePurchase(id: string){
//   for(let i = 0; i < this.purchases.length; i++){
//     if(this.purchases[i].id === id){
//       this.purchases.splice(i, 1)
//       this.purchasesChanged.next(this.purchases.slice());
//     }
//     this.http.put(
//       'https://virtualenvelopes-default-rtdb.firebaseio.com/purchases.json',
//       this.purchases
//     ).subscribe(responseData => {
//       console.log("returned data after put request", responseData)
//     });
//     }
// }

// updatePurchase(id: string, newEnvelope: Envelope) {
  // this.envelopes[index] = newEnvelope;
  // this.envelopesChanged.next(this.envelopes.slice());
}
