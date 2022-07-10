import { Component } from '@angular/core';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories = [
    { category: 'fuel', amount: 100 },
    { category: 'food', amount: 500 },
    { category: 'fun', amount: 200 },
  ];

  onCategoryAdded(categoryData: Category) {
    this.categories.push(categoryData);
  }

}
