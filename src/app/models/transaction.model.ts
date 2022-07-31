import { Envelope } from "./envelope.model";
import { PaymentMethod } from "./paymentmethod.model";


export class Transaction {
  constructor(
    public id: number,
    public amount: number,
    public category: string,
    public date: string,
    public type: string,
    public description: string,
    public paymentmethod?: string,
    ) {}
};
