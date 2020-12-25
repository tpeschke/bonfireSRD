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
  side = [{linkid: 'h', body: 'Skill Introduction', jump: '8hjKMpLZrmva'}, {linkid: 'hg', body: 'ACQUIRING SKILLS', jump: '8hZLxLyRaXkr'}, {linkid: 'hg', body: 'CALCULATING RANK', jump: '8hDzWWdfGtEh'}, {linkid: 'hg', body: 'SKILL SPECIALIZATIONS', jump: '8UnZepBZjYQ'}, {linkid: 'hnu', body: 'The Basics (Skill Checks)', jump: 'TheBasicsSkheader'}, {linkid: 'h', body: 'Skill Challenges', jump: 'SkillChallengheader'}, {linkid: 'hg', body: 'OBJECTIVES AND OBSTACLES', jump: 'ObjectivesandIxfluHJdaq'}, {linkid: 'hg', body: 'DIFFICULTY', jump: 'DifficultyMWhPZKPrLQ'}, {linkid: 'hg', body: 'FAILURES, HARD & SOFT', jump: 'FailuresSoftriTlAUJpwm'}, {linkid: 'h', body: 'Strategies', jump: 'ToolsOftheTheader'}, {linkid: 'hg', body: 'ASSETS', jump: 'AssetsRZaopnuWUI'}, {linkid: 'hg', body: 'EQUIPMENT', jump: 'EquipmentdYnrGozRyw'}, {linkid: 'hg', body: 'HELPER SKILLS', jump: 'HelperSkillsDNObQsXxMB'}, {linkid: 'hg', body: 'MULTI-TASKING', jump: 'MultiTaskingwGuWAlVRFi'}, {linkid: 'hg', body: 'PREPARATION', jump: 'PreparationgjAmEBsugq'}, {linkid: 'hg', body: 'RUSHING IT', jump: 'RushingIteNknSNOpsb'}, {linkid: 'h', body: 'Skill Descriptions', jump: '8hpQcRATNVSD'}, {linkid: 'hg', body: 'ATHLETICS SKILL SUITE', jump: '8hgCWoYDVNAky'}, {linkid: 'hg', body: 'LORE SKILL SUITE', jump: '8hgUsbDvupaWu'}, {linkid: 'hg', body: 'STREETWISE SKILL SUITE', jump: '8hgmrjZpqPkpp'}, {linkid: 'hg', body: 'SURVIVAL SKILL SUITE', jump: '8hgdxmAtpfWqx'}, {linkid: 'hg', body: 'TACTIC SKILL SUITE', jump: '8hgrNxupSJGty'}, {linkid: 'hg', body: 'TRADES SKILL SUITE', jump: '8hgSzmUTeHLiA'}, {linkid: 'hg', body: 'WEIRDCRAFT SKILL SUITE', jump: 'weirdcarfttitle'}]

  ngOnInit() {}

  ngOnDestroy() {
    this.chapterName = ''
  }

}
