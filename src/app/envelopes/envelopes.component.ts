import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Envelope } from '../models/envelope.model';
import { EnvelopesService } from './envelopes.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-envelopes',
  templateUrl: './envelopes.component.html',
  styleUrls: ['./envelopes.component.css']
})
export class EnvelopesComponent implements OnInit, OnDestroy {

  envelopesChanged = new Subject<Envelope[]>();
  envelopes: Envelope[];
  category: string;
  amount: number;
  isFetching = false
  error = ""
  subscription: Subscription;



  constructor(private envelopesService: EnvelopesService,
              private router: Router,
              private http: HttpClient,
              ) {}

ngOnInit() {
  this.subscription = this.envelopesService.envelopesChanged
      .subscribe(
        (envelopes: Envelope[]) => {
          this.envelopes = envelopes;
        }
      );
    this.subscription = this.envelopesService.setEnvelopes().subscribe(responseData => {
      console.log(responseData)
    })
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

// this.fetchEnvelopes(){
//   this.isFetching = true
//   this.envelopesService.getEnvelopes().subscribe(envelopes => {
//   this.isFetching = false;
//   this.envelopes = envelopes.reverse();
//   this.envelopesService.envelopesChanged.subscribe(changedEnvelops => {
//     console.log(changedEnvelops)
//   });
//   }, error => {
//     this.isFetching = false;
//     this.error = error.message;
// }



deleteEnvelope(id: string){
  for(let i = 0; i < this.envelopes.length; i++){
    if(this.envelopes[i].id === id){
      this.envelopes.splice(i, 1)
      this.envelopesChanged.next(this.envelopes.slice());
    }
    // this.http.put(
    //   'https://virtualenvelopes-default-rtdb.firebaseio.com/envelopes.json',
    //   this.envelopes
    // ).subscribe(responseData => {
    //   console.log("returned data after put request", responseData)
    // });
    }
}


  //   this.envelopes = currentEnvelopes
  //   this.envelopesService.envelopesChanged.subscribe(changedEnvelops => {
  //     console.log(changedEnvelops)
  //     this.envelopes = changedEnvelops
  //   });
  // }
  // )}







  // this.envelopesService.envelopesChanged
  //   .subscribe(
  //     (envelopes: Envelope[]) => {
  //       this.envelopes = envelopes;
  //     }
  //   )
}

// fetchEnvelopes(){
//   this.httpService.getEnvelopesFromFB().subscribe(envelopes => {
//   console.log(envelopes)
//   this.isFetching = false;
//   this.envelopes = envelopes.reverse();
//   this.envelopesChanged.next(this.envelopes.slice());
//   }, error => {
//     this.isFetching = false;
//     this.error = error.message;
//   });

// }

// onHandleError() {
// this.error = null
// }

// onDeleteAll() {
//   this.envelopesService.deleteEnvelopes().subscribe(() => {
//     this.envelopes
//   })
// }

// }
