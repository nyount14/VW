import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesDetailComponent } from './categories/categories-detail/categories-detail.component';
import { CategoriesStartComponent } from './categories/categories-start/categories-start.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { TransactionStartComponent } from './transactions/transaction-start/transaction-start.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent, children: [
    { path: '', component: TransactionStartComponent },
    { path: ':id', component: TransactionDetailComponent}
  ] },
  { path: 'categories', component: CategoriesComponent, children: [
    { path: '', component: CategoriesStartComponent },
    { path: ':id', component: CategoriesDetailComponent },
  ] },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
