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
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { EnvelopesComponent } from './envelopes/envelopes.component';
import { EnvelopesService } from './envelopes/envelopes.service';
import { EnvelopeDetailComponent } from './envelopes/envelope-detail/envelope-detail.component';
import { EnvelopeNewComponent } from './envelopes/envelope-new/envelope-new.component';
import { PaymentMethodsService } from './payment-methods/payment-methods.service';
import { PaymentMethodNewComponent } from './payment-methods/payment-method-new/payment-method-new.component';
import { EnvelopeItemComponent } from './envelopes/envelope-item/envelope-item.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseDetailComponent } from './purchases/purchase-detail/purchase-detail.component';
import { PurchaseNewComponent } from './purchases/purchase-new/purchase-new.component';
import { PurchaseItemComponent } from './purchases/purchase-item/purchase-item.component';
import { PurchasesService } from './purchases/purchases.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    PaymentMethodsComponent,
    EnvelopesComponent,
    EnvelopeDetailComponent,
    EnvelopeNewComponent,
    PaymentMethodNewComponent,
    EnvelopeItemComponent,
    PurchasesComponent,
    PurchaseDetailComponent,
    PurchaseNewComponent,
    PurchaseItemComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [EnvelopesService, PurchasesService, PaymentMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
