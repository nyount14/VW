import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvelopeDetailComponent } from './envelopes/envelope-detail/envelope-detail.component';
import { EnvelopeNewComponent } from './envelopes/envelope-new/envelope-new.component';
import { EnvelopesComponent } from './envelopes/envelopes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentMethodNewComponent } from './payment-methods/payment-method-new/payment-method-new.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { TransactionNewComponent } from './transactions/transaction-new/transaction-new.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'envelopes/new', component: EnvelopeNewComponent },
  { path: 'envelopes', component: EnvelopesComponent, children: [
    { path: ':id', component: EnvelopeDetailComponent },
  ] },
  { path: 'transactions/new', component: TransactionNewComponent },
  { path: 'transactions', component: TransactionsComponent, children: [
    { path: ':id', component: TransactionDetailComponent}
  ] },
  { path: 'paymentmethods/new', component: PaymentMethodNewComponent },
  { path: 'paymentmethods', component: PaymentMethodsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
