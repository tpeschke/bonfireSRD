import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-fifteen',
  templateUrl: './chapter-fifteen.component.html',
  styleUrls: ['./chapter-fifteen.component.css']
})
export class ChapterFifteenComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '1670px'}, side: [{linkid: 'hnu', body: 'ABILITY SCORE DAMAGE', jump: '15hbYNKwyrdVf'}, {linkid: 'hnu', body: 'FALLING DAMAGE', jump: '15hOfPmmhELBY'}, {linkid: 'hnu', body: 'ILLUMINATION', jump: '15hLzcrnSHGfR'}, {linkid: 'hnu', body: 'LONG TERM EXHAUSTION', jump: '15hfrDRlgsYQh'}]   };

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
