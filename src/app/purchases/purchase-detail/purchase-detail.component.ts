import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Purchase } from 'src/app/models/purchase.model';
import { PurchasesService } from '../purchases.service';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {
  purchase: Purchase;
  id: number;
  category: string
  purchases: Purchase[];

  constructor(private purchasesService: PurchasesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.purchase = this.purchsesService.getPurchase(this.id);
    //     }
    //   )

    this.route.params
    .subscribe(
      (params: Params) => {
        this.category = params['id'];
        this.purchases = this.purchasesService.getPurchasesByCategory(this.category);
      }
    )
  }

}
