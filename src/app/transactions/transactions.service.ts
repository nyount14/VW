import { EventEmitter } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { Envelope } from "../models/envelope.model";
import { PaymentMethod } from "../models/paymentmethod.model";


export class TransactionsService {

  transactionsChanged = new EventEmitter<Transaction[]>();
  private transactions: Transaction[] = [
    new Transaction(
      52,
      new Envelope(5, 'Food', 100),
      '7/11/2022',
      'debit',
      'publix groceries',
      new PaymentMethod(5, 'cash'),
    ),

  ]

 getTransactions() {
  return this.transactions.slice();
 }

 addTransaction(transaction: Transaction){
  this.transactions.push(transaction);
  this.transactionsChanged.emit(this.transactions.slice());
 }

}
