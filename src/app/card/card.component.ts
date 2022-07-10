import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() category: {category: string, amount: number};

  constructor() { }

  ngOnInit(): void {
  }

}
