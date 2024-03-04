import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-two',
  templateUrl: './cc-two.component.html',
  styleUrls: ['./cc-two.component.css', '../../../chapter.css']
})
export class CcTwoComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Which Ancestry Should I Choose?', jump: '3ibTsjRfDjl'}, {linkid: 'hg', body: 'Stat Score Modifiers', jump: '3kOpuEvckQq'}, {linkid: 'hg', body: 'Gameplay Rewards', jump: '3FtaYQizyom'}, {linkid: 'hg', body: 'Archetype Costs', jump: '3NLyIsVRDgl'}, {linkid: 'h', body: 'Elves', jump: '3h1'}, {linkid: 'hg', body: 'Appearance', jump: '3hg16'}, {linkid: 'hg', body: 'Personality', jump: '3hg17'}, {linkid: 'h', body: 'Humans', jump: '3h2'}, {linkid: 'hg', body: 'Appearance', jump: '3hg19'}, {linkid: 'hg', body: 'Personality', jump: '3hg20'}, {linkid: 'h', body: 'Orcs', jump: 'orcheadertag'}, {linkid: 'hg', body: 'Appearance', jump: '3hg22'}, {linkid: 'hg', body: 'Personality', jump: '3hg23'}]
  ngOnInit() {
  }

}
