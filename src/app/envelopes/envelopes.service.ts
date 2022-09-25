import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { Envelope } from "../models/envelope.model";
import { Router } from "@angular/router";


@Injectable({providedIn: 'root'})
export class EnvelopesService {

  constructor(private http: HttpClient,
              private router: Router,){

  }

  envelopesChanged = new Subject<Envelope[]>();
  private envelopes: Envelope[] = []

  addEnvelope(envelope: Envelope){
    this.envelopes.push(envelope);
    this.envelopesChanged.next(this.envelopes.slice());
    this.http.post(
      'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
      envelope
    ).subscribe(responseData => {
      console.log(responseData)
    });

  }

  getEnvelopes() {
    return this.envelopes.slice();
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
  // getEnvelopes(){
  //   return this.http
  //     .get<Envelope>('https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json')
  //     .pipe(map((responseObject) => {
  //       const responseArray: Envelope[] = [];
  //       for (const key in responseObject ) {
  //         if (responseObject.hasOwnProperty(key))
  //           responseArray.push({ ...responseObject[key], id: key });
  //       }
  //       return responseArray;
  //     })
  //     )

  // }



  deleteEnvelopes(){
    return this.http.delete('https://virtualenvelopes-default-rtdb.firebaseio.com/.json')
  }

  // overrideEnvelopes(envelopes: Envelope[]) {
  //   this.http.put(
  //     'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
  //     envelopes
  //   )
  //   .subscribe(response => {
  //     console.log(response);
  //   });
  // }

  deleteEnvelope(index: number){
    // this.envelopes.splice(index, 1)
    // this.envelopesChanged.next(this.envelopes.slice());
  }



  getEnvelope(index: number){
    // return this.envelopes[index]
  }






  updateEnvelope1(index: number, newEnvelope: Envelope) {
    // this.envelopes[index] = newEnvelope;
    // this.envelopesChanged.next(this.envelopes.slice());
  }



}
