import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-detail',
  templateUrl: './envelope-detail.component.html',
  styleUrls: ['./envelope-detail.component.css']
})
export class EnvelopeDetailComponent implements OnInit {
  envelope: {id: number, category: string, amount: number};

  constructor(private envelopesService: EnvelopesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.envelope = this.envelopesService.getEnvelope(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.envelope = this.envelopesService.getEnvelope(+params['id']);
        }
      )
  }
}
