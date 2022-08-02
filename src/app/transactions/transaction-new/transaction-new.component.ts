import { Component, OnInit } from '@angular/core';
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

  transactions: Transaction[];
  id: number;
  amount: number;
  category: string;
  date: string;
  type: string;
  description: string;
  paymentMethod: string;
  newTransaction: Transaction;

  constructor(private transactionsService: TransactionsService,
              private router: Router) {
    console.log()
   }

  ngOnInit(): void {
  }

  onAddTransaction() {
    this.newTransaction = new Transaction(this.id, this.amount, this.category, this.date, this.type, this.description, this.paymentMethod);
    this.transactionsService.addTransaction(this.newTransaction);
    this.router.navigate(['/transactions'])
    };

}
