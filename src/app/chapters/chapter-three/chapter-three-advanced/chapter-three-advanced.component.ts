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
  side = { height: {'height': '9673px'}, side: [{linkid: 'hg', body: 'A BRIEF OVERVIEW OF THE HISTORY OF THE MIDDLE REALM', jump: '3hg1'}, {linkid: 'h', body: 'WHICH RACE SHOULD I CHOOSE?', jump: '3ibTsjRfDjl'}, {linkid: 'hg', body: 'ABILITY SCORE MODIFIERS', jump: '3kOpuEvckQq'}, {linkid: 'hg', body: 'GAMEPLAY REWARDS', jump: '3FtaYQizyom'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3NLyIsVRDgl'}, {linkid: 'hnu', body: 'RACIAL PREFERENCES', jump: 'RacialPreferfjeioj'}, {linkid: 'h', body: 'DWARVES', jump: 'dwarfjioj'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: 'abilitymodifierdwarf'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: 'dwarftempera'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: 'dwarfarchtypecost'}, {linkid: 'hg', body: 'Archetype Exceptions', jump: 'dwarfachetypeexpcetions'}, {linkid: 'hg', body: 'HISTORY', jump: 'dwarfhistory'}, {linkid: 'hg', body: 'APPEARANCE', jump: 'dwarfappearance'}, {linkid: 'hg', body: 'PERSONALITY', jump: 'dwarfpersonality'}, {linkid: 'h', body: 'CHANGELING', jump: 'changelingheading'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: 'abilitymodifierchangeling'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: 'changetempera'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: 'changearchtypecost'}, {linkid: 'hg', body: 'HISTORY', jump: 'changlinghistory'}, {linkid: 'hg', body: 'APPEARANCE', jump: 'changeappearance'}, {linkid: 'hg', body: 'PERSONALITY', jump: 'changepersonality'}, {linkid: 'h', body: 'ELVES', jump: '3h1'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3hg2'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3MmaZUBRPGW'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg5'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg15'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg16'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg17'}, {linkid: 'h', body: 'GOLEM', jump: 'golemheading'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: 'abilitymodifiergolem'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: 'golemtempera'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: 'golemarchtypecost'}, {linkid: 'hg', body: 'Archetype Exceptions', jump: 'dgolemachetypeexpcetions'}, {linkid: 'hg', body: 'HISTORY', jump: 'golemhistory'}, {linkid: 'hg', body: 'APPEARANCE', jump: 'golemappearcen'}, {linkid: 'hg', body: 'PERSONALITY', jump: 'golemspersonality'}, {linkid: 'h', body: 'GUANT', jump: 'guantheading'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: 'abilitymodifierguant'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: 'guanttempguant'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: 'minoarchtypecost'}, {linkid: 'hg', body: 'HISTORY', jump: 'guanthistory'}, {linkid: 'hg', body: 'APPEARANCE', jump: 'guantappearance'}, {linkid: 'hg', body: 'PERSONALITY', jump: 'guantpersonality'}, {linkid: 'h', body: 'HUMANS', jump: '3h2'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3hg6'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3yeKAKxlQaZ'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg9'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg18'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg19'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg20'}, {linkid: 'h', body: 'MINOTAUR', jump: 'minoheading'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: 'abilitymodifiermino'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: 'minotempmino'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: 'minoarchtypecost'}, {linkid: 'hg', body: 'Archetype Exceptions', jump: 'minoarchtypeexceptions'}, {linkid: 'hg', body: 'HISTORY', jump: 'minohistory'}, {linkid: 'hg', body: 'APPEARANCE', jump: 'minoappearance'}, {linkid: 'hg', body: 'PERSONALITY', jump: 'minopersonality'}, {linkid: 'h', body: 'ORCS', jump: '3h3'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: '3hg10'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: '3lCygNUAsrN'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: '3hg13'}, {linkid: 'hg', body: 'Archetype Exceptions', jump: '3hg14'}, {linkid: 'hg', body: 'HISTORY', jump: '3hg21'}, {linkid: 'hg', body: 'APPEARANCE', jump: '3hg22'}, {linkid: 'hg', body: 'PERSONALITY', jump: '3hg23'}, {linkid: 'h', body: 'RATFOLK', jump: 'ratfolkheading'}, {linkid: 'hg', body: 'ABILITY MODIFIERS', jump: 'abilitymodifierrat'}, {linkid: 'hg', body: 'RACIAL TEMPERAMENT', jump: 'rattemprat'}, {linkid: 'hg', body: 'ARCHETYPE COSTS', jump: 'ratarchtypecost'}, {linkid: 'hg', body: 'Archetype Exceptions', jump: 'ratarchtypeexceptions'}, {linkid: 'hg', body: 'HISTORY', jump: 'rathistory'}, {linkid: 'hg', body: 'APPEARANCE', jump: 'ratappearance'}, {linkid: 'hg', body: 'PERSONALITY', jump: 'ratpersonality'}] };

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
