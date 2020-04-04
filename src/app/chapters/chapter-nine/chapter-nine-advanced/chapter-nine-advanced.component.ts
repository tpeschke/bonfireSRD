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
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  trait = '';
  side = [{linkid: 'hnu', body: 'GOALS', jump: '9hXrEuwuawsw'}, {linkid: 'h', body: 'TRAITS', jump: '9hABmHwzkjiK'}, {linkid: 'hg', body: 'ASSIGNING YOUR TRAIT POINTS', jump: '9VRPVFMAxlq'}, {linkid: 'hg', body: 'INCREASING TRAITS WITH CrP', jump: 'increashiogtreiats'}, {linkid: 'hnu', body: 'PASSIONS', jump: '9hsjmKniFwet'}, {linkid: 'h', body: 'DEVOTIONS', jump: '9hNSnSqzNZCw'}, {linkid: 'hg', body: 'BUYING NEW AND INCREASING DEVOTIONS', jump: '9DhcchEdfrZ'}, {linkid: 'hnu', body: 'FLAWS', jump: '9CTZClZEJGl'}, {linkid: 'hnu', body: 'WHEN TO USE THESE RULES', jump: '9hMasFAjKGNj'}, {linkid: 'hnu', body: 'STARTING THE CONFLICT', jump: '9houGdbEWDtK'}, {linkid: 'h', body: 'PLAYING OUT THE CONFLICT', jump: '9hxovYMMmdHK'}, {linkid: 'hg', body: 'PICKING AN ARGUMENT & DICE', jump: 'PICKINGANARGYytgjGOdtb'}, {linkid: 'hg', body: 'SEIZING ADVANTAGE', jump: 'SEIZINGADVANTIadJnVTqag'}, {linkid: 'hg', body: 'CHANGING POSITION', jump: 'CHANGINGPOSITVHTfSraVis'}, {linkid: 'hg', body: 'REVISITING the POINT', jump: 'revisitingtheipointe'}, {linkid: 'hg', body: 'ESCALATING', jump: 'escalitnigheioe'}, {linkid: 'h', body: 'ENDING THE CONFLICT', jump: 'endingtheconflict'}, {linkid: 'hg', body: 'FOLDING', jump: '9jmWENCypnu'}, {linkid: 'hg', body: 'PRESSING the ISSUE', jump: '9hhpKAeyUmj'}, {linkid: 'hg', body: 'ESCALATING TO COMBAT', jump: '9NojEBANBFs'}, {linkid: 'hg', body: 'BEING A SMART ASS', jump: '9LqzoAfumLC'}, {linkid: 'h', body: 'REPERCUSSIONS OF A CONFLICT', jump: '9hGHmLfzEumM'}]

  ngOnInit(){}

  getTrait() {
    this.chapterService.getTrait()
      .subscribe(res => this.trait = res[0].trait)
  }

}
