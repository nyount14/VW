import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';


@NgModule({
  declarations: [
    CategoriesHomeComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports: [
  ]
})
export class CategoriesModule { }
