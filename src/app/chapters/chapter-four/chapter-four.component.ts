import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service'

@Component({
  selector: 'app-chapter-four',
  templateUrl: './chapter-four.component.html',
  styleUrls: ['./chapter-four.component.css']
})
export class ChapterFourComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '11042px'}, side: [{linkid: 'h', body: "Expert Archetypes", jump: '4i1'}, {linkid: 'hg', body: 'ADVENTURER', jump: '4h1'}, {linkid: 'hg', body: 'DIPLOMAT', jump: '4hGaqzRlKBus'}, {linkid: 'hg', body: 'NOBLE', jump: '4h2'}, {linkid: 'hg', body: 'RANGER', jump: '4hFaJFVQScZb'}, {linkid: 'hg', body: 'SAGE', jump: '4hDxXHOyaedt'}, {linkid: 'hg', body: 'THIEF', jump: '4hZWkhQQKwJe'}, {linkid: 'h', body: "Magicial Archetypes", jump: '4iazYnALlUht'}, {linkid: 'hg', body: 'RUNEGALDER', jump: '4hLraxjUbdDv'}, {linkid: 'h', body: "Servant Archetypes", jump: '4iArbewCdrnU'}, {linkid: 'hg', body: 'PRIEST', jump: '4hhJoUnFzibf'}, {linkid: 'h', body: "Warrior Archetypes", jump: '4iiOGpqIVcYL'}, {linkid: 'hg', body: 'CATERAN', jump: '4hjWyOCZsjSz'}, {linkid: 'hg', body: 'KNIGHT', jump: '4hGdpzFAOpTd'}, {linkid: 'hg', body: 'SOLDIER', jump: '4hkxEMOcntAo'}, {linkid: 'hg', body: 'THUG', jump: '4hILTMTsUTYB'}, {linkid: 'hg', body: 'VANGUARD', jump: '4htujAXZowgL'}]  };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier >= 1) {
        let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['/chapter/4/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['/chapter/4/advanced'])
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
