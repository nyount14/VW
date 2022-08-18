import { EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Envelope } from "../models/envelope.model";


export class EnvelopesService {
envelopesChanged = new EventEmitter<Envelope[]>();
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

 getEnvelope(category: string){
  return this.envelopes[category]
 }

 addEnvelope(envelope: Envelope){
  this.envelopes.push(envelope);
  this.envelopesChanged.emit(this.envelopes.slice());
 }

}
