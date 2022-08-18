import { Component, OnInit, Input } from '@angular/core';
import { Envelope } from 'src/app/models/envelope.model';

@Component({
  selector: 'app-envelope-item',
  templateUrl: './envelope-item.component.html',
  styleUrls: ['./envelope-item.component.css']
})
export class EnvelopeItemComponent implements OnInit {
  @Input() envelope: Envelope;
  @Input() index: number;


  constructor() { }

  ngOnInit(): void {
  }

}
