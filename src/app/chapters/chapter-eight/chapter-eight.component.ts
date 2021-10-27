import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-eight',
  templateUrl: './chapter-eight.component.html',
  styleUrls: ['./chapter-eight.component.css']
})
export class ChapterEightComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
  ) { }

  chapterName = '';
  side = [{linkid: 'h', body: 'Skill Introduction', jump: '8hjKMpLZrmva'}, {linkid: 'hg', body: 'ACQUIRING SKILLS', jump: '8hZLxLyRaXkr'}, {linkid: 'hg', body: 'CALCULATING RANK', jump: '8hDzWWdfGtEh'}, {linkid: 'hnu', body: 'The Basics (Skill Checks)', jump: 'TheBasicsSkheader'}, {linkid: 'h', body: 'Skill Challenges', jump: 'SkillChallengheader'}, {linkid: 'hg', body: 'OBJECTIVES AND OBSTACLES', jump: 'ObjectivesandIxfluHJdaq'}, {linkid: 'hg', body: 'DIFFICULTY', jump: 'DifficultyMWhPZKPrLQ'}, {linkid: 'hg', body: 'COMPLICATIONS, BOONS, & HARD FAILURES', jump: 'FailuresSoftriTlAUJpwm'}, {linkid: 'h', body: 'Strategies', jump: 'ToolsOftheTheader'}, {linkid: 'hg', body: 'ASSETS', jump: 'AssetsRZaopnuWUI'}, {linkid: 'hg', body: 'EQUIPMENT', jump: 'EquipmentdYnrGozRyw'}, {linkid: 'hg', body: 'HELPER SKILLS', jump: 'HelperSkillsDNObQsXxMB'}, {linkid: 'hg', body: 'MULTI-TASKING', jump: 'MultiTaskingwGuWAlVRFi'},  {linkid: 'hg', body:'NOT SWEATING IT', jump: 'notsweatingit'}, {linkid: 'hg', body: 'PREPARATION', jump: 'PreparationgjAmEBsugq'}, {linkid: 'hg', body: 'RUSHING IT', jump: 'RushingIteNknSNOpsb'}, {linkid: 'h', body: 'Skill Descriptions', jump: '8hpQcRATNVSD'}, {linkid: 'hg', body: 'ATHLETICS SKILL SUITE', jump: 'ATHLETICSSKILNbXvYBUBHT'}, {linkid: 'hg', body: 'LORE SKILL SUITE', jump: 'LORESKILLSUIyhRaSnwLzY'}, {linkid: 'hg', body: 'STREETWISE SKILL SUITE', jump: 'STREETWISESKIEtVlYcxWcU'}, {linkid: 'hg', body: 'SURVIVAL SKILL SUITE', jump: 'SURVIVALSKILLjNfGijrpPv'}, {linkid: 'hg', body: 'TACTICS SKILL SUITE', jump: 'TACTICSKILLSAWLrZIHoeC'}, {linkid: 'hg', body: 'TRADES SKILL SUITE', jump: 'TRADESSKILLSoaGgeTTZPu'}, {linkid: 'hg', body: 'WEIRDCRAFT SKILL SUITE', jump: 'WEIRDCRAFTSKIRJgIrrRBEg'}]

  ngOnInit() { }

  ngOnDestroy() {
    this.chapterName = ''
  }
}
