import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // categoryForm: FormGroup;
  @Output() categoryCreated = new EventEmitter<{category: string, amount: number}>();
  newCategory: string;
  newAmount: number;

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

  onAddCategory(){
    this.categoryCreated.emit({
      category: this.newCategory,
      amount: this.newAmount
    });

  }

}
