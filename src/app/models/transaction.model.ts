export class Transaction {
  constructor(
    public amount: number,
    public category: string,
    public date: string,
    public paymentmethod: string,
    public description: string,
    ) {}
};
