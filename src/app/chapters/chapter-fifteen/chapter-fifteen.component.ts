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
  side =[{linkid: 'hnu', body: 'STAT SCORE DAMAGE', jump: '15hbYNKwyrdVf'}, {linkid: 'hnu', body: 'FALLING DAMAGE', jump: '15hOfPmmhELBY'}, {linkid: 'hnu', body: 'ILLUMINATION', jump: '15hLzcrnSHGfR'}, {linkid: 'hnu', body: 'LONG TERM EXHAUSTION', jump: '15hfrDRlgsYQh'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
