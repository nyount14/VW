import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../models/purchase.model';
import { PurchasesService } from './purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
  export class PurchasesComponent implements OnInit {

    purchases: Purchase[];
    constructor(private router: Router,
                private purchasesService: PurchasesService) {}

  ngOnInit(): void{
    this.purchases = this.purchasesService.getPurchases();
    this.purchasesService.purchasesChanged
      .subscribe(
        (purchases: Purchase[]) => {
        this.purchases = purchases;
        }
      )
  }
}



