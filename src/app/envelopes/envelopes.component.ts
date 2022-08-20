import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Envelope } from '../models/envelope.model';
import { EnvelopesService } from './envelopes.service';

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
              private router: Router) {
    console.log()
   }

  ngOnInit(): void{
    this.envelopes = this.envelopesService.getEnvelopes();
    this.envelopesService.envelopesChanged
      .subscribe(
        (envelopes: Envelope[]) => {
          this.envelopes = envelopes;
        }
      )
  }
}
