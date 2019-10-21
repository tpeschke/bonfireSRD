import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-nine-advanced',
  templateUrl: './chapter-nine-advanced.component.html',
  styleUrls: ['./chapter-nine-advanced.component.css']
})
export class ChapterNineAdvancedComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  trait = '';
  side = { height: {'height': '6650px'}, side: [{linkid: 'hnu', body: 'GOALS', jump: '9hXrEuwuawsw'}, {linkid: 'h', body: 'TRAITS', jump: '9hABmHwzkjiK'}, {linkid: 'hg', body: 'ASSIGNING YOUR TRAIT POINTS', jump: '9VRPVFMAxlq'}, {linkid: 'h', body: 'PASSIONS', jump: '9hsjmKniFwet'}, {linkid: 'hg', body: 'ASSIGNING YOUR PASSION POINTS', jump: '9PmcofrhzJJ'}, {linkid: 'h', body: 'DEVOTIONS', jump: '9hNSnSqzNZCw'}, {linkid: 'hg', body: 'STARTING AND INCREASING YOUR DEVOTIONS', jump: '9DhcchEdfrZ'}, {linkid: 'hnu', body: 'FLAWS', jump: '9CTZClZEJGl'}, {linkid: 'hnu', body: 'WHEN TO USE THESE RULES', jump: '9hMasFAjKGNj'}, {linkid: 'h', body: 'STARTING the CONFLICT', jump: '9houGdbEWDtK'}, {linkid: 'hg', body: 'LEVERAGE', jump: '9hgaknurtyPbT'}, {linkid: 'h', body: 'PLAYING OUT the CONFLICT', jump: '9hxovYMMmdHK'}, {linkid: 'hg', body: 'ESCALATING A CONFLICT', jump: '9hgchWyCteYlT'}, {linkid: 'hg', body: 'ASSISTING IN A CONFLICT', jump: '9hgFaQSwEnthA'}, {linkid: 'hg', body: 'UNDERMINING AN ARGUMENT', jump: '9hhpKAeyUmj'}, {linkid: 'hg', body: 'ENDING A CONFLICT', jump: '9hgxxKUCnUPps'}, {linkid: 'hg', body: 'FOLDING', jump: '9jmWENCypnu'}, {linkid: 'hg', body: 'ESCALATING TO COMBAT', jump: '9NojEBANBFs'}, {linkid: 'hg', body: 'BEING A SMART ASS', jump: '9LqzoAfumLC'}, {linkid: 'h', body: 'REPERCUSSIONS of a CONFLICT', jump: '9hGHmLfzEumM'}]  };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier < 1) {
        this.router.navigate(['/chapter/9'])
      }
    })
    this.navDisplay = window.document.body.clientWidth > 650 ? true : false
    this.notRedux.toggleShow(true);
  }

  displayTables() {
    this.navDisplay = !this.navDisplay
  }

  getTrait() {
    this.chapterService.getTrait()
      .subscribe(res => this.trait = res[0].trait)
  }

}
