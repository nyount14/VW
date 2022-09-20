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
  isFetching = false



  constructor(private envelopesService: EnvelopesService,
              private router: Router,
              private http: HttpClient) {}

  ngOnInit() {
    this.isFetching = true
    this.envelopesService.getEnvelopes().subscribe(envelopes => {
      this.isFetching = false
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

  onDeleteAll(){
    this.envelopesService.deleteEnvelopes().subscribe(() => {
      this.envelopes = [];
    })
  }

  private getEnvelopes(){
    this.envelopesService.getEnvelopes()
  }

}
