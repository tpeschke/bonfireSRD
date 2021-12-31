import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-five',
  templateUrl: './cc-five.component.html',
  styleUrls: ['./cc-five.component.css', '../../../chapter.css']
})
export class CcFiveComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Skills Vs Trainings', jump: 'SkillsvsTraiheader'}, {linkid: 'h', body: 'Trainings', jump: 'Trainingsheader'}, {linkid: 'hg', body: 'Calculating Check Mods', jump: 'CalculatingChheader'}, {linkid: 'hg', body: 'Basic Training', jump: 'BasicTrainingheader'}, {linkid: 'hg', body: 'Advanced Training', jump: 'AdvancedTrainheader'},  {linkid: 'h', body: 'Skills', jump: 'Skillsheader'}, {linkid: 'hg', body: 'Skill Suites Vs Advanced Skills', jump: 'SkillSuitesvheader'}, {linkid: 'hg', body: 'Acquiring Skills', jump: 'AcquiringSkilheader'}, {linkid: 'h', body: 'Skill Descriptions', jump: 'SkillDescriptheader'}, {linkid: 'hg', body: 'Athletics Skill Suite', jump: 'AthleticsSkilheader'}, {linkid: 'hg', body: 'Lore Skill Suite', jump: 'LoreSkillSuiheader'}, {linkid: 'hg', body: 'Streetwise Skill Suite', jump: 'StreetWilleSkiheader'}, {linkid: 'hg', body: 'Survival Skill Suite', jump: 'SurvivalSkillheader'}, {linkid: 'hg', body: 'Tactics Skill Suite', jump: 'TacticsSkillheader'}, {linkid: 'hg', body: 'Trades Skill Suite', jump: 'TradesSkillSheader'}, {linkid: 'hg', body: 'Weirdcraft Skill Suite', jump: 'WeirdcraftSkiheader'}]
  ngOnInit() {
  }

}
