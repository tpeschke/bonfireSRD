import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-three',
  templateUrl: './cc-three.component.html',
  styleUrls: ['./cc-three.component.css', '../../../chapter.css']
})
export class CcThreeComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Introduction', jump: 'Introductionheader'}, {linkid: 'hg', body: 'Generalist Archetypes', jump: 'GeneralistArcheader'}, {linkid: 'h', body: 'Specialist Archetypes', jump: 'SpecialistArcheader'}, {linkid: 'hg', body: 'Purchasing Archetypes', jump: 'PurchasingArcheader'}, {linkid: 'hg', body: 'Purchasing Specialist Archetypes', jump: 'PurchasingSpeheader'}, {linkid: 'h', body: 'Generalist Archetypes', jump: 'GeneralistArcmajorheader'}, {linkid: 'hg', body: 'Expert', jump: 'EXPERTheader'}, {linkid: 'hg', body: 'Fighter', jump: 'FIGHTERheader'},  {linkid: 'hg', body: 'Servant', jump: 'SERVANTheader'}, {linkid: 'hg', body: 'Socialite', jump: 'SOCIALITEheader'}, {linkid: 'hg', body: 'Weird-adept', jump: 'WeirdAdeptheader'},  {linkid: 'h', body: 'Expert Specialist Archetypes', jump: 'ExpertSpecialmajorheader'}, {linkid: 'hg', body: 'Adventurer', jump: 'adventureheader'}, {linkid: 'hg', body: 'Ranger', jump: '4hFaJFVQScZb'}, {linkid: 'hg', body: 'Sage', jump: '4hDxXHOyaedt'}, {linkid: 'hg', body: 'Thief', jump: '4hZWkhQQKwJe'}, {linkid: 'h', body: 'Fighter Specialist Archetypes', jump: 'FighterSpeciamajorheader'}, {linkid: 'hg', body: 'Cateran', jump: '4hjWyOCZsjSz'}, {linkid: 'hg', body: 'Knight', jump: '4hGdpzFAOpTd'}, {linkid: 'hg', body: 'Soldier', jump: '4hkxEMOcntAo'}, {linkid: 'hg', body: 'Thug', jump: '4hILTMTsUTYB'}, {linkid: 'hg', body: 'Vanguard', jump: '4htujAXZowgL'}, {linkid: 'h', body: 'Servant Specialist Archetypes', jump: 'ServantSpeciamajorheader'}, {linkid: 'hg', body: 'Priest', jump: '4hhJoUnFzibf'}, {linkid: 'h', body: 'Socialite Specialist Archetypes', jump: 'SocialiteSpecmajorheader'}, {linkid: 'hg', body: 'Advocate', jump: 'ADVOCATEheader'}, {linkid: 'hg', body: 'Diplomat', jump: '4hGaqzRlKBus'}, {linkid: 'hg', body: 'Noble', jump: 'nodbleheader'}, {linkid: 'hg', body: 'Philosopher', jump: '4hDyifGXhLbU'}, {linkid: 'hg', body: 'Rascal', jump: '4hVcxHvMtQkA'}, {linkid: 'h', body: 'Weird-adept Specialist Archetypes', jump: 'WeirdAdeptSpmajorheader'}, {linkid: 'hg', body: 'Runegalder', jump: '4hLraxjUbdDv'}]
  ngOnInit() {
  }

}
