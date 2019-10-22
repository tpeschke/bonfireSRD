import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-six-advanced',
  templateUrl: './chapter-six-advanced.component.html',
  styleUrls: ['./chapter-six-advanced.component.css']
})
export class ChapterSixAdvancedComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '5842px'}, side: [{linkid: 'h', body: 'HONOR', jump: '6hPwGysmEcvV'}, {linkid: 'hg', body: 'BONUS CrP', jump: '6hgNCVSVWFXeu'}, {linkid: 'hg', body: 'STARTING HONOR', jump: '6hgbvTTNJDlHZ'}, {linkid: 'hg', body: 'CHANGING HONOR CATEGORY', jump: '6hgeBtcDTzFiL'}, {linkid: 'hg', body: 'HONOR CATEGORIES & BONUSES', jump: '6hgDyUyoZBWAw'}, {linkid: 'hg', body: 'REDEEMING YOUR BONUSES', jump: '6hgmskMjEXzPU'}, {linkid: 'h', body: 'FATIGUE', jump: '6hVaMVlhABdG'}, {linkid: 'hg', body: 'CALCULATING FATIGUE', jump: '6hgkSZjeqqlKc'}, {linkid: 'hg', body: 'EFFECTS of FATIGUE', jump: '6hgKLFDcitTVx'}, {linkid: 'hg', body: 'RECOVERING FATIGUE', jump: '6hgOSwjEeMsCm'}, {linkid: 'h', body: 'HEALTH', jump: '6hscFsXKKFIO'}, {linkid: 'hg', body: 'HEALING', jump: '6hgsDsSgINrBx'}, {linkid: 'hnu', body: 'STRESS', jump: '6heEYhImWZRu'}, {linkid: 'h', body: 'FAME', jump: '6khdVfMTjDX'}, {linkid: 'hg', body: 'GAINING & LOSING FAME', jump: '6hgoGqxwxcBtQ'}, {linkid: 'hg', body: 'FAME & HONOR', jump: '6hgkLmpnpLtOJ'}, {linkid: 'hg', body: 'ATTRACTING NPCS', jump: '6bgprJtyLnW'}]  };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (tier < 1) {
        this.router.navigate(['/chapter/6'])
      }
    })
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
