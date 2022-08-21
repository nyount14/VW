import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Purchase } from '../models/purchase.model';
import { PurchasesService } from './purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
  export class PurchasesComponent implements OnInit {

    category: '';
    purchases: Purchase[];
    constructor(private router: Router,
                private purchasesService: PurchasesService,
                private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.purchases = this.purchasesService.getPurchases();
    this.purchasesService.purchasesChanged
      .subscribe(
        (purchases: Purchase[]) => {
        this.purchases = purchases;
        }
      )
    this.route.params
    .subscribe(
      (params: Params) => {
        this.category = params['id'];
      }
    )
  }
}



