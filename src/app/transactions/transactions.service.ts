import { EventEmitter } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { Category } from "../models/category.model";
import { PaymentMethod } from "../models/paymentmethod.model";


export class TransactionsService {

  transactionsChanged = new EventEmitter<Transaction[]>();
  private transactions: Transaction[] = [
    new Transaction(
      52,
      new Category('Food', 100),
      '7/11/2022',
      'debit',
      'publix groceries',
      new PaymentMethod('cash'),
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
