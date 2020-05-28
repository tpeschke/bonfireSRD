import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service'

@Component({
  selector: 'app-chapter-seven',
  templateUrl: './chapter-seven.component.html',
  styleUrls: ['./chapter-seven.component.css']
})
export class ChapterSevenComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'h', body: 'GENERAL MASTERIES', jump: 'gernealmaster'}, {linkid: 'hg', body: 'A NOTCH ABOVE the REST', jump: 'anotichabovethe'}, {linkid: 'hg', body: 'ANTI-MAGICAL BLANK', jump: '7pcxafsXNGPfv'}, {linkid: 'hg', body: 'BELOVED', jump: '7rmMviXyIOc'}, {linkid: 'hg', body: 'ELDRITCH ADEPT', jump: '7pcnulDTqgcfN'}, {linkid: 'hg', body: 'THAUMATURGE', jump: '7pcxFmwhIONNG'}, {linkid: 'h', body: 'COMBAT MASTERIES', jump: 'combatmaster'}, {linkid: 'hg', body: 'ACUTE ALERTNESS', jump: '7pcyfynvpUuuf'}, {linkid: 'hg', body: 'ARMOR BASIC TRAINING', jump: '7pcYyBLwmyXlz'}, {linkid: 'hg', body: 'BLIND FIGHTING', jump: '7pcPsAibddGlZ'}, {linkid: 'hg', body: 'DASHER', jump: '7pcbMDtuWVXCH'}, {linkid: 'hg', body: 'DEADEYE', jump: 'deadeyetriat'}, {linkid: 'hg', body: 'DEADLY FLANKER', jump: '7pcrrvLJCYMzS'}, {linkid: 'hg', body: 'DECEITFUL MEASURE', jump: '7pcGmekfdgGBQ'}, {linkid: 'hg', body: 'MARATHONER', jump: '7pclWkFbeZGLd'}, {linkid: 'hg', body: 'FLEET FOOTED', jump: '7pclhHDobLJuR'}, {linkid: 'hg', body: 'HEALTHY', jump: '7pczitbLjimVo'}, {linkid: 'hg', body: 'IMPROVED DEFENSE', jump: '7pcIzeuGZLrtu'}, {linkid: 'hg', body: 'IRON SIDES', jump: '7pcItXtgCEHku'}, {linkid: 'hg', body: 'QUICK HEALING', jump: '7pcRgosWZtjCi'}, {linkid: 'hg', body: 'SHARP SHOOTER', jump: 'sharpshooter'}, {linkid: 'hg', body: 'SHIELD BASIC TRAINING', jump: '7pceUELFZYOGQ'}, {linkid: 'hg', body: 'WEAPON BASIC TRAINING', jump: '7pcHIrCoaWTpS'}, {linkid: 'h', body: 'SKILL MASTERIES', jump: 'skillmaster'}, {linkid: 'hg', body: 'DILIGENT RESEARCHER', jump: 'diligentreseharhicoe'}, {linkid: 'hg', body: 'EASY OPERATOR', jump: 'easyoipoepr'}, {linkid: 'hg', body: 'GRACE UNDER PRESSURE', jump: '7cdtRSZmJzJc'}, {linkid: 'hg', body: 'GROUNDED MIND', jump: '7pcDzhSsNLZFA'}, {linkid: 'hg', body: 'KNACK', jump: '7pcVjVtKqEPyA'}, {linkid: 'hg', body: 'MULTITASKER', jump: 'multitaksergjiof'}, {linkid: 'hg', body: 'OLD FRIEND', jump: 'oldfirenddjio'}, {linkid: 'hg', body: 'POLYGLOT', jump: '7pcGuTJxjIlrq'}, {linkid: 'hg', body: 'REAL HELPER', jump: 'realhelepermaster'}, {linkid: 'hg', body: 'SHORT SLEEPER', jump: 'shortsleppoerijojfe'}, {linkid: 'hg', body: 'SURVIAL TRAINING', jump: 'survilajtraila'}, {linkid: 'hg', body: 'THIEVES CANT', jump: '7pcHJneVkjOHK'}, {linkid: 'h', body: 'SOCIAL MASTERIES', jump: 'ocialmaster'}, {linkid: 'hg', body: 'ANIMAL MAGNETISM', jump: 'animalmagnatisitmheader'}, {linkid: 'hg', body: 'CRONY', jump: 'cronymasteryheader'}, {linkid: 'hg', body: 'GOAL ORIENTED', jump: 'goalorientedmasteryheader'}, {linkid: 'hg', body: 'GOAL SYNERGY', jump: 'goalsynergymasteryheader'}, {linkid: 'hg', body: 'IDIOSYNCRATIC', jump: 'idoitnewfjiofew'}, {linkid: 'hg', body: 'NEVERMIND, FORGET IT', jump: 'nevermindforgetit'}, {linkid: 'hg', body: 'RENAISSANCE MAN', jump: 'renaissancemanheader'}, {linkid: 'hg', body: 'STRONG OPENER', jump: 'strongopenerioj'}, ]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
