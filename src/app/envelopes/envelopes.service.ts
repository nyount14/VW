import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { Envelope } from "../models/envelope.model";

@Injectable({providedIn: 'root'})
export class EnvelopesService {

  constructor(private http: HttpClient){

  }

envelopesChanged = new Subject<Envelope[]>();
  private envelopes: Envelope[] = [
    {
      category: 'Food',
      amount: 200
    },
    {
      category: 'Fuel',
      amount: 150
    },
    {
      category: 'Fun',
      amount: 100
    },
  ]

  addEnvelope(category: string, amount: number){
    const newEnvelope: Envelope = {category: category, amount: amount}
    this.http.post(
      'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
      newEnvelope
    ).subscribe(responseData => {
      console.log(responseData)
    });
  }

  // addEnvelope(envelope: Envelope){
  //   this.envelopes.push(envelope);
  //   this.envelopesChanged.next(this.envelopes.slice());
  // }


  getEnvelopes(){
    return this.http
      .get<Envelope>('https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json')
      .pipe(map((responseObject) => {
        const responseArray: Envelope[] = [];
        for (const key in responseObject ) {
          if (responseObject.hasOwnProperty(key))
            responseArray.push({ ...responseObject[key], id: key });
        }
        return responseArray;
      })
      )

  }

  deleteEnvelopes(){
    return this.http.delete('https://virtualenvelopes-default-rtdb.firebaseio.com/.json')
  }

  deleteEnvelope(index: number){
    this.envelopes.splice(index, 1)
    this.envelopesChanged.next(this.envelopes.slice());
  }

  // getEnvelopes() {
  //   return this.envelopes.slice();
  // }

  getEnvelope(index: number){
    return this.envelopes[index]
  }






  updateEnvelope1(index: number, newEnvelope: Envelope) {
    this.envelopes[index] = newEnvelope;
    this.envelopesChanged.next(this.envelopes.slice());
  }



}
