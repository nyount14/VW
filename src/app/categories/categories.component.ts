import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';
import { Category } from '../models/category.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  // categoryForm: FormGroup;
  // @Output() categoryCreated = new EventEmitter<Category>();
  id: number;
  category: string;
  amount: number;
  newCategory: Category;


  constructor(private categoriesService: CategoriesService) {
    console.log()
   }

  ngOnInit(): void{
    this.categories = this.categoriesService.getCategories();
    this.categoriesService.categoriesChanged
      .subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      )
  }

  onSubmit(){
    console.log('form was submitted')
    // this.categories.push({})
    // this.categoryForm.reset()
  };

  onAddCategory() {
    this.newCategory = new Category(this.id, this.category, this.amount);
    this.categoriesService.addCategory(this.newCategory);

    // this.categoryCreated.emit({
    //   category: this.newCategory,
    //   amount: this.newAmount
    };

  }
