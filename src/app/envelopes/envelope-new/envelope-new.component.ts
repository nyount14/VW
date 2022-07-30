import { Component, OnInit } from '@angular/core';
import { Envelope } from 'src/app/models/envelope.model';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-new',
  templateUrl: './envelope-new.component.html',
  styleUrls: ['./envelope-new.component.css']
})
export class EnvelopeNewComponent implements OnInit {

  envelopes: Envelope[];
  id: number;
  category: string;
  amount: number;
  newEnvelope: Envelope;

  constructor(private envelopesService: EnvelopesService) {
    console.log()
   }

  ngOnInit(): void {
  }

  onAddEnvelope() {
    this.newEnvelope = new Envelope(this.id, this.category, this.amount);
    this.envelopesService.addEnvelope(this.newEnvelope);
    };

}
