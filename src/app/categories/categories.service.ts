import { EventEmitter } from "@angular/core";
import { Category } from "../models/category.model";


export class CategoriesService {

  categoriesChanged = new EventEmitter<Category[]>();
  private categories: Category[] = [
    new Category(
      'Food',
      200
    ),
    new Category(
      'Fun',
      100
    ),
    new Category(
      'Fuel',
      150
    )
  ]

 getCategories() {
  return this.categories.slice();
 }

 addCategory(category: Category){
  this.categories.push(category);
  this.categoriesChanged.emit(this.categories.slice());
 }

}
