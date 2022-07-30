import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CategoriesService } from './categories/categories.service';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { CategoriesDetailComponent } from './categories/categories-detail/categories-detail.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    CardComponent,
    CategoriesComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    CategoriesDetailComponent,
    CategoryNewComponent,
    PaymentMethodComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [CategoriesService, TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
