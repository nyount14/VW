import { Envelope } from "./envelope.model";
import { PaymentMethod } from "./paymentmethod.model";


export class Transaction {
  constructor(
    public amount: number,
    public category: Envelope,
    public date: string,
    public type: string,
    public description: string,
    public paymentmethod?: PaymentMethod,
    ) {}
};
