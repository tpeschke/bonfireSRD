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
  side = [{linkid: 'hnu', body: 'GOALS', jump: '9hXrEuwuawsw'}, {linkid: 'h', body: 'TRAITS', jump: '9hABmHwzkjiK'}, {linkid: 'hg', body: 'INCREASING TRAITS WITH CRP', jump: 'increashiogtreiats'}, {linkid: 'hnu', body: 'RACIAL TEMPERAMENT', jump: 'racialtemperatement'}, {linkid: 'hnu', body: 'PASSIONS', jump: '9hsjmKniFwet'}, {linkid: 'hnu', body: 'DEVOTIONS', jump: '9hNSnSqzNZCw'}, {linkid: 'hnu', body: 'FLAWS', jump: '9CTZClZEJGl'}, {linkid: 'hnu', body: 'WHEN TO USE THESE RULES', jump: '9hMasFAjKGNj'}, {linkid: 'hnu', body: 'STARTING THE CONFLICT', jump: '9houGdbEWDtK'}, {linkid: 'h', body: 'PLAYING OUT THE CONFLICT', jump: 'PLAYINGOUTthheader'}, {linkid: 'hg', body: 'EVIDENCE', jump: 'EVIDENCEAuTYQTNNxu'}, {linkid: 'hg', body: 'APPEALS', jump: 'APPEALSVlpjoAtZmD'}, {linkid: 'hg', body: 'ENDING THE ROUND', jump: 'ENDINGtheROUlLsczZboSo'}, {linkid: 'hg', body: 'TRUMP CARDS', jump: 'TRUMPCARDSjqZVdUNpkn'}, {linkid: 'hg', body: 'PUSHING THE POINT', jump: 'PUSHINGthePOyHFOAlIylv'}, {linkid: 'hnu', body: 'ENDING THE CONFLICT', jump: 'ENDINGtheCONheader'}, {linkid: 'h', body: 'REPERCUSSIONS OF A CONFLICT', jump: 'REPERCUSSIONSheader'}]

  ngOnInit(){}

  getTrait() {
    this.chapterService.getTrait()
      .subscribe(res => this.trait = res[0].trait)
  }

}
