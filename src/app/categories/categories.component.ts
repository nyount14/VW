import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [
    { category: 'fuel', amount: 100 },
    { category: 'food', amount: 500 },
    { category: 'fun', amount: 200 },
  ];
  // categoryForm: FormGroup;
  category: string;
  amount: number;

  constructor() {
    console.log()
   }

  ngOnInit(): void{
    // this.categoryForm = new FormGroup({
    //   'category': new FormControl('', [Validators.minLength(5), Validators.required]),
    //   'amount': new FormControl(null, [Validators.required])
    // });
  }

  onSubmit(){
    console.log('form was submitted')
    // this.categories.push({})
    // this.categoryForm.reset()
  };

  onAdd(){
    this.categories.push({
      category: this.category,
      amount: this.amount
    });

  }

}
