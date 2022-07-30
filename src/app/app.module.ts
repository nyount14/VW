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
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { EnvelopesComponent } from './envelopes/envelopes.component';
import { EnvelopesService } from './envelopes/envelopes.service';
import { EnvelopeDetailComponent } from './envelopes/envelope-detail/envelope-detail.component';
import { EnvelopeNewComponent } from './envelopes/envelope-new/envelope-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    PaymentMethodComponent,
    EnvelopesComponent,
    EnvelopeDetailComponent,
    EnvelopeNewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [EnvelopesService, TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
