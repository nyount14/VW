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
  // categoryForm: FormGroup;
  // @Output() categoryCreated = new EventEmitter<Category>();
  id: number;
  category: string;
  amount: number;
  newEnvelope: Envelope;


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

  onSubmit(){
    console.log('form was submitted')
    // this.categories.push({})
    // this.categoryForm.reset()
  };

  onAddEnvelope() {
    this.newEnvelope = new Envelope(this.id, this.category, this.amount);
    this.envelopesService.addEnvelope(this.newEnvelope);
    this.router.navigate(['/envelopes'])

    // this.categoryCreated.emit({
    //   category: this.newCategory,
    //   amount: this.newAmount
    };

  }
