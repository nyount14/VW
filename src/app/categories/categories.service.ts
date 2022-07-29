import { EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Category } from "../models/category.model";


export class CategoriesService {

  categoriesChanged = new EventEmitter<Category[]>();
  private categories: Category[] = [
    {
      id: 1,
      category: 'Food',
      amount: 200
    },
    {
      id: 2,
      category: 'Fuel',
      amount: 150
    },
    {
      id: 3,
      category: 'Fun',
      amount: 100
    },
  ]

 getCategories() {
  return this.categories.slice();
 }

 getCategory(id: number){
  const category = this.categories.find(
    (c) => {
      return c.id === id;
    }
  );
  return category;
 }

 addCategory(category: Category){
  this.categories.push(category);
  this.categoriesChanged.emit(this.categories.slice());
 }

}
