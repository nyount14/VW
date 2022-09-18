import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Envelope } from '../models/envelope.model';
import { EnvelopesService } from './envelopes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-envelopes',
  templateUrl: './envelopes.component.html',
  styleUrls: ['./envelopes.component.css']
})
export class EnvelopesComponent implements OnInit {

  envelopes: Envelope[];
  category: string;
  amount: number;



  constructor(private envelopesService: EnvelopesService,
              private router: Router,
              private http: HttpClient) {
    console.log()
   }

  ngOnInit(): void{
    this.http
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
    .subscribe(envelopes => {
      this.envelopes = envelopes
    });
    // this.envelopes = this.envelopesService.getEnvelopes();
    // this.envelopesService.envelopesChanged
    //   .subscribe(
    //     (envelopes: Envelope[]) => {
    //       this.envelopes = envelopes;
    //     }
    //   )
  }
}
