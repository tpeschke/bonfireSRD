import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-eight-advanced',
  templateUrl: './chapter-eight-advanced.component.html',
  styleUrls: ['../chapter-eight.component.css']
})
export class ChapterEightAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side = [{linkid: 'h', body: 'SKILL INTRODUCTION', jump: '8hjKMpLZrmva'}, {linkid: 'hg', body: 'ACQUIRING SKILLS', jump: '8hZLxLyRaXkr'}, {linkid: 'hg', body: 'CALCULATING RANK', jump: '8hDzWWdfGtEh'}, {linkid: 'hg', body: 'SKILL SPECIALIZATIONS', jump: '8UnZepBZjYQ'}, {linkid: 'hnu', body: 'THE BASICS (SKILL CHECKS)', jump: 'TheBasicsSkheader'}, {linkid: 'h', body: 'SKILL CHALLENGES', jump: 'SkillChallengheader'}, {linkid: 'hg', body: 'OBJECTIVES AND OBSTACLES', jump: 'ObjectivesandIxfluHJdaq'}, {linkid: 'hg', body: 'DIFFICULTY', jump: 'DifficultyMWhPZKPrLQ'}, {linkid: 'hg', body: 'FAILURES, HARD & SOFT', jump: 'FailuresSoftriTlAUJpwm'}, {linkid: 'hg', body: 'ACTIVE & PASSIVE OBSTACLES', jump: 'ActivePassisbphPhmARL'}, {linkid: 'h', body: 'STRATEGIES', jump: 'ToolsOftheTheader'}, {linkid: 'hg', body: 'ASSETS', jump: 'AssetsRZaopnuWUI'}, {linkid: 'hg', body: 'EQUIPMENT', jump: 'EquipmentdYnrGozRyw'}, {linkid: 'hg', body: 'HELPER SKILLS', jump: 'HelperSkillsDNObQsXxMB'}, {linkid: 'hg', body: 'MULTI-TASKING', jump: 'MultiTaskingwGuWAlVRFi'}, {linkid: 'hg', body: 'PREPARATION', jump: 'PreparationgjAmEBsugq'}, {linkid: 'hg', body: 'RUSHING IT', jump: 'RushingIteNknSNOpsb'}, {linkid: 'hg', body: 'TAKING YOUR TIME', jump: 'TakingYourTiDcgwKkGfYR'}, {linkid: 'hg', body: 'WAITING IT OUT', jump: 'WaitingItOutkivnKCZbmO'}, {linkid: 'h', body: 'SKILL DESCRIPTIONS', jump: '8hpQcRATNVSD'}, {linkid: 'hg', body: 'ATHLETICS SKILL SUITE', jump: '8hgCWoYDVNAky'}, {linkid: 'hg', body: 'LORE SKILL SUITE', jump: '8hgUsbDvupaWu'}, {linkid: 'hg', body: 'STREETWISE SKILL SUITE', jump: '8hgmrjZpqPkpp'}, {linkid: 'hg', body: 'SURVIVAL SKILL SUITE', jump: '8hgdxmAtpfWqx'}, {linkid: 'hg', body: 'TACTIC SKILL SUITE', jump: '8hgrNxupSJGty'}, {linkid: 'hg', body: 'TRADES SKILL SUITE', jump: '8hgSzmUTeHLiA'}]

  ngOnInit() {}

  ngOnDestroy() {
    this.chapterName = ''
  }

}
