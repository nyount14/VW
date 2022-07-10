import { Component } from '@angular/core';

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

  onCategoryAdded(categoryData: {category: string, amount: number}) {
    this.categories.push({
      category: categoryData.category,
      amount: categoryData.amount
    });
  }

}
