import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { PaymentMethod } from 'src/app/models/paymentmethod.model';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.css']
})
export class TransactionNewComponent implements OnInit {

  @ViewChild('f') newTransactionForm: NgForm;
  transactions: Transaction[];
  id: number;
  amount: number;
  category: string;
  date: string;
  description: string;
  paymentMethod: string;
  newTransaction: Transaction;

  constructor(private transactionsService: TransactionsService,
              private router: Router) {
    console.log()
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.id = this.newTransactionForm.value.id;
    this.amount = this.newTransactionForm.value.amount;
    this.category = this.newTransactionForm.value.category;
    this.date = this.newTransactionForm.value.date;
    this.description = this.newTransactionForm.value.description;
    this.paymentMethod = this.newTransactionForm.value.paymentMethod;
    this.newTransaction = new Transaction(this.id, this.amount, this.category, this.date, this.description, this.paymentMethod);
    this.transactionsService.addTransaction(this.newTransaction);
    this.router.navigate(['/transactions'])
    };

}
