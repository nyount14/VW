import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  categoryForm = new FormGroup({
    category: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
