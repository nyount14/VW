import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EnvelopesService } from 'src/app/envelopes/envelopes.service';
import { Envelope } from 'src/app/models/envelope.model';
import { Purchase } from 'src/app/models/purchase.model';
import { PurchasesService } from '../purchases.service';

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html',
  styleUrls: ['./purchase-new.component.css']
})
export class PurchaseNewComponent implements OnInit {

  @ViewChild('f') newPurchaseForm: NgForm;
  newEnvelopeAmount: number
  selectedEnvelope: Envelope;
  envelopes: Envelope[];


  purchases: Purchase[];
  amount: number;
  category: string;
  date: string;
  description: string;
  paymentmethod: string
  newPurchase: Purchase;

  constructor(private purchasesService: PurchasesService,
              private envelopesService: EnvelopesService,
              private router: Router ) { }

  ngOnInit(): void {

      }


  onSubmit(){
    this.amount = this.newPurchaseForm.value.amount;
    this.category = this.newPurchaseForm.value.category;
    this.date = this.newPurchaseForm.value.date;
    this.description = this.newPurchaseForm.value.description;
    this.paymentmethod = this.newPurchaseForm.value.paymentmethod;
    // this.newEnvelopeForm.reset();
    this.newPurchase = new Purchase(
      this.amount,
      this.category,
      this.date,
      this.description,
      this.paymentmethod);
    this.purchasesService.addPurchase(this.newPurchase);
    // this.router.navigate(['/purchases'])

    this.envelopes = this.envelopesService.getEnvelopes();
    for(let i = 0; i < this.envelopes.length; i++){
      if(this.envelopes[i].category == this.category){
        this.selectedEnvelope = this.envelopes[i]
        console.log(this.selectedEnvelope)
        this.newEnvelopeAmount = this.selectedEnvelope.amount -= +this.amount
        console.log(this.newEnvelopeAmount)
      }

      }
    }
    }
