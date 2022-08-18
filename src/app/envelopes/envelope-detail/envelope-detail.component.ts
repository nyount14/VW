import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EnvelopesService } from '../envelopes.service';

@Component({
  selector: 'app-envelope-detail',
  templateUrl: './envelope-detail.component.html',
  styleUrls: ['./envelope-detail.component.css']
})
export class EnvelopeDetailComponent implements OnInit {
  envelope: {category: string, amount: number};

  constructor(private envelopesService: EnvelopesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const category = this.route.snapshot.params['category'];
    this.envelope = this.envelopesService.getEnvelope(category);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.envelope = this.envelopesService.getEnvelope(params['category']);
        }
      )
  }
}
