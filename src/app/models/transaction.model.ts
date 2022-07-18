import { PaymentMethod } from "./paymentmethod.model";

export class Transaction {
  constructor(
    public amount: number,
    public category: string,
    public date: string,
    public type: string,
    public description: string,
    public paymentmethod?: PaymentMethod,
    ) {}
};
