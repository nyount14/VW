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

  constructor(private envelopesService: EnvelopesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          const envelope = this.envelopesService.getEnvelope(this.id);
          this.editEnvelopeForm = new FormGroup({
            'category': new FormControl(envelope.category),
            'amount': new FormControl(envelope.amount)
          })
        }
      )
  }


  onSubmit(){
    console.log(this.editEnvelopeForm)
  }
  // private initForm(){
  //   const envelope = this.envelopesService.getEnvelope(this.id);
  //   this.editEnvelopeForm = new FormGroup({
  //     'category': new FormControl(envelope.category)
  //     'amount': new FormControl(envelope.amount)
  //   })
  // }

}
