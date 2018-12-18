import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service'; 
import _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    public cs: ChapterService
  ) { }

  ngOnInit() {}

  public searches = [];

  getSearch(search: any): void {
    if (search === '') {
      this.searches = [];
    } else {
      this.cs.getSearch(search.target.value)
        .subscribe(result => {
          this.searches = _.sortBy(result, 'chapnum');
        })
    }
  }

}
