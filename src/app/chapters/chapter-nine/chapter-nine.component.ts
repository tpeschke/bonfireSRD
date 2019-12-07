import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-nine',
  templateUrl: './chapter-nine.component.html',
  styleUrls: ['./chapter-nine.component.css']
})
export class ChapterNineComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  trait = '';
  side = [{linkid: 'hnu', body: 'GOALS', jump: '9hXrEuwuawsw'}, {linkid: 'hnu', body: 'TRAITS', jump: '9hABmHwzkjiK'}, {linkid: 'hnu', body: 'PASSIONS', jump: '9hsjmKniFwet'}, {linkid: 'hnu', body: 'DEVOTIONS', jump: '9hNSnSqzNZCw'}, {linkid: 'hnu', body: 'FLAWS', jump: '9CTZClZEJGl'}, {linkid: 'hnu', body: 'WHEN TO USE THESE RULES', jump: '9hMasFAjKGNj'}, {linkid: 'h', body: 'STARTING the CONFLICT', jump: '9houGdbEWDtK'}, {linkid: 'hg', body: 'LEVERAGE', jump: '9hgaknurtyPbT'}, {linkid: 'h', body: 'PLAYING OUT the CONFLICT', jump: '9hxovYMMmdHK'}, {linkid: 'hg', body: 'ESCALATING A CONFLICT', jump: '9hgchWyCteYlT'}, {linkid: 'hg', body: 'ASSISTING IN A CONFLICT', jump: '9hgFaQSwEnthA'}, {linkid: 'hg', body: 'ENDING A CONFLICT', jump: '9hgxxKUCnUPps'}, {linkid: 'h', body: 'REPERCUSSIONS of a CONFLICT', jump: '9hGHmLfzEumM'}]

  ngOnInit(){}

  getTrait() {
    this.chapterService.getTrait()
      .subscribe(res => this.trait = res[0].trait)
  }

}
