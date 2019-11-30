import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-three-advanced',
  templateUrl: './chapter-three-advanced.component.html',
  styleUrls: ['./chapter-three-advanced.component.css']
})
export class ChapterThreeAdvancedComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '9673px'}, side: [{linkid: 'hg', body: 'A BRIEF OVERVIEW OF THE HISTORY OF THE MIDDLE REALM', jump: '3hg1'}, {linkid: 'h', body: 'WHICH RACE SHOULD I CHOOSE?', jump: '3ibTsjRfDjl'}, {linkid: 'hg', body: 'ABILITY SCORE MODIFIERS', jump: '3kOpuEvckQq'}, {linkid: 'hg', body: 'GAMEPLAY REWARDS', jump: '3FtaYQizyom'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3NLyIsVRDgl'}, {linkid: 'hnu', body: 'RACIAL PREFERENCES', jump: '3YqNxRAQpMW'}, {linkid: 'h', body: 'DWARVES', jump: '3TwEdSbLHUy'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3IvThcyyACq'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3LjZfeRxlZz'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3BmicwcAgih'}, {linkid: 'hg', body: 'HISTORY', jump: '3slUCvjgJzD'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3QpLDZKwwwg'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3ywaFBsIGVV'}, {linkid: 'h', body: 'CHANGELING', jump: '3UfgSXJpBLh'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3zANjrNYlJj'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3FqONNqLMeO'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3UtjdHFBBhv'}, {linkid: 'hg', body: 'HISTORY', jump: '3kpXWJbikwg'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3QkoqapBSHa'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3fxnTUgOHEh'}, {linkid: 'h', body: 'ELVES', jump: '3h1'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3hg2'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3MmaZUBRPGW'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg5'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg15'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg16'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg17'}, {linkid: 'h', body: 'GOLEM', jump: '3ljmIboKbND'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3WcpsCszgxE'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3dilWHYbOqM'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3rzgixYovib'}, {linkid: 'hg', body: 'HISTORY', jump: '3kyYKjvPlCg'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3qFonaaRahH'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3qflnTrIJAF'}, {linkid: 'h', body: 'GUANT', jump: '3PKCfRsEDGt'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3gcczxqSxOm'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3SurWfUzWXD'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3qZAWCNXVVe'}, {linkid: 'hg', body: 'HISTORY', jump: '3mcPtbRwFYM'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3BPgXXpymOI'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3NKGRUtkfZe'}, {linkid: 'h', body: 'HUMANS', jump: '3h2'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3hg6'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3yeKAKxlQaZ'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg9'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg18'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg19'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg20'}, {linkid: 'h', body: 'MINOTAUR', jump: '3zfpZAWwufg'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3ksfbrvTpni'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3WHvvEvvAUe'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3qZAWCNXVVe'}, {linkid: 'hg', body: 'HISTORY', jump: '3HwCipOfjuO'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3toHteXOhGv'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3JmfobJaCwo'}, {linkid: 'h', body: 'ORCS', jump: '3h3'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3hg10'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3lCygNUAsrN'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg13'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg21'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg22'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg23'}, {linkid: 'h', body: 'RATFOLK', jump: '3syCSgYXdjZ'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3zykpkXViJB'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3cOZrdpQZUT'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3ZUoIFaAaor'}, {linkid: 'hg', body: 'HISTORY', jump: '3GnPLktJzOX'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3KKhaDjJsaB'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3lCaXMuhoJH'}] };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (tier < 1) {
        this.router.navigate(['/chapter/3'])
      }
    })
    this.navDisplay = window.document.body.clientWidth > 650 ? true : false
    this.notRedux.toggleShow(true);
  }

  ngOnDestroy() {
    this.navDisplay = false;
    this.notRedux.toggleShow(false);
    this.chapterName = ''
  }

  displayTables() {
    this.navDisplay = !this.navDisplay
  }

}
