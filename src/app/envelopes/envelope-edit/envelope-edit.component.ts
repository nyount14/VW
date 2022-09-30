import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-edit',
  templateUrl: './envelope-edit.component.html',
  styleUrls: ['./envelope-edit.component.css']
})
export class EnvelopeEditComponent implements OnInit {
  editEnvelopeForm: FormGroup
  envelope: Envelope;
  id: number;
  category: string;
  amount: number;
  updatedEnvelope: Envelope;

  constructor(private envelopesService: EnvelopesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.envelope = this.envelopesService.getEnvelope(this.id);
          this.editEnvelopeForm = new FormGroup({
            'category': new FormControl(this.envelope.category),
            'amount': new FormControl(this.envelope.amount)
          })
        }
      )
  }


  onSubmit(){
    this.category = this.editEnvelopeForm.value.category;
    this.amount = this.editEnvelopeForm.value.amount;
    console.log(this.amount)
    this.updatedEnvelope = new Envelope(this.category, this.amount);
    this.envelopesService.updateEnvelope(this.envelope.id, this.updatedEnvelope);
    this.router.navigate(['/envelopes'])
  }

  // this.envelopes = this.envelopesService.getEnvelopes();
  // for(let i = 0; i < this.envelopes.length; i++){
  //   if(this.envelopes[i].category == this.category){
  //     this.selectedEnvelope = this.envelopes[i]
  //     // console.log(this.selectedEnvelope)
  //     this.newEnvelopeAmount = this.selectedEnvelope.amount -= +this.amount
  //     // console.log(this.newEnvelopeAmount)
  //     this.selectedEnvelope.amount = this.newEnvelopeAmount
  //     console.log(this.selectedEnvelope)
  //     this.envelopesService.updateEnvelope(this.selectedEnvelope)
  //     this.router.navigate(['/envelopes'])
  //   }




}
