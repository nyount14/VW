import { FormsModule } from "@angular/forms";
import { Subject } from "rxjs";
import { Envelope } from "../models/envelope.model";


export class EnvelopesService {
envelopesChanged = new Subject<Envelope[]>();
  private envelopes: Envelope[] = [
    {
      category: 'Food',
      amount: 200
    },
    {
      category: 'Fuel',
      amount: 150
    },
    {
      category: 'Fun',
      amount: 100
    },
  ]

 getEnvelopes() {
  return this.envelopes.slice();
 }

 getEnvelope(index: number){
  return this.envelopes[index]
 }

 getEnvelopeByCategory(category: string){
  return this.envelopes[category];
 }

 addEnvelope(envelope: Envelope){
  this.envelopes.push(envelope);
  this.envelopesChanged.next(this.envelopes.slice());
 }

 deleteEnvelope(index: number){
  this.envelopes.splice(index, 1)
  this.envelopesChanged.next(this.envelopes.slice());
 }

}
