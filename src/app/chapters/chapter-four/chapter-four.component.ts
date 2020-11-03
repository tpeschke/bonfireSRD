import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service'

@Component({
  selector: 'app-chapter-four',
  templateUrl: './chapter-four.component.html',
  styleUrls: ['./chapter-four.component.css']
})
export class ChapterFourComponent implements OnInit {

  constructor(
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = [{linkid: 'hg', body: 'PURCHASING ARCHETYPES', jump: 'PURCHASINGARCygmsBwQZSn'}, {linkid: 'h', body: 'GENERALIST ARCHETYPES', jump: 'GeneralistArcmajorheader'}, {linkid: 'hg', body: 'EXPERT', jump: 'EXPERTheader'}, {linkid: 'hg', body: 'FIGHTER', jump: 'FIGHTERheader'}, {linkid: 'hg', body: 'SERVANT', jump: 'SERVANTheader'}, {linkid: 'hg', body: 'SOCIALITE', jump: 'SOCIALITEheader'}, {linkid: 'hg', body: 'WEIRD-ADEPT', jump: 'WeirdAdeptheader'}, {linkid: 'hnu', body: 'SPECIALIST LEVELS', jump: 'SPECIALISTLEVheader'}, {linkid: 'h', body: 'EXPERT SPECIALIST ARCHETYPES', jump: 'ExpertSpecialmajorheader'}, {linkid: 'hg', body: 'ADVENTURER', jump: '4h1'}, {linkid: 'hg', body: 'MASTERMIND', jump: 'mastermindfjiofj'}, {linkid: 'hg', body: 'RANGER', jump: '4hFaJFVQScZb'}, {linkid: 'hg', body: 'SAGE', jump: '4hDxXHOyaedt'}, {linkid: 'hg', body: 'THIEF', jump: '4hZWkhQQKwJe'}, {linkid: 'h', body: 'FIGHTER SPECIALIST ARCHETYPES', jump: 'FighterSpeciamajorheader'}, {linkid: 'hg', body: 'CATERAN', jump: '4hjWyOCZsjSz'}, {linkid: 'hg', body: 'KNIGHT', jump: '4hGdpzFAOpTd'}, {linkid: 'hg', body: 'SOLDIER', jump: '4hkxEMOcntAo'}, {linkid: 'hg', body: 'THUG', jump: '4hILTMTsUTYB'}, {linkid: 'hg', body: 'VANGUARD', jump: '4htujAXZowgL'}, {linkid: 'h', body: 'SERVANT SPECIALIST ARCHETYPES', jump: 'ServantSpeciamajorheader'}, {linkid: 'hg', body: 'PRIEST', jump: '4hhJoUnFzibf'}, {linkid: 'h', body: 'SOCIALITE SPECIALIST ARCHETYPES', jump: 'SocialiteSpecmajorheader'}, {linkid: 'hg', body: 'ADVOCATE', jump: 'ADVOCATEheader'}, {linkid: 'hg', body: 'DIPLOMAT', jump: '4hGaqzRlKBus'}, {linkid: 'hg', body: 'NOBLE', jump: '4h2'}, {linkid: 'hg', body: 'RASCAL', jump: '4hVcxHvMtQkA'}, {linkid: 'h', body: 'WEIRD-ADEPT SPECIALIST ARCHETYPES', jump: 'WeirdAdeptSpmajorheader'}, {linkid: 'hg', body: 'RUNEGALDER', jump: '4hLraxjUbdDv'}];

  ngOnInit() {}

  ngOnDestroy() {
    this.chapterName = ''
  }

}
