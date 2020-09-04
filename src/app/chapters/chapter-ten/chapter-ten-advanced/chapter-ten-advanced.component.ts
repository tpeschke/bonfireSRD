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
  side =[{linkid: 'h', body: 'STARTING a COMBAT', jump: '10hakRpaRqrND'}, {linkid: 'hg', body: 'The CLOCK', jump: '10hgkMivUIHorL'}, {linkid: 'hg', body: 'STARTING INITIATIVE ', jump: '10hgxuNhMIIbra'}, {linkid: 'hg', body: 'ACTIONS', jump: '10hgSUsZSWLDmm'}, {linkid: 'hg', body: 'IMPROVISED WEAPONS', jump: '10sQVRylgaBG'}, {linkid: 'hg', body: 'WEAPON STYLES', jump: '10XTIDTpozcs'}, {linkid: 'h', body: 'The COMBAT', jump: '10hPpsSnSfLDT'}, {linkid: 'hg', body: 'ZONES of ENGAGEMENT: MEASURING YOUR OPPONENT', jump: '10hgsDSfKSfEAw'}, {linkid: 'hg', body: 'MELEE ATTACK & DEFENSE', jump: '10hgrAqUBiMqtw'}, {linkid: 'hg', body: 'PERFECT ATTACKS & DEFENSES', jump: '10iJVpPIUIhO'}, {linkid: 'hg', body: 'RANGED ATTACK & DEFENSE', jump: '10hgWhFVCaqHCC'}, {linkid: 'hg', body: 'COVER', jump: '10koDSleGGGY'}, {linkid: 'hg', body: 'RANGED MISSES', jump: '10LRQpDSCqyv'}, {linkid: 'hg', body: 'FIRING INTO MELEE', jump: '10oUkeMUxjgH'}, {linkid: 'hg', body: 'DEALING DAMAGE', jump: '10hgdzzBggxyzb'}, {linkid: 'hg', body: 'KNOCK-BACKS', jump: '10DSTACCyEqI'}, {linkid: 'hg', body: 'VITALITY & DAMAGE', jump: '10hgGvtwrnIOmt'}, {linkid: 'hg', body: 'TRAUMA', jump: '10hgxhgLSKeBpK'}, {linkid: 'hg', body: 'GRIT', jump: '10hgkhtuHpUcPh'}, {linkid: 'hg', body: 'COUP de GRACE', jump: '10hgWcYkvVsIPr'}, {linkid: 'hg', body: 'FACING & FIGHTING MULTIPLE PEOPLE', jump: '10hgUnxGAkHaoZ'}, {linkid: 'hg', body: "TERRAIN & SITUATIONAL FACTORS", jump: "terrainandsituation"}, {linkid: 'hg', body: 'TACTICS', jump: '10hgKuowiuYcTE'}, {linkid: 'hg', body: 'UNARMED COMBAT', jump: '10gCjjGGtsOo'}, {linkid: 'hg', body: 'MOUNTED COMBAT', jump: 'mountedcombat'}, {linkid: 'hg', body: 'BLEEDING OUT & DYING', jump: '10hgdPALGCCSTw'}, {linkid: 'h', body: 'MORALE', jump: '10zEsJeboPXW'}, {linkid: 'hg', body: 'PANIC THRESHOLDS', jump: '10IJEkYkimYx'}, {linkid: 'hg', body: 'MORALE CONFLICTS', jump: '10ZrcmXEBLsL'}, {linkid: 'hg', body: 'ADDITIONAL ARGUMENTS', jump: 'adiitonaleverplace'}, {linkid: 'hg', body: 'EFFECTS of MORALE THRESHOLD', jump: 'EFEFCTOFOMORELAE'}, {linkid: 'h', body: 'ENDING COMBAT', jump: '10hpcjvwbBurZ'}]

  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   


}
