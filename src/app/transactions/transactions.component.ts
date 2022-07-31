import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction.model';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];
  id: number;
  category: string;
  amount: number;



  constructor(private transactionsService: TransactionsService,
              private router: Router) {
    console.log()
   }

  ngOnInit(): void{
    this.transactions = this.transactionsService.getTransactions();
    this.transactionsService.transactionsChanged
      .subscribe(
        (transactions: Transaction[]) => {
          this.transactions = transactions;
        }
      )
  }

  onSubmit(){
    console.log('form was submitted')
  };
}
