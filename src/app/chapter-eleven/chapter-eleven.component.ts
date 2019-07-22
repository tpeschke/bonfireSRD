import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-eleven',
  templateUrl: './chapter-eleven.component.html',
  styleUrls: ['./chapter-eleven.component.css']
})
export class ChapterElevenComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '49px'}, side: [{linkid: 'h', body: 'CURRENCY', jump: '11hcDVoyyzNfA'}, {linkid: 'h', body: 'BUYING AT 1st LEVEL', jump: '11hUoyrMZmTap'}, {linkid: 'h', body: 'TABLE HEADER EXPLANATIONS ', jump: '11hQtxvaXVpRm'}, {linkid: 'h', body: 'ENCUMBRANCE', jump: '11hlkpDcuULVK'}, {linkid: 'h', body: 'POISONS & TOXINS', jump: '11hCvqhFlEIMU'}, {linkid: 'h', body: 'WEAPON TABLE HEADER EXPLANATION', jump: '11hOUgQlIPWxE'}, {linkid: 'h', body: 'WEAPON BONUSES', jump: '11hXItIqSyOQf'}, {linkid: 'h', body: 'ARMOR TABLE HEADER EXPLANATION', jump: '11hgKBqkCxSAI'}, {linkid: 'h', body: 'ARMOR BONUSES', jump: '11hxJgcyHTTRc'}, {linkid: 'h', body: 'SHIELD TABLE HEADER EXPLANATION', jump: '11hyyTygqlCvx'}, {linkid: 'h', body: 'SHIELD BONUSES', jump: '11hiFfWgYkSiH'}]   };

  ngOnInit() {
    this.navDisplay = window.document.body.clientWidth > 650 ? true : false
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
