import { EventEmitter } from "@angular/core";
import { Transaction } from "../models/transaction.model";
import { Envelope } from "../models/envelope.model";
import { PaymentMethod } from "../models/paymentmethod.model";


export class TransactionsService {

  transactionsChanged = new EventEmitter<Transaction[]>();
  private transactions: Transaction[] = [
    {
      id: 1,
      amount: 30,
      category: 'Food',
      date: '1/1/2022',
      type: 'debit',
      description: 'publix lunch',
      paymentmethod: 'cash'
    },
  ]

 getTransactions() {
  return this.transactions.slice();
 }

 getTransaction(id: number){
  const transaction = this.transactions.find(
    (t) => {
      return t.id === id;
    }
  );
  return transaction;
 }

 addTransaction(transaction: Transaction){
  this.transactions.push(transaction);
  this.transactionsChanged.emit(this.transactions.slice());
 }

}
