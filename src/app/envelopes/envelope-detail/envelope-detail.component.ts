import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-detail',
  templateUrl: './envelope-detail.component.html',
  styleUrls: ['./envelope-detail.component.css']
})
export class EnvelopeDetailComponent implements OnInit {
  @ViewChild('f') newAmountForm: NgForm;
  envelope: Envelope;
  id: number;
  adjustment: number;

  constructor(private envelopesService: EnvelopesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    // this.envelope = this.envelopesService.getEnvelope(this.id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       // this.envelope = this.envelopesService.getEnvelope(params['category']);
    //       this.envelope = this.envelopesService.getEnvelope(this.id);
    //     }
    //   )
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.envelope = this.envelopesService.getEnvelope(this.id);
        }
      )
  }

  onSubtract(){
    this.envelope.amount = this.adjustment
    console.log(this.envelope.amount)
    this.envelopesService.updateEnvelope(this.envelope)
  }

  onAdd(){

  }

  onSubmit(){
    this.adjustment = this.newAmountForm.value.adjustment;
  }
}
