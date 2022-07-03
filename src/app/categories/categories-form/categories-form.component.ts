import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {

  categoryForm: FormGroup;

  constructor() { }

  ngOnInit(): void{
    this.categoryForm = new FormGroup({
      'category': new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.categoryForm)
  }

}
