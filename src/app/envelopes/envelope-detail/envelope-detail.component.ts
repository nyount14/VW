import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Envelope } from 'src/app/models/envelope.model';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-detail',
  templateUrl: './envelope-detail.component.html',
  styleUrls: ['./envelope-detail.component.css']
})
export class EnvelopeDetailComponent implements OnInit {
  envelope: Envelope;
  id: number;

  constructor(private envelopesService: EnvelopesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    // this.envelope = this.envelopesService.getEnvelope(this.id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       // this.envelope = this.envelopesService.getEnvelope(params['category']);
    //       this.envelope = this.envelopesService.getEnvelope(this.id);
    //     }
    //   )
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.envelope = this.envelopesService.getEnvelope(this.id);
        }
      )
  }
}
