import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-envelope-edit',
  templateUrl: './envelope-edit.component.html',
  styleUrls: ['./envelope-edit.component.css']
})
export class EnvelopeEditComponent implements OnInit {
  @ViewChild('f') editEnvelopeForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
