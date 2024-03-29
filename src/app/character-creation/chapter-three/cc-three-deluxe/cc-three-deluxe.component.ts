import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/chapter.service';

@Component({
  selector: 'app-cc-three-deluxe',
  templateUrl: './cc-three-deluxe.component.html',
  styleUrls: ['./cc-three-deluxe.component.css', '../../../chapter.css']
})
export class CcThreeDeluxeComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
  ) { }

  side = [{linkid: 'h', body: 'Introduction', jump: 'Introductionheader'}, {linkid: 'h', body: 'Types of Archetypes', jump: 'typeopfkopakce'}, {linkid: 'hg', body: 'Generalist Archetypes', jump: 'GeneralistArcheader'}, {linkid: 'hg', body: 'Specialist Archetypes', jump: 'SpecialistArcheader'}, {linkid: 'h', body: 'Leveling Terminology', jump: 'levelingterminog'},  {linkid: 'h', body: 'Generalist Archetypes', jump: 'GeneralistArcmajorheader'}, {linkid: 'hg', body: 'Expert', jump: 'EXPERTheader'}, {linkid: 'hg', body: 'Fighter', jump: 'FIGHTERheader'},  {linkid: 'hg', body: 'Servant', jump: 'SERVANTheader'}, {linkid: 'hg', body: 'Socialite', jump: 'SOCIALITEheader'}, {linkid: 'hg', body: 'Weird-adept', jump: 'WeirdAdeptheader'},  {linkid: 'h', body: 'Expert Specialist Archetypes', jump: 'ExpertSpecialmajorheader'}, {linkid: 'hg', body: 'Adventurer', jump: 'adventureheader'}, {linkid: 'hg', body: 'Assassin', jump: '4HjbsJidDxD'}, {linkid: 'hg', body: 'Mastermind', jump: 'mastermindfjiofj'}, {linkid: 'hg', body: 'Opportunist', jump: '4YuFSZDPwdL'}, {linkid: 'hg', body: 'Professional', jump: 'profofeionsiofeji'}, {linkid: 'hg', body: 'Ranger', jump: '4hFaJFVQScZb'}, {linkid: 'hg', body: 'Sage', jump: '4hDxXHOyaedt'}, {linkid: 'hg', body: 'Thief', jump: '4hZWkhQQKwJe'}, {linkid: 'hg', body: 'Wilderman', jump: '4sUgxDUFKNZ'}, {linkid: 'h', body: 'Fighter Specialist Archetypes', jump: 'FighterSpeciamajorheader'}, {linkid: 'hg', body: 'Barbarian', jump: '4gMskaUrlSn'}, {linkid: 'hg', body: 'Berserker ', jump: '4hmcZzxdlOA'}, {linkid: 'hg', body: 'Brawler', jump: '4WuArfYFIBw'}, {linkid: 'hg', body: 'Cateran', jump: '4hjWyOCZsjSz'}, {linkid: 'hg', body: 'Man-at-arms', jump: '4hnXImVbhkwc'}, {linkid: 'hg', body: 'Knight', jump: '4hGdpzFAOpTd'}, {linkid: 'hg', body: 'Skirmisher', jump: 'skirmishertitle'}, {linkid: 'hg', body: 'Soldier', jump: '4hkxEMOcntAo'}, {linkid: 'hg', body: 'Tactician', jump: '4hrOZzOVcSjN'}, {linkid: 'hg', body: 'Thug', jump: '4hILTMTsUTYB'}, {linkid: 'hg', body: 'Vanguard', jump: '4htujAXZowgL'}, {linkid: 'h', body: 'Servant Specialist Archetypes', jump: 'ServantSpeciamajorheader'}, {linkid: 'hg', body: 'Ashcaller', jump: '4hfcwakUSDkF'}, {linkid: 'hg', body: 'Doombearer', jump: 'DoombearerheaderEuYIKZMlVH'}, {linkid: 'hg', body: 'Concert', jump: '4hyDaxslwvP'}, {linkid: 'hg', body: 'Gothen', jump: '4uVRQiXsVHP'}, {linkid: 'hg', body: 'Liminalist', jump: 'liminialitheard'}, {linkid: 'hg', body: 'Paragon Acolyte ', jump: '4fVGKUthptE'}, {linkid: 'hg', body: 'Priest', jump: '4hhJoUnFzibf'}, {linkid: 'hg', body: 'Symbolist', jump: '4HuTZAWEjVw'}, {linkid: 'h', body: 'Socialite Specialist Archetypes', jump: 'SocialiteSpecmajorheader'}, {linkid: 'hg', body: 'Advocate', jump: 'ADVOCATEheader'}, {linkid: 'hg', body: 'Armiger', jump: '4xYbrbgbbfl'}, {linkid: 'hg', body: 'Champion', jump: '4yefRafLyFU'}, {linkid: 'hg', body: 'Diplomat', jump: '4hGaqzRlKBus'}, {linkid: 'hg', body: 'Foil', jump: '4hDfHqpRoXyg'}, {linkid: 'hg', body: 'Fusilier', jump: '4XAiOiSLAsc'}, {linkid: 'hg', body: 'Knave', jump: '4xYRVdaznGW'}, {linkid: 'hg', body: 'Mountebank', jump: '4GllYVxfqMq'}, {linkid: 'hg', body: 'Noble', jump: 'nodbleheader'}, {linkid: 'hg', body: 'Officer', jump: '4NxfNXjGktc'}, {linkid: 'hg', body: 'Philosopher', jump: '4hDyifGXhLbU'}, {linkid: 'hg', body: 'Rascal', jump: '4hVcxHvMtQkA'}, {linkid: 'h', body: 'Weird-adept Specialist Archetypes', jump: 'WeirdAdeptSpmajorheader'}, {linkid: 'hg', body: 'Augur', jump: 'augurtitle'},{linkid: 'hg', body: 'Mage', jump: '4hOIoawcgJzH'},  {linkid: 'hg', body: 'Runegalder', jump: '4hLraxjUbdDv'}, {linkid: 'hg', body: 'Sourcerer', jump: '4xndeURoHxk'},  {linkid: 'hg', body: 'Speaker', jump: '4TRYvHdqwLb'}, {linkid: 'hg', body: 'Warlock', jump: '4mITAfvrqCN'},  {linkid: 'hg', body: 'Wizard', jump: '4hGlzvNjMhBG'},]
  weirdTables = {}

  ngOnInit() {
    this.chapterService.getAllWeirdTables().subscribe(result => this.weirdTables = result)
  }

}
