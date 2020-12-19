import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-ten',
  templateUrl: './chapter-ten.component.html',
  styleUrls: ['./chapter-ten.component.css']
})
export class ChapterTenComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'h', body: 'Starting A Combat', jump: '10hakRpaRqrND'}, {linkid: 'hg', body: 'THE CLOCK', jump: '10hgkMivUIHorL'}, {linkid: 'hg', body: 'STARTING INITIATIVE & SURPRISE', jump: '10hgxuNhMIIbra'}, {linkid: 'hg', body: 'ACTIONS', jump: '10hgSUsZSWLDmm'}, {linkid: 'h', body: 'The Combat', jump: '10hPpsSnSfLDT'}, {linkid: 'hg', body: 'ZONES OF ENGAGEMENT: MEASURING YOUR OPPONENT', jump: '10hgsDSfKSfEAw'}, {linkid: 'hg', body: 'MELEE ATTACK & DEFENSE', jump: '10hgrAqUBiMqtw'}, {linkid: 'hg', body: 'RANGED ATTACK & DEFENSE', jump: '10hgWhFVCaqHCC'}, {linkid: 'hg', body: 'DEALING DAMAGE', jump: '10hgdzzBggxyzb'}, {linkid: 'hg', body: 'KNOCK-BACKS', jump: '10DSTACCyEqI'}, {linkid: 'hg', body: 'VITALITY & DAMAGE', jump: '10hgGvtwrnIOmt'}, {linkid: 'hg', body: 'TRAUMA', jump: '10hgxhgLSKeBpK'}, {linkid: 'hg', body: 'COUP DE GRACE', jump: '10hgWcYkvVsIPr'}, {linkid: 'hg', body: 'FACING & FIGHTING MULTIPLE PEOPLE', jump: '10hgUnxGAkHaoZ'}, {linkid: 'hg', body: 'TACTICS', jump: '10hgKuowiuYcTE'}, {linkid: 'hg', body: 'BLEEDING OUT & DYING', jump: '10hgdPALGCCSTw'}, {linkid: 'hnu', body: 'Ending Combat', jump: '10hpcjvwbBurZ'}, {linkid: 'h', body: 'Trainings', jump: 'trainingsiheader'}]
  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   

}
