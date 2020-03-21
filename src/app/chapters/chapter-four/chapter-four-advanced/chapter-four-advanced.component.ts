import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-four-advanced',
  templateUrl: './chapter-four-advanced.component.html',
  styleUrls: ['./chapter-four-advanced.component.css']
})
export class ChapterFourAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = [{linkid: 'h', body: 'EXPERT ARCHETYPES', jump: '4i1'},{linkid: 'hg', body: 'ADVENTURER', jump: '4h1'}, {linkid: 'hg', body: 'ASSASSIN', jump: '4HjbsJidDxD'}, {linkid: 'hg', body: 'OPPORTUNIST', jump: '4YuFSZDPwdL'}, {linkid: 'hg', body: 'RANGER', jump: '4hFaJFVQScZb'}, {linkid: 'hg', body: 'SAGE', jump: '4hDxXHOyaedt'}, {linkid: 'hg', body: 'THIEF', jump: '4hZWkhQQKwJe'}, {linkid: 'hg', body: 'WILDERMAN', jump: '4sUgxDUFKNZ'}, {linkid: 'h', body: 'MAGICAL ARCHETYPES', jump: '4iazYnALlUht'}, {linkid: 'hg', body: 'MAGE', jump: '4hOIoawcgJzH'}, {linkid: 'hg', body: 'RUNEGALDER', jump: '4hLraxjUbdDv'}, {linkid: 'hg', body: 'SOURCERER', jump: '4xndeURoHxk'}, {linkid: 'hg', body: 'SPEAKER', jump: '4TRYvHdqwLb'}, {linkid: 'hg', body: 'WARLOCK', jump: '4mITAfvrqCN'}, {linkid: 'hg', body: 'WIZARD', jump: '4hGlzvNjMhBG'},{linkid: 'h', body: 'SERVANT ARCHETYPES', jump: '4iArbewCdrnU'}, {linkid: 'hg', body: 'ASHCALLER', jump: '4hfcwakUSDkF'}, {linkid: 'hg', body: 'CONCERT', jump: '4hyDaxslwvP'}, {linkid: 'hg', body: 'PARAGON ACOLYTE ', jump: '4fVGKUthptE'}, {linkid: 'hg', body: 'PRIEST', jump: '4hhJoUnFzibf'}, {linkid: 'hg', body: 'SHAMAN', jump: '4uVRQiXsVHP'}, {linkid: 'hg', body: 'SYMBOLIST', jump: '4HuTZAWEjVw'}, {linkid: 'h', body: 'SOCIALITE ARCHETYPES', jump: '4ifjeiofjeiwofe'}, {linkid: 'hg', body: 'ADVOCATE', jump: 'ADVOCATEheader'}, {linkid: 'hg', body: 'ARMIGER', jump: '4xYbrbgbbfl'}, {linkid: 'hg', body: 'CHAMPION', jump: '4yefRafLyFU'}, {linkid: 'hg', body: 'DIPLOMAT', jump: '4hGaqzRlKBus'}, {linkid: 'hg', body: 'FOIL', jump: '4hDfHqpRoXyg'}, {linkid: 'hg', body: 'FUSILIER', jump: '4XAiOiSLAsc'}, {linkid: 'hg', body: 'KNAVE', jump: '4xYRVdaznGW'}, {linkid: 'hg', body: 'MONTEBACK', jump: '4GllYVxfqMq'}, {linkid: 'hg', body: 'NOBLE', jump: '4h2'}, {linkid: 'hg', body: 'OFFICER', jump: '4NxfNXjGktc'}, {linkid: 'hg', body: 'PHILOSOPHER', jump: '4hDyifGXhLbU'}, {linkid: 'hg', body: 'RASCAL', jump: '4hVcxHvMtQkA'}, {linkid: 'h', body: 'WARRIOR ARCHETYPES', jump: '4iiOGpqIVcYL'}, {linkid: 'hg', body: 'BARBARIAN', jump: '4gMskaUrlSn'}, {linkid: 'hg', body: 'BERSERKER ', jump: '4hmcZzxdlOA'}, {linkid: 'hg', body: 'BRAWLER', jump: '4WuArfYFIBw'}, {linkid: 'hg', body: 'CATERAN', jump: '4hjWyOCZsjSz'}, {linkid: 'hg', body: 'MAN-AT-ARMS', jump: '4hnXImVbhkwc'}, {linkid: 'hg', body: 'KNIGHT', jump: '4hGdpzFAOpTd'}, {linkid: 'hg', body: 'SKIRMISHER', jump: 'skirmishertitle'}, {linkid: 'hg', body: 'SOLDIER', jump: '4hkxEMOcntAo'}, {linkid: 'hg', body: 'TACTICIAN', jump: '4hrOZzOVcSjN'}, {linkid: 'hg', body: 'THUG', jump: '4hILTMTsUTYB'}, {linkid: 'hg', body: 'VANGUARD', jump: '4htujAXZowgL'}];

  ngOnInit() {
  }

  ngOnDestroy() {
    this.chapterName = ''
  }
}
