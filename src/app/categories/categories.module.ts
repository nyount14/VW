import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';


@NgModule({
  declarations: [
    CategoriesHomeComponent,
    CategoriesFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class CategoriesModule { }
