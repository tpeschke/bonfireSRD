import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-ten-advanced',
  templateUrl: './chapter-ten-advanced.component.html',
  styleUrls: ['../chapter-ten.component.css']
})
export class ChapterTenAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[ {linkid: 'h', body: 'Starting A Combat', jump: '10hakRpaRqrND'}, {linkid: 'hg', body: 'THE CLOCK', jump: '10hgkMivUIHorL'}, {linkid: 'hg', body: 'STARTING INITIATIVE & SURPRISE', jump: '10hgxuNhMIIbra'}, {linkid: 'hg', body: 'ACTIONS', jump: '10hgSUsZSWLDmm'}, {linkid: 'hg', body: 'IMPROVISED WEAPONS', jump: '10sQVRylgaBG'}, {linkid: 'hg', body: 'WEAPON STYLES', jump: '10XTIDTpozcs'}, {linkid: 'h', body: 'The Combat', jump: '10hPpsSnSfLDT'}, {linkid: 'hg', body: 'ZONES OF ENGAGEMENT: MEASURING YOUR OPPONENT', jump: '10hgsDSfKSfEAw'}, {linkid: 'hg', body: 'MELEE ATTACK & DEFENSE', jump: '10hgrAqUBiMqtw'}, {linkid: 'hg', body: 'PERFECT ATTACKS & DEFENSES', jump: '10iJVpPIUIhO'}, {linkid: 'hg', body: 'RANGED ATTACK & DEFENSE', jump: '10hgWhFVCaqHCC'}, {linkid: 'hg', body: 'COVER', jump: '10koDSleGGGY'}, {linkid: 'hg', body: 'RANGED MISSES', jump: '10LRQpDSCqyv'}, {linkid: 'hg', body: 'FIRING INTO MELEE', jump: '10oUkeMUxjgH'}, {linkid: 'hg', body: 'DEALING DAMAGE', jump: '10hgdzzBggxyzb'}, {linkid: 'hg', body: 'BREAKAGE; WEAPON, ARMOR, & SHIELDS', jump: 'breakgeheading'}, {linkid: 'hg', body: 'KNOCK-BACKS', jump: '10DSTACCyEqI'}, {linkid: 'hg', body: 'VITALITY & DAMAGE', jump: '10hgGvtwrnIOmt'}, {linkid: 'hg', body: 'TRAUMA', jump: '10hgxhgLSKeBpK'}, {linkid: 'hg', body: 'COUP DE GRACE', jump: '10hgWcYkvVsIPr'}, {linkid: 'hg', body: 'FACING & FIGHTING MULTIPLE PEOPLE', jump: '10hgUnxGAkHaoZ'}, {linkid: 'hg', body: 'TERRAIN & SITUATIONAL FACTORS', jump: 'terrainandsituation'}, {linkid: 'hg', body: 'TACTICS', jump: '10hgKuowiuYcTE'}, {linkid: 'hg', body: 'UNARMED COMBAT', jump: '10gCjjGGtsOo'}, {linkid: 'hg', body: 'MOUNTED COMBAT', jump: 'mountedcombat'}, {linkid: 'hg', body: 'DYING', jump: '10hgdPALGCCSTw'}, {linkid: 'h', body: 'Morale', jump: '10zEsJeboPXW'}, {linkid: 'hg', body: 'ADDITIONAL ARGUMENTS', jump: 'adiitonaleverplace'}, {linkid: 'hnu', body: 'Ending Combat', jump: '10hpcjvwbBurZ'}, {linkid: 'h', body: 'Trainings', jump: 'trainingsiheader'}, {linkid: 'hg', body: 'CALCULATING BASELINE COMBAT ABILITIES', jump: 'clacubaseline'}, {linkid: 'hg', body: 'ARMOR BASIC TRAINING', jump: '7pcYyBLwmyXlz'}, {linkid: 'hg', body: 'SHIELD BASIC TRAINING', jump: '7pceUELFZYOGQ'}, {linkid: 'hg', body: 'WEAPON BASIC TRAINING', jump: '7pcHIrCoaWTpS'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   


}
