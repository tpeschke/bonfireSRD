import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/chapter.service';

@Component({
  selector: 'app-cc-two-deluxe',
  templateUrl: './cc-two-deluxe.component.html',
  styleUrls: ['./cc-two-deluxe.component.css', '../../../chapter.css']
})
export class CcTwoDeluxeComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
  ) { }

  side = [{linkid: 'h', body: 'Which Ancestry Should I Choose?', jump: '3ibTsjRfDjl'}, {linkid: 'hg', body: 'Personality', jump: 'persjiojicoejw'}, {linkid: 'hg', body: 'Stat Score Modifiers', jump: '3kOpuEvckQq'}, {linkid: 'hg', body: 'Gameplay Rewards', jump: '3FtaYQizyom'}, {linkid: 'hg', body: 'Class Costs', jump: '3NLyIsVRDgl'}, {linkid: 'h', body: 'Dwarves', jump: '3TwEdSbLHUy'}, {linkid: 'hg', body: 'Appearance', jump: '3QpLDZKwwwg'}, {linkid: 'hg', body: 'Personality', jump: '3ywaFBsIGVV'}, {linkid: 'h', body: 'Elves', jump: '3h1'}, {linkid: 'hg', body: 'Appearance', jump: '3hg16'}, {linkid: 'hg', body: 'Personality', jump: '3hg17'}, {linkid: 'h', body: 'Humans', jump: '3h2'}, {linkid: 'hg', body: 'Appearance', jump: '3hg19'}, {linkid: 'hg', body: 'Personality', jump: '3hg20'}, {linkid: 'h', body: 'Orcs', jump: 'orcheadertag'}, {linkid: 'hg', body: 'Appearance', jump: '3hg22'}, {linkid: 'hg', body: 'Personality', jump: '3hg23'}, {linkid: 'h', body: 'Pechs', jump: '3UfgSXJpBLh'}, {linkid: 'hg', body: 'Appearance', jump: '3QkoqapBSHa'}, {linkid: 'hg', body: 'Personality', jump: '3fxnTUgOHEh'}, {linkid: 'h', body: 'Ratfolk', jump: '3syCSgYXdjZ'}, {linkid: 'hg', body: 'Appearance', jump: '3KKhaDjJsaB'}, {linkid: 'hg', body: 'Personality', jump: '3lCaXMuhoJH'}, {linkid: 'h', body: 'Mules', jump: 'Mulesheader'}, {linkid: 'hg', body: 'Non-dominant Humans', jump: 'NonDominantHheaderuKMxfezbmw'}, {linkid: 'h', body: 'Ancestral Modifiers', jump: 'AncestralModiheader'}, {linkid: 'hg', body: 'Gaunt', jump: '3PKCfRsEDGt'}, {linkid: 'hg', body: 'Star-Cursed', jump: 'starcrusejiojse'},]
  characterisitics = {}

  ngOnInit() {
    this.chapterService.getCharacteristics().subscribe(result => this.characterisitics = result)
  }

}
