import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-edit',
  templateUrl: './envelope-edit.component.html',
  styleUrls: ['./envelope-edit.component.css']
})
export class EnvelopeEditComponent implements OnInit {
  @ViewChild('f') editEnvelopeForm: NgForm;
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
          this.envelope = this.envelopesService.getEnvelope(this.id);
          this.editEnvelopeForm.setValue({
            category: this.envelope.category,
            amount: this.envelope.amount
          })
        }
      )
  }

  onSubmit(){

  }

}
