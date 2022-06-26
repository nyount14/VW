import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsHomeComponent } from './transactions-home/transactions-home.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
