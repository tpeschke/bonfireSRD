import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service'

@Component({
  selector: 'app-chapter-three',
  templateUrl: './chapter-three.component.html',
  styleUrls: ['./chapter-three.component.css']
})
export class ChapterThreeComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '3503px'}, side: [{linkid: 'hg', body: 'A BRIEF OVERVIEW OF THE HISTORY OF THE MIDDLE REALM', jump: '3hg1'}, {linkid: 'h', body: 'WHICH RACE SHOULD I CHOOSE?', jump: '3ibTsjRfDjl'}, {linkid: 'hg', body: 'ABILITY SCORE MODIFIERS', jump: '3kOpuEvckQq'}, {linkid: 'hg', body: 'GAMEPLAY REWARDS', jump: '3FtaYQizyom'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3NLyIsVRDgl'}, {linkid: 'h', body: 'ELVES', jump: '3h1'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg15'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg16'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg17'}, {linkid: 'h', body: 'HUMANS', jump: '3h2'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg18'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg19'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg20'}, {linkid: 'h', body: 'ORCS', jump: '3h3'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg21'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg22'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg23'}] };

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
