import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-nine',
  templateUrl: './chapter-nine.component.html',
  styleUrls: ['./chapter-nine.component.css']
})
export class ChapterNineComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '5250px'}, side: [{linkid: 'hnu', body: 'GOALS', jump: '9hXrEuwuawsw'}, {linkid: 'hnu', body: 'TRAITS', jump: '9hABmHwzkjiK'}, {linkid: 'hnu', body: 'PASSIONS', jump: '9hsjmKniFwet'}, {linkid: 'hnu', body: 'DEVOTIONS', jump: '9hNSnSqzNZCw'}, {linkid: 'hnu', body: 'WHEN TO USE THESE RULES', jump: '9hMasFAjKGNj'}, {linkid: 'h', body: 'STARTING the CONFLICT', jump: '9houGdbEWDtK'}, {linkid: 'hg', body: 'SITUATIONAL MODIFIERS ', jump: '9hgaknurtyPbT'}, {linkid: 'h', body: 'PLAYING OUT the CONFLICT', jump: '9hxovYMMmdHK'}, {linkid: 'hg', body: 'ESCALATING A CONFLICT', jump: '9hgchWyCteYlT'}, {linkid: 'hg', body: 'ASSISTING IN A CONFLICT', jump: '9hgFaQSwEnthA'}, {linkid: 'hg', body: 'ENDING A CONFLICT', jump: '9hgxxKUCnUPps'}, {linkid: 'h', body: 'REPERCUSSIONS of a CONFLICT', jump: '9hGHmLfzEumM'}]  };

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