import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-six',
  templateUrl: './chapter-six.component.html',
  styleUrls: ['./chapter-six.component.css']
})
export class ChapterSixComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '155px'}, side: [{linkid: 'h', body: 'HONOR', jump: '6hPwGysmEcvV'}, {linkid: 'hg', body: 'BONUS CrP', jump: '6hgNCVSVWFXeu'}, {linkid: 'hg', body: 'STARTING HONOR', jump: '6hgbvTTNJDlHZ'}, {linkid: 'hg', body: 'CHANGING HONOR CATEGORY', jump: '6hgeBtcDTzFiL'}, {linkid: 'hg', body: 'HONOR CATEGORIES & BONUSES', jump: '6hgDyUyoZBWAw'}, {linkid: 'hg', body: 'REDEEMING YOUR BONUSES', jump: '6hgmskMjEXzPU'}, {linkid: 'hg', body: 'GAINING & LOSING FAME', jump: '6hgoGqxwxcBtQ'}, {linkid: 'hg', body: 'FAME & HONOR', jump: '6hgkLmpnpLtOJ'}, {linkid: 'h', body: 'FATIGUE', jump: '6hVaMVlhABdG'}, {linkid: 'hg', body: 'CALCULATING FATIGUE', jump: '6hgkSZjeqqlKc'}, {linkid: 'hg', body: 'EFFECTS of FATIGUE', jump: '6hgKLFDcitTVx'}, {linkid: 'hg', body: 'RECOVERING FATIGUE', jump: '6hgOSwjEeMsCm'}, {linkid: 'h', body: 'HEALTH', jump: '6hscFsXKKFIO'}, {linkid: 'hg', body: 'HEALING', jump: '6hgsDsSgINrBx'}, {linkid: 'h', body: 'STRESS', jump: '6heEYhImWZRu'}]   };

  ngOnInit() {
    this.navDisplay = window.document.body.clientWidth > 500 ? true : false
    this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path);
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path)
    })
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
