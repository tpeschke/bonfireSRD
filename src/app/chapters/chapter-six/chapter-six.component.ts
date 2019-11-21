import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service'

@Component({
  selector: 'app-chapter-six',
  templateUrl: './chapter-six.component.html',
  styleUrls: ['./chapter-six.component.css']
})
export class ChapterSixComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '3755px'}, side: [{linkid: 'h', body: 'STRESS', jump: '6heEYhImWZRu'}, {linkid: 'hg', body: 'STRESS PENALTIES', jump: 'stresspenalityhiofewjiof'}, {linkid: 'hg', body: 'HEALING STRESS', jump: 'healingstrejiosss'}, {linkid: 'h', body: 'VITALITY', jump: '6hscFsXKKFIO'}, {linkid: 'hg', body: 'DROPPING A VITALITY CATEGORY & ENCUMBRANCE', jump: 'droppingavitalityc'}, {linkid: 'hg', body: 'TAKING A BREATHER', jump: 'takeabreatherfjiojioxsa'}, {linkid: 'hg', body: 'HEALING', jump: '6hgsDsSgINrBx'}, {linkid: 'h', body: 'HONOR', jump: '6hPwGysmEcvV'}, {linkid: 'hg', body: 'BONUS CrP', jump: '6hgNCVSVWFXeu'}, {linkid: 'hg', body: 'STARTING HONOR', jump: '6hgbvTTNJDlHZ'}, {linkid: 'hg', body: 'CHANGING HONOR CATEGORY', jump: '6hgeBtcDTzFiL'}, {linkid: 'hg', body: 'HONOR CATEGORIES & BONUSES', jump: '6hgDyUyoZBWAw'}, {linkid: 'hg', body: 'REDEEMING YOUR BONUSES', jump: '6hgmskMjEXzPU'}, {linkid: 'hg', body: 'GAINING & LOSING FAME', jump: '6hgoGqxwxcBtQ'}, {linkid: 'hg', body: 'FAME & HONOR', jump: '6hgkLmpnpLtOJ'}]   };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier >= 1) {
        let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['/chapter/6/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['/chapter/6/advanced'])
        }
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
