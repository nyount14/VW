import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { Purchase } from 'src/app/models/purchase.model';
import { PurchasesService } from 'src/app/purchases/purchases.service';

@Component({
  selector: 'app-envelope-item',
  templateUrl: './envelope-item.component.html',
  styleUrls: ['./envelope-item.component.css']
})
export class EnvelopeItemComponent implements OnInit {
  @Input() envelope: Envelope;
  @Input() index: number;
  purchases: Purchase[];


  constructor(private purchasesService: PurchasesService,
              private route: ActivatedRoute,
              private router: Router ) {}

  ngOnInit(): void {
  }

  onShowReciepts(){
    this.purchases = this.purchasesService.getPurchasesByCategory(this.envelope.category)
    console.log(this.purchases)
  };

  onAddMoney(){

  }

  onDelete(){

  }

};
