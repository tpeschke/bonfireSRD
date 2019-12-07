import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-seven-advanced',
  templateUrl: './chapter-seven-advanced.component.html',
  styleUrls: ['./chapter-seven-advanced.component.css']
})
export class ChapterSevenAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'hg', body: 'ACUTE ALERTNESS', jump: '7pcyfynvpUuuf'}, {linkid: 'hg', body: 'AMBIDEXTROUS', jump: '7IlbyiakxlZ'}, {linkid: 'hg', body: 'ANTI-MAGICAL BLANK', jump: '7pcxafsXNGPfv'}, {linkid: 'hg', body: 'ANTIQUARIAN', jump: '7ExUFrXLTFb'}, {linkid: 'hg', body: 'ARCANE GRIP', jump: '7pcUoGocoUmZd'}, {linkid: 'hg', body: 'ARMOR BASIC TRAINING', jump: '7pcYyBLwmyXlz'}, {linkid: 'hg', body: "BELOVED", jump: '7rmMviXyIOc'}, {linkid: 'hg', body: 'BLIND FIGHTING', jump: '7pcPsAibddGlZ'}, {linkid: 'hg', body: 'BORN GUNNER', jump: '7pcfjvaeErvBq'}, {linkid: 'hg', body: 'CHARLATAN', jump: '7pccHDOWTvyrP'}, {linkid: 'hg', body: 'CONCERT CASTER', jump: '7abFgZSUJXw'}, {linkid: 'hg', body: 'COVER CHAMPION', jump: '7vCpHmutYks'}, {linkid: 'hg', body: 'DASHER', jump: '7pcbMDtuWVXCH'}, {linkid: 'hg', body: 'DEADLY FLANKER', jump: '7pcrrvLJCYMzS'}, {linkid: 'hg', body: 'DECEITFUL MEASURE', jump: '7pcGmekfdgGBQ'}, {linkid: 'hg', body: 'ELDRITCH ADEPT', jump: '7pcnulDTqgcfN'}, {linkid: 'hg', body: 'EARDSTAPA', jump: '7pcrxDPRIbzRb'}, {linkid: 'hg', body: 'HARDENED RESOLVE', jump: '7iBPKQqnGmy'}, {linkid: 'hg', body: 'HEROIC/VILLAIN SPIRIT', jump: '7btRHicrqzd'}, {linkid: 'hg', body: 'LINKED SOUL', jump: '7FsMUCmhXkt'}, {linkid: 'hg', body: 'MARATHONER', jump: '7pclWkFbeZGLd'}, {linkid: 'hg', body: 'OPPORTUNIST (ATTACK)', jump: '7bDSWtvdERA'}, {linkid: 'hg', body: 'OPPORTUNIST (CQC)', jump: '7KOSooSQpJR'}, {linkid: 'hg', body: 'OPPORTUNIST (DEFENSE)', jump: '7fdOubzRhoW'}, {linkid: 'hg', body: 'FLEET FOOTED', jump: '7pclhHDobLJuR'}, {linkid: 'hg', body: 'GRACE UNDER PRESSURE', jump: '7cdtRSZmJzJc'}, {linkid: 'hg', body: 'GROUNDED MIND', jump: '7pcDzhSsNLZFA'}, {linkid: 'hg', body: 'HEALTHY', jump: '7pczitbLjimVo'}, {linkid: 'hg', body: 'IMPROVED DEFENSE', jump: '7pcIzeuGZLrtu'}, {linkid: 'hg', body: 'IRON SIDES', jump: '7pcItXtgCEHku'}, {linkid: 'hg', body: 'KNACK', jump: '7pcVjVtKqEPyA'}, {linkid: 'hg', body: 'POLYGLOT', jump: '7pcGuTJxjIlrq'}, {linkid: 'hg', body: 'PRODIGY', jump: '7fvREBZVage'}, {linkid: 'hg', body: 'QUICK HEALING', jump: '7pcRgosWZtjCi'}, {linkid: 'hg', body: 'SHIELD BASIC TRAINING', jump: '7pceUELFZYOGQ'}, {linkid: 'hg', body: 'SHIELD BREAKER', jump: '7pcMBYCvnrEkd'}, {linkid: 'hg', body: 'SPECIAL BOND', jump: '7pcchBIFEiadV'}, {linkid: 'hg', body: 'SURE FOOTED', jump: '7YKzkmfBGDR'}, {linkid: 'hg', body: 'TEAMWORK TRAINING', jump: '7RrinkVfQHZ'}, {linkid: 'hg', body: 'THAUMATURGE', jump: '7pcxFmwhIONNG'}, {linkid: 'hg', body: 'THIEVES CANT', jump: '7pcHJneVkjOHK'}, {linkid: 'hg', body: 'TOOL ADEPT', jump: '7HjFYOZNbHh'}, {linkid: 'hg', body: 'TWIN MINDED', jump: '7OqAptSXKCj'}, {linkid: 'hg', body: 'UNYIELDING', jump: '7DmvNjRDmkv'}, {linkid: 'hg', body: 'WEAPON BASIC TRAINING', jump: '7pcHIrCoaWTpS'}, {linkid: 'hg', body: 'WINDAGE', jump: '7oLQCidLLYp'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
