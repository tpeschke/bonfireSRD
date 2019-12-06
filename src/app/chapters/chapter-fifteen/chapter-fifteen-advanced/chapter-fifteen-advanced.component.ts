import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-fifteen-advanced',
  templateUrl: './chapter-fifteen-advanced.component.html',
  styleUrls: ['./chapter-fifteen-advanced.component.css']
})
export class ChapterFifteenAdvancedComponent implements OnInit {

    constructor(
      private notRedux: NotReduxService,
      private router: Router,
      private chapterService: ChapterService
    ) { }
  
    navDisplay = false;
    chapterName = '';
    side = { height: {'height': '2700px'}, side: [{linkid: 'hnu', body: 'ABILITY SCORE DAMAGE', jump: '15hbYNKwyrdVf'}, { linkid: 'hnu', body: 'DISEASES & POISONS', jump: '15hThjcdwfpAY'}, {linkid: 'hnu', body: 'FALLING DAMAGE', jump: '15hOfPmmhELBY'}, {linkid: 'hnu', body: 'ILLUMINATION', jump: '15hLzcrnSHGfR'}, {linkid: 'hnu', body: 'LONG TERM EXHAUSTION', jump: '15hfrDRlgsYQh'}]   };
  
    ngOnInit() {
      this.navDisplay = window.document.body.clientWidth > 650 ? true : false
      this.notRedux.toggleShow(true);
    }
  
    ngOnDestroy() {
      this.navDisplay = false;
      this.notRedux.toggleShow(false);
      this.chapterName = ''
    }
  
    displayTables() {
      this.navDisplay = !this.navDisplay
    }
}
