import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesDetailComponent } from './categories/categories-detail/categories-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryNewComponent } from './categories/category-new/category-new.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent, children: [
    { path: ':id', component: TransactionDetailComponent}
  ] },
  { path: 'categories/new', component: CategoryNewComponent },
  { path: 'categories', component: CategoriesComponent, children: [
    { path: ':id', component: CategoriesDetailComponent },
  ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
