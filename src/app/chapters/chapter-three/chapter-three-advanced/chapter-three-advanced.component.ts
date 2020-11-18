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
  side =[{linkid: 'h', body: 'Which Race Should I Choose?', jump: '3ibTsjRfDjl'}, {linkid: 'hg', body: 'STAT SCORE MODIFIERS', jump: '3kOpuEvckQq'}, {linkid: 'hg', body: 'GAMEPLAY REWARDS', jump: '3FtaYQizyom'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3NLyIsVRDgl'}, {linkid: 'hnu', body: 'Racial Preferences', jump: '3YqNxRAQpMW'}, {linkid: 'h', body: 'Changelings', jump: '3UfgSXJpBLh'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3zANjrNYlJj'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3FqONNqLMeO'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3UtjdHFBBhv'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3QkoqapBSHa'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3fxnTUgOHEh'}, {linkid: 'h', body: 'Dwarves', jump: '3TwEdSbLHUy'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3IvThcyyACq'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3LjZfeRxlZz'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3BmicwcAgih'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3QpLDZKwwwg'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3ywaFBsIGVV'}, {linkid: 'h', body: 'Elves', jump: '3h1'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3hg2'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3MmaZUBRPGW'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg5'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg16'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg17'}, {linkid: 'h', body: 'Gaunts', jump: '3PKCfRsEDGt'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3gcczxqSxOm'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3SurWfUzWXD'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3qZAWCNXVVe'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3BPgXXpymOI'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3NKGRUtkfZe'}, {linkid: 'h', body: 'Humans', jump: '3h2'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3hg6'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3yeKAKxlQaZ'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg9'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg19'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg20'}, {linkid: 'h', body: 'Minotaurs', jump: '3zfpZAWwufg'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3ksfbrvTpni'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3WHvvEvvAUe'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3qZAWCNXVVe'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3toHteXOhGv'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3JmfobJaCwo'}, {linkid: 'h', body: 'Orcs', jump: '3h3'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3hg10'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3lCygNUAsrN'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg13'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg22'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg23'}, {linkid: 'h', body: 'Ratfolk', jump: '3syCSgYXdjZ'}, {linkid: 'hg', body: 'MODIFIERS', jump: '3zykpkXViJB'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3cOZrdpQZUT'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3ZUoIFaAaor'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3KKhaDjJsaB'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3lCaXMuhoJH'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
