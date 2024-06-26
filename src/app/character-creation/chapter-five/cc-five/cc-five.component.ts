import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-five',
  templateUrl: './cc-five.component.html',
  styleUrls: ['./cc-five.component.css', '../../../chapter.css']
})
export class CcFiveComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Skill Suites Vs Advanced Skills', jump: 'SkillSuitesvheader'}, {linkid: 'hg', body: 'Skill Suites ', jump: 'SkillSuitesheader'}, {linkid: 'hg', body: 'Advanced Skills ', jump: 'AdvancedSkillheader'}, {linkid: 'h', body: 'Acquiring Skills', jump: 'AcquiringSkilheader'}, {linkid: 'hg', body: 'Rank', jump: 'RankHeader'}, {linkid: 'hg', body: 'Cost', jump: 'Costheader'}, {linkid: 'hg', body: 'Non-Combat Check Mods', jump: 'CheckModheader'}, {linkid: 'hg', body: 'Combat Check Mods', jump: 'CombatCheckMheader'}, {linkid: 'h', body: 'Skill Descriptions', jump: 'SkillDescriptheader'}, {linkid: 'hg', body: 'Athletics Skill Suite', jump: 'AthleticsSkilheader'}, {linkid: 'hg', body: 'Lore Skill Suite', jump: 'LoreSkillSuiheader'}, {linkid: 'hg', body: 'Streetwise Skill Suite', jump: 'StreetWilleSkiheader'}, {linkid: 'hg', body: 'Survival Skill Suite', jump: 'SurvivalSkillheader'}, {linkid: 'hg', body: 'Strategy Skill Suite', jump: 'TacticsSkillheader'}, {linkid: 'hg', body: 'Trades Skill Suite', jump: 'TradesSkillSheader'}, {linkid: 'hg', body: 'Weirdcraft Skill Suite', jump: 'WeirdcraftSkiheader'}, {linkid: 'hg', body: 'Armor Skill Suite', jump: 'ArmorSkillSuheader'}, {linkid: 'hg', body: 'Melee Weapons Skill Suite', jump: 'MeleeWeaponsheader'}, {linkid: 'hg', body: 'Ranged Weapons Skill Suite', jump: 'RangedWeaponsheader'}, {linkid: 'hg', body: 'Shields Skill Suite', jump: 'ShieldsSkillheader'}, {linkid: 'hg', body: 'Unarmed Skill Suite', jump: 'UnarmedSkillheader'}]
  ngOnInit() {
  }

}
