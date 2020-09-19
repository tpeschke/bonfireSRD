import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-seven-advanced',
  templateUrl: './chapter-seven-advanced.component.html',
  styleUrls: ['../chapter-seven.component.css']
})
export class ChapterSevenAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'h', body: 'GENERAL MASTERIES', jump: 'gernealmaster'}, {linkid: 'hg', body: 'A NOTCH ABOVE the REST', jump: 'anotichabovethe'}, {linkid: 'hg', body: 'AMBIDEXTROUS', jump: '7IlbyiakxlZ'}, {linkid: 'hg', body: 'ANTI-MAGICAL BLANK', jump: '7pcxafsXNGPfv'}, {linkid: 'hg', body: 'ANTIQUARIAN', jump: '7ExUFrXLTFb'}, {linkid: 'hg', body: 'ARCANE GRIP', jump: '7pcUoGocoUmZd'}, {linkid: 'hg', body: "ARCANE TRAINING", jump: 'archentraing'}, {linkid: 'hg', body: 'BELOVED', jump: '7rmMviXyIOc'}, {linkid: 'hg', body: 'CHARLATAN', jump: '7pccHDOWTvyrP'}, {linkid: 'hg', body: 'CONCERT CASTER', jump: '7abFgZSUJXw'}, {linkid: 'hg', body: 'EARDSTAPA', jump: '7pcrxDPRIbzRb'}, {linkid: 'hg', body: 'ELDRITCH ADEPT', jump: '7pcnulDTqgcfN'}, {linkid: 'hg', body: 'EXTRA SPECIAL MIX', jump: 'extraspecialmix'}, {linkid: 'hg', body: 'LINKED SOUL', jump: '7FsMUCmhXkt'}, {linkid: 'hg', body: "HEIRLOOM", jump: "HEIRLOOMMASTER"}, {linkid: 'hg', body: 'HEROIC/VILLAIN SPIRIT', jump: '7btRHicrqzd'}, {linkid: 'hg', body: 'TEACHER', jump: 'TEACHERMASTERY'}, {linkid: 'hg', body: 'THAUMATURGE', jump: '7pcxFmwhIONNG'}, {linkid: 'h', body: 'COMBAT MASTERIES', jump: 'combatmaster'}, {linkid: 'hg', body: 'ACUTE ALERTNESS', jump: '7pcyfynvpUuuf'}, {linkid: 'hg', body: 'ARMOR BASIC TRAINING', jump: '7pcYyBLwmyXlz'}, {linkid: 'hg', body: 'ATTACK ON THE RUN', jump: 'attackontherun'}, {linkid: 'hg', body: 'BLIND FIGHTING', jump: '7pcPsAibddGlZ'}, {linkid: 'hg', body: 'BORN GUNNER', jump: '7pcfjvaeErvBq'}, {linkid: 'hg', body: 'COVER CHAMPION', jump: '7vCpHmutYks'}, {linkid: 'hg', body: 'DASHER', jump: '7pcbMDtuWVXCH'}, {linkid: 'hg', body: 'DEADEYE', jump: 'deadeyetriat'}, {linkid: 'hg', body: 'DEADLY FLANKER', jump: '7pcrrvLJCYMzS'}, {linkid: 'hg', body: 'DECEITFUL MEASURE', jump: '7pcGmekfdgGBQ'}, {linkid: 'hg', body: 'MARATHONER', jump: '7pclWkFbeZGLd'}, {linkid: 'hg', body: 'OPPORTUNISTIC FIGHTER (ATTACK)', jump: '7bDSWtvdERA'}, {linkid: 'hg', body: 'OPPORTUNISTIC FIGHTER (CQC)', jump: '7KOSooSQpJR'}, {linkid: 'hg', body: 'OPPORTUNISTIC FIGHTER (DEFENSE)', jump: '7fdOubzRhoW'}, {linkid: 'hg', body: 'FLEET FOOTED', jump: '7pclhHDobLJuR'}, {linkid: 'hg', body: 'HEALTHY', jump: '7pczitbLjimVo'}, {linkid: 'hg', body: 'IMPROVED DEFENSE', jump: '7pcIzeuGZLrtu'}, {linkid: 'hg', body: 'IRON SIDES', jump: '7pcItXtgCEHku'}, {linkid: 'hg', body: 'QUICK HEALING', jump: '7pcRgosWZtjCi'}, {linkid: 'hg', body: 'SHARPSHOOTER', jump: 'sharpshooter'}, {linkid: 'hg', body: 'SHIELD BASIC TRAINING', jump: '7pceUELFZYOGQ'}, {linkid: 'hg', body: 'SHIELD BREAKER', jump: '7pcMBYCvnrEkd'}, {linkid: 'hg', body: 'SURE FOOTED', jump: '7YKzkmfBGDR'}, {linkid: 'hg', body: 'UNYIELDING', jump: '7DmvNjRDmkv'}, {linkid: 'hg', body: 'WEAPON BASIC TRAINING', jump: '7pcHIrCoaWTpS'}, {linkid: 'hg', body: 'WINDAGE', jump: '7oLQCidLLYp'}, {linkid: 'h', body: 'SKILL MASTERIES', jump: 'skillmaster'}, {linkid: 'hg', body: 'DANGER SENSE', jump: 'dangersenseit'}, {linkid: 'hg', body: 'DILIGENT RESEARCHER', jump: 'diligentreseharhicoe'}, {linkid: 'hg', body: 'EASY OPERATOR', jump: 'easyoipoepr'}, {linkid: 'hg', body: 'GRACE UNDER PRESSURE', jump: '7cdtRSZmJzJc'}, {linkid: 'hg', body: 'GROUNDED MIND', jump: '7pcDzhSsNLZFA'}, {linkid: 'hg', body: 'KNACK', jump: '7pcVjVtKqEPyA'}, {linkid: 'hg', body: 'MULTITASKER', jump: 'multitaksergjiof'}, {linkid: 'hg', body: 'OLD FRIEND', jump: 'oldfirenddjio'}, {linkid: 'hg', body: 'ON YOUR TOES', jump: 'onyourtoes'}, {linkid: 'hg', body: 'POLYGLOT', jump: '7pcGuTJxjIlrq'}, {linkid: 'hg', body: 'PRODIGY', jump: '7fvREBZVage'}, {linkid: 'hg', body: 'REAL HELPER', jump: 'realhelepermaster'}, {linkid: 'hg', body: 'SHORT SLEEPER', jump: 'shortsleppoerijojfe'}, {linkid: 'hg', body: 'SURVIAL TRAINING', jump: 'survilajtraila'}, {linkid: 'hg', body: 'TEAMWORK TRAINING', jump: '7RrinkVfQHZ'}, {linkid: 'hg', body: 'THIEVES CANT', jump: '7pcHJneVkjOHK'}, {linkid: 'hg', body: 'TOOL ADEPT', jump: '7HjFYOZNbHh'}, {linkid: 'h', body: 'SOCIAL MASTERIES', jump: 'ocialmaster'}, {linkid: 'hg', body: 'AGGRESSIVE FIGHTER', jump: 'aggressivefighterheadermastery'}, {linkid: 'hg', body: 'ANIMAL MAGNETISM', jump: 'animalmagnatisitmheader'}, {linkid: 'hg', body: 'CRONY', jump: 'cronymasteryheader'}, {linkid: 'hg', body: 'DEFENSIVE FIGHTER', jump: 'defensivefighterheadermastery'}, {linkid: 'hg', body: 'GOAL ORIENTED', jump: 'goalorientedmasteryheader'}, {linkid: 'hg', body: 'GOAL SYNERGY', jump: 'goalsynergymasteryheader'}, {linkid: 'hg', body: 'IDIOSYNCRATIC', jump: 'idoitnewfjiofew'}, {linkid: 'hg', body: 'HARDENED RESOLVE', jump: '7iBPKQqnGmy'}, {linkid: 'hg', body: 'NEVER MIND, FORGET IT', jump: 'never mindforgetit'},  {linkid: 'hg', body: 'RENAISSANCE MAN', jump: 'renaissancemanheader'}, {linkid: 'hg', body: 'SPECIAL BOND', jump: '7pcchBIFEiadV'}, {linkid: 'hg', body: 'STRONG OPENER', jump: 'strongopenerioj'},]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
