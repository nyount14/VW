import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { Envelope } from "../models/envelope.model";
import { Router } from "@angular/router";


@Injectable({providedIn: 'root'})
export class EnvelopesService {

  envelopesChanged = new Subject<Envelope[]>();
  private envelopes: Envelope[] = []

  constructor(private http: HttpClient,
              private router: Router){

  }

  addEnvelope(envelope: Envelope) {
    // this.envelopes.push(envelope);
    // this.envelopesChanged.next(this.envelopes.slice());
    this.http
      .post(
        'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
        envelope
      ).subscribe(responseData => {});
    this.setEnvelopes();
  }

  setEnvelopes() {
      this.http
        .get<Envelope>(
          'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json'
        )
        .pipe(
          map((responseObject) => {
            const responseArray: Envelope[] = [];
            for (const key in responseObject ) {
              if (responseObject.hasOwnProperty(key))
              responseArray.push({ ...responseObject[key], id: key });
            }
            this.envelopes = responseArray;
            console.log(this.envelopes)
            this.envelopesChanged.next(this.envelopes.slice());
            return responseArray
        })
        ).subscribe(envelopes => {
          console.log(envelopes)
        })
        // this.envelopesChanged.next(this.envelopes.slice());
      }


  getEnvelopes() {
    return this.envelopes.slice();
  }


}
