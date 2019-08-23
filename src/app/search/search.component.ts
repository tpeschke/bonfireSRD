import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service'; 
import { Router } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    public cs: ChapterService,
    public router: Router
  ) { }

  ngOnInit() {}

  public searches = [];
  public searchTerm = '';

  getSearch(search: any): void {
    this.searchTerm = search.target.value;
    if (search === '' || search.target.value.length < 3) {
      this.searches = [];
    } else {
      if (search.target.value.length > 2) {
        this.cs.getSearch(search.target.value.trim())
          .subscribe(result => {
            this.searches = _.sortBy(result, 'chap');
          })
      }
    }
  }

  goToSearch(route, chapter) {
    this.router.navigate([`/chapter/${chapter}`], { queryParams: { search: route } })
  }

}
