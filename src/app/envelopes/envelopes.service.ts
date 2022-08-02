import { EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Envelope } from "../models/envelope.model";


export class EnvelopesService {
envelopesChanged = new EventEmitter<Envelope[]>();
  private envelopes: Envelope[] = [
    {
      id: 1,
      category: 'Food',
      amount: 200
    },
    {
      id: 2,
      category: 'Fuel',
      amount: 150
    },
    {
      id: 3,
      category: 'Fun',
      amount: 100
    },
  ]

 getEnvelopes() {
  return this.envelopes.slice();
 }

 getEnvelope(id: number){
  const envelope = this.envelopes.find(
    (e) => {
      return e.id === id;
    }
  );
  return envelope;
 }

 addEnvelope(envelope: Envelope){
  this.envelopes.push(envelope);
  this.envelopesChanged.emit(this.envelopes.slice());
 }

}
