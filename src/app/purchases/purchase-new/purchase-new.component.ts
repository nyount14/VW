import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EnvelopesService } from 'src/app/envelopes/envelopes.service';
import { Envelope } from 'src/app/models/envelope.model';
import { Purchase } from 'src/app/models/purchase.model';
import { PaymentMethod } from 'src/app/models/paymentmethod.model';
import { PurchasesService } from '../purchases.service';
import { PaymentMethodsService } from 'src/app/payment-methods/payment-methods.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html',
  styleUrls: ['./purchase-new.component.css']
})
export class PurchaseNewComponent implements OnInit {

  @ViewChild('f') newPurchaseForm: NgForm;
  envelopesChanged = new Subject<Envelope[]>();
  newEnvelopeAmount: number
  selectedEnvelope: Envelope;
  envelopes: Envelope[];
  paymentMethods: PaymentMethod[];
  default = ''


  purchases: Purchase[];
  amount: number;
  category: string;
  date: string;
  description: string;
  paymentmethod: string;
  newPurchase: Purchase;

  constructor(private purchasesService: PurchasesService,
              private envelopesService: EnvelopesService,
              private paymentMethodsService: PaymentMethodsService,
              private router: Router ) { }

  ngOnInit() {
    // this.envelopesService.getEnvelopes().subscribe(envelopes => {
    //   this.envelopes = envelopes
    // })
  //   this.paymentMethodsService.getPaymentMethods().subscribe(paymentMethods => {
  //     this.paymentMethods = paymentMethods
  //   })
  }


  onSubmit() {
  //   this.amount = this.newPurchaseForm.value.amount;
  //   this.category = this.newPurchaseForm.value.category;
  //   this.date = this.newPurchaseForm.value.date;
  //   this.description = this.newPurchaseForm.value.description;
  //   this.paymentmethod = this.newPurchaseForm.value.paymentmethod;
  //   // this.newEnvelopeForm.reset();
  //   console.log(this.newPurchaseForm)
  //   this.newPurchase = new Purchase(
  //     this.amount,
  //     this.category,
  //     this.date,
  //     this.description,
  //     this.paymentmethod);
  //   this.purchasesService.addPurchase(this.newPurchase);

  //   for(let i = 0; i < this.envelopes.length; i++){
  //     if(this.envelopes[i].category == this.category){
  //       this.selectedEnvelope = this.envelopes[i]
  //       this.newEnvelopeAmount = this.selectedEnvelope.amount - +this.amount
  //       this.selectedEnvelope.amount = this.newEnvelopeAmount
  //       // this.envelopesService.updateEnvelope(this.selectedEnvelope.id, this.selectedEnvelope)
  //       // this.fetchEnvelopes();
  //       }
  //     }
  //     this.router.navigate(['/envelopes'])
  //     console.log(this.selectedEnvelope)
  //   }

  //   fetchEnvelopes(){
  //     // this.envelopesService.getEnvelopes().subscribe(envelopes => {
  //     // this.envelopes = envelopes.reverse();
  //     // this.envelopesChanged.next(this.envelopes.slice());
  //     // });

    }
  }
