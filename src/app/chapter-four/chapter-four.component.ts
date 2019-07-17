import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-four',
  templateUrl: './chapter-four.component.html',
  styleUrls: ['./chapter-four.component.css']
})
export class ChapterFourComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '20092px'}, side: [{linkid: 'h', body: "Expert Archetypes", jump: '4i1'}, {linkid: 'hg', body: 'ADVENTURER', jump: '4h1'}, {linkid: 'hg', body: 'ASSASSIN', jump: '4hYIDCGocizh'}, {linkid: 'hg', body: 'DIPLOMAT', jump: '4hGaqzRlKBus'}, {linkid: 'hg', body: 'FOIL', jump: '4hDfHqpRoXyg'}, {linkid: 'hg', body: 'NOBLE', jump: '4h2'}, {linkid: 'hg', body: 'PHILOSOPHER', jump: '4hDyifGXhLbU'}, {linkid: 'hg', body: 'RANGER', jump: '4hFaJFVQScZb'}, {linkid: 'hg', body: 'RASCAL', jump: '4hVcxHvMtQkA'}, {linkid: 'hg', body: 'SAGE', jump: '4hDxXHOyaedt'}, {linkid: 'hg', body: 'THIEF', jump: '4hZWkhQQKwJe'}, {linkid: 'h', body: "Magicial Archetypes", jump: '4iazYnALlUht'},  {linkid: 'hg', body: 'MAGE', jump: '4hOIoawcgJzH'}, {linkid: 'hg', body: 'RUNEGALDER', jump: '4hLraxjUbdDv'}, {linkid: 'hg', body: 'WIZARD', jump: '4hGlzvNjMhBG'}, {linkid: 'h', body: "Servant Archetypes", jump: '4iArbewCdrnU'}, {linkid: 'hg', body: 'ASHCALLER', jump: '4hfcwakUSDkF'}, {linkid: 'hg', body: 'PRIEST', jump: '4hhJoUnFzibf'}, {linkid: 'h', body: "Warrior Archetypes", jump: '4iiOGpqIVcYL'}, {linkid: 'hg', body: 'CATERAN', jump: '4hjWyOCZsjSz'}, {linkid: 'hg', body: 'FIGHTER', jump: '4hnXImVbhkwc'}, {linkid: 'hg', body: 'KNIGHT', jump: '4hGdpzFAOpTd'}, {linkid: 'hg', body: 'SOLDIER', jump: '4hkxEMOcntAo'}, {linkid: 'hg', body: 'TACTICIAN', jump: '4hrOZzOVcSjN'}, {linkid: 'hg', body: 'THUG', jump: '4hILTMTsUTYB'}, {linkid: 'hg', body: 'VANGUARD', jump: '4htujAXZowgL'}]  };

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
