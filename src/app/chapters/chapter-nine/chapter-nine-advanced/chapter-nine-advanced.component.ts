import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-nine-advanced',
  templateUrl: './chapter-nine-advanced.component.html',
  styleUrls: ['../chapter-nine.component.css']
})
export class ChapterNineAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  trait = '';
  side = [ {linkid: 'hnu', body: 'Goals', jump: '9hXrEuwuawsw'}, {linkid: 'h', body: 'Traits', jump: '9hABmHwzkjiK'}, {linkid: 'hg', body: 'ASSIGNING YOUR TRAIT POINTS', jump: '9VRPVFMAxlq'}, {linkid: 'hg', body: 'INCREASING TRAITS WITH CRP', jump: 'increashiogtreiats'}, {linkid: 'hnu', body: 'Racial Temperament', jump: 'racialtemperatement'}, {linkid: 'h', body: 'Devotions', jump: '9hNSnSqzNZCw'}, {linkid: 'hg', body: 'BUYING NEW AND INCREASING DEVOTIONS', jump: '9DhcchEdfrZ'}, {linkid: 'hnu', body: 'Reputation', jump: 'Reputationheader'}, {linkid: 'hnu', body: 'Flaws', jump: '9CTZClZEJGl'}, {linkid: 'hnu', body: 'When To Use These Rules', jump: '9hMasFAjKGNj'}, {linkid: 'h', body: 'Playing Out The Confrontation', jump: 'PLAYINGOUTthheader'}, {linkid: 'hg', body: 'EVIDENCE', jump: 'EVIDENCEAuTYQTNNxu'}, {linkid: 'hg', body: 'APPEALS', jump: 'APPEALSVlpjoAtZmD'}, {linkid: 'hg', body: 'PANIC THRESHOLD', jump: '10IJEkYkimYx'}, {linkid: 'hg', body: 'FAST TALKING ', jump: 'FASTTALKINGwRWZnKueek'}, {linkid: 'hg', body: 'ENDING THE ROUND', jump: 'ENDINGtheROUlLsczZboSo'}, {linkid: 'hg', body: 'TRUMP CARDS', jump: 'TRUMPCARDSjqZVdUNpkn'}, {linkid: 'hg', body: 'ESCALATING A CONFLICT', jump: 'ESCALATINGaCzoGVcTvWnJ'}, {linkid: 'hg', body: 'PUSHING THE POINT', jump: 'PUSHINGthePOyHFOAlIylv'}, {linkid: 'hg', body: 'FOLDING', jump: 'FOLDINGyreqbisFix'}, {linkid: 'hnu', body: 'Ending The Confrontation', jump: 'ENDINGtheCONheader'}, {linkid: 'h', body: 'Repercussions Of A Confrontation', jump: 'REPERCUSSIONSheader'}]

  ngOnInit(){}

  getTrait() {
    this.chapterService.getTrait()
      .subscribe(res => this.trait = res[0].trait)
  }

}
