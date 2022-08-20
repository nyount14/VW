import { Component, OnInit, Input } from '@angular/core';
import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  @Input() purchase: Purchase;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){

  }

}
