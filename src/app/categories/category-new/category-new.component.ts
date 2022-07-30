import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {
  categories: Category[];
  id: number;
  category: string;
  amount: number;
  newCategory: Category;

  constructor(private categoriesService: CategoriesService) {
    console.log()
   }

  ngOnInit(): void {
  }

  onAddCategory() {
    this.newCategory = new Category(this.id, this.category, this.amount);
    this.categoriesService.addCategory(this.newCategory);
    };

}
