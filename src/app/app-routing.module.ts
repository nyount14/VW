import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvelopeDetailComponent } from './envelopes/envelope-detail/envelope-detail.component';
import { EnvelopeNewComponent } from './envelopes/envelope-new/envelope-new.component';
import { EnvelopesComponent } from './envelopes/envelopes.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentMethodNewComponent } from './payment-methods/payment-method-new/payment-method-new.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PurchaseDetailComponent } from './purchases/purchase-detail/purchase-detail.component';
import { PurchaseNewComponent } from './purchases/purchase-new/purchase-new.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'envelopes', component: EnvelopesComponent },
  { path: 'envelopes/new', component: EnvelopeNewComponent },
  { path: 'envelopes/:id', component: EnvelopeDetailComponent },
  { path: 'purchases', component: PurchasesComponent },
  { path: 'purchases/new', component: PurchaseNewComponent },
  { path: 'purchases/:id', component: PurchaseDetailComponent },
  { path: 'paymentmethods/new', component: PaymentMethodNewComponent },
  { path: 'paymentmethods', component: PaymentMethodsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
