import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-fifteen',
  templateUrl: './chapter-fifteen.component.html',
  styleUrls: ['./chapter-fifteen.component.css']
})
export class ChapterFifteenComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[ {linkid: 'hnu', body: 'Stat Score Damage', jump: '15hbYNKwyrdVf'}, {linkid: 'hnu', body: 'Falling Damage', jump: '15hOfPmmhELBY'}, {linkid: 'hnu', body: 'Illumination', jump: '15hLzcrnSHGfR'}, {linkid: 'hnu', body: 'Sizing & Size Charts', jump: 'sizingandsizecharts'}, {linkid: 'hnu', body: 'Long-term Exhaustion', jump: '15hfrDRlgsYQh'}, {linkid: 'h', body: 'Sizing & Size Charts', jump: 'sizingandsizercharhear'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
