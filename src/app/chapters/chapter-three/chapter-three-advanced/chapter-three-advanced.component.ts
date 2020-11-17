import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-three-advanced',
  templateUrl: './chapter-three-advanced.component.html',
  styleUrls: ['../chapter-three.component.css']
})
export class ChapterThreeAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'h', body: 'WHICH RACE SHOULD I CHOOSE?', jump: '3ibTsjRfDjl'}, {linkid: 'hg', body: 'STAT SCORE MODIFIERS', jump: '3kOpuEvckQq'}, {linkid: 'hg', body: 'GAMEPLAY REWARDS', jump: '3FtaYQizyom'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3NLyIsVRDgl'}, {linkid: 'hnu', body: 'RACIAL PREFERENCES', jump: '3YqNxRAQpMW'}, {linkid: 'h', body: 'CHANGELINGS', jump: '3UfgSXJpBLh'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3QkoqapBSHa'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3fxnTUgOHEh'}, {linkid: 'h', body: 'DWARVES', jump: '3TwEdSbLHUy'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3QpLDZKwwwg'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3ywaFBsIGVV'}, {linkid: 'h', body: 'ELVES', jump: '3h1'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg16'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg17'}, {linkid: 'h', body: 'GAUNTS', jump: '3PKCfRsEDGt'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3BPgXXpymOI'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3NKGRUtkfZe'}, {linkid: 'h', body: 'HUMANS', jump: '3h2'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg19'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg20'}, {linkid: 'h', body: 'MINOTAURS', jump: '3zfpZAWwufg'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3toHteXOhGv'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3JmfobJaCwo'}, {linkid: 'h', body: 'ORCS', jump: '3h3'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg22'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg23'}, {linkid: 'h', body: 'RATFOLK', jump: '3syCSgYXdjZ'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3KKhaDjJsaB'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3lCaXMuhoJH'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
