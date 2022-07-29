import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit {
  category: {id: number, category: string, amount: number};

  constructor(private categoriesService: CategoriesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.category = this.categoriesService.getCategory(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.category = this.categoriesService.getCategory(+params['id']);
        }
      )
  }

}
