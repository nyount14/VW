import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  categoryForm: FormGroup;

  constructor() {
    console.log()
   }

  ngOnInit(): void{
    this.categoryForm = new FormGroup({
      'category': new FormControl('', [Validators.minLength(5), Validators.required]),
      'amount': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    console.log('form was submitted')
    this.categories.push(this.categoryForm)
    this.categoryForm.reset()
  };

}
