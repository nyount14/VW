import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EnvelopesService } from './envelopes/envelopes.service';
import { Envelope } from './models/envelope.model';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient,
              private envelopesService: EnvelopesService) { }

  addEnvelopeToFB(envelope: Envelope){
    this.http.post(
      'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
      envelope
    ).subscribe(responseData => {
      console.log(responseData)
    });
  }


  getEnvelopesFromFB(){
    return this.http.get<Envelope>(
      'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json')
      .pipe(
        map(responseObject => {
        const responseArray: Envelope[] = [];
        for (const key in responseObject) {
          if (responseObject.hasOwnProperty(key))
            responseArray.push({ ...responseObject[key], id: key });
        }
        this.envelopesService.setEnvelopes(responseArray);
      })
      )
}

  // deleteEnvelopeFromFB(){
  //   this.http.put(
  //     'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
  //     this.envelopes
  //   ).subscribe(responseData => {
  //     console.log("returned data after put request", responseData)
  //   });
  // }

}
