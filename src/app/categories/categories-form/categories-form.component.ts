import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

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
    this.categoryForm.reset()
  };

}
